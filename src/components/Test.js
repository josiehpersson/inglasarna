import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 test: {
   height: '3000px',
   backgroundColor: '#aaa'
 }
}));

export default function Test() {
  const classes = useStyles();
 
  return (
     <>
      <div className={classes.test}></div>
     </>
  )
}
