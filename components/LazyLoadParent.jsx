import React, { lazy, Suspense } from "react";

const LazyLoadedComponent = lazy(() => import("./LazyLoad"));

const LazyLoadParent = ({ children }) => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <LazyLoadedComponent>{children}</LazyLoadedComponent>
    </Suspense>
  );
};

export default LazyLoadParent;
