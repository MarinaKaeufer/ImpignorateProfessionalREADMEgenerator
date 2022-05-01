// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const public_domain = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
  const permissive = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"; 
  const lgpl = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  const copyleft = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const public_domain = "https://en.wikipedia.org/wiki/Public-domain-equivalent_license#:~:text=Public%2Ddomain%2Dequivalent%20license%20are,that%20occur%20with%20other%20licenses.";
  const permissive = "https://en.wikipedia.org/wiki/Permissive_software_license#:~:text=A%20permissive%20software%20license%2C%20sometimes,usually%20including%20a%20warranty%20disclaimer.";
  const lgpl = "https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License";
  const copyleft = "https://en.wikipedia.org/wiki/Copyleft";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const public_domain =  "This is the most permissive type of software license. When software is in the public domain, anyone can modify and use the software without any restrictions. But you should always make sure it’s secure before adding it to your own codebase. Warning: Code that doesn’t have an explicit license is NOT automatically in the public domain. This includes code snippets you find on the internet.";
  const permissive =  "Permissive licenses are also known as “Apache style” or “BSD style.” They contain minimal requirements about how the software can be modified or redistributed. This type of software license is perhaps the most popular license used with free and open source software. Aside from the Apache License and the BSD License, another common variant is the MIT License.";
  const lgpl =  "The GNU Lesser General Public License allows you to link to open source libraries in your software. If you simply compile or link an LGPL-licensed library with your own code, you can release your application under any license you want, even a proprietary license. But if you modify the library or copy parts of it into your code, you’ll have to release your application under similar terms as the LGPL.";
  const copyleft =  "Copyleft licenses are also known as reciprocal licenses or restrictive licenses. The most well-known example of a copyleft or reciprocal license is the GPL. These licenses allow you to modify the licensed code and distribute new works based on it, as long as you distribute any new works or adaptations under the same software license. For example, a component’s license might say the work is free to use and distribute for personal use only. So any derivative you create would also be limited to personal use only. (A derivative is any new software you develop that contains the component.)";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contribution](#Contribution)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Please checkout my [github page here](${data.gitHub})   
  If you have any questions do not hesitate to contact me ${data.email} 

`;
}

module.exports = generateMarkdown;
