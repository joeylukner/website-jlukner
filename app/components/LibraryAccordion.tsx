"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import {
  litFictionArr,
  classicsArr,
  comedyArr,
  yaGoldArr,
  Book,
} from "../assets/texts";

interface GenreProps {
  bookArr: Book[];
}

function Genre({ bookArr }: GenreProps) {
  return (
    <ul className="list-disc pl-4 pb-4">
      {bookArr.map((book) => (
        <li key={book.title}>
          <strong>
            <em>{book.title}</em>
          </strong>{" "}
          by {book.author}
        </li>
      ))}
    </ul>
  );
}

export default function LibraryAccordion() {
  return (
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Literary Fiction">
        <Genre bookArr={litFictionArr} />
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Classics">
        <Genre bookArr={classicsArr} />
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Comedy">
        <Genre bookArr={comedyArr} />
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="YA Gold">
        <Genre bookArr={yaGoldArr}></Genre>
      </AccordionItem>
    </Accordion>
  );
}
