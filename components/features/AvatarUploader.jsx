import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AvatarUploader = ({ onFileChange }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        onFileChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <Avatar className="w-20 h-20">
        <AvatarImage src={avatarPreview || "/user-placeholder.svg"} />
        <AvatarFallback>
          <AvatarImage src="/user-placeholder.svg" />
        </AvatarFallback>
      </Avatar>
      <div>
        <Input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="avatar-upload"
        />
        <Label
          htmlFor="avatar-upload"
          className="cursor-pointer underline hover:font-bold"
        >
          Upload Photo
        </Label>
      </div>
    </div>
  );
};

export default AvatarUploader;
