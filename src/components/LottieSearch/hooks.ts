import { useState } from "react";

import {
  useFeaturedQuery,
  useSearchResultsQuery,
} from "../../generated/graphql";

export function useFeaturedAnimationListing() {
  const [page, setPage] = useState(1);
  const [featuredResult] = useFeaturedQuery({
    variables: { page },
  });

  return {
    page,
    setPage,
    isFetching: featuredResult.fetching,
    results: featuredResult.data?.featured.results,
  };
}

export function useSearchResultsListing() {
  const [page] = useState(1);
  const [searchInput, executeSearch] = useState("");

  const [searchResult] = useSearchResultsQuery({
    variables: {
      page,
      pageSize: 15,
      query: searchInput,
    },
  });

  return {
    page,
    isFetching: searchResult.fetching,
    totalPages: searchResult.data?.search.totalPages,
    results: searchResult.data?.search.results,
    executeSearch,
  };
}
