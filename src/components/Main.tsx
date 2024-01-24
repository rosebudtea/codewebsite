import CodePost from "./CodePost";
import WelcomePage from "../staticpages/WelcomePage";
import AboutMe from "../staticpages/AboutMe";

import "./Main.css";

export default function Main({ category }) {
  function renderContent(category: string) {
    switch (category) {
      case "About":
        return <AboutMe />;
      case "Code":
        return <CodePost />;
      case "Welcome":
      default:
        return <WelcomePage />;
    }
  }

  return <div id="main">{renderContent(category)}</div>;
}
