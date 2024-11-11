import CopyToClipboard from "../shared/CopyToClipboard";

const UrlDisplayCard = ({ shortUrl, longUrl }) => {
  return (
    <div className="flex flex-row items-center bg-white p-5 border border-gray-300 rounded-lg shadow-lg w-full sm:w-[30rem] gap-5 ">
      <div className="flex-1">
        <p className="text-sm md:text-base break-words">
          <span className="font-bold">Long URL :</span> {longUrl}
        </p>
        <p className="text-sm md:text-base break-words mt-2">
          <span className="font-bold">Short URL :</span> {shortUrl}
        </p>
      </div>
      <CopyToClipboard data={shortUrl} />
    </div>
  );
};

export default UrlDisplayCard;
