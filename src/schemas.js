import { z } from "zod";
// Login Schema
export const loginSchema = z.object({
  email_or_phone: z
    .string()
    .min(1, { message: "أدخل البريد الإلكتروني أو رقم الهاتف" })
    .regex(/^(05\d{8}$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, {
      message: "أدخل بريد إلكتروني أو رقم هاتف صالح",
    }),
  password: z.string().min(1, { message: "أدخل كلمة المرور" }),
});
// Login Schema
export const loginWithPhoneSchema = z.object({
  phone: z
    .string()
    .min(1, { message: "أدخل رقم الهاتف" })
    .regex(/^05\d{8}$/, {
      message: "يجب أن يكون رقم الهاتف سعودي",
    }),
});

// Register Schema
export const registerSchema = z
  .object({
    FirstName: z
      .string()
      .min(1, { message: "أدخل الإسم الأول" })
      .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, { message: "أدخل قيمة صالحة" }),
    LastName: z
      .string()
      .min(1, { message: "أدخل إسم العائلة" })
      .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, { message: "أدخل قيمة صالحة" }),
    Email: z
      .string()
      .min(1, { message: "أدخل البريد الإلكتروني " })
      .email({ message: "أدخل بريد إلكتروني صالح" }),
    Phone: z
      .string()
      .min(1, { message: "أدخل رقم الهاتف" })
      .regex(/^05\d{8}$/, {
        message: "يجب أن يكون رقم الهاتف سعودي",
      }),
    password: z.string().min(1, { message: "أدخل كلمة المرور" }),
    confirmPassword: z.string().min(1, { message: "تأكيد كلمة المرور" }),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: " كلمة المرور وتأكيد كلمة المرور غير متطابقين",
    path: ["confirmPassword"],
  });

// Cart Register Schema
export const CartRegisterSchema = z
  .object({
    FirstName: z
      .string()
      .min(1, { message: "أدخل الإسم الأول" })
      .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, { message: "أدخل قيمة صالحة" }),
    LastName: z
      .string()
      .min(1, { message: "أدخل إسم العائلة" })
      .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, { message: "أدخل قيمة صالحة" }),
    Email: z
      .string()
      .min(1, { message: "أدخل البريد الإلكتروني " })
      .email({ message: "أدخل بريد إلكتروني صالح" }),
    CityID: z.string({ message: "إختر المدينة" }).regex(/^[1-9]\d*$/, {
      message: "أدخل قيمة صالحة",
    }),
    Address: z
      .string({ message: "أدخل قيمة صالحة" })
      .min(1, { message: "أدخل العنوان" })
      .regex(/^[a-zA-Z\u0600-\u06FF0-9\s-]+$/, {
        message: "أدخل قيمة صالحة",
      }),
    password: z.string().min(1, { message: "أدخل كلمة المرور" }),
    confirmPassword: z.string().min(1, { message: "تأكيد كلمة المرور" }),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: " كلمة المرور وتأكيد كلمة المرور غير متطابقين",
    path: ["confirmPassword"],
  });

// forgetPassword Schema
export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "أدخل البريد الإلكتروني " })
    .email({ message: "أدخل بريد إلكتروني صالح" }),
});
// User Info Schema
export const userInfoSchema = z.object({
  firstName: z
    .string({ message: "أدخل قيمة صالحة" })
    .min(1, { message: "أدخل الإسم الأول" })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, { message: "أدخل قيمة صالحة" }),
  lastName: z
    .string({ message: "أدخل قيمة صالحة" })
    .min(1, { message: "أدخل إسم العائلة" })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, { message: "أدخل قيمة صالحة" }),
  email: z
    .string()
    .min(1, { message: "أدخل البريد الإلكتروني " })
    .email({ message: "أدخل بريد إلكتروني صالح" }),
  phone: z
    .string({ message: "أدخل قيمة صالحة" })
    .min(1, { message: "أدخل رقم الهاتف" })
    .max(10, { message: "أدخل رقم هاتف صحيح مثال(********05)" })
    .regex(/^05\d{8}$/, {
      message: "يجب أن يكون رقم الهاتف سعودي",
    }),
  address: z
    .string({ message: "أدخل قيمة صالحة" })
    .min(1, { message: "أدخل العنوان" })
    .regex(/^[a-zA-Z\u0600-\u06FF0-9\s-]+$/, {
      message: "أدخل قيمة صالحة",
    }),
  cityId: z.string({ message: "إختر المدينة" }).regex(/^[1-9]\d*$/, {
    message: "أدخل قيمة صالحة",
  }),
});
// friend data schema
export const freindDataSchema = z.object({
  friendName: z
    .string()
    .min(1, { message: "أدخل الإسم الأول" })
    .regex(/^[a-zA-Z\u0600-\u06FF\s]+$/, { message: "أدخل قيمة صالحة" }),
  friendPhone: z
    .string()
    .min(1, { message: "أدخل رقم الهاتف" })
    .regex(/^05\d{8}$/, {
      message: "يجب أن يكون رقم الهاتف سعودي",
    }),
  friendAddress: z
    .string({ message: "أدخل قيمة صالحة" })
    .min(1, { message: "أدخل العنوان" })
    .regex(/^[a-zA-Z\u0600-\u06FF0-9\s-]+$/, {
      message: "أدخل قيمة صالحة",
    }),
  cityId: z.string({ message: "إختر المدينة" }).regex(/^[1-9]\d*$/, {
    message: "أدخل قيمة صالحة",
  }),
});
