import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getQuiz } from '../features/quiz/quizSlice';

function Welcome() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.quiz.isLoading);
  const message = useSelector((state) => state.quiz.message);

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);
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
        <Typography align="center" variant="h4">
          Welcome to the Trivia Challenge!
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant="h5">
          You will be presented with 10 True or False questions.
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant="h5">
          Can you score 100%?
        </Typography>
      </Grid>
      <Grid item>
        <Link to="/question/0">
          <Button
            size="large"
            sx={{ color: 'black' }}
            disabled={message !== null || isLoading === true}
          >
            Begin
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Welcome;
