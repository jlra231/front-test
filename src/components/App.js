import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ProductsList from './products-list/ProductsList';

const App = () => {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/products">
          <ProductsList />
        </Route>

        <Redirect exact from="/" to="/products"/>

      </Switch>
    </Router>
  );
}

export default App;
