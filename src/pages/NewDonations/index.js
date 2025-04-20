import { React, useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import axios from '../../services/axios';
import history from '../../services/history';

import {
  PageBackground,
  SectionMain,
  DivMain,
  FormAddBeneficiario,
  BoxInputGetData
} from '../../styles/GlobalStyles';

import { InputTypeDonate } from './styled';

import BoxIntroduction from '../../components/introduction';
import InputGetData from '../../components/boxInputData';

import IconNewDonations from '../NewDonations/assets/images/heart.png';
import IconUser from '../NewDonations/assets/images/people.png';

export default function PageNewDonations() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data_doacao, setDataDoacao] = useState('');
  const [tipo_doacao, setTipoDoacao] = useState('');
  const [quantidade, setQuantidadeDoacao] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescDoacao] = useState('');

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let formErrors = false;

    const dados = {
      nome,
      data_doacao,
      tipo_doacao
    };

    if (email.trim()) dados.email = email;
    if (telefone.trim()) dados.telefone = telefone;
    if (valor.trim()) dados.valor = valor;
    if (quantidade.trim()) dados.quantidade = quantidade;
    if (descricao.trim()) dados.descricao = descricao;

    const campos = [
      { nome: 'nome', mensagem: 'Nome precisa ser preenchido' },
      { nome: 'data_doacao', mensagem: 'Data doação precisa ser preenchido' },
      { nome: 'tipo_doacao', mensagem: 'Tipo de doação precisa ser preenchido' }
    ];

    for (const campo of campos) {
      if (!eval(campo.nome).trim()) {
        toast.error(campo.mensagem);
        formErrors = true;
        return;
      }
    }

    if (tipo_doacao === 'Material' && (!quantidade.trim() || !descricao.trim())) {
      toast.error('Na descrição escreva o nome do produto doado e informe uma quantidade');
      formErrors = true;
      return;
    }

    if (tipo_doacao === 'Financeiro' && !valor.trim()) {
      toast.error('Defina uma valor para a doação');
      formErrors = true;
      return;
    }

    //Se não tiver error ele faz envio do form
    if (!formErrors) {
      try {
        await axios.post('/doacao', dados);
        toast.success('Formulario enviado');
      } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);
        toast.error(errors[0]);
      }

      history.goBack();
    }
  };

  const typeDonate = [
    { value: 'Financeiro', label: 'Financeiro' },
    { value: 'Material', label: 'Material' }
  ];

  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <BoxIntroduction
            icon={IconNewDonations}
            text="Registre uma nova doação recebida"
            title="Nova Doação"
            hideSearchBarAndFilter={true}
            iconBackPage={true}
            styleButton={{ backgroundColor: 'transparent', border: '1px solid #D1D1D1' }}
          />
          {/** ABAIXO É UM FORM NORMAL, SÓ QUE ESTA COM A TAG DIFERENTE MAS RECEBE AS MESMA PROPRIEDADES */}
          <FormAddBeneficiario onSubmit={handleSubmitForm}>
            <BoxInputGetData>
              <div className="titleBox">
                <img src={IconUser} alt="" />
                <p>Dados do Doador</p>
              </div>

              <InputGetData
                text="Nome do Doador"
                textPlaceholder="Nome completo do doador"
                onChange={(e) => setNome(e.target.value)}
              />
              <InputGetData
                text="Email (opcional)"
                textPlaceholder="example@gmail.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGetData
                text="Telefone (opcional)"
                textPlaceholder="(99)99999 9999"
                onChange={(e) => setTelefone(e.target.value)}
              />
              <InputGetData
                text="Data da Doação"
                textPlaceholder="Selecione uma data"
                type="date"
                max={new Date().toISOString().split('T')[0]}
                onChange={(e) => {
                  const value = e.target.value;
                  const dataSelecionada = new Date(value);
                  const hoje = new Date();

                  if (
                    isNaN(dataSelecionada.getTime()) ||
                    dataSelecionada.getFullYear() < 1900 ||
                    dataSelecionada > hoje
                  ) {
                    toast.error('Insira uma data válida e não futura');
                    setDataDoacao('');
                    return;
                  }

                  setDataDoacao(value); // data ok
                }}
              />

              <div className="titleBox">
                <img src={IconNewDonations} alt="" />
                <p>Detalhes da Doação</p>
              </div>

              <InputTypeDonate>
                <p>Tipo de Doação</p>
                <Select
                  classNamePrefix="inputSelect"
                  options={typeDonate}
                  placeholder="Selecionar tipo de doação"
                  onChange={(option) => setTipoDoacao(option.value)}
                />
              </InputTypeDonate>

              {tipo_doacao === 'Material' && (
                <InputGetData
                  text="Quantidade"
                  textPlaceholder="0"
                  type="number"
                  min="0"
                  onChange={(e) => setQuantidadeDoacao(e.target.value)}
                />
              )}

              <InputGetData
                text="Valor (R$)"
                textPlaceholder="0.00"
                type="number"
                step="0.01"
                min="0"
                onChange={(e) => setValor(e.target.value)}
              />
              <div className="boxTextArea">
                <p>Descrição da Doação</p>
                <textarea
                  placeholder="Descreva os itens doados ou a finalidade da doação"
                  onChange={(e) => setDescDoacao(e.target.value)}></textarea>
              </div>
            </BoxInputGetData>
            <div className="actionsForm">
              <button type="submit">Registrar Doação</button>
              <button type="button" onClick={() => history.goBack()}>
                Cancelar
              </button>
            </div>
          </FormAddBeneficiario>
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
