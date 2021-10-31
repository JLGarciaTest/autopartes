import React from 'react'
import { PlaceholderButton } from 'react-bootstrap'
import{
    BrowserRoue as Router,
    Switch,
    Route

}from "react-router-dom"
import PrivateLayout from '../Layouts/PrivateLayout'
import PublicLayoout from '../Layouts/PublicLayout'
import Dashboard from '../pages/Admin/Dashboard'
import Roles from '../pages/Admin/Roles'
import Ventas from '../pages/Admin/Ventas'

 const Routes = () => {
    return (
        <Route>
            <Switch>
                <Route path={['/dash','/roles','/ventas']}>
                    <PrivateLayout>
                        <Switch>
                            <Route path='/dash'>
                                <Dashboard/>
                            </Route>
                            <Route path='/roles'>
                                <Roles/>
                            </Route>
                            <Route path='/ventas'>
                                <Ventas/>
                            </Route>
                            
                        </Switch>
                    </PrivateLayout>
                </Route>
                <Route path='/'>
                    <PublicLayoout>
                        
                    </PublicLayoout>


                </Route>
                
            </Switch>
        </Route>
    )
}
export default Routes
