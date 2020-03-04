import React from "react";

import theWisdomOfInsecurity from "../../assets/images/books/TheWisdomOfInsecurity.jpg";
import theBook from "../../assets/images/books/TheBook.jpg";
import wayOfZen from "../../assets/images/books/WayOfZen.jpg";

export const about = (
  <p>
    A prolific author and speaker, Alan Watts was one of the first to interpret
    Eastern wisdom for a Western audience. Born outside London in 1915, he
    discovered the nearby Buddhist Lodge at a young age. After moving to the
    United States in 1938, Alan became an Episcopal priest for a time, and then
    relocated to Millbrook, New York, where he wrote his pivotal book The Wisdom
    of Insecurity: A Message for an Age of Anxiety. In 1951 he moved to San
    Francisco where he began teaching Buddhist studies, and in 1956 began his
    popular radio show, “Way Beyond the West.” By the early sixties, Alan’s
    radio talks aired nationally and the counterculture movement adopted him as
    a spiritual spokesperson. He wrote and traveled regularly until his passing
    in 1973.
  </p>
);

export const video = (
  <iframe
    title="realYou"
    src="https://www.youtube.com/embed/mMRrCYPxD0I"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

export const book = (
  <React.Fragment>
    <img src={theWisdomOfInsecurity} alt="" />
    <img src={theBook} alt="" />
    <img src={wayOfZen} alt="" />
  </React.Fragment>
);
