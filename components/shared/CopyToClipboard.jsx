import { Copy } from "lucide-react";

const CopyToClipboard = ({ data }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(data);
    alert("Short URL copied to clipboard!");
  };
  return (
    <button
      onClick={copyToClipboard}
      className="bg-gray-100  p-3 rounded-md hover:bg-gray-200 transition-colors duration-200 "
    >
      <Copy size={20} />
    </button>
  );
};

export default CopyToClipboard;
