import React from 'react';
import PropTypes from 'prop-types';

import { Box, BoxContainer, BoxContainerDados } from './styled';
export default function BoxContent({ title, value, percentage, icon, textColor }) {
  return (
    <Box>
      <BoxContainer>
        <h3>{title}</h3>
        <img src={icon} alt="icon-beneficiario" />
      </BoxContainer>

      <BoxContainerDados>
        <p>{value}</p>
        <p style={{ color: textColor }}>{percentage}</p>
      </BoxContainerDados>
    </Box>
  );
}
BoxContent.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  textColor: PropTypes.string
};
