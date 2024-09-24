import React, { useState, useRef, ChangeEvent } from "react";
import { Stack } from "@mui/material";
import Image from "next/image";
import OutlinedButton from "@/components/OutlinedButton/OutlinedButton"; // storybookでエラーになるからこの書き方にしてる

type Props = {
  altText: string;
  buttonText: string;
  canDelete?: boolean;
};

const ImageUpload = (props: Props) => {
  const { altText, buttonText, canDelete = false } = props;
  // FIXME: NoImageがAIで作った適当なやつなのでちゃんとしたのもらってください(iOSと合わせて！)
  const [selectedImage, setSelectedImage] = useState<string>("/NoImage.jpg");
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

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  function deleteImage() {
    setSelectedImage("/NoImage.jpg");
  }

  return (
    <Stack direction="column" alignItems="center">
      <Image
        src={selectedImage}
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
      {canDelete && (
        <div style={{ marginTop: 8 }}>
          <OutlinedButton text="削除" type="error" onClick={deleteImage} />
        </div>
      )}
    </Stack>
  );
};

export default ImageUpload;
