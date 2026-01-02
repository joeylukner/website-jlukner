import Image from "next/image";
import Link from "next/link";
import { libraryText } from "../assets/texts";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <div className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-4 px-16 sm:items-start">
        <div className="toolbar">
          <Link href={"/"}>
            <button className="button-toolbar">Home</button>
          </Link>
        </div>
        <h1>My Library</h1>
        <p>{libraryText}</p>
      </div>
    </div>
  );
}
