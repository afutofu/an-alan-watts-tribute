import React from "react";

import Section from "../hoc/Section/Section";

export const renderSections = sectionArray => {
  const sections = sectionArray.map((sectionObj, i, { length }) => {
    let nextSection = null;
    if (i < length - 1) {
      nextSection = sectionArray[i + 1].id;
      console.log(nextSection);
    }

    return (
      <Section
        key={i}
        classes={sectionObj.classes}
        nextSection={nextSection}
        {...{ ...sectionObj, order: i }}
      />
    );
  });
  return sections;
};
