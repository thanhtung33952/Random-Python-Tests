import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
// import { useCookies } from 'react-cookie';
// constant
// import { folderRoot } from 'constant';
// const folderRoot = '/';

function PrivateRoute(props) {
  return (
    <Suspense
      fallback={
        <div className="react-preloader-wrapper">
          <div className="react-preloader">
            <span></span>
            <span></span>
          </div>
        </div>
      }
    >
      <Switch>
        {props.routes.map((item, index) => {
          return (
            <Route
              exact
              path={item.path}
              component={item.component}
              name={item.name}
              key={index}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
}

export default PrivateRoute;
