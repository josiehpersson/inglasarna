import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import {
  Modal,
  Container,
  Typography,
  Grid,
  GridList,
  GridListTile,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(3px)",
  },
  img: {
    height: "auto",
    maxHeight: "90vh",
    maxWidth: "100%",
  },
  rubrik: {
    fontSize: "24px",
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  galleryImage: {
    objectFit: "cover",
  },
  gridList: {
    justifyContent: "center",
  },
}));

function GridGallery({ rubrik, images }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const openLightbox = (index) => {
    setCurrentImage(index);
    setOpen(true);
  };

  return (
    <Container className={classes.container}>
      <Typography className={classes.rubrik}>{rubrik}</Typography>

      <GridList cellHeight={250} className={classes.gridList} cols={3}>
        {images.map((tile, index) => (
          <GridListTile key={index} cols={1}>
            <img
              onClick={() => openLightbox(index)}
              className={classes.galleryImage}
              src={tile.src}
              alt={tile.title}
            />
          </GridListTile>
        ))}
      </GridList>

      <Modal
        disableAutoFocus={true}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Carousel
          index={currentImage}
          className={classes.carousel}
          autoPlay={false}
          navButtonsAlwaysVisible
          animation={"fade"}
          cycleNavigation={false}
        >
          {images.map((image, index) => (
            <img
              className={classes.img}
              src={image.src}
              key={index}
              alt={image.src}
            ></img>
          ))}
        </Carousel>
      </Modal>
    </Container>
  );
}

export default GridGallery;
