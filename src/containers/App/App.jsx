import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NotFound from '@components/NotFound';
import Content from '@components/Content';
import Footer from '@components/Footer';
// import Dashboard from '@components/Dashboard';
import { LoadingIndicator } from '@components/Common';
import { asyncComponent } from '@utils';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import AuthContainer from '../Auth';
import PrivateRoute from './PrivateRoute';
import HeaderContainer from '../Header';
import { getUserData } from '../Auth/store/actions';
import { isLoaded, authentificated } from '../Auth/store/selectors';

const Dashboard = asyncComponent(() => import('@components/Dashboard'));

class App extends Component {
  componentDidMount() {
    const { getUserData } = this.props;
    getUserData();
  }
  render() {
    const { authentificated, isLoaded } = this.props;
    return (
      <div className="App">
        {authentificated && <HeaderContainer />}
        <Content>
          {isLoaded ? (
            <Switch>
              <Route path="/auth/" component={AuthContainer} />
              <PrivateRoute
                path="/"
                exact
                component={Dashboard}
                authentificated={authentificated}
              />
              <Route component={NotFound} />
            </Switch>
          ) : (
            <LoadingIndicator size={100} />
          )}
        </Content>

        {authentificated && <Footer />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUserData: () => dispatch(getUserData.request()),
});

const mapStateToProps = createStructuredSelector({
  isLoaded: isLoaded(),
  authentificated: authentificated(),
});

App.propTypes = {
  getUserData: PropTypes.func,
  isLoaded: PropTypes.bool,
  authentificated: PropTypes.bool,
};

App.defaultProps = {
  getUserData: () => {},
  isLoaded: false,
  authentificated: false,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
