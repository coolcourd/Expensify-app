import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
  isntAuthenticated,
  component: Component,
  ...rest
  }) => (
  <Route {...rest} component={(props) => (
    isntAuthenticated ? (
      <Component {...props} />
    ) : (
       <Redirect to="/dashboard" />
     )
  )}/>
);


const mapStateToProps = (state) => ({
  isntAuthenticated: !state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
