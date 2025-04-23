import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Dashboard from '../pages/Dashboard';
import Recipient from '../pages/Recipient';
import Donations from '../pages/Donations';
import Volunteers from '../pages/Volunteers';
import NewBenefiaciary from '../pages/NewBeneficiary';
import NewDonations from '../pages/NewDonations';
import NewVolunteers from '../pages/NewVolunteers';
import Report from '../pages/Report';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute exact path="/Dashboard" component={Dashboard} isClosed={true} />
      <MyRoute exact path="/Beneficiario" component={Recipient} isClosed={true} />
      <MyRoute exact path="/Doações" component={Donations} isClosed={true} />
      <MyRoute exact path="/Voluntários" component={Volunteers} isClosed={true} />
      <MyRoute exact path="/NovoBeneficiário" component={NewBenefiaciary} isClosed={true} />
      <MyRoute exact path="/NovaDoação" component={NewDonations} isClosed={true} />
      <MyRoute exact path="/NovoVoluntário" component={NewVolunteers} isClosed={true} />
      <MyRoute exact path="/Relatório" component={Report} isClosed={true} />
      \\Para rendizarar uma rota. EXACT para rendizarar a rota com caminho especifico
      <MyRoute path="*" component={() => <Redirect to="/Dashboard" />} />
      \\Qualquer rota que não existir/configurada vai cair numa pagina de erro
    </Switch>
  );
}
