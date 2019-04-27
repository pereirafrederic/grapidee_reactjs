//react
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'


// component
import NavBar from './component/NavBar'
import Menu from './component/Menu'
import Footer from './component/Footer'

import ViewProjetPrincipale from './component/projet/ViewProjetPrincipale';
import ViewCreateProjet from './component/projet/ViewCreateProjet';
import ViewIdeePrincipale from './component/idee/ViewIdeePrincipale';
import ViewDomainePrincipale from './component/domaine/ViewDomainePrincipale';
import ViewGrappePrincipale from './component/grappe/ViewGrappePrincipale';
import NotFound from './component/NotFound'

import './style/home.css'

//redux

const Root = () => {
    return (
        <BrowserRouter>
            <Switch>
              <Route path='/home' component={ViewProjetPrincipale}/>
                <Route path='/idee' component={ViewIdeePrincipale}/>
                <Route path='/domaine' component={ViewDomainePrincipale}/>
                <Route path='/create' component={ViewCreateProjet}/>
                <Route path='/grappe' component={ViewGrappePrincipale}/>
                <Route path='/404' component={NotFound}/>
                <Redirect to='/404'/>
            </Switch>
        </BrowserRouter>
    )
};





render(

    <div className="home_horizontale">
    <div className="home_verticale">
      <div className="navbar">
        <div className="navbar_logo">
          logo
        </div>
        <div className="navbar_navbar">
          <NavBar />
        </div>
        <div className="navbar_compte">
          compte
        </div>

      </div>
      <div className="site">
        <div className="site_menu">
          <Menu />
        </div>
        <div className="site_blank">

        </div>
        <div className="site_root">
        <Root />
                </div>
        <div className="site_blank">

        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
          </div>
    </div>
  , document.getElementById('root') );
