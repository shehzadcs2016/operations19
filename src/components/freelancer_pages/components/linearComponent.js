import React from "react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const BorderLinearProgress = withStyles((theme) => ({
	root: {
	  height: 10,
	  borderRadius: 5,
	},
	colorPrimary: {
	  backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
	},
	bar: {
	  borderRadius: 5,
	  backgroundColor: '#1a90ff',
	},
  }))(LinearProgress);
  
  const useStyles = makeStyles({
	root: {
	  flexGrow: 1,
	},
  });

export default BorderLinearProgress;