# Cucumber_Playwright_TS

Welcome to Cucumber_Playwright_TS, a TypeScript project with Playwright and Cucumber integration. This project aims to
provide a foundation for writing end-to-end tests using the Cucumber framework and Playwright's powerful browser
automation capabilities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Writing Tests](#writing-tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with Cucumber_Playwright_TS, follow these steps:

1. Clone the repository:

```bash
git clone git@github.com:jtacopt/cucumber_playwright_ts.git
```

2. Install the dependencies:

```bash
cd cucumber_playwright_ts
npm install
```

## Usage

After completing the installation steps, you can run the project's tests using the following command:

```bash
npm test
```

This command will execute the Cucumber scenarios defined in the `features` directory.

## Configuration

Cucumber_Playwright_TS provides a configuration file located at `config.ts`. You can modify this file to customize the
project's behavior according to your needs. Here are some of the configuration options available:

- `defaultTimeout`: Sets the default timeout for Playwright operations.
- `headless`: Controls whether the browser runs in headless mode.
- `launchOptions`: Additional options to pass to Playwright's `browserType.launch` method.

Feel free to adjust these settings based on your testing requirements.

## Writing Tests

Cucumber_Playwright_TS combines the power of Cucumber and Playwright to create expressive and readable end-to-end tests.
The project structure follows the typical Cucumber directory layout.

- Feature files are located in the `features` directory and have the `.feature` extension. These files contain the
  Gherkin syntax, which allows you to define test scenarios in a human-readable format.
- Step definitions are implemented in TypeScript files located in the `step_definitions` directory. These files define
  the actual test logic that will be executed when the scenarios are run.

To create a new test scenario, follow these steps:

1. Create a new feature file in the `features` directory. Use the Gherkin syntax to define the desired behavior of your
   test scenario.
2. Implement the step definitions for your scenario in TypeScript files located in the `step_definitions` directory. Use
   Playwright's APIs to interact with the browser and perform actions.

Refer to the official Cucumber documentation and Playwright documentation for more information on writing feature files
and step definitions.

## Contributing

Contributions to Cucumber_Playwright_TS are welcome! If you encounter any issues or have suggestions for improvements,
please open an issue on the project's GitHub repository
at [jtacopt/cucumber_playwright_ts](https://github.com/jtacopt/cucumber_playwright_ts).

If you would like to contribute code changes, please fork the repository, create a new branch, commit your changes, and
submit a pull request. Your contributions will be reviewed and merged if they meet the project's guidelines.

## License

Cucumber_Playwright_TS is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this
project as permitted by the license.