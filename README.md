# Description

This project works on 2 small tests of Skedulo.

### 1. Github API

Create a simple web app (using ReactJs + Redux) with a live search field that filters users from the [Github API](https://developer.github.com/v3/search/#search­users) and then lists those users in a table.

When a user enters at least 3 characters into the text field, make an API request to the github endpoint, parse the resulting JSON and display the following pieces of data for the first hundred user items.­

avatar_url : The Github user avatar (rendered as an image)­.\
login: The username of the github user­.\
type: The type of user.­\
score: A decimal value representing the accuracy of the result against the search term.

When an active HTTP request is in progress, place a progress indicator anywhere on thepage to indicate network activity.

Once the search is performed, clearing the input should also clear the list of users displayedbefore.

NOTE: The Github API is rate limited. Performing too many requests too quickly will end with the user's API requests being blocked for a short period of time.

### 2. Given a list of items:

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

## Result

### 1. Github API

Clone or download this project and run below scripts:

1. `yarn` \
   To install dependencies for project
2. `yarn start` \
   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 2. Given a list of items:

I have created the `unionOverLappingItems` function in `src/helper.js` which already has my command about how I solve it. \
I also created 3 tests on this function in `src/tests/unionOverLappingItems.test.js`
