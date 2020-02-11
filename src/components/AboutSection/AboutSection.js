import React from "react";

import classes from "./AboutSection.module.css";

const aboutSection = () => {
  return (
    <div className={classes.AboutSection}>
      <h3 className={classes.Title}>ABOUT</h3>
      <div className={classes.Container}>
        <p>
          Aliqua sint tempor nostrud pariatur Lorem tempor reprehenderit
          pariatur consequat. Sint ea minim minim consectetur. Quis id laborum
          ullamco enim aliqua esse sit Lorem excepteur ipsum occaecat ad velit.
          Enim velit amet nulla esse. Proident cillum aliquip aliqua laborum
          anim laborum officia aliquip sunt aliquip laborum incididunt fugiat
          veniam. Pariatur eiusmod deserunt adipisicing consequat cillum
          exercitation anim. Duis quis irure elit anim eiusmod quis irure.
          Cillum pariatur adipisicing magna exercitation adipisicing aute cillum
          nulla irure laborum nostrud. Mollit cillum commodo ut sunt esse sunt
          enim tempor ullamco. Cillum ipsum labore consectetur excepteur esse
          laborum magna commodo nulla consequat cillum. Veniam non exercitation
          mollit quis excepteur esse enim. Minim amet ea eiusmod cillum amet
          velit do cillum reprehenderit reprehenderit voluptate Lorem. Proident
          pariatur enim velit et amet nulla nisi deserunt qui nisi. Sunt minim
          elit dolore in occaecat veniam tempor.
        </p>
      </div>
      <button>MORE ABOUT ALAN WATTS</button>
      <button>
        <i className="fa fa-chevron-down"></i>
      </button>
    </div>
  );
};

export default aboutSection;
