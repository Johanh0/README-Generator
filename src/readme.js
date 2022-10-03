
const readmeTxt = (name, github, about, nameProject, descriptionProject, lenguage, link, instalattion, usage ) => {
    return `
# ${nameProject}
## About / Synopsis
${descriptionProject}

> * [Title / Repository Name](#title--repository-name)
>   * [About / Synopsis](#about--synopsis)
>   * [Table of contents](#table-of-contents)
>   * [Installation](#installation)
>   * [Usage](#usage)
>   * [lenguages](#Lenguages)
>   * [Developer](#Developer)
>   * [Github](#GitHub-Deployment)

## Installation
${instalattion}

# Usage
${usage}

#Lenguages
${lenguage}

# Developer
## ${name} / ${github}

${about}

#GitHub Deployment
${link}
`
};

module.exports = readmeTxt;