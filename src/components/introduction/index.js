import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import history from '../../services/history';
import { BsArrowLeft } from 'react-icons/bs';
import { HiOutlinePlus } from 'react-icons/hi';

// import FilterModal from './FilterModal';  ( MODAL PARA FILTRAR AS PESQUISAR )

import { SectionTop, SearchBar, Filter, Introduction, DashboardContainer } from './styled';

import iconPlus from './assets/images/iconPlus.png';
import iconSearch from './assets/images/search.png';
import iconFilter from './assets/images/filter 1.png';
import iconDownArrow from './assets/images/down-arrow 1.png';
import iconUpDown from './assets/images/up-down 1.png';

export default function BoxIntroduction({
  icon,
  alt,
  title,
  text,
  textButtonTop,
  searchTerm,
  setSearchTerm,
  linkButtonAdd,
  hideSearchBarAndFilter,
  hideButtonAdd,
  iconBackPage,
  styleButton,
  onFilterClick
}) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('');

  const handleFilterClick = () => {
    setIsFilterModalOpen((prev) => !prev);
  };

  // Aplica o filtro ao fechar o modal
  const applyFilters = (status) => {
    setFilterStatus(status);
  };

  return (
    <SectionTop>
      <Introduction>
        <img src={icon} alt="icon-dashboard" />

        <DashboardContainer>
          <h2>{title}</h2>
          <p>{text}</p>
        </DashboardContainer>
      </Introduction>

      {!hideButtonAdd && (
        <button
          style={styleButton}
          onClick={() => {
            if (iconBackPage) {
              history.goBack(); // Volta para a rota anterior
            } else {
              history.push(linkButtonAdd); // Vai para a rota do botão
            }
          }}>
          {iconBackPage ? (
            <BsArrowLeft style={{ color: '#000', fontSize: '20px' }} />
          ) : (
            <HiOutlinePlus style={{ fontSize: '20px' }} />
          )}
          {textButtonTop && <span>{textButtonTop}</span>}
        </button>
      )}

      {/* Barra de busca */}
      {!hideSearchBarAndFilter && (
        <SearchBar className="test">
          <div className="lupa">
            <img src={iconSearch} alt="lupa" className="searchIcon" />

            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="barraPesquisa"
            />
          </div>
        </SearchBar>
      )}

      {/*

        BOTÃO DE FILTRAR - DPS DA IMPLEMENTAÇÃO FAZER FUNCIONAR

      {!hideSearchBarAndFilter && (
        <Filter>
          <div className="teste">
            <button onClick={handleFilterClick}>
              <img src={iconFilter} alt="" />
              <img src={iconDownArrow} alt="" />
            </button>
            <div>
              <FilterModal
                isOpen={isFilterModalOpen}
                onClose={() => setIsFilterModalOpen(false)}
                onApply={applyFilters}
              />
            </div>
          </div>
          <button>
            <img src={iconUpDown} alt="" />
            <img src={iconDownArrow} alt="" />
          </button>
        </Filter>
      )}
            */}
    </SectionTop>
  );
}
BoxIntroduction.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkButtonAdd: PropTypes.string,
  textButtonTop: PropTypes.string,
  iconBackPage: PropTypes.bool,
  styleButton: PropTypes.oneOfType([
    PropTypes.string, // Aceita uma string (classe CSS)
    PropTypes.object // Aceita um objeto (estilos inline)
  ]),
  hideSearchBarAndFilter: PropTypes.bool,
  hideButtonAdd: PropTypes.bool,
  onFilterClick: PropTypes.func
};
