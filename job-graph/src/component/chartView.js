import React from "react";
import * as mdc from "material-components-web";
import dataChart from "./dataChart";

class ChartView extends React.Component {
  componentDidMount() {
    new mdc.textField.MDCTextField(
      document.querySelector(".text-field-outlined .mdc-text-field")
    );
  }

  render() {
    return (

        <div className="chart-container ">
          <script dataChart></script>
          <canvas id="chart"></canvas>
        </div>

    );
  }
}

export default ChartView;
