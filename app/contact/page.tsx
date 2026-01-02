"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  emailAddress: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("fullName")); // watch input value by passing the name of it

  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <div className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-4 px-16 center sm:items-start">
        <div className="toolbar">
          <Link href={"/"}>
            <button className="button-toolbar">Home</button>
          </Link>
        </div>
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Contact me!
        </h1>
        <Image src="/headshot.JPG" alt="headshot" width={250} height={250} />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <label className="flex flex-row justify-between items-center">
            <span>Full name</span>
            <input
              className="form-standard"
              defaultValue="test"
              {...register("fullName")}
            />
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Email address</span>
            <input
              className="form-standard"
              {...register("emailAddress", { required: true })}
            />
          </label>
          <label className="flex flex-row justify-between items-center">
            <span>Message </span>
            <input
              className="form-standard"
              {...register("message", { required: true })}
            />
          </label>

          {errors.message && <span>This field is required</span>}
          <input className="form-standard" type="submit" />
        </form>
      </div>
    </div>
  );
}
