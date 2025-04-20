import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';

import { TableData, DivData, ButtonNavPagination, ButtonNextPage } from './styled';

// ESSE COMPONENTE SÓ PRECISA RECEBE OS DADOS PASSADO ATRAVÉS DA PROPS ABAIXO, COLUMNS E DATA. QUE ESTÁ VINDO DA PAGINA DO RECIPIENT POR UM ARQUIVO CHAMADO DATA.JS
export default function DataTable({ columns, data }) {
  // CODIGO GERADO PARA FAZER A NAVEGAÇÃO ENTRE OS ITEMS, PARA QUE NA TELA DO CELULAR APAREÇA 5 POR PAGINA
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calcular os índices dos itens a serem exibidos
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Função para mudar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calcular o número total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calcular o número total de itens
  const totalItems = data.length;

  // Função para gerar os números das páginas
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calcular o intervalo de exibição atual
  const startItem = indexOfFirstItem + 1;
  const endItem = Math.min(indexOfLastItem, totalItems);
  return (
    <DivData>
      <TableData>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => {
                const value = item[col.field];

                return (
                  <td key={colIndex} className={col.className || ''}>
                    {col.format ? col.format(value, item) : value || '-'}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </TableData>

      {/* Botões de navegação */}
      <p>
        Exibindo <span>{endItem}</span> de <span>{totalItems}</span> beneficiários
      </p>
      <ButtonNavPagination className="pagination">
        <ButtonNextPage onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Anterior
        </ButtonNextPage>

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? 'active' : 'buttonNumberPage'}>
            {number}
          </button>
        ))}

        <ButtonNextPage
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}>
          Próxima
        </ButtonNextPage>
      </ButtonNavPagination>
    </DivData>
  );
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
      className: PropTypes.string,
      format: PropTypes.func
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string,
      tel: PropTypes.string,
      infoColumn2: PropTypes.string,
      infoColumn3: PropTypes.string,
      iconActions: PropTypes.string
    })
  ).isRequired
};
