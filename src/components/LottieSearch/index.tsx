import React from "react";

import { useFeaturedAnimationListing, useSearchResultsListing } from "./hooks";
import SearchInput from "../SearchInput";
import Lottie from "../Lottie";

function LottieSearch() {
  const featureAnimationListing = useFeaturedAnimationListing();
  const searchResultsListing = useSearchResultsListing();
  const listing =
    searchResultsListing.results || featureAnimationListing.results;
  const isFetching =
    searchResultsListing.isFetching || featureAnimationListing.isFetching;

  return (
    <div>
      <SearchInput executeSearch={searchResultsListing.executeSearch} />
      {isFetching && "Loading lotties..."}
      {listing && (
        <div className="mt-5 mb-3">
          Click a lottie to insert it into Figma/FigJam file.
          <div className="grid grid-cols-3 gap-3 max-w-fit m-auto">
            {listing?.map((item) => (
              <div key={item.id}>
                <Lottie lottieUrl={item.lottieUrl} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LottieSearch;
