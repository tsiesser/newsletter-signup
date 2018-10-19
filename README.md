## Newsletter Sign-Up

The SignUp component is located in the src/components/organisms folder.

### Viewing the App

The app has been published to GitHub Pages and may be viewed here:<br>
https://tsiesser.github.io/newsletter-signup

To change this url, please see [npm run deploy](#`npm-run-deploy`).

### Notes

- The responsive breakpoint labels you see in the upper left come from an hoc I use for testing - 
they are NOT part of the Signup component itself! (You can verify this in the Storybook.)
- The Signup component has only 3 states instead of 5 as specified. 
Instead of creating separate states for the error conditions, errors are handled
by passing an error object into the constituent molecules. My reasoning was that having
2 states each for the email and name collections would be more error-prone than having a
single state with additional error information. 
- The Signup component does not specify a background color so that 
it can be placed on backgrounds other than black.
- All display text is maintained in the SignupText.js file.
- Responsive breakpoints are defined in _breakpoints.scss.
- Colors and font assignments are defined in _variables.scss.
- Hitting the enter key in a text input field triggers a button click.

### Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.<br>
The build is minified and the filenames include the hashes.<br>

#### `npm run deploy`

Builds and publishes the app to GitHub Pages.

To change the url to which the app is published, edit the 'homepage' property in package.json.

#### `npm run storybook`

Builds and runs Storybook.<br>
Open [http://localhost:9009](http://localhost:9009) to view it in the browser. 
