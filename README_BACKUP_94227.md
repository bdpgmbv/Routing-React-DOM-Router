<<<<<<< HEAD
# Routing-React-DOM-Router
Useful for projects in React &amp; React-TypeScript 

REACT:

1. Install the React-DOM-Router package: npm install --save react-router react-router-dom
2. To enable routing in our React app: We do it in index.js/app.js file: We do it in app.js file, the part of the app where you need to render routes/read routes, 
you need to wrap it with a component from the React-Router-DOM package:```import {BrowserRouter} from 'react-router-dom';```

```
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      </div>
    </BrowserRouter>
  );
}

export default App;
```
3. ```import {Route} from 'react-router-dom';```, Route : Path Attribute : what should happen when this is the active path. => ```<Route path="/" exact component={Post}></Route>```
4. As long as users are navigating in - YOU NOT WANT TO RELOAD THE PAGE WHEN CLICKING LINKS INSIDE OF THE APPLICATION, YOU WANT TO RE-RENDER THE PAGE, in the parts where it needs to re-render to look like new page <=> "link component".
5. the "to" property in the simplest form is a string, to can also be a complex element: can be a JavaScript Object, enclosed in {} to output dynamic content, and then dynamic content is a JavaScript object, hence another {}, and then now you can configure where you wanna to go. 
6. Routing components(match, history, location .. are not found in the child components) - the props are not passed down the component tree. If you want to use the props there, there are two ways to get access, One is : you can pass them on with the JSX - the spread operator <Post {...this.props} />. Second is: There is also a higher order component we can use on the child component. In the child component we can import something ```import {withRouter} from 'react-router-dom';```. WithRouter is a higher order component that we can use by wrapping the export with it. 
7. With the ```WithRouter``` added if we now save all files, the child components also have history,location, match property. WithRouter is a nice way of making that component route aware.
8. ABSOLUTE/RELATIVE PATH: absolute path is always appended to your domain. <Link to="/new-post"> means always attach /new-post right after your domain. Setting up "to" for the "Link" tag is always absolute path.
9. if you want to turn it into relative path, So if you want to append this to the end of the current path, then you actually need to build the path dynamically, by taking into advantage that you know which path you are currently on. You can build a dynamic path like this: ``` pathname: this.props.match.url+"/new-post"```. 
10. We want special CSS class to the link which is active. Now when we inspect we can see a anchor tag created behind the scenes, we can see there no class added even though that technically right now is the active page. We do this by changing "Link" to "NavLink". Now when you inspect the element, there is a active class added now. This allows us to apply some styling. 
11. Sometimes you dont want to use the default: "class="active"" as the classname. So you can add additional props - ```acriveClassName="my-active"```, ```activeStyle={{color:'#fa923f',textDecoration:'underline'}}
12. Passing Route Parameter, Extracting Route Paramters
13. Switch Component - tells the react router, hey please load only one component, the first one you find that matches from a given set of routes. 
14. Navigating Programatically: Till now we are using a <Link> to load a single post, and Navigate to its page. Now, we can use ```this.props.history.push({ pathname: "/" + id });``` to navigate to other component, this is useful if have to navigate to some other component after API calls etc.
15. Nested Routes: Dynamic Nested Routes: this.props.match.url
16. Redirects: <Redirect from="/" to="/posts"/> or this.props.history.push or this.props.history.replace
17. Routes render conditionally
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> master
