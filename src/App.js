import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateContact from './component/CreateContact';
import Footer from './component/Footer'
import Header from './component/Header'
import Main from './component/Main'
import EditContact from './component/EditContact'

export default function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/CreateContact" component={CreateContact}></Route>
                    <Route path="/editcontact/:id" component={EditContact}></Route>
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>

    )
}
