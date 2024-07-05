import { IoMdSearch } from 'react-icons/io';

interface InputProps {
  setSearchParams: (param: string)=>void;
}

export default function Input({setSearchParams}: InputProps) {

  return (
    <div className="mx-6 relative">
      <IoMdSearch className="absolute text-xl top-1/2 transform -translate-y-1/2 left-2" />
      <input
        className="p-2 pl-8 bg-transparent border border-borderGrayColor h-9 w-full rounded focus:outline-none"
        type="text"
        placeholder="Search"
        onChange={(e)=>setSearchParams(e.target.value)}
      />
    </div>
  );
}
