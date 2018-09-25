import { NavLink, Route, Switch} from "react-router-dom";

import ItemsPage from "./ItemsPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import colors from "../styles/colors"
import "./ComponentStyles/app.scss";


class App extends React.Component {
    render() {
        const activeStyle = { 
            color: 'white',
            borderBottom: '4px solid ',
            borderBottomColor: colors.darkYellow,  
        };
        return (
            <div>
            <div className='navbar'>
              
              <span className="brand">Time Wizard</span>

              <NavLink  className='navLink' exact to="/items" activeStyle={activeStyle}>Items</NavLink>

            </div>
            <div className="switch">
            <Switch>
              <Route exact path="/items" component={ItemsPage} />
              <Route component={NotFoundPage} />
            </Switch>
            </div>
          </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default hot(module)(App);