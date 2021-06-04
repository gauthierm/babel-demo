import React from 'react';
import ReactDOMServer from 'react-dom/server';

function MyComponent(props) {
  return <div>{props.children}</div>;
}

console.log(
  ReactDOMServer.renderToString(<MyComponent>Hello, world</MyComponent>)
);
