import { useState } from "react";

export default function AccordionItem({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordionItem = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="accordion-item mb-5">
      <h2 className="accordion-header text-black" id="headingOne">
        <button
          className="accordion-button text-black fw-bold fs-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          onClick={toggleAccordionItem}
        >
          {title} {isOpen ? "↑" : "↓"}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body p-0"></div>
      </div>
      {isOpen && <div className="p-3">{description}</div>}
    </div>
  );
}
