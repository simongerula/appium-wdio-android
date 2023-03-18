# Appium and WebDriverIO Automated Tests

## This is a sample automated test suite using Appium and WebDriverIO, implemented in TypeScript with Page Object Model design pattern.

### Prerequisites

To run these tests, you need to have the following software installed:

Node.js (https://nodejs.org/)

Appium (http://appium.io/)

Android SDK (https://developer.android.com/studio)

WebDriverIO (https://webdriver.io/)


### Running the Tests

Clone the repository to your local machine.
Open a terminal and navigate to the project directory.
Run npm install to install all dependencies.
Connect an Android device or emulator to your computer.
Start the Appium server.
Run npm test to execute the test suite.
Structure

### The test suite is organized into three files:

- home.page.js: contains the Page Object for the home page of the application.
- login.page.js: contains the Page Object for the login page of the application.
- swipe.page.js: contains the Page Object for the swipe page of the application.

The test cases are defined in app.spec.js.

### Test Cases
The test suite contains the following test cases:

- Login: This test case logs in to the application and checks that the success message is displayed.
- Swipe: This test case navigates to the swipe page of the application, swipes the cards, takes a screenshot and verifies that the page has changed.
- Change Orientation: This test case changes the orientation of the device to landscape mode, takes a screenshot, and verifies that the orientation has changed.

All tests are implemented using WebDriverIO and Appium commands and assertions, and use Page Objects to interact with the application.

### Additional Information

> The npm wdio command runs all the tests in the test suite.

Screenshots are saved in the screenshots/ directory.

For more information on how to use WebDriverIO and Appium, please refer to their respective documentation.
