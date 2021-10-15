import React, {  } from 'react';
import clsx from "clsx";
//component material
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
// helpers
import { isNullOrUndefined } from '../../utils/helpers';

// jss
import useStyles from '../../assets/jss/components/popup/PopupQuestion';

export default function PopupQuestion(props) {
  const classes = useStyles();
  const { open, title, content, callback, handleClose } = props;
  return (
    <div className={classes.root}>
      <Dialog className={classes.dialogPopup} open={open} onClose={handleClose}>
        {!isNullOrUndefined(title) && (
          <DialogTitle className={classes.title}>{title}</DialogTitle>
        )}
        {!isNullOrUndefined(content) && (
          <Typography className={classes.content}>{content}</Typography>
        )}
        <DialogActions className={classes.rowSubmit}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => callback('yes')}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.btnCance}
            onClick={() => callback('no')}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
