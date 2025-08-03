// src/utils/lazy.ts
import { lazy, Suspense } from 'react';

export const Lazy = (importFn: any) => {
  const Component = lazy(importFn);
  return function LazyComponent(props: any) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};