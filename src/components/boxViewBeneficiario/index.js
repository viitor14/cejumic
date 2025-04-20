import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';

import { DivStatus } from './styled';

import axios from '../../services/axios';

export default function DialogBeneficiario({ open, setOpen, selectedItem, atualizarDados }) {
  const [status, setNovoStatus] = useState(selectedItem?.status || '');

  const atualizarStatus = async () => {
    try {
      await axios.put(`/beneficiario/${selectedItem?.id}`, {
        status
      });
      toast.success('Status atualizado com sucesso');
      atualizarDados();
      setOpen(false);
    } catch (e) {
      const errors = get(e, 'response.data.errors', []);
      const status = get(e, 'response.status', 0);
      toast.error(errors[0]);
    }
  };

  useEffect(() => {
    setNovoStatus(selectedItem?.status || '');
  }, [selectedItem]);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      sx={{
        '& .MuiPaper-root': {
          borderRadius: '16px',
          padding: '20px',
          minHeight: '450px',
          height: 'auto',
          maxHeight: '80vh', // altura máxima
          transition: 'min-height 0.3s ease' // animação para a mudança de altura
        }
      }}>
      <DialogTitle>Dados do Beneficiário</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <strong>Nome:</strong> {selectedItem?.nome}
          <br />
          <strong>CPF:</strong> {selectedItem?.cpf}
          <br />
          <strong>Data de nascimento:</strong>{' '}
          {new Date(selectedItem?.dataNascimento).toLocaleDateString('pt-BR')}
          <br />
          <strong>Endereço:</strong> {selectedItem?.endereco}
          <br />
          <strong>Cidade:</strong> {selectedItem?.cidade}
          <br />
          <strong>Status atual:</strong> {selectedItem?.status}
        </DialogContentText>

        <DivStatus selected={status} style={{ marginTop: '1rem' }}>
          <Button
            variant={status === 'Ativo' ? 'contained' : 'outlined'}
            onClick={() => setNovoStatus('Ativo')}
            className="Ativo">
            Ativo
          </Button>
          <Button
            variant={status === 'Inativo' ? 'contained' : 'outlined'}
            onClick={() => setNovoStatus('Inativo')}
            className="Inativo">
            Inativo
          </Button>
        </DivStatus>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => {
            setOpen(false);
            setNovoStatus(status);
          }}>
          Fechar
        </Button>
        <Button variant="contained" color="primary" onClick={atualizarStatus} disabled={!status}>
          Atualizar Status
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DialogBeneficiario.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  selectedItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string,
    cpf: PropTypes.string,
    dataNascimento: PropTypes.string,
    endereco: PropTypes.string,
    cidade: PropTypes.string,
    status: PropTypes.string
  }),
  atualizarDados: PropTypes.func.isRequired
};
