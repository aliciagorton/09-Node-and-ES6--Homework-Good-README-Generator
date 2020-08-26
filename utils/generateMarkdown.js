// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.username}

`;
}

module.exports = generateMarkdown;

// generate README 
// complete temporal literal 
// https://www.markdownguide.org/basic-syntax/
// https://nodejs.org/api/fs.html#fs_fs_writefilesync_file_data_options
// https://shields.io/