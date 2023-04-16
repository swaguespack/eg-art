import React from 'react';

// Core style
import './App.css';
import './index.css'
// Apollo-client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';


// Pages
import Home from './pages/Home/Home';
import About from "./pages/About/About"
import Gallery from "./pages/Gallery/Gallery"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"

// Create link to the graphql server using proxy in package.json
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Add authorization to header for context in resolvers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Establish a new connection to the apollo server and new memory cache for queries
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
    <BrowserRouter>

      <div>
        <header className="page-header">
          <h1 className='display-1'>artfolio</h1>
        </header>
        <Navigation />

          <div className='page-container container'>
            <Routes>
                <Route path='/' element={<Home />}>
                </Route>

                <Route path="/about" element={<About />}>
                </Route>

                <Route path="/gallery" element={ <Gallery />}>
                </Route>

                <Route path="/login" element={<Login />}>
                </Route>

                <Route path="/signup" element={<Signup />}>
                </Route>

            </Routes>
          </div>
          
        <Footer />
      </div>

    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
