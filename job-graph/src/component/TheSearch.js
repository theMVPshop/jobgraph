import React from "react";
import * as mdc from "material-components-web";
import LineChart from "./TheChart";

class App extends React.Component {
  render() {
    return (
      <JobSearch
        src="https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/617b34ecf55934fe66e73092/img/icon-awesome-joget@1x.png"
        data-id="e16276be-0212-4994-bba1-30bdffe22f85:an-component-instance"
      />
    );
  }
}

export default App;

class JobSearch extends React.Component {
  componentDidMount() {
    new mdc.textField.MDCTextField(
      document.querySelector(".text-field-outlined .mdc-text-field")
    );
  }

  render() {
    const { src } = this.props;

    return (
      <div className="container-center-horizontal">
        <form
          className="job-search screen"
          data-id="e16276be-0212-4994-bba1-30bdffe22f85"
          onclick="window.open('javascript:SubmitForm(%27form1%27)', '_self');"
          name="form1"
          action="form1"
          method="post"
        >
          <div className="flex-row" data-id="an|i09j26ji">
            <img
              className="icon-awesome-joget"
              data-id="cd4a3dcc-598b-4a23-9d43-819cc3abbc26"
              src={src}
            />
            <div
              className="text-field-outlined"
              data-id="2b771456-bb2c-4d8c-aeae-2350e2b0cd70"
            >
              <label className="mdc-text-field mdc-text-field--outlined">
                <span className="mdc-notched-outline">
                  <span className="mdc-notched-outline__leading"></span>
                  <span className="mdc-notched-outline__notch">
                    <span
                      className="mdc-floating-label"
                      id="my-label-id"
                    ></span>
                  </span>
                  <span className="mdc-notched-outline__trailing"></span>
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="mdc-text-field__input"
                  aria-labelledby="my-label-id"
                />
              </label>
            </div>
          </div>
          <div
            className="rectangle-605 border-1px-dove-gray"
            data-id="83e96266-8eaf-418b-81dc-14249b7ad0f1"
          >
            <LineChart />
          </div>
        </form>
      </div>
    );
  }
}
