# Design System

## Tools

- [Figma](https://www.figma.com/community/file/768809027799962739) - UI/UX Design
- [Tailwind](https://tailwindcss.com/) - CSS Low-level framework
- [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript
- [Webpack](https://webpack.js.org/) - Bundle your assets
- [AlpineJS](https://github.com/alpinejs/alpine) - Composing JavaScript behavior in your markup
- [Storybook](https://storybook.js.org/) - Build bulletproof UI components faster

---

## Design System Bolierplate

In the `/design-system` directory, run:

- `npm i` to install dependencies
- `npm start` to listen chages while coding
- `npm run build` to build production styles

Play with the `index.html` file in the `/public/` directory.

You can scale this solution using with Webpack, Gulp, Rollup among others.

### Some posible features:

- `nunjucks` support to handle HTML partials and templates
- `SASS` support to build a minimized external vendors file **(like Spinners or Toastify)**
- _this list is incomplete_

**Bonus: [Inspect components built with Tailwind](https://tailwindcomponents.com/)**

---

## NextJs Boilerplate

Details on `/nextjs-boilerplate` folder.

---

## React Apps

Here we must write the project onboarding

### Code Structure

What should my file structure look like? How should I group my action creators and reducers in my project? Where should my selectors go?
[Read this](https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)

- `/src/api`: fetching functions
- `/src/assets`: images that are packaged within the bundle
- `/src/components`: hooks or presentational components that are used in multiple places
- `/src/config`: app global configuration, for example env variables and constants
- `/src/features`: app features, like holdings
- `/src/locales`: translations
- `/src/pages`: page layouts, where each path on the router lands
- `/src/store`: redux store, reducers
- `/src/utils`: utility functions

### Recommend packages

- [Typescript](https://www.typescriptlang.org/) or [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for typechecking
- [React Redux](https://react-redux.js.org/api/hooks) and [Redux Toolkit](https://redux-toolkit.js.org/api/createSlice) for state management
- [React Hook Form](https://react-hook-form.com/) to handle forms submission and [YUP](https://github.com/jquense/yup) to validate user input
- [Axios](https://github.com/axios/axios) to communicate with data services

#### Sometimes, we also use...

- [React Toastify](https://github.com/fkhadra/react-toastify) to show notifications for users
- [React Table](https://github.com/tannerlinsley/react-table) for building fast and extendable tables and datagrids
- **Just playing?** Try [Awesome React Components](https://github.com/brillout/awesome-react-components)

---

## React Library Boilerplate

**Soon:**

- create-react-library
- document with storybook
- add tests with jest
- distribute with npm or github packages

---

## Good Reads

- [How to use and maintain the store](https://redux-toolkit.js.org/tutorials/basic-tutorial)
- [Building A Static Site With Components Using Nunjucks](https://www.smashingmagazine.com/2018/03/static-site-with-nunjucks/)
- [Generate static sites using Webpack](https://medium.com/@ivarprudnikov/static-website-multiple-html-pages-using-webpack-3bdb7accffad)
- [Webpack Nunjucks Boilerplate](https://github.com/kbytesys/webpack-nunjucks-boilerplate)
- [Create Your Own React Library in 2020: Step by Step](https://levelup.gitconnected.com/create-your-own-react-library-in-2020-step-by-step-7c39eb1b2d7b)
- [Learn NextJs](https://nextjs.org/learn/basics/create-nextjs-app)
- _this list is incomplete_

---

Happy Coding.
Mariano
