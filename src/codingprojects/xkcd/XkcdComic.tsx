import ComingSoon from "../comingsoon/ComingSoon";

const websiteUrl = "https://xkcd.com/";

function grabComic() {
  try {
    const response = fetch(websiteUrl);
    console.log(response);
  } catch (exception) {
    console.log("Something went wrong");
  }
}

export default function XkcdComic() {
  grabComic();
  return (
    <>
      <ComingSoon projectName={"XKCD Comic Grab"} underway={false} />
    </>
  );
}
