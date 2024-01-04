import { lazy, Suspense } from 'react';
import { useLocalization } from '@/context/LocalizationContext';

const Schema = lazy(() => import('@/components/Schema'));

const DocsExplorer = () => {
  const { strings } = useLocalization();

  return (
    <div className="rounded-xl h-full border-4 border-gray-600 bg-gray-800">
      <p className="text-lg text-gray-400 pt-2 pl-3 pb-1 mb-2">
        {strings.docsTitle}
      </p>
      <Suspense fallback={<div>loading...</div>}>
        <Schema />
      </Suspense>
    </div>
  );
};

export { DocsExplorer };