import React, { useState } from "react";
import { questionsAnswers } from "./data";
import AccordionItem from "../AccordionItem/AccordionItem";
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
        const showDescription = index === activeIndex ? "show-description" : "";
        const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
        const ariaExpanded = index === activeIndex ? "true" : "false";
        return (
            <AccordionItem
                key={index}
                showDescription={showDescription}
                fontWeightBold={fontWeightBold}
                ariaExpanded={ariaExpanded}
                item={item}
                index={index}
                onClick={() => {
                    setActiveIndex(index);
                }}
            />
        );
    });

    return (
        <div className="faq" style={{ marginBottom: "96px" }}>
            <dl className="faq__list">{renderedQuestionsAnswers}</dl>
        </div>
    );
};

export default Accordion;