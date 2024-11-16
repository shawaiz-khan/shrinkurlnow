import { toast } from "sonner";

export const showToast = (type, message) => {
  switch (type) {
    case "success":
      toast.success("Success", { description: message });
      break;
    case "error":
      toast.error("Error", { description: message });
      break;
    case "warning":
      toast.warning("Warning", { description: message });
      break;
    default:
      toast.message("Info", { description: message });
  }
};