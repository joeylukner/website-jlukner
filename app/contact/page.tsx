"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Link href={"/"}>
        <button className="button-toolbar">Home</button>
      </Link>
      <Image src="/headshot.JPG" alt="headshot" width={250} height={250} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-standard"
          defaultValue="test"
          {...register("example")}
        />
        <input
          className="form-standard"
          {...register("exampleRequired", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input className="form-standard" type="submit" />
      </form>
    </div>
  );
}
