import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Modal, Container, Typography } from "@material-ui/core/";


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(3px)",
  },
  carousel: {},
  img: {
    maxHeight: "90vh",
    maxWidth: "100%",
  },
  rubrik: {
    fontSize: "24px",
    textAlign: "center",
  },
}));

function GridGallery({ rubrik, images }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.container}>
      <Typography className={classes.rubrik}>{rubrik}</Typography>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>





      <Modal
        disableAutoFocus={true}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Carousel
          className={classes.carousel}
          autoPlay={false}
          navButtonsAlwaysVisible
          animation={"fade"}
          cycleNavigation={false}
        >
          {images.map((image) => (
            <img className={classes.img} src={image.src} alt={image.src}></img>
          ))}
        </Carousel>
      </Modal>
    </Container>
  );
}

export default GridGallery;
