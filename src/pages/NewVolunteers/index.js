import { React, useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import axios from '../../services/axios';
import history from '../../services/history';

import InputGetData from '../../components/boxInputData';
import BoxIntroduction from '../../components/introduction';

import {
  PageBackground,
  SectionMain,
  DivMain,
  FormAddBeneficiario,
  BoxInputGetData
} from '../../styles/GlobalStyles';

import { DivInputRadio } from './styled';

import IconVolunteer from '../Volunteers/assets/images/icon-beneficiario.png';
import IconUser from '../NewDonations/assets/images/people.png';
import IconLocation from './assets/images/location (1) 1.png';
import IconSkills from './assets/images/user-outline (1) 1 (1).png';

export default function PageNewVolunteers() {
  const [selectedOption, setSelectedOption] = useState('');

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [habilidades, setSkills] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');

  const options = [
    { label: 'Dias úteis', value: 'Dias úteis' },
    { label: 'Manhãs', value: 'Manhãs' },
    { label: 'Noites', value: 'Noites' },
    { label: 'Tardes', value: 'Tardes' },
    { label: 'Finais de Semana', value: 'Finais de Semana' }
  ];

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let formErrors = false;

    const dados = {
      nome,
      email,
      telefone,
      endereco,
      bairro,
      cep,
      cidade,
      habilidades,
      disponibilidade
    };

    const campos = [
      { nome: 'nome', mensagem: 'Nome precisa ser preenchido' },
      { nome: 'email', mensagem: 'Email precisa ser preenchido' },
      { nome: 'telefone', mensagem: 'Telefone precisa ser preenchido' },
      { nome: 'endereco', mensagem: 'Endereço precisa ser preenchido' },
      { nome: 'bairro', mensagem: 'Bairro precisa ser preenchido' },
      { nome: 'cep', mensagem: 'CEP precisa ser preenchido' },
      { nome: 'cidade', mensagem: 'Cidade precisa ser preenchido' },
      { nome: 'habilidades', mensagem: 'Habilidades precisa ser preenchido' },
      { nome: 'disponibilidade', mensagem: 'Disponibilidade precisa ser preenchido' }
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
        await axios.post('/voluntario', dados);
        toast.success('Formulario enviado');
        history.goBack();
      } catch (e) {
        const errors = get(e, 'response.data.errors', []);
        const status = get(e, 'response.status', 0);
        toast.error(errors[0]);
      }
    }
  };

  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <BoxIntroduction
            icon={IconVolunteer}
            text="Registre um novo voluntário"
            title="Novo Voluntário"
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
                textPlaceholder="Nome completo do voluntário"
                onChange={(e) => setNome(e.target.value)}
              />
              <InputGetData
                text="E-mail"
                textPlaceholder="exemplo@gmail.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGetData
                text="Telefone"
                textPlaceholder="(99)99999-9999"
                onChange={(e) => setTelefone(e.target.value)}
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
                min="0"
                max="8"
              />
              <InputGetData
                text="Cidade"
                textPlaceholder="Cidade"
                onChange={(e) => setCidade(e.target.value)}
              />

              <div className="titleBox">
                <img src={IconSkills} alt="" />
                <p>Habilidades e Disponibilidade</p>
              </div>

              <div className="boxTextArea">
                <p>Habilidades e Competências</p>
                <textarea
                  placeholder="Descreva as habilidades e competências do voluntário"
                  onChange={(e) => setSkills(e.target.value)}></textarea>
              </div>

              <DivInputRadio>
                <p>Disponibilidade</p>
                <div>
                  {options.map((opt, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name="pagamento"
                        value={opt.value}
                        checked={disponibilidade === opt.value}
                        onChange={() => setDisponibilidade(opt.value)}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </DivInputRadio>
            </BoxInputGetData>
            <div className="actionsForm">
              <button type="submit">Cadastrar Voluntário</button>
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
