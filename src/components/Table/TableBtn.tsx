import Icon from "../IconComponents/Icon";
import IconDel from "../IconComponents/IconDel";

export default function TableBtn() {
  return (
    <>
      <div className="ml-2 hidden group-hover:flex gap-x-2.5 absolute left-10">
        <button type="button" className="">
          <Icon />
        </button>
        <button type="button" className="">
          <IconDel />
        </button>
      </div>
      <button className="px-2 py-1 border-2 border-borderColor rounded-sm text-xs">Tailor response</button>
    </>
  );
}
