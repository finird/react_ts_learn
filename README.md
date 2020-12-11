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
- 👏 Namespaced components
  - With JS:
    - `Parent.Child1`
    - `Parent.Child2`
  - With TS:
    - ```javascript
      export default Object.assign(Parent, { Child1, Child2 });
      ```
- Spread attributes
- Styling for component
- Conditional not available in JSX
- Non-DOM attributes

## Dataflow and life cycle

### Dataflow

- By default, there is only one direction: from parent to child
  - 👍 **_In React, an owner component set props to another components._**
  - 👉 A component shouldn't mutable its props.
    - 👏 If parent's props changes, React will make sure the changes are flown downstream and will re-render the component tree.

### Props Validation

- **PropTypes** or **ReactPropTypes** by Typescript

  - 👉 Typescript is strong typed itself, but we can also specific prop's types to make JS has fully type annotation supported.

- Specific default props

  - By JS, you can specific default props via `getDefaultProps()` method

  - By TS, you needn't it, TS has object default value as:

    ```typescript
    { title = "Title"}: {title: string}
    ```

### Modifying `this.props.children`

- You can use `this.props.children` as any props, injectable, reusable, etc...
