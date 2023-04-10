import Image from "next/image";
import Link from "next/link";

const author = ({name, img, designation}) => {
  if(!name && !img) return <></>;


  return (
    <div className="author flex py-5">
      <Image
        src={img || "/"}
        alt={"author image"}
        height={60}
        width={60}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link
          href={"/"}
          className="text-md font-bold text-gray-800 hover:text-gray-600"
        >
          {name || "No Name"}
        </Link>
        <span className="text-sm text-gray-500">{designation || "No Designation"}</span>
      </div>
    </div>
  );
};

export default author;
