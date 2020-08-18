This project was bootstrapped with create-react-app {npx create-react-app MyApp}

Hoisted at: https://hopeful-torvalds-fbf6bc.netlify.app/

Date Started: Around : 20 July 2020

Author: Ashish

Desc: familiarity with all React-Redux Eco System

Implemented the below list:

1.  Create-react-app basics

        Basic Commands
            npx create-react-app YOUR_PROJECT_NAME
            cd my-app
            npm run start

        More Information at Official Docs
            https://create-react-app.dev/

2.  React
    functional and class based components
    Class Based Componenets like containers/MainPage.js, containers/CounterExample.js etc
    functional Components like components/Navigation.js, components/Cards.js etc

3.  Redux
    install redux, react-redux
    Main file, index.js
    createStore, thunk,combineReducers,applyMiddleware,Provider, reducers,connect
    mapStateToProps, mapDispatchToProps,
    Srore {reducers, actions, actiontypes, }
    File: Abc.js -> actions/Abc.js -- (action/index.js)--> reducers -- action/actionTypes.js--> Abc.js

4)  React Router
    install react-router-dom
    BrowserRouter, Route, Switch, withRouter, Redirect
    Main Files index.js, app.js

5)  Debugging React Apps
    install React Developer Tools {https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en#:~:text=React%20Developer%20Tools%20is%20a,%22%20and%20%22%E2%9A%9B%EF%B8%8F%20Profiler%22.}

        Javascript debugging

6.  API
    Axios, thunk
    Main File: actions/users.js

7.  css
    css Modules
    Already configured for CRA, other will need to configure
    eg Cards.modules.css

8.  Visual studio code setup
    Extension: ES7 React/Redux/GraphQL/React-Native snippets

9)  Navigation
    Links, Navlinks

10) Forms
    using core react
    ContactUs.js

11) css framework
    bootstrap: https://www.youtube.com/watch?v=VmReQaQl5fk
    install : react-bootstrap, bootstrap
    App.js : import "bootstrap/dist/css/bootstrap.min.css";
    File: BootstrapExample.js

12. Hooks
    https://www.robinwieruch.de/react-hooks-fetch-data
    Basic : CounterByHook.js
    Files: API FETCH BY HOOKS : ApiByHooks.js, useApiFetcher.js

13. error page 404
    Setup react router

14) Static type checking
    Prop-types
    Install prop-type: Counter.js

15. Eslint, prettier, husky
    https://thomlom.dev/setup-eslint-prettier-react/
    Already installed on CRA,
    File: .env add EXTEND_ESLINT=false changes in Package.json
    INstall
    "eslint-config-airbnb"
    "eslint-config-prettier"
    "eslint-plugin-prettier"
    "husky": "^4.2.5",
    "prettier": "^2.0.5",

16. Service workers
    In build in CRA, other wise configure
    https://www.youtube.com/watch?v=ksXwaWHCW6k

18) Deploying React App
    Netlify
    https://blog.logrocket.com/from-create-react-app-to-pwa/

19) Testing done with react testing library
    Already setup with CRA
    @testing-library/react": "^10.4.8",
    @testing-library/jest-dom": "^5.11.3",

        https://www.robinwieruch.de/react-testing-library
        1. React testing library
        2. testing-utils
        3. Jest

20) analytics sitemap.xml
    robots.txt
    GA
    "react-ga": "^3.1.2",
    Add script from Google
    https://levelup.gitconnected.com/using-google-analytics-with-react-3d98d709399b

==========================

go through react concepts along with hooks{theory}
go through redux concepts with hooks{theory}
go through redux router

and keep adding 1.other react things like { error in API failure, error boundary , portals , renderprops, profiler, hooks like usecallback, memo and redux things like hooks , react router things

============================

REACT ADVANCED {For Another project}

1. webpack/Boiler plate
2. SSR , koa/node basics
3. Chunking

====================================

git practicle for pushing projects effortless

Get expertise on seting up project for git quickly, so that all projects can be pushed to github without any delay
also cover uo working with terminal creating files etc etc
See below
https://www.youtube.com/watch?v=qhuFviJn-es

mkdir abc
cd abc
code .

for node project, as an example

npm init {for node project only}
git init
