import { call, put, all, takeLatest } from 'redux-saga/effects';
//call - chama função assicrona
//put - disparar uma action
//all - Permite colocar mais de uma action
//takeLatest - Caso o usúario clique varias vezes no botão, só vai pegar o ultimo click

import { get } from 'lodash';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import history from '../../../services/history';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Você fez login');
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push('/Dashboard');
  } catch (e) {
    const errors = get(e, 'response.data.errors', []);
    const status = get(e, 'response.status', 0);

    if (status === 0) {
      toast.error(
        'Estamos tendo dificuldades para conectar ao servidor. Tente novamente em alguns minutos.',
        {
          autoClose: 30000
        }
      );
    } else {
      toast.error('Usuário ou senha inválidos');
    }

    //toast.error('Usuário ou senha inválidos');
    yield put(actions.loginFailure());
  }
}
function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
]);
