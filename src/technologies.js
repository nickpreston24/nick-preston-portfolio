import technologies from "./technologies.json";
import { media_pattern } from "./patterns";
import XRegExp from "xregexp";

technologies.forEach((tech) => {
  //   tech.icon_path = "./img/icons/" + tech.Media || "./img/arch.jpeg";

  const media = XRegExp(media_pattern, "x");
  console.log("tech.Media :>> ", tech.Media);
  let match = XRegExp.exec(tech.Media, media);
  const { filename } = match?.groups || {};
  console.log("filename :>> ", filename);

  tech.icon_path = !!filename ? "./img/icons/" + filename : "./img/arch.jpeg";

  tech.rating_html = `
  <template x-for="i in ${tech["Self-Rating"]}">
    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
  </template>
  `;

  console.log("tech.icon_path :>> ", tech.icon_path);
});

window.skills = technologies;
