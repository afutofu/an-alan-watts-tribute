import React from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import scroll from "react-scroll";

import TopSectionChanger from "../../components/UI/TopSectionChanger/TopSectionChanger";
import SectionChanger from "../../components/UI/SectionChanger/SectionChanger";

const section = props => {
  const background = () => {
    if (props.backgroundCover) {
      return {
        backgroundImage: `url(${props.background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
        width: "100%"
      };
    }
    return { backgroundImage: `url(${props.background})` };
  };

  const topSectionChanger = () => {
    if (props.customStyle) {
      return (
        <TopSectionChanger
          customStyle={props.classes.TopSectionChangerCustomStyle}
          topPosition={props.order}
        />
      );
    } else if (!props.noTopSectionChanger) {
      return (
        <TopSectionChanger color={props.color} topPosition={props.order} />
      );
    }
    return null;
  };

  const title = () => {
    if (props.title) {
      return (
        <h3 className={props.classes.Title} style={{ color: props.color }}>
          {props.title}
        </h3>
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
      if (props.linkNewWindow) {
        return (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: props.color }}
            className={props.classes.Link}
          >
            <strong>{props.linkText}</strong>
          </a>
        );
      }
      return (
        <a
          href={props.link}
          style={{ color: props.color }}
          className={props.classes.Link}
        >
          <strong>{props.linkText}</strong>
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

  const scrollPreviousSection = () => {
    if (props.previousSection !== null) {
      scroll.scroller.scrollTo(props.previousSection, {
        smooth: true,
        duration: 1000
      });
    }
  };

  const scrollNextSection = () => {
    if (props.nextSection !== null) {
      scroll.scroller.scrollTo(props.nextSection, {
        smooth: true,
        duration: 1000
      });
    }
  };

  return (
    <ReactScrollWheelHandler
      upHandler={scrollPreviousSection}
      downHandler={scrollNextSection}
      preventScroll
    >
      <section
        className={props.classes.Section}
        style={background()}
        id={props.id}
      >
        {topSectionChanger()}
        <div className={props.classes.Content}>
          {title()}
          {mainContent()}
          {link()}
        </div>
        {sectionChanger()}
      </section>
    </ReactScrollWheelHandler>
  );
};

export default section;
