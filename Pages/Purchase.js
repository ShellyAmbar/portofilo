import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Payment from "../components/purchase/payment";
import OrderDetailes from "../components/purchase/orderDetails";
import OrderAdditions from "../components/purchase/orderAdittions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  backButton: {
    marginRight: theme.spacing(10)
  },
  instructions: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(0)
  }
}));

function getSteps() {
  return ["Confirm your order", "Add notes to the order", "Payment"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Confirm your order";
    case 1:
      return "Add notes to the order";
    case 2:
      return "Payment";
    default:
      return "Unknown stepIndex";
  }
}

function StepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <OrderDetailes />;
    case 1:
      return <OrderAdditions />;
    case 2:
      return (
        <div>
          <h1 style={{ fontSize: 20 }}>Now its time to pay :)..</h1>
          <Payment />
        </div>
      );
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="steps-content">{StepContent(activeStep)}</div>

      <div>
        {activeStep === steps.length ? (
          <div className="buttons-steps">
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div className="buttons-steps">
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
