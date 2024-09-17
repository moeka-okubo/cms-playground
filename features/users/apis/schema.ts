import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "この項目は必須項目です" })
    .min(1, "この項目は必須項目です"),
  isConnectKpas: z.enum(["yes", "no"]),
  group: z.enum(["1", "2", "3"], { message: "所属を入力してください" }),
});
