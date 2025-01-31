import { Accordion } from "react-bootstrap";
import languages from "../data/languages";
import AccordionItem from "./AccordionItem";

export default function AccordionList() {
  return (
    <div className="accordion" id="accordionExample">
      {languages.map((language, id) => {
        return (
          <AccordionItem
            key={id}
            title={language.title}
            description={language.description}
          />
        );
      })}
    </div>
  );
}
