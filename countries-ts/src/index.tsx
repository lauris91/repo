import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Countries from './content/Countries';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "react-apollo";
import { client } from './config'

ReactDOM.render(
  // <React.StrictMode>
    <ApolloProvider client={client}>
      <Countries />
    </ApolloProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
