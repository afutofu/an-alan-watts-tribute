import React from "react";

import SectionChanger from "../UI/SectionChanger/SectionChanger";

const homeSection = props => {
  return (
    <React.Fragment>
      <section id="home"></section>
      <SectionChanger to="about" color="white" topPosition={props.order} />
    </React.Fragment>
  );
};

export default homeSection;
