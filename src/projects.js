const arch_image = "./img/arch.jpeg";

export const projects = [
  {
    name: "Oncor Streetlight",
    url: arch_image,
  },
  { name: "Sharpify", url: arch_image },
  { name: "Shargs", url: arch_image },
  { name: "SalesOrderAllocations2", url: arch_image },
  { name: "ShellEnergy/MP2", url: arch_image },
  {
    name: "Parsley",
    url: arch_image,
    description:
      "Extracts any class instance from text, given a Regex Pattern with Named Capture groups.",
    code: [
      'var pattern = "Name:\\s*(?<Name>\\w+[,]*)*\\s*Skills:\\s*(?<Skills>\\w+[#,]*)*\\s*Rate:(?<Rate>\\d+\\.\\d+)"',
      'var dto = "Name: Nick, Skills: C#,JS,Vue,AlpineJS,HTMX,Razor,Azure Rate:50.00 ".Extract<Developer>(pattern)',
      "class Developer { ",
      "\tpublic string Name {get;set;}",
      "\tpublic double Rate {get;set;}",
      "\tpublic string Skills {get;set;}",
      "}",
      "Console.Log(developer.Name)",
      "// Nick",
    ],
  },
];

window.projects = projects;
