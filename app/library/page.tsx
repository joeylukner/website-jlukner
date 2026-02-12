import Link from "next/link";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { libraryText } from "../assets/texts";
import LibraryAccordion from "../components/LibraryAccordion";
import { Genre } from "../components/LibraryAccordion";
import { createClient } from "@/lib/supabase/server";

export default async function About() {
  const response = await fetch("http://localhost:3000/api/books");
  const currentlyReading = await response.json();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <div className="flex min-h-screen w-full max-w-5xl flex-col items-center justify-between py-4 px-16 sm:items-start">
        <div className="toolbar">
          <Link href={"/"}>
            <button className="button-toolbar">Home</button>
          </Link>
        </div>
        <h1>My Library</h1>
        <p className="library-text">{libraryText}</p>
        <LibraryAccordion />
        <Genre bookArr={currentlyReading} />
      </div>
    </div>
  );
}
