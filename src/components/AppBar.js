import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
});

function AppBar(props) {
  const { classes } = props;

  return (
    <div>
      <MuiAppBar elevation={0} position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/"
          >
            {'Coin Flip Dapp'}
          </Link>
        </Toolbar>
      </MuiAppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

AppBar.displayName = 'AppBar';

export default withStyles(styles)(AppBar);
