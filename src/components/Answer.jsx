import { Box } from '@mui/system';
import React from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Typography } from '@mui/material';

function Answer({ answer, question }) {
  return (
    <Box display="flex">
      {answer ? <AddIcon /> : <RemoveIcon />}
      <Typography variant="subtitle2">{question}</Typography>
    </Box>
  );
}

Answer.propTypes = {
  answer: PropTypes.bool,
  question: PropTypes.string,
};

Answer.defaultProps = {
  answer: false,
  question: 'No Question',
};

export default Answer;
