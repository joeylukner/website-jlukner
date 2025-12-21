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
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-4 px-16 bg-white dark:bg-black sm:items-start">
        <div className="toolbar">
          <Link href={"/"}>
            <button className="button-toolbar">Home</button>
          </Link>
        </div>
        <Image src="/headshot.JPG" alt="headshot" width={250} height={250} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Full name
            <input
              className="form-standard"
              defaultValue="test"
              {...register("fullName")}
            />
          </label>
          <label>
            Email address
            <input
              className="form-standard"
              {...register("emailAddress", { required: true })}
            />
          </label>
          <label>
            Message{" "}
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
