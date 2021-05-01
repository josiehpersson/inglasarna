import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '80vw',
    height: 'auto',

    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  image: {
    height: 300,
    width: 300,
    float: 'left',
    margin: theme.spacing(3),
    borderRadius: theme.spacing(4),

    [theme.breakpoints.between('xs', 'sm')]: {
      float: 'none',
    },
  },
}));

const InfoColumn = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        src="https://lumon.com/sites/default/files/styles/large_gallery/public/images/sv/lumon-inglasad-balkong-14jpg.jpg?itok=yHOO7ZyM"
        alt="Lumon balkonginglasning"
        className={classes.image}
      />
      <Typography variant="h1">Title</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac justo
        commodo, malesuada odio vitae, euismod ante. Mauris quis sem laoreet,
        lacinia neque eget, venenatis ligula. Maecenas pharetra tincidunt sapien
        vel mattis. Fusce in faucibus nunc. Integer et velit pulvinar, ultrices
        odio interdum, mattis tellus. Duis nisl orci, porta vel nisi sit amet,
        sollicitudin consequat est. Aenean fermentum id arcu in suscipit.
        Aliquam porta bibendum viverra. Quisque id metus luctus, suscipit eros
        non, hendrerit neque. In metus quam, convallis tristique turpis sed,
        vulputate iaculis urna. Pellentesque ullamcorper dui ac velit lobortis,
        nec sodales ipsum ornare. Integer erat est, dignissim non blandit ut,
        fringilla in tortor. Proin suscipit erat mi, ut elementum magna gravida
        commodo. Vivamus odio urna, auctor eu velit sit amet, finibus rhoncus
        tortor. Aenean quis quam scelerisque, venenatis ante a, efficitur magna.
        Maecenas venenatis, lorem nec imperdiet tempus, massa orci bibendum
        orci, rutrum vestibulum quam sem ut sem. Aliquam nec vestibulum lorem.
        In malesuada congue est. Praesent eu odio sed sem pulvinar volutpat.
        Nunc at dictum dui. Duis sed nulla in dolor vulputate commodo a sit amet
        nisl. Curabitur malesuada dapibus ligula eget laoreet. Mauris a dui
        erat. Vivamus tincidunt sit amet diam quis maximus. Integer a nulla
        porta, volutpat dui eget, fermentum nunc. Donec est lectus, aliquet
        convallis ex id, molestie scelerisque nulla. Praesent odio mauris,
        sagittis ac est vel, tincidunt pellentesque orci. Phasellus fringilla,
        augue maximus congue consequat, nunc sapien posuere neque, ut fringilla
        odio nunc vitae nisl. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Nullam eget urna non sem
        ornare faucibus et vel arcu. Nunc egestas, tellus nec semper luctus, sem
        velit sagittis magna, sit amet commodo lorem felis id eros. Donec sed
        bibendum ante. Sed placerat laoreet tellus sed ultricies. In molestie
        arcu magna, pretium sodales eros ornare at. Ut tempor nunc et dui
        finibus luctus. Maecenas rutrum vitae massa faucibus ullamcorper. Proin
        tristique elit id justo euismod, sit amet semper sapien iaculis. Proin
        tincidunt metus vitae sapien finibus, lobortis condimentum felis
        laoreet. Vestibulum feugiat consequat eros. Cras ullamcorper elit quis
        massa consequat condimentum. Pellentesque pulvinar in turpis et dictum.
        Aenean eget cursus massa, non pulvinar nulla. Vivamus tincidunt placerat
        tellus at rhoncus. Mauris non nisl ut eros consectetur efficitur. Duis
        blandit leo leo, id rhoncus dui porttitor in. Etiam vitae augue auctor,
        gravida diam ut, dignissim diam. Nam a mauris ut lorem malesuada
        porttitor. Donec id dapibus dui. Maecenas sit amet volutpat orci, nec
        mattis velit. Praesent enim lacus, ornare quis ante in, varius vehicula
        libero. Phasellus suscipit ornare purus sed rhoncus. Ut imperdiet eros
        vel efficitur luctus. Sed hendrerit et ipsum id laoreet.
      </Typography>
    </div>
  );
};
export default InfoColumn;
