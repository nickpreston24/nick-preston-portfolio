export const skills = [
  {
    name: ".NET Framework",
    years: 9,
    companies_used_at: "Hoya Vision Care => Present",
    years_to_master: 10,
  },
  { name: ".NET Core", years: 5, companies_used_at: "", years_to_master: 10 },
  {
    name: ".NET Web API (REST)",
    years: 5,
    companies_used_at: "",
    years_to_master: 10,
  },
  { name: ".NET Core", years: -1, companies_used_at: "", years_to_master: 10 },
  { name: ".NET Core", years: -1, companies_used_at: "", years_to_master: 10 },
  { name: ".NET Core", years: -1, companies_used_at: "", years_to_master: 10 },
];

skills.forEach((skill) => {
  skill.percent_mastery = (skill.years / skill.years_to_master) * 100.0;
  skill.percent_mastery_label = "--value: " + skill.percent_mastery;
});

window.skills = skills;
console.log("skillz: ", window.skills);
//--value: 70

/**
 * 
 * 
 * .NET
9 years | Current
.NET Framework
9 years | Current
C#
9 years | Current
Engineering
9 years | Current
Entity Framework
9 years | Current
LINQ
9 years | Current
Software
9 years | Current
Software development
9 years | Current
Software engineering
9 years | Current
SQL
9 years | Current
Git
8 years | Current
GitHub
8 years | Current
UI
6 years | Current
API
5 years | Current
CSS
5 years | Current
Microsoft SQL Server
5 years | Current
RESTful APIs
5 years | Current
CSS
4 years | Current
HTML
4 years | Current
JavaScript
4 years | Current
NPM
4 years | Current
React JS
4 years | Current
RESTful API's
4 years | Current
Web API
4 years | Current
Web applications
4 years | Current
Yarn
4 years | Current
Microsoft Azure
3 years | Current
Bootstrap
2 years | Current
Tailwind CSS
2 years | Current
TypeScript
2 years | Current
VueJS
2 years | Current
GitLab
1 years | Current
Netlify
1 years | Current
Vite
1 years | Current
ASP.NET
years | Current
TypeScript
4 years | 2022
.NET 6
1 years | 2022
Razor Pages
1 years | 2022
Web Forms
1 years | 2022
AngularJS
1 years | 2020
Heroku
1 years | 2018
Node
1 years | 2018
 */
