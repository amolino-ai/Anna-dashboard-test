import { CgSpinner } from 'react-icons/cg';

export default function Loading() {
  return (
    <div className="w-full flex items-center justify-center h-36">
      <CgSpinner className="animate-spin h-16 w-16 m-3 " />
    </div>
  );
}
