import { Grid, Typography } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addAnswer } from '../features/quiz/quizSlice';

function Question() {
  const navigate = useNavigate();
  const theme = createTheme();
  const { id } = useParams();
  const dispatch = useDispatch();

  const question = useSelector((state) => state.quiz.questions[parseInt(id, 10)]);
  const questionCount = useSelector((state) => state.quiz.questions.length);

  const onClick = (value) => {
    const answer = {
      question: question.question,
      isCorrect: question.correct_answer === value,
    };

    dispatch(addAnswer(answer));
    if (parseInt(id, 10) + 1 >= questionCount) navigate('/results');
    if (parseInt(id, 10) + 1 < questionCount) {
      navigate(`/question/${parseInt(id, 10) + 1}`);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: '100%', width: 230 }}
      mx="auto"
      py={2}
    >
      <Grid item>
        <Typography variant="h6" align="center">
          {question?.category || 'No Category'}
        </Typography>
      </Grid>
      <Grid item>
        <Box>
          <Box p={theme.spacing(2)} sx={{ border: 1 }} py={theme.spacing(8)}>
            <Typography align="center" variant="body1">
              {`${question?.question} &#039;` || 'No Question'}
            </Typography>
          </Box>
          <Typography align="center" variant="body1">
            {parseInt(id, 10) + 1}
            {' '}
            of
            {questionCount}
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <ButtonGroup disableElevation variant="contained">
          <Button
            color="primary"
            value="True"
            onClick={(e) => {
              onClick(e.target.value);
            }}
          >
            True
          </Button>
          <Button
            color="error"
            value="False"
            onClick={(e) => {
              onClick(e.target.value);
            }}
          >
            False
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default Question;
