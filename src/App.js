import React, { Fragment, useState } from 'react';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from './components/AppBar';

function App(props) {
  const [flippping, setFlipping] = useState(false);
  function onClickFlip() {
    setFlipping(true);
    setTimeout(() => setFlipping(false), 1500);
  }

  return (
    <Fragment>
      <AppBar />
      <Container>
        <Box display="flex" alignItems="center" flexDirection="column" pt={15}>
          <Box mb={10}>
            {flippping && <CircularProgress size={120} color="secondary" />}
            {!flippping && (
              <CircularProgress
                size={120}
                variant="static"
                value={100}
                color="secondary"
              />
            )}
          </Box>
          <Button
            onClick={onClickFlip}
            color="primary"
            size="large"
            variant="contained"
            disabled={flippping}
          >
            Flip Coin
          </Button>
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
