import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { userSchema } from "@/features/users/apis/schema";
import {
  DefaultButton,
  ImageUpload,
  RadioComponent,
  SelectComponent,
  TextFieldComponent,
} from "@/components";

type FormData = z.infer<typeof userSchema>;

const radioOptions = [
  { value: "yes", label: "済" },
  { value: "no", label: "未連携" },
];

const selectOptions = [
  { value: "", label: "選択してください" },
  { value: "1", label: "人事部" },
  { value: "2", label: "エンジニア開発部" },
  { value: "3", label: "その他" },
];

export default function RequiredForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userSchema),
    mode: "onChange",
    defaultValues: { name: "", isConnectKpas: "yes", group: "1" },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <h1>社員登録</h1>
      <TextFieldComponent
        control={control}
        error={errors.name}
        fieldName="name"
        label="社員名"
        isRequired
      />
      <RadioComponent
        control={control}
        error={errors.isConnectKpas}
        fieldName="isConnectKpas"
        label="KPAS連携"
        options={radioOptions}
        isRequired
      />

      <SelectComponent
        control={control}
        error={errors.group}
        fieldName="group"
        label="所属"
        options={selectOptions}
        isRequired={true}
      />

      <ImageUpload altText="顔写真" buttonText="顔写真を追加" />
      <DefaultButton text="登録" onClick={handleSubmit(onSubmit)} />
    </>
  );
}
