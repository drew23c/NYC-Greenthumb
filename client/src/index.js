import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const client = new ApolloClient({
    uri: 'http://localhost:3100/graphql'
})

const store = configureStore();

ReactDOM.render(
<ApolloProvider client={client}>
<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>
</ApolloProvider>, 
document.getElementById('root'));
registerServiceWorker();
