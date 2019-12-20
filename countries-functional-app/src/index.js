import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from "react-apollo";

import { Countries } from './components/countries';
import { client } from './config.js';


const AppLayout = () => {
    return(
      <ApolloProvider client={client}>
        <div className="countriesList">
          <Countries />
        </div>
      </ApolloProvider>
    )
}

ReactDOM.render(<AppLayout />, document.getElementById('root'));
