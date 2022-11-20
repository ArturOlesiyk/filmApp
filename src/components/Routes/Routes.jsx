import React from "react"
import Films from "../Films/Films";
import {Routes as Switch, Route} from 'react-router-dom'

const routes = [{
  path: '/',
  component: Films,
}, {
  path: '/popular',
  component: Films,
}, {
  path: '/top_rated',
  component: Films,
}, {
  path: '/upcoming',
  component: Films,
}, {
  path: '/genre/:genreId',
  component: Films,
}]

const Routes = (props) => {
  return (
    <Switch>
      {routes.map(({component: Component, ...route}, index) => (
        <Route
          key={index}
          {...route}
          element={<Component {...props}/>}
        />
      ))}
    </Switch>
  )


}

export default Routes