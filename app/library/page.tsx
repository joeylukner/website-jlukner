"use client";

import Link from "next/link";
import { Accordion, AccordionItem } from "@heroui/accordion";
import {
  libraryText,
  literaryFiction,
  litFictionArr,
  yaGold,
  classics,
  classicsArr,
  comedy,
  comedyArr,
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
            <ul className="list-disc pl-4">
              {litFictionArr.map((book) => (
                <li key={book.title}>
                  <strong>
                    <em>{book.title}</em>
                  </strong>{" "}
                  by {book.author}
                </li>
              ))}
            </ul>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Classics">
            <ul className="list-disc pl-4">
              {classicsArr.map((book) => (
                <li key={book.title}>
                  <strong>
                    <em>{book.title}</em>
                  </strong>{" "}
                  by {book.author}
                </li>
              ))}
            </ul>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Comedy">
            <ul className="list-disc pl-4">
              {comedyArr.map((book) => (
                <li key={book.title}>
                  <strong>
                    <em>{book.title}</em>
                  </strong>{" "}
                  by {book.author}
                </li>
              ))}
            </ul>
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="YA Gold">
            <ul className="list-disc pl-4">
              {yaGoldArr.map((book) => (
                <li key={book.title}>
                  <strong>
                    <em>{book.title}</em>
                  </strong>{" "}
                  by {book.author}
                </li>
              ))}
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
