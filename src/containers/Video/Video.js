import React, { Component } from "react";

import { renderSections } from "../../shared/utility";

class Video extends Component {
  state = { sections: [] };
  render() {
    return (
      <React.Fragment>{renderSections(this.state.sections)}</React.Fragment>
    );
  }
}

export default Video;
