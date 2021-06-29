import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { selectLoadingValue } from '../selectors/loading';
import AppLoading from './app-loading/AppLoading';
import ProductDetail from './product-detail/ProductDetail';
import ProductsList from './products-list/ProductsList';
import { connect } from 'react-redux';

const App = ({ showLoading}) => {
  return (
    <>
      { 
        showLoading && <AppLoading />
      }
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
      
    </>
  );
}

const mapStateToProps = (state) => ({
  showLoading: selectLoadingValue(state),
})

export default connect(mapStateToProps)(App);
