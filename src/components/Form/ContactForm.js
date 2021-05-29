import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string("Ange ditt namn.")
    .min(2, "Ditt namn bör innehålla minst 2 bokstäver.")
    .required("Du måste fylla i ett namn."),
  email: yup
    .string("Ange din e-post.")
    .email("Ange en giltig e-post, ex: namn@email.se"),
  phone: yup
    .string("Ange ett nummer.")
    .min(9, "Ett telefonnummer bör innehålla minst 9 siffror."),
  message: yup
    .string("Skriv ett meddelande.")
    .min(3, "Ett meddelande bör innehålla minst 3 bokstäver.")
    .required("Du måste fylla i ett meddelande."),
});

const useStyles = makeStyles((theme) => ({
  container: {
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(4px)",
    borderRadius: 6,
    padding: theme.spacing(2),
  },
  grid: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "start",
    width: "100%",
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.container}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12}>
          <Typography variant="h4" color="primary">
            Kontakta oss!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="name"
            name="name"
            required={true}
            label="Namn"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="email"
            name="email"
            label="E-post"
            type="text"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            id="phone"
            name="phone"
            label="Telefon"
            type="text"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            color="primary"
            variant="outlined"
            multiline
            rows={6}
            required={true}
            id="message"
            name="message"
            label="Meddelande"
            type="text"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
        <Grid item xs={12}>
          <Button color="primary" variant="contained" type="submit">
            Skicka
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default ContactForm;