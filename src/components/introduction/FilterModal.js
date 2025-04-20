import React from 'react';
import PropTypes from 'prop-types';

//import './estilo.css';

export default function FilterModal({ isOpen, onClose, onApply }) {
  const [selectedStatus, setSelectedStatus] = React.useState('');

  const handleApplyFilters = () => {
    onApply(selectedStatus); // Passa o status selecionado para o componente pai
    onClose(); // Fecha o modal
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <option onClick={handleApplyFilters} value="">
          Todos
        </option>
        <option onClick={handleApplyFilters} value="Ativo">
          Ativo
        </option>
        <option onClick={handleApplyFilters} value="Inativo">
          Inativo
        </option>
      </div>
    </div>
  );
}

FilterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApply: PropTypes.func.isRequired,
  setFilterStatus: PropTypes.func.isRequired
};
