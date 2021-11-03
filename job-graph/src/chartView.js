import React from 'react';

class ChartView extends React.Component {
  componentDidMount() {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined .mdc-text-field"));
  }

  render() {

    return (
        <><div class="chart-container">
            <canvas id="chart"></canvas>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="magic.js" type="text/javascript"></script></>
    );
  }
}

