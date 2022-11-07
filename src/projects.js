export const projects = [
  { name: "Sharpify", url: "https://placeimg.com/400/225/arch" },
  { name: "Shargs", url: "https://placeimg.com/400/225/arch" },
  { name: "SalesOrderAllocations2", url: "https://placeimg.com/400/225/arch" },
  { name: "ShellEnergy/MP2", url: "https://placeimg.com/400/225/arch" },
  {
    name: "Parsley",
    url: "https://placeimg.com/400/225/arch",
    description:
      "Extracts any class instance from text, given a Regex Pattern with Named Capture groups.",
    code: 'var dto = "Name: Nick, Skills: C#,JS,Vue,AlpineJS,HTMX,Razor,Azure Rate:50.00 ".Extract<Developer>("Name:\\s*(?<Name>\\w+[,]*)*\\s*Skills:\\s*(?<Skills>\\w+[#,]*)*\\s*Rate:(?<Rate>\\d+\\.\\d+)")',
  },
];

window.projects = projects;
