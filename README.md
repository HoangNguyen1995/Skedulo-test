# Description

This project works on 2 small tests of Skedulo.

1. Github API

Create a simple web app (using ReactJs + Redux) with a live search field that filters users from the [Github API](https://developer.github.com/v3/search/#search­users) and then lists those users in a table.

When a user enters at least 3 characters into the text field, make an API request to the github endpoint, parse the resulting JSON and display the following pieces of data for the first hundred user items.­

avatar_url : The Github user avatar (rendered as an image)­
login: The username of the github user­
type: The type of user.­
score: A decimal value representing the accuracy of the result against the search term.

When an active HTTP request is in progress, place a progress indicator anywhere on thepage to indicate network activity.

Once the search is performed, clearing the input should also clear the list of users displayedbefore.

NOTE: The Github API is rate limited. Performing too many requests too quickly will end with the user's API requests being blocked for a short period of time.

2. Given a list of items:

```
   let unavailableItems = [
   { startPx: 10, endPx: 30 },
   { startPx: 55, endPx: 65 },
   { startPx: 35, endPx: 50 },
   { startPx: 20, endPx: 40 },
   { startPx: 60, endPx: 70 },
   ]
```

Write a function (using ES6) that union all overlapping items and produce an array of non overlapping items.

For example:

```
{ startPx: 10, endPx: 30 }
{ startPx: 20, endPx: 40 }
```

would become:

```
{ startPx: 10, endPx: 40 }
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
