import React from "react";
import * as mdc from "material-components-web";
 import LineChart from "./TheChart";
//import PracticeChart from "./PracticeChart";
// import Graph from "./thisIsGraph";

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
          onlick="window.open('javascript:SubmitForm(%27form1%27)', '_self');"
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
                {/*<input
                  type="text"
                  placeholder="Search"
                  className="mdc-text-field__input"
                  aria-labelledby="my-label-id"
                />*/}
                <select name="location" id="location">
                  <option value="select">Please select city</option>
                  <option value="houston, tx">houston, tx</option>
                  <option value="san antonio, tx">san antonio, tx</option>
                  <option value="dallas, tx">dallas, tx</option>
                  <option value="austin, tx">austin, tx</option>
                  <option value="fort worth, tx">fort worth, tx</option>
                  <option value="arlington, tx">arlington, tx</option>
                  <option value="plano, tx">plano, tx</option>
                  <option value="irving, tx">irving, tx</option>
                  <option value="garland, tx">garland, tx</option>
                  <option value="frisco, tx">frisco, tx</option>
                  <option value="mckinney, tx">mckinney, tx</option>
                  <option value="grand prairie, tx">grand prairie, tx</option>
                </select>
                <select name="jobTitle" id="jobTitle">
                  <option value="select">Please select Job title</option>
                  <option value="dental assistant">dental assistant</option>
                  <option value="medical assistant">medical assistant</option>
                  <option value="web developer">web developer</option>
                  <option value="software engineer">software engineer</option>
                </select>
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
