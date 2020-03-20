import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 400
  }
});

function valuetext(value) {
  return `${value}$`;
}
function valueTime(value) {
  return `${value} houres`;
}

function Filter(props) {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">{`Total Results : ${props.count}`}</div>
        <div className="col-sm">
          <label>
            Price sorted by:
            <select
              className="form-control"
              value={props.sort}
              onChange={props.handelChangeSortPrice}
            >
              <option value="">Select</option>
              <option value="Lowest to highest">Lowest to highest</option>
              <option value="Highest to lowest">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-sm">
          <label>
            Order number of orders:
            <select
              className="form-control"
              value={props.numOfOrders}
              onChange={props.handelChangeNumOfOrders}
            >
              <option value="">Select</option>
              <option value="Lowest to highest">Lowest to highest</option>
              <option value="Highest to lowest">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-sm">
          <label>
            Framework:
            <select
              className="form-control"
              value={props.framework}
              onChange={props.handelChangeFramework}
            >
              <option value="">Select</option>
              <option value="android application">Android Application</option>
              <option value="react">React</option>
              <option value="react Native">React Native</option>
              <option value="angular">Angular</option>
            </select>
          </label>
        </div>
        <div className="col-sm">
          <label>
            Operation System:
            <select
              className="form-control"
              value={props.operating_system}
              onChange={props.handelChangeOperationSystem}
            >
              <option value="">Select</option>
              <option value="visual code">Visual Code</option>
              <option value="android studio">Android Studio</option>
              <option value="visual studio">Visual Studio</option>
            </select>
          </label>
        </div>
        <div className="col-sm">
          <label>
            Language
            <select
              className="form-control"
              value={props.language}
              onChange={props.handelChangeLanguage}
            >
              <option value="">Select</option>
              <option value="java">Java</option>
              <option value="java script">Java Script</option>
            </select>
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
              Work time
            </Typography>
            <Slider
              min={1}
              max={10000}
              value={props.work_time}
              onChange={props.handelChangeWorkTime}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valueTime}
            />
          </div>
        </div>
        <div className="col-sm">
          <div className={classes.root}>
            <Typography id="range-slider" gutterBottom>
              Price range
            </Typography>
            <Slider
              min={10}
              max={10000}
              value={props.price_range}
              onChange={props.handleChangePriceRange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
            />
          </div>
        </div>
        <div className="col-sm">
          <button
            style={{ marginTop: 15, marginLeft: 15 }}
            type="button"
            className="btn btn-primary"
            onClick={props.hendelResetListOfProducts}
          >
            Reset search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
