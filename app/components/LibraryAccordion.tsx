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
  title: string;
}

function Genre({ bookArr, title }: GenreProps) {
  return (
    <AccordionItem key={title} title={title}>
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
    </AccordionItem>
  );
}

export default function LibraryAccordion() {
  return (
    <Accordion>
      <AccordionItem key="2" aria-label="Accordion 2" title="Classics">
        <ul className="list-disc pl-4 pb-4">
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
        <ul className="list-disc pl-4 pb-4">
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
        <ul className="list-disc pl-4 pb-4">
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
  );
}
