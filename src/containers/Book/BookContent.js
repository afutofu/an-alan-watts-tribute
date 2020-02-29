import React from "react";

import wisdomOfInsecurityClasses from "./Styles/WisdomOfInsecurity.module.css";

export const wisdomOfInsecurity = (
  <React.Fragment>
    <img
      className={wisdomOfInsecurityClasses.BookCover}
      src="https://images-na.ssl-images-amazon.com/images/I/41mlryGPaoL.jpg"
      alt=""
    />
    <div className={wisdomOfInsecurityClasses.BookDesc}>
      <p>
        We live in an age of unprecedented anxiety. Spending all our time trying
        to anticipate and plan for the future and to lamenting the past, we
        forget to embrace the here and now. We are so concerned with tomorrow
        that we forget to enjoy today. Drawing from Eastern philosophy and
        religion, Alan Watts shows that it is only by acknowledging what we do
        not—and cannot—know that we can learn anything truly worth knowing. In
        The Wisdom of Insecurity, he shows us how, in order to lead a fulfilling
        life, we must embrace the present—and live fully in the now.
      </p>
    </div>
  </React.Fragment>
);
