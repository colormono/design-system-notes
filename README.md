# Design System

## Tools

- [Figma](https://www.figma.com/community/file/768809027799962739) - UI/UX Design
- [Tailwind](https://tailwindcss.com/) - CSS Low-level framework
- [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript
- [Webpack](https://webpack.js.org/) - Bundle your assets
- [AlpineJS](https://github.com/alpinejs/alpine) - Composing JavaScript behavior in your markup
- [Storybook](https://storybook.js.org/) - Build bulletproof UI components faster

---

## /DesignSystem Bolierplate

In the `/DesignSystem` directory, run:

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

## /ReactExampleApp Boilerplate

Here we must write the project onboarding

### Code Structure

What should my file structure look like? How should I group my action creators and reducers in my project? Where should my selectors go?
[Read this](https://redux.js.org/faq/code-structure#what-should-my-file-structure-look-like-how-should-i-group-my-action-creators-and-reducers-in-my-project-where-should-my-selectors-go)

- `/src/api`: fetching functions
- `/src/assets`: images that are packaged within the bundle
- `/src/components`: components that are reused in multiple places
- `/src/config`: app global configuration, for example env variables
- `/src/constants`: app constants, for example: a key value listo for handling errors
- `/src/features`: app features, like holdings
- `/src/hooks`: custom hooks
- `/src/locales`: translations
- `/src/pages`: page layouts, where each path on the router lands
- `/src/redux`: store
- `/src/utils`: various string utility functions

### Recommend packages

- [React Redux](https://react-redux.js.org/api/hooks) and [Redux Toolkit](https://redux-toolkit.js.org/api/createSlice) to handle data state
- [React Hook Form](https://react-hook-form.com/) to handle forms submission and [YUP](https://github.com/jquense/yup) for validation
- [React Toastify](https://github.com/fkhadra/react-toastify) to show notifications for users
- [Typescript](https://www.typescriptlang.org/) or [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for typechecking

---

## /ReactLibrary Boilerplate

Soon

---

## Good Reads

- [How to use and maintain the store](https://redux-toolkit.js.org/tutorials/basic-tutorial)
- [Building A Static Site With Components Using Nunjucks](https://www.smashingmagazine.com/2018/03/static-site-with-nunjucks/)
- [Generate static sites using Webpack](https://medium.com/@ivarprudnikov/static-website-multiple-html-pages-using-webpack-3bdb7accffad)
- [Webpack Nunjucks Boilerplate](https://github.com/kbytesys/webpack-nunjucks-boilerplate)
- _this list is incomplete_

---

Happy Coding.
Mariano
