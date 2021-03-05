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
4. As long as users are navigating in - YOU NOT WANT TO RELOAD THE PAGE, YOU WANT TO RE-RENDER THE PAGE.
