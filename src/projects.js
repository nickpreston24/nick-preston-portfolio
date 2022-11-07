export const projects = [
  {
    // name: "Oncor Streetlight",
    // url: "https://airtable.com/appIU6DfQKUWUaqSI/tblUrJPBzjOlR83Fh/viwRQAImH61floEO7/rec3nkz1YeCY7GrhE/fldQvggEoHCIKQkil?copyLinkToCellOrRecordOrigin=gridView",
    // img: "https://airtable.com/appIU6DfQKUWUaqSI/tblUrJPBzjOlR83Fh/viwRQAImH61floEO7/rec3nkz1YeCY7GrhE/fld0NJD7XJafT5cCS?copyLinkToCellOrRecordOrigin=gridView",
  },
  { name: "Sharpify", url: "https://placeimg.com/400/225/arch" },
  { name: "Shargs", url: "https://placeimg.com/400/225/arch" },
  { name: "SalesOrderAllocations2", url: "https://placeimg.com/400/225/arch" },
  { name: "ShellEnergy/MP2", url: "https://placeimg.com/400/225/arch" },
  {
    name: "Parsley",
    url: "https://placeimg.com/400/225/arch",
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
