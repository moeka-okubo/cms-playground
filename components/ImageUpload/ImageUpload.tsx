import React, { useState, useRef, ChangeEvent, memo } from "react";
import { Stack } from "@mui/material";
import Image from "next/image";
import OutlinedButton from "@/components/OutlinedButton/OutlinedButton"; // storybookでエラーになるからこの書き方にしてる

type Props = {
  altText: string;
  buttonText: string;
};

const ImageUpload = (props: Props) => {
  const { altText, buttonText } = props;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Stack direction="column" alignItems="center">
      <Image
        src={selectedImage || "/NoImage.jpg"}
        alt={altText}
        width={300}
        height={300}
        style={{ marginBottom: 16, objectFit: "contain" }}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <OutlinedButton text={buttonText} onClick={handleButtonClick} />
    </Stack>
  );
};

export default memo(ImageUpload);
