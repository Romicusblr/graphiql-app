import { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';
import {useLocalization} from '@/hooks/localization';

const Schema = lazy(() => import('@/components/Schema'));

const DocsExplorer = () => {
  const { strings } = useLocalization();

  return (
    <div className="rounded-xl h-full border-4 border-gray-600 bg-gray-800">
      <p className="text-lg text-gray-400 pt-2 pl-3 pb-1 mb-2">
        {strings.docsTitle}
      </p>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-4/5">
            <Loading />
          </div>
        }
      >
        <Schema />
      </Suspense>
    </div>
  );
};

export { DocsExplorer };
