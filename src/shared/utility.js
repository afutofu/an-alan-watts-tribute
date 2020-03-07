import React from "react";

import Section from "../hoc/Section/Section";

export const renderSections = sectionArray => {
  const sections = sectionArray.map((sectionObj, i, { length }) => {
    let previousSection = null;
    let nextSection = null;

    if (i > 0) {
      previousSection = sectionArray[i - 1].id;
    }

    if (i < length - 1) {
      nextSection = sectionArray[i + 1].id;
    }

    return (
      <Section
        key={i}
        classes={sectionObj.classes}
        previousSection={previousSection}
        nextSection={nextSection}
        scrollDuration={1000}
        {...{ ...sectionObj, order: i }}
      />
    );
  });
  return sections;
};
