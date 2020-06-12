function generateMarkdown(data) {
  const profileImg = `https://github.com/${data.username}.png?size=50`;
  const license = `https://img.shields.io/badge/license-${data.license}-blue.svg`;
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Licence](#license)
* [Tests](#tests)
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## License 
 \n![GitHub license](${license})
## Tests
${data.tests}

## NPM Package
\n[![npm version](https://badge.fury.io/js/inquirer.svg)](https://badge.fury.io/js/inquirer)

## CONTACT
Feel free to contact me anytime :)
\n![Profile Image](${profileImg})
E-mail: ${data.email}
`;
}

module.exports = generateMarkdown;
