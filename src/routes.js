import React from 'react';
import AllCategories from './AllCategories';
import Category from './Category'
import Header from './Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Feedback from './Feedback';
import './routes.css'
import Summary from './Summary';
import Cart from './Cart';
import Orders from './AllOrders';
import Order from './Order';

export const Routes = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/Categories" component={AllCategories} />
                <Route exact path="/Categories/:category" component={Category} />
                <Route exact path="/Order" component={Order} />
                <Route exact path="/Orders" component={Orders} />
                <Route exact path="/Feedback" component={Feedback} />
                <Route exact path="/Summary" component={Summary} />
                <Route exact path="/Cart" component={Cart} />
            </Switch>
            <Footer/>
        </div>
    );
};


{/* <Link to={ {pathname: '/order', state:{Name:card.strMeal, len:seafood.length, index:index}}}
From Abhay Pratap Singh to Everyone:  05:37 PM
mam, can u please share your mail id again ?
From Harshal Kulkarni to Everyone:  05:39 PM
in the receiving component
use useLocation() hook
const loc = useLocation()
loc.state.YOUR_DATA
will give you your data
try doing this */}
