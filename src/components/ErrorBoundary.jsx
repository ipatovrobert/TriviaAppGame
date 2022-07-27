import { Box, Link, Typography } from '@mui/material';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>There has been an error</Typography>
          <Link href="/">Please reload or go to homepage</Link>
        </Box>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
