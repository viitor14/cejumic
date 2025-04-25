import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Loading from '../../components/loading';

import { Box, DivLogin } from './styled';
import { PageBackground, SectionMain, DivMain, Container } from '../../styles/GlobalStyles';

import Logo from './assets/images/filter (1).png';

import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  //dispatch - usadora para disparar ações
  //ação - descrever para redux o que deve fazer

  const isLoading = useSelector((state) => state.auth.isLoading);
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');

  function handleSubmitForm(e) {
    e.preventDefault();
    let formErrors = false;

    if (!email.trim() || !password.trim()) {
      toast.error('Digite email e senha');
      formErrors = true;
      return;
    }

    if (!formErrors) {
      dispatch(actions.loginRequest({ email, password }));
    }
  }
  return (
    <>
      <Loading isLoading={isLoading} />
      <Box>
        <DivLogin>
          <div className="divLogo">
            <img src={Logo} alt="" />
            <h1>CEJUMIC</h1>
            <p>Entre com suas credenciais para acessar o sistema</p>
          </div>

          <form onSubmit={handleSubmitForm}>
            <label htmlFor="nome">
              Email
              <input
                type="text"
                placeholder="seu.email@exemplo.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label htmlFor="senha">
              Senha
              <input
                type="password"
                placeholder="******"
                onChange={(e) => setSenha(e.target.value)}
              />
            </label>
            <button type="submit">Entrar</button>
          </form>
        </DivLogin>
      </Box>
    </>
  );
}
