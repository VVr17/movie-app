import { SORT_TYPES } from "@/constants";

export const getSortTypes = () => {
  const {
    popularityAscending,
    popularityDescending,
    releaseDateAscending,
    releaseDateDescending,
    VoteAscending,
    VoteDescending,
    RevenueAscending,
    RevenueDescending,
  } = SORT_TYPES;

  return [
    {
      value: popularityAscending,
      label: "Popularity ascending",
    },
    {
      value: popularityDescending,
      label: "Popularity descending",
    },
    {
      value: releaseDateAscending,
      label: "Release date ascending",
    },
    {
      value: releaseDateDescending,
      label: "Release date descending",
    },
    {
      value: VoteAscending,
      label: "Vote ascending",
    },
    {
      value: VoteDescending,
      label: "Vote descending",
    },
    {
      value: RevenueAscending,
      label: "Revenue ascending",
    },
    {
      value: RevenueDescending,
      label: "Revenue descending",
    },
  ];
};
