import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CtrlPanel from '../Pages/CtrlPanel';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/">
            <Redirect to="/control-panel"></Redirect>
        </Route>
        <Route exact path="/control-panel" component={CtrlPanel}></Route>
    </Switch>
);

export default Routes;
