import React from "react";

import TopSectionChanger from "../../components/UI/TopSectionChanger/TopSectionChanger";
import SectionChanger from "../../components/UI/SectionChanger/SectionChanger";

const section = props => {
  const background = () => {
    if (props.backgroundCover) {
      return {
        backgroundImage: `url(${props.background})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      };
    }
    return { backgroundImage: `url(${props.background})` };
  };

  const topSectionChanger = () => {
    if (!props.noTopSectionChanger) {
      return (
        <TopSectionChanger color={props.color} topPosition={props.order} />
      );
    }
    return null;
  };

  const mainContent = () => {
    if (props.mainContent) {
      return (
        <div className={props.classes.Container} style={{ color: props.color }}>
          {props.mainContent}
        </div>
      );
    }
    return null;
  };

  const link = () => {
    if (props.link) {
      return (
        <a href={props.link} style={{ color: props.color }}>
          {props.linkText}
        </a>
      );
    }
    return null;
  };

  const sectionChanger = () => {
    if (props.nextSection) {
      return (
        <SectionChanger
          to={props.nextSection}
          color={props.color}
          topPosition={props.order}
        />
      );
    }
    return null;
  };

  return (
    <section
      className={props.classes.Section}
      style={background()}
      id={props.id}
    >
      {topSectionChanger()}
      <div className={props.classes.Content}>
        <h3 className={props.classes.Title} style={{ color: props.color }}>
          {props.title}
        </h3>
        {mainContent()}
        {link()}
      </div>
      {sectionChanger()}
    </section>
  );
};

export default section;
