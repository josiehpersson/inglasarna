import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "50%",
    "@media(min-width:0px) and (max-width:900px)": {
      width: "100%",
    },
  },
  buttonNext: {
    background: "#296BE7",
    fontSize: "18px",
    color: "#fff",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: "5px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    transform: "translateX(-10px)",
    textTransform: "none",
  },
  button: {
    fontSize: "18px",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    transform: "translateX(-10px)",
    textTransform: "none",
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  rubrik: {
    fontSize: "18px",
  },
  completed: {
    background: "green",
  },
}));

function getSteps() {
  return ["Steg 1", "Steg 2", "Steg 3"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar non, viverra risus velit vulputate morbi pellentesque mattis. Iaculis porta pellentesque.`;
    case 1:
      return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar non, viverra risus velit vulputate morbi pellentesque mattis. Iaculis porta pellentesque.";
    case 2:
      return `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar non, viverra risus velit vulputate morbi pellentesque mattis. Iaculis porta pellentesque.`;
    default:
      return "Unknown step";
  }
}

function HowToStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>
              <Typography className={classes.rubrik}>{label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography variant="body2">{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Tillbaka
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.buttonNext}
                  >
                    {activeStep === steps.length - 1 ? "Färdig" : "Nästa"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Så lätt var det!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Tillbaka
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default HowToStepper;
