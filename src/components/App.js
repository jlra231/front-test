import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ProductDetail from './product-detail/ProductDetail';
import ProductsList from './products-list/ProductsList';

const App = () => {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/products">
          <ProductsList />
        </Route>

        <Route exact path="/products/:id?">
            <ProductDetail />
        </Route>

        <Redirect exact from="/" to="/products"/>

      </Switch>
    </Router>
  );
}

export default App;
