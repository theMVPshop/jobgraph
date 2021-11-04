import React from 'react';
import * as mdc from 'material-components-web';

class ChartView extends React.Component {
  componentDidMount() {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined .mdc-text-field"));
  }

  render() {

    return (
        <><div className="chart-container ">
            <canvas id="chart"></canvas>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="magic.js" type="text/javascript"></script></>
    );
  }
}

export default ChartView;