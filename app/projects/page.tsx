import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-4 px-16 bg-white dark:bg-black sm:items-start">
        <div className="toolbar">
          <Link href={"/"}>
            <button className="button-toolbar">Home</button>
          </Link>
        </div>
        <div className="flex flex-col justify-between">
          <h1>Reading Library Catalog</h1>
          <p>
            My main personal project outside of work, this catalog is a space to
            exhibit my skills in web development, ux design, and love for
            reading{" "}
          </p>
          <h1>Morphological Transducer for Hän</h1>
          <h1>Social Networking App for Restaurants</h1>
          <h1>Website Portfolio</h1>
        </div>
      </div>
    </div>
  );
}
