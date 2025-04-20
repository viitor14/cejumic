import { React, useState, useEffect } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import Select from 'react-select';

import axios from '../../services/axios';

import DialogBeneficiario from '../../components/boxViewBeneficiario';
import DataTable from '../../components/tableData';
import BoxIntroduction from '../../components/introduction';

// import FilterModal from '../../components/introduction/FilterModal';

import { PageBackground, DivMain, SectionMain } from '../../styles/GlobalStyles';

import iconRecipient from './assets/images/icon-beneficiario.png';
import './teste.css';
export default function Recipient() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');
  const [dados, setDados] = useState([]);

  const columns = [
    {
      label: 'Nome',
      field: 'nome',
      className: 'columnName',
      format: (value, item) => (
        <>
          <span>{item.nome}</span>
          <br />
          <span className="tel">{item.cpf}</span>
        </>
      )
    },
    {
      label: 'Status',
      field: 'status',
      className: 'dataColumn2',
      format: (value) => <span className={value === 'Ativo' ? 'Ativo' : 'Inativo'}>{value}</span>
    },
    {
      label: 'Ações',
      field: 'acoes',
      format: (value, item) => (
        <button onClick={() => handleClickAcoes(item)}>
          <FaEllipsisH />
        </button>
      ),
      className: 'dataColumn3'
    }
  ];

  const handleClickAcoes = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const getData = async () => {
    try {
      const response = await axios.get('/beneficiario');
      setDados(response.data);
    } catch (error) {
      console.error('Erro ao buscar beneficiários:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredData = [...dados]
    .filter((item) => item.nome.toLowerCase().startsWith(searchTerm.toLowerCase()))
    .filter((item) => (filterStatus ? item.status === filterStatus : true));

  const typeDonate = [
    { value: 'Financeiro', label: 'Financeiro' },
    { value: 'Material', label: 'Material' }
  ];
  const [tipo_doacao, setTipoDoacao] = useState('');

  return (
    <PageBackground>
      <DivMain>
        <SectionMain>
          <div>
            <BoxIntroduction
              icon={iconRecipient}
              alt="Icone Beneficiario"
              title="Beneficiario"
              text="Gerenciamento de beneficiários do CEJUMIC"
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              linkButtonAdd="/NovoBeneficiário"
              setFilterStatus={setFilterStatus}
            />
          </div>
          <DataTable columns={columns} data={filteredData} />
          <DialogBeneficiario
            open={open}
            setOpen={setOpen}
            selectedItem={selectedItem}
            atualizarDados={getData}
          />
        </SectionMain>
      </DivMain>
    </PageBackground>
  );
}
