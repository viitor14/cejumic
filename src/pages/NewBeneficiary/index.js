import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import get from 'lodash/get';

import axios from '../../services/axios';
import history from '../../services/history';

import InputGetData from '../../components/boxInputData';
import BoxIntroduction from '../../components/introduction';

import { BoxInputGetData, FormAddBeneficiario } from './styled';

import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import IconNewBeneficiary from './assets/images/icon-beneficiario.png';
import IconUser from './assets/images/people 1.png';
import IconLocation from './assets/images/location 1.png';

export default function PageNewBeneficiary() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let formErrors = false;

    const campos = [
      { nome: 'nome', mensagem: 'Nome precisa ser preenchido' },
      { nome: 'cpf', mensagem: 'CPF precisa ser preenchido' },
      { nome: 'dataNascimento', mensagem: 'Data Nascimento precisa ser preenchido' },
      { nome: 'endereco', mensagem: 'Endereço precisa ser preenchido' },
      { nome: 'bairro', mensagem: 'Bairro precisa ser preenchido' },
      { nome: 'cep', mensagem: 'CEP precisa ser preenchido' },
      { nome: 'cidade', mensagem: 'Cidade precisa ser preenchido' },
      { nome: 'estado', mensagem: 'Estado precisa ser preenchido' }
    ];

    for (const campo of campos) {
      if (!eval(campo.nome).trim()) {
        toast.error(campo.mensagem);
        formErrors = true;
        return;
      }
    }

    //Se não tiver error ele faz envio do form
    if (!formErrors) {
      try {
        await axios.post('/beneficiario', {
          nome,
          cpf,
          dataNascimento,
          endereco,
          bairro,
          cep,
          cidade,
          estado,
          observacoes
        });
        toast.success('Formulario enviado');
      } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);
        toast.error(errors[0]);
      }

      history.goBack();
    }
  };
  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <BoxIntroduction
            icon={IconNewBeneficiary}
            text="Adicionar um novo beneficiário ao sistema"
            title="Novo Beneficiário"
            hideSearchBarAndFilter={true}
            iconBackPage={true}
            styleButton={{ backgroundColor: 'transparent', border: '1px solid #D1D1D1' }}
          />
          {/** ABAIXO É UM FORM NORMAL, SÓ QUE ESTA COM A TAG DIFERENTE MAS RECEBE AS MESMA PROPRIEDADES */}
          <FormAddBeneficiario onSubmit={handleSubmitForm}>
            <BoxInputGetData>
              <div className="titleBox">
                <img src={IconUser} alt="" />
                <p>Informações Pessoais</p>
              </div>

              <InputGetData
                text="Nome Completo"
                textPlaceholder="Nome completo do beneficiário"
                onChange={(e) => setNome(e.target.value)}
              />
              <InputGetData
                text="CPF"
                type="number"
                textPlaceholder="000.000.000-00"
                onChange={(e) => setCpf(e.target.value)}
              />
              <InputGetData
                text="Data de Nascimento"
                textPlaceholder="Selecione uma data"
                type="date"
                onChange={(e) => setDataNascimento(e.target.value)}
              />

              <div className="titleBox">
                <img src={IconLocation} alt="" />
                <p>Endereço</p>
              </div>

              <InputGetData
                text="Endereço"
                textPlaceholder="Rua, numero, complemento"
                onChange={(e) => setEndereco(e.target.value)}
              />
              <InputGetData
                text="Bairro"
                textPlaceholder="Bairro"
                onChange={(e) => setBairro(e.target.value)}
              />
              <InputGetData
                text="CEP"
                textPlaceholder="CEP"
                onChange={(e) => setCep(e.target.value)}
              />
              <InputGetData
                text="Cidade"
                textPlaceholder="Cidade"
                onChange={(e) => setCidade(e.target.value)}
              />

              <InputGetData
                text="Estado"
                textPlaceholder="Estado"
                onChange={(e) => setEstado(e.target.value)}
              />
              <div className="boxTextArea">
                <p>Observações</p>
                <textarea
                  placeholder="Informações adicionais sobre o beneficiário"
                  onChange={(e) => setObservacoes(e.target.value)}></textarea>
              </div>
            </BoxInputGetData>
            <div className="actionsForm">
              <button type="submit">Salvar beneficiário</button>
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
