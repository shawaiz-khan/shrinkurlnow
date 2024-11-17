import { X } from "lucide-react";
import CopyToClipboard from "../shared/CopyToClipboard";

const UrlDisplayCard = ({ shortUrl, longUrl, closeCard }) => {
  return (
    <div className="flex flex-row items-center bg-white p-5  border border-gray-300 rounded-lg shadow-lg w-full sm:w-[30rem] gap-5  relative">
      <div
        className="p-2 absolute transition-all hover:bg-accent rounded-full top-1 right-1 cursor-pointer"
        onClick={closeCard}
      >
        <X className="" size={17} />
      </div>
      <div className="flex-1 mt-3">
        <p className="text-sm md:text-base break-words">
          <span className="font-bold">Long URL :</span> {longUrl}
        </p>
        <div className="flex  justify-between mt-2">
          <p className="text-sm md:text-base break-words mt-2">
            <span className="font-bold">Short URL :</span> {shortUrl}
          </p>
          <CopyToClipboard data={shortUrl} />
        </div>
      </div>
    </div>
  );
};

export default UrlDisplayCard;
