import WelcomePageImage from "../assets/codewelcomepage.png";

import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <main id="welcome">
      <img src={WelcomePageImage} alt={"<Welcome /> < Rabbit >"} />
      <p>Hello and welcome to my page!</p>
      <p>
        Feel free to look around at my projects but make sure to wear a hard hat
        as some pages are still under construction.
      </p>
    </main>
  );
}
