const fs = require(`fs`);
const inquirer = require(`inquirer`);
const readmeTxt = require(`./src/readme`);


const promptUser = () => {
    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What's your name?`,

            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                };
            }

        },
        {
            type: `input`,
            name: `github`,
            message: `Enter your GitHub username: `,

            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub username!');
                  return false;
                };
            }

        },
        {
            type: `input`,
            name: `about`,
            message: `Provide some information about yourself: `,

            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('Please enter some description about yourself!');
                  return false;
                };
            }

        }
    ]);
};

const promptProject = portfolioData => {
    console.log(`
    =================
   Info of the project
    =================
    `);

    return inquirer.prompt([
        {
          type: 'input',
          name: 'nameProject',
          message: 'What is the name of your project?',

          validate: nameProjectInput => {
            if (nameProjectInput) {
              return true;
            } else {
              console.log('Please enter the name of your project');
              return false;
            };
        }
        },
        {
          type: 'input',
          name: 'descriptionProject',
          message: 'Provide a description of the project (Required)',

          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter some description about your project');
              return false;
            };
        }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you use for build this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],

          validate: lenguagesInput => {
            if (lenguagesInput) {
              return true;
            } else {
              console.log('You have to put at least one lenguaje');
              return false;
            };
        }
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project.',

          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You have to enter your the link of the Github Display');
              return false;
            };
        }
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Explain the instalattion of your project.',

          validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please explain how install your projects');
              return false;
            };
        }
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Explain the usage of your project',

          validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('You have to type the usage of your project');
              return false;
            };
        }
        }
      ]);
};


promptUser().then(dataUser => {

    // Destructuring promptUser
    const { name, github, about } = dataUser;

    promptProject().then(dataProject => {

      // Destructurign promptProject
      const { nameProject, descriptionProject, lenguage, link, installation, usage  } = dataProject;

      fs.writeFile(`./README.md
      `, readmeTxt(name, github, about, nameProject, descriptionProject, lenguage, link, installation, usage ), err => {
          if (err) throw new Error(err);
      })

    })
})

// console.log(name);
// console.log(github);
// console.log(about);

