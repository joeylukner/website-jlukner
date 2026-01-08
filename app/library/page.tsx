"use client";

import Link from "next/link";
import { Accordion, AccordionItem } from "@heroui/accordion";
import {
  libraryText,
  literaryFiction,
  yaGold,
  classics,
  comedy,
  yaGoldArr,
} from "../assets/texts";

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
        <p className="library-text">{libraryText}</p>

        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Literary Fiction"
          >
            <p className="library-text">{literaryFiction}</p>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Classics">
            <p className="library-text">{classics}</p>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Comedy">
            <p className="library-text">{comedy}</p>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="YA Gold">
            <ul>
              {yaGoldArr.map((book) => (
                <li key={book.title}>
                  <em>{book.title}</em> by {book.author}
                </li>
              ))}
            </ul>
            <p className="library-text">{yaGold}</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
