# React-context-API

This repo contains a short story for learning purposes about the React Context API which provides a way to pass data through our different components
without having to pass down props manually at every level. 
In plain english, Context API allows you pass state across the app without having to use props

Note: its better to props if you have just a few levels of children to pass.

How does it really work? 

You create a context using `React.createContext()`, which returns a Context object
- `context.js`

Then you create a parent component that returns a Provider component
- index.js

Then add as children all the components from which you want to access the context, in this case
- `Form` is a `child` component that also has another component called `Error` which can also be referred to as the `GrandChild` of index which is the
`parent` component

This is just a very basic example, read more about Context API here `https://reactjs.org/docs/context.html`

How to install:

- Clone the repository and change directory into the folder
git clone  && cd react-context-api

- Install project dependencies
npm install

- Then start the server
npm run start

Navigate to your browser to view the app on http://localhost:3000
