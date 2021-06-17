import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

const FinanceBox = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={10}>
        <Typography variant='h2'>Vi hjälper dig med finansiering</Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac justo
          commodo, malesuada odio vitae, euismod ante. Mauris quis sem laoreet,
          lacinia neque eget, venenatis ligula. Maecenas pharetra tincidunt
          sapien vel mattis. Fusce in faucibus nunc. Integer et velit pulvinar,
          ultrices odio interdum, mattis tellus. Duis nisl orci, porta vel nisi
          sit amet, sollicitudin consequat est. Aenean fermentum id arcu in
          suscipit.
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Button variant='contained' color='primary'>
          Räkna på finansiering
        </Button>
      </Grid>
    </Grid>
  );
};
export default FinanceBox;
