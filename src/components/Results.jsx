import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reset } from '../features/quiz/quizSlice';
import Answer from './Answer';

function Results() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const correctAnswers = useSelector(
    (state) => state.quiz.answers.filter((item) => item.isCorrect === true).length,
  );
  const answers = useSelector((state) => state.quiz.answers);

  const onClick = () => {
    dispatch(reset());
    navigate('/');
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      sx={{ height: '100%' }}
    >
      <Typography variant="h5">
        You scored
        {' '}
        {correctAnswers}
        /
        {answers.length}
      </Typography>
      <Box>
        {answers.map((answer) => (
          <Answer question={answer.question} answer={answer.isCorrect} />
        ))}
      </Box>
      <Button onClick={onClick} sx={{ color: 'black' }}>
        Play again?
      </Button>
    </Box>
  );
}

export default Results;
