import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../Services/api-client";

interface FetchResponses<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoding] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoding(true);
      apiClient
        .get<FetchResponses<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setIsLoding(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoding(false);
        });
      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );
  return { data, error, isLoading };
};

export default useData;
