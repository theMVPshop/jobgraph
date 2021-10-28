import React from 'react';
import * as mdc from 'material-components-web';

class TheSearch extends React.Component {
  render() {
    return (
      <JobSearch
        iconAwesomeJoget="https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6179ef69bbae245115aa9af3/img/icon-awesome-joget-1@1x.png"
        listOfJobs="https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6179ef69bbae245115aa9af3/img/list-of-jobs@1x.png"
        listOfJobs2="https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6179ef69bbae245115aa9af3/img/list-of-jobs@1x.png"
        data-id="e16276be-0212-4994-bba1-30bdffe22f85:an-component-instance"
      />
    );
  }
}

export default TheSearch;

class JobSearch extends React.Component {
  componentDidMount() {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-outlined .mdc-text-field"));
  }

  render() {
    const { iconAwesomeJoget, listOfJobs, listOfJobs2 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="job-search screen" data-id="e16276be-0212-4994-bba1-30bdffe22f85">
          <div className="header" data-id="07687d4a-1497-4a1b-8476-9248d2e26539">
            <div className="overlap-group1" data-id="an|AulN7IcQ">
              <div className="header-1" data-id="ba7577e2-c7e5-4507-bca7-61591352da00"></div>
              <div className="text-field-outlined" data-id="54cbb456-a593-493d-ae9a-cc65281bce62">
                <label className="mdc-text-field mdc-text-field--outlined">
                  <span className="mdc-notched-outline">
                    <span className="mdc-notched-outline__leading"></span>
                    <span className="mdc-notched-outline__notch">
                      <span className="mdc-floating-label" id="my-label-id">
                        Search
                      </span>
                    </span>
                    <span className="mdc-notched-outline__trailing"></span>
                  </span>
                  <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                </label>
              </div>
              <img
                className="icon-awesome-joget"
                data-id="cd4a3dcc-598b-4a23-9d43-819cc3abbc26"
                src={iconAwesomeJoget}
              />
            </div>
          </div>
          <div className="body" data-id="279c5dd9-034d-425c-a548-be5e07716fc6">
            <div className="overlap-group" data-id="an|C2ZCoSuW">
              <img className="l-ist-of-jobs" data-id="952cd435-d79a-4cf9-9ad5-02b6fe6efed6" src={listOfJobs} />
              <img className="l-ist-of-jobs-1" data-id="8188f3ac-0f04-4ca0-a884-2a738e492796" src={listOfJobs2} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}