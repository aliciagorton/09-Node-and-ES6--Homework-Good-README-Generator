// function to generate markdown for README
function generateMarkdown(data) {
  return `
   
  # Title: ${data.title}
  ![GitHub License](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description: ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Test](#test)
  * [Contributing](#contributing)
  * [Contact](#contract)
 
  ### Installation
  ${data.installation}

  ### Usage
  ${data.usage}
  ![GitHub License](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ### Test
  ${data.test}

  ### Contributors
  ${data.contributing}

  
  ## Contact:
  ### Developer(s): https://github.com/${data.username}


  ### Email: ${data.email}
  
  

  #### Functionality:

  * Link to live demonstration of user flow: 

  * Link to repository: https://github.com/aliciagorton/09-Node-and-ES6--Homework-Good-README-Generator.git

  `;
}

module.exports = generateMarkdown;

// generate README 
// complete temporal literal 
// https://www.markdownguide.org/basic-syntax/
// https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
// https://shields.io/