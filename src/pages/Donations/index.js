import { React, useState, useEffect } from 'react';

import axios from '../../services/axios';

import DataTable from '../../components/tableData';
import BoxIntroduction from '../../components/introduction';

import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';
import './teste.css';

import IconDonations from './assets/images/icon-doacao.png';

export default function PageDonations() {
  const [dados, setDados] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const columns = [
    {
      label: 'Nome',
      field: 'nome',
      className: 'columnName',
      format: (value) => <span>{value}</span>
    },
    {
      label: 'Valor/Item',
      field: 'valor',
      className: 'dataColumn2',
      format: (value, item) => (
        <span>{item.valor ? `R$${item.valor}` : `${item.quantidade} ${item.descricao}`}</span>
      )
    },
    {
      label: 'Tipo',
      field: 'tipo_doacao',
      className: 'dataColumn3',
      format: (value) => (
        <span className={value === 'Financeiro' ? 'Financeiro' : 'Material'}>{value}</span>
      )
    }
  ];

  const filteredData = dados.filter((item) =>
    item.nome.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/doacao');
      setDados(response.data);
    }

    getData();
  }, []);

  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <div>
            <BoxIntroduction
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              icon={IconDonations}
              alt="Icone de doação"
              title="Doações"
              text="Gerenciamento de doações recebidas"
              textButtonTop="Nova Doação"
              linkButtonAdd="/NovaDoação"
            />
          </div>
          <DataTable columns={columns} data={filteredData} />
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
