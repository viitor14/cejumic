import { React, useState, useEffect } from 'react';

import axios from '../../services/axios';

import Loading from '../../components/loading';
import DataTable from '../../components/tableData';
import BoxIntroduction from '../../components/introduction';

import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import iconVolunteers from './assets/images/icon-beneficiario.png';
import { format } from 'prettier';

//import { data, columns } from './data';

export default function PageVolunteers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      label: 'Nome',
      field: 'nome',
      className: 'columnName',
      format: (value) => <span>{value}</span>
    },
    {
      label: 'Habilidades',
      field: 'habilidades',
      className: 'dataColumn2',
      format: (value) => <span>{value}</span>
    },
    {
      label: 'Disponibilidade',
      field: 'disponibilidade',
      className: 'dataColumn3',
      format: (value) => <span>{value}</span>
    }
  ];

  const filteredData = dados.filter((item) =>
    item.nome.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/voluntario');
      setDados(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <PageBackground>
        <DivMain>
          <SectionMain>
            <BoxIntroduction
              icon={iconVolunteers}
              alt="Icone de voluntário"
              title="Voluntários"
              text="Gerenciamento de voluntários"
              textButtonTop="Novo Voluntário"
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              linkButtonAdd="/NovoVoluntário"
            />
            <DataTable columns={columns} data={filteredData} />
          </SectionMain>
        </DivMain>
      </PageBackground>
    </>
  );
}
