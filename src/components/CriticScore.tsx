import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
}

export const CriticScore = ({ score }: props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize="14px"
      padding="2px 4px"
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};
