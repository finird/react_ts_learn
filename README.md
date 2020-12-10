# Basics

## Create React App

1. Create a new ReactApp

```bash
  npx create-react-app my_app --template typescript
```

2. Create first React component

- ReactDOM.render()
- React.createElement()
- React.Component()
- 🧨 React.createClass no longer supported

  - 👉 extends React.Component class

- `JSX`

3. Displaying static data

- React.Component<P, S>
- 😯 this.state must be initialized

## JSX in Depth

- 🚫 Not using JSX as runtime compiles, it's slow down your website
  - 👉 `Babel`
- **`<Img />`** is React component and **`<img />`** is _HTML tag_
- Self closing tag: `<... />`
- Multiple Components
  - It makes Components clearly and reusable
- Namespaced components
