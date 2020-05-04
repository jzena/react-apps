import React from 'react';
import { Route } from 'react-router-dom';

// import Navigation from './components/Nav/Navigation';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';
import Counter from './containers/Counter';
import Layout from './hoc/Layout/Layout';

const App = props => {
  return (
    <React.Fragment>
      {/* <Navigation /> */ }
      <Layout>

        <main>
          <Route path="/" component={ ProductsPage } exact />
          <Route path="/favorites" component={ FavoritesPage } />
          <Counter />
        </main>
      </Layout>
    </React.Fragment>
  );
};

export default App;
