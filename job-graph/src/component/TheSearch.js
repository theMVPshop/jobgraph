import React from "react";
import * as mdc from "material-components-web";
import TheChart from "./TheChart";

class TheSearch extends React.Component {
  render() {
    return (
      <JobSearch
        {...jobSearchData}
        data-id="e16276be-0212-4994-bba1-30bdffe22f85:an-component-instance"
      />
    );
  }
}

export default TheSearch;

class JobSearch extends React.Component {
  componentDidMount() {
    new mdc.textField.MDCTextField(
      document.querySelector(".text-field-outlined .mdc-text-field")
    );
  }

  render() {
    const {
      iconAwesomeJoget,
      title,
      last12Months,
      color,
      x1K,
      number,
      line,
      line2,
      line3,
      line4,
      onlineProps,
      online2Props,
      x800Props,
      x8002Props,
      x8003Props,
      x8004Props,
      widgetsElementsChartGraphLineBarPro,
      widgetsElementsChartGraphLineBar2Pr,
      widgetsElementsChartGraphLineBar3Pr,
      widgetsElementsChartGraphLineBar4Pr,
      widgetsElementsChartGraphLineBar5Pr,
      widgetsElementsChartGraphLineBar6Pr,
      widgetsElementsChartGraphLineBar7Pr,
      widgetsElementsChartGraphLineBar8Pr,
      widgetsElementsChartGraphLineBar2Pr2,
      widgetsElementsChartGraphLineBar9Pr,
      widgetsElementsChartGraphLineBar10P,
      widgetsElementsChartGraphLineBar11P,
      widgetsElementsChartGraphLineBar12P,
      widgetsElementsChartGraphLineBar13P,
      widgetsElementsChartGraphLineBar14P,
      widgetsElementsChartGraphLineBar15P,
      widgetsElementsChartGraphLineBar16P,
      widgetsElementsChartGraphLineBar17P,
      widgetsElementsChartGraphLineBar18P,
      widgetsElementsChartGraphLineBar19P,
      widgetsElementsChartGraphLineBar20P,
      widgetsElementsChartGraphLineBar21P,
      widgetsElementsChartGraphLineBar22P,
      tooltipPointerDownProps,
    } = this.props;

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
          <div className="flex-row" data-id="an|JtLMjDRv">
            <img
              className="icon-awesome-joget"
              data-id="cd4a3dcc-598b-4a23-9d43-819cc3abbc26"
              src={iconAwesomeJoget}
            />
            <div
              className="text-field-outlined"
              data-id="2b771456-bb2c-4d8c-aeae-2350e2b0cd70"
            >
              <label className="mdc-text-field mdc-text-field--outlined">
                <span className="mdc-notched-outline">
                  <span className="mdc-notched-outline__leading"></span>
                  <span className="mdc-notched-outline__notch">
                    {/*<span className="mdc-floating-label the-search-label" id="my-label-id">
                      Search
                    </span>*/}
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
          <TheChart />

          {/*<div className="total-sales graph-box-color" data-id="80c90be9-c788-492c-9463-203a8b062616">
            <div className="flex-row-1" data-id="an|i3Yffzl4">
              <div className="title" data-id="2ad8dd7a-bf2b-48ae-a664-d6cc9987f445">
                {title}
              </div>
              <div className="dropdown" data-id="f0567930-c7fd-431c-98c7-dd761eeed821">
                {/*<div
                  className="last-12-months poppins-normal-comet-14px"
                  data-id="b49b471f-5970-41b9-b837-855cccb65fca"
                >
                  {last12Months}
                </div>
                <div className="icon" data-id="f55bdfa5-9912-4f3e-86c9-a1916a7ec853">
                  <img className="color" data-id="53910c9a-6c65-414f-912c-760800e2e700" src={color} />
                </div>
              </div>
            </div>
            <div className="legend" data-id="5d0b3861-0bfd-4c48-a32c-7ac859d3cb89">
              <Online data-id="f8623653-dcc2-4331-a98f-10a605275cdc:an-component-instance">
                {onlineProps.children}
              </Online>
              <Online
                className={online2Props.className}
                data-id="604c3649-8fe5-4605-909f-ca4ccf13d744:an-component-instance"
              >
                {online2Props.children}
              </Online>
            </div>
            <div className="chart" data-id="14356ba7-f5aa-4b27-8116-daa17b1bfc71">
              <div className="value" data-id="a787bb9b-44f8-4e67-8ffe-1d16f2ed853f">
                <div className="x1k" data-id="db3f9d83-de01-4cc5-b9d1-0412781f3777">
                  <div className="x1k-1 poppins-normal-shadow-blue-14px" data-id="60237674-3891-4ca9-9cad-1084718432ca">
                    {x1K}
                  </div>
                </div>
                <X800 data-id="6ed4acab-fc41-4c3a-99f2-2a2d0eee7cee:an-component-instance">{x800Props.children}</X800>
                <X800 data-id="e517873f-9f2b-4775-a99f-dfe38ef49c40:an-component-instance">{x8002Props.children}</X800>
                <X800 data-id="42998f8b-1d48-4c98-9397-c0a79eaabfe6:an-component-instance">{x8003Props.children}</X800>
                <X800
                  className={x8004Props.className}
                  data-id="02a03b6c-6970-4426-9b3c-31cd5fcc2c90:an-component-instance"
                >
                  {x8004Props.children}
                </X800>
                <div className="x0" data-id="deb9384c-aecf-4474-8c39-29c042e02310">
                  <div
                    className="number poppins-normal-shadow-blue-14px"
                    data-id="5ae02836-c67d-403a-92f0-9b2c9660a10d"
                  >
                    {number}
                  </div>
                </div>
              </div>
              <div className="scroll-group" data-id="8de77789-2f0f-4271-a185-9cfcff508ae9">
                <div className="overlap-group1" data-id="an|tVwjbfbk">
                  <div className="month" data-id="f94487c0-55cf-44fb-9c06-061f328eafe2">
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBarPro.name}
                      data-id="39223b1f-1df6-4bf7-9f99-ed669ac7116f:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar2Pr.name}
                      className={widgetsElementsChartGraphLineBar2Pr.className}
                      data-id="369f330d-a6a7-477f-b089-8c7e32075378:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar3Pr.name}
                      className={widgetsElementsChartGraphLineBar3Pr.className}
                      data-id="4440d426-1127-4916-b8ad-dca22710b431:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar4Pr.name}
                      className={widgetsElementsChartGraphLineBar4Pr.className}
                      data-id="64ac151f-9358-464f-a95d-71d5060143c1:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar5Pr.name}
                      className={widgetsElementsChartGraphLineBar5Pr.className}
                      data-id="2ac8e83f-daa4-4dcb-aad9-c5dd3e37a557:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar6Pr.name}
                      className={widgetsElementsChartGraphLineBar6Pr.className}
                      data-id="58c9ad38-214d-4ac9-b7a7-153a07711860:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar7Pr.name}
                      className={widgetsElementsChartGraphLineBar7Pr.className}
                      data-id="b47ff744-4bf0-44e8-a545-b5aa0e671e09:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar8Pr.name}
                      className={widgetsElementsChartGraphLineBar8Pr.className}
                      data-id="95925c4e-a9fd-4b63-bc56-15c2ec8a4582:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar2
                      jan={widgetsElementsChartGraphLineBar2Pr2.jan}
                      data-id="e9585e98-9110-4b7d-b5ad-3e2ebdb15a1a:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar9Pr.name}
                      className={widgetsElementsChartGraphLineBar9Pr.className}
                      data-id="37b013aa-63bf-48f0-81a0-2bbe980b5577:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar10P.name}
                      className={widgetsElementsChartGraphLineBar10P.className}
                      data-id="15fdff72-3431-4a5f-adea-6a6c2207d9cd:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar11P.name}
                      className={widgetsElementsChartGraphLineBar11P.className}
                      data-id="aaf3cb80-d3dd-473c-8122-4f765f32b2d4:an-component-instance"
                    />
                  </div>
                  <div className="month-1" data-id="5cf0ef76-411b-4d84-b4b4-2cc3cd944573">
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar12P.name}
                      data-id="b722a27e-852d-4660-91b2-a9e50abda72f:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar13P.name}
                      className={widgetsElementsChartGraphLineBar13P.className}
                      data-id="9daefcb9-6130-4c37-8e36-5f76216d6e12:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar14P.name}
                      className={widgetsElementsChartGraphLineBar14P.className}
                      data-id="a34fbe51-ad53-44a2-9455-da3416bcfeeb:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar15P.name}
                      className={widgetsElementsChartGraphLineBar15P.className}
                      data-id="1bcfd7a9-4fa8-4437-af54-64aa5bf30ac7:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar16P.name}
                      className={widgetsElementsChartGraphLineBar16P.className}
                      data-id="dc95055f-5525-4262-8fb8-2660ea0bc9de:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar17P.name}
                      className={widgetsElementsChartGraphLineBar17P.className}
                      data-id="27171b1d-14fe-43c0-8cf8-d65071fa795a:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar18P.name}
                      className={widgetsElementsChartGraphLineBar18P.className}
                      data-id="f6fbf777-f7dc-4a83-a706-797e858d11ca:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar19P.name}
                      className={widgetsElementsChartGraphLineBar19P.className}
                      data-id="56936dd1-1ed6-479c-ba99-44adee50b3f7:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar20P.name}
                      className={widgetsElementsChartGraphLineBar20P.className}
                      data-id="3ca70ddc-9a7e-4609-852b-fd8609c297b0:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar21P.name}
                      className={widgetsElementsChartGraphLineBar21P.className}
                      data-id="fc66805b-c344-487d-b78c-d59bed32606e:an-component-instance"
                    />
                    <WidgetsElementsChartGraphLineBar
                      name={widgetsElementsChartGraphLineBar22P.name}
                      className={widgetsElementsChartGraphLineBar22P.className}
                      data-id="cfa78511-0e52-4805-8962-93802e24b77e:an-component-instance"
                    />
                  </div>
                  <img className="line" data-id="2eaf5cae-108e-4559-a58d-1f2c95aa60b7" src={line} />
                  <img className="line-1" data-id="62a78d4c-4691-464c-8d42-6e9bb920d367" src={line2} />
                  <img className="line-2" data-id="576a0d6c-e72a-4219-9152-ecdeeee36d35" src={line3} />
                  <img className="line-3" data-id="8ba1019c-f3b6-4571-b18c-f421f660b980" src={line4} />
                  <TooltipPointerDown
                    bg={tooltipPointerDownProps.bg}
                    x750={tooltipPointerDownProps.x750}
                    onlineSales={tooltipPointerDownProps.onlineSales}
                    titlee={tooltipPointerDownProps.titlee}
                    data-id="daf10440-6c9c-44ec-aaef-33ba3c2cf184:an-component-instance"
                  />
                </div>
              </div>
            </div>
          </div>*/}
        </form>
      </div>
    );
  }
}

class Online extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div
        className={`online ${className || ""}`}
        data-id="f8623653-dcc2-4331-a98f-10a605275cdc"
      >
        <div
          className="shape"
          data-id="7fafde45-f659-435f-b09b-a5ca0eda5bf2"
        ></div>
        <div
          className="marketing-sales poppins-normal-comet-14px"
          data-id="de204645-e166-4fa4-9924-9ea7546a2b9c"
        >
          {children}
        </div>
      </div>
    );
  }
}

class X800 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <div
        className={`value-item-1 ${className || ""}`}
        data-id="6ed4acab-fc41-4c3a-99f2-2a2d0eee7cee"
      >
        <div
          className="number-1 poppins-normal-shadow-blue-14px"
          data-id="0e2a5eca-4fb4-4415-8ab9-84980470e016"
        >
          {children}
        </div>
      </div>
    );
  }
}

class WidgetsElementsChartGraphLineBar extends React.Component {
  render() {
    const { name, className } = this.props;

    return (
      <div
        className={`widgets--eleme-graph-line-bar-6 ${className || ""}`}
        data-id="39223b1f-1df6-4bf7-9f99-ed669ac7116f"
      >
        <img
          className="shape-1"
          data-id="96ba22df-ab49-4f9c-a102-3c6ea19d39e0"
          src="https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6181db1900fc739048a5ea9c/img/shape-10@1x.png"
        />
        <div
          className="name poppins-normal-shadow-blue-13px"
          data-id="f4e72311-af7f-48b1-b43b-640b32409a66"
        >
          {name}
        </div>
      </div>
    );
  }
}

class WidgetsElementsChartGraphLineBar2 extends React.Component {
  render() {
    const { jan } = this.props;

    return (
      <div
        className="widgets--eleme-graph-line-bar-7"
        data-id="e9585e98-9110-4b7d-b5ad-3e2ebdb15a1a"
      >
        <img
          className="shape-2"
          data-id="e9a87c8a-8634-44b5-93f4-1018d84b3933"
          src="https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6181db1900fc739048a5ea9c/img/shape-3@1x.png"
        />
        <div className="jan-2" data-id="6c6f134e-f76a-494b-a32a-f82e48d9954a">
          {jan}
        </div>
      </div>
    );
  }
}

class TooltipPointerDown extends React.Component {
  render() {
    const { bg, x750, onlineSales, titlee } = this.props;

    return (
      <div
        className="tooltip-pointer-down"
        data-id="daf10440-6c9c-44ec-aaef-33ba3c2cf184"
      >
        <div className="overlap-group" data-id="an|x6aGV2MH">
          <div
            className="tooltip-bg"
            data-id="77e989a5-0856-4694-a3a4-fe59d5edd59b"
          >
            <img
              className="bg"
              data-id="803dc32a-6a9f-40d6-a157-ddfbac73a568"
              src={bg}
            />
          </div>
          <div
            className="data-key"
            data-id="e89355a1-9fad-49c2-a717-5f3ed8aac6a0"
          >
            <div
              className="data"
              data-id="31222f58-10e7-47c7-b383-a77a141a30fd"
            >
              <div
                className="sales"
                data-id="71566701-8597-466e-bb90-1d20d4fb011a"
              ></div>
              <div
                className="x750 poppins-normal-vulcan-12px"
                data-id="9c846ed0-db4b-487e-8003-ff08ffa99736"
              >
                {x750}
              </div>
              <div
                className="online-sales poppins-normal-shadow-blue-12px"
                data-id="9a63feb7-f696-4e73-a660-7f671bc70f7e"
              >
                {onlineSales}
              </div>
            </div>
          </div>
          <div
            className="titlee"
            data-id="aac2e8ea-16ec-40ef-95a1-08596418c15a"
          >
            {titlee}
          </div>
        </div>
      </div>
    );
  }
}

const onlineData = {
  children: "Austin",
};

const online2Data = {
  children: "San Marcos",
  className: "offline",
};

const x800Data = {
  children: "800",
};

const x8002Data = {
  children: "600",
};

const x8003Data = {
  children: "400",
};

const x8004Data = {
  children: "200",
  className: "x200",
};

const widgetsElementsChartGraphLineBarData = {
  name: "Jan",
};

const widgetsElementsChartGraphLineBar2Data = {
  name: "Feb",
  className: "widgets--eleme-graph-line-bar-1",
};

const widgetsElementsChartGraphLineBar3Data = {
  name: "Mar",
  className: "widgets--eleme-graph-line-bar-1",
};

const widgetsElementsChartGraphLineBar4Data = {
  name: "Apr",
  className: "widgets--eleme-graph-line-bar-2-1",
};

const widgetsElementsChartGraphLineBar5Data = {
  name: "May",
  className: "widgets--eleme-graph-line-bar-3-1",
};

const widgetsElementsChartGraphLineBar6Data = {
  name: "Jun",
  className: "widgets--eleme-graph-line-bar-1",
};

const widgetsElementsChartGraphLineBar7Data = {
  name: "Jul",
  className: "widgets--eleme-graph-line-bar-4-1",
};

const widgetsElementsChartGraphLineBar8Data = {
  name: "Aug",
  className: "widgets--eleme-graph-line-bar-5-1",
};

const widgetsElementsChartGraphLineBar22Data = {
  jan: "Sep",
};

const widgetsElementsChartGraphLineBar9Data = {
  name: "Oct",
  className: "widgets--eleme-graph-line-bar-2-2",
};

const widgetsElementsChartGraphLineBar10Data = {
  name: "Nov",
  className: "widgets--eleme-graph-line-bar-1",
};

const widgetsElementsChartGraphLineBar11Data = {
  name: "Dec",
  className: "widgets--eleme-graph-line-bar-5-2",
};

const widgetsElementsChartGraphLineBar12Data = {
  name: "Feb",
};

const widgetsElementsChartGraphLineBar13Data = {
  name: "Mar",
  className: "widgets--eleme-graph-line-bar-1",
};

const widgetsElementsChartGraphLineBar14Data = {
  name: "Apr",
  className: "widgets--eleme-graph-line-bar-2-3",
};

const widgetsElementsChartGraphLineBar15Data = {
  name: "May",
  className: "widgets--eleme-graph-line-bar-3",
};

const widgetsElementsChartGraphLineBar16Data = {
  name: "Jun",
  className: "widgets--eleme-graph-line-bar-1",
};

const widgetsElementsChartGraphLineBar17Data = {
  name: "Jul",
  className: "widgets--eleme-graph-line-bar-4",
};

const widgetsElementsChartGraphLineBar18Data = {
  name: "Aug",
  className: "widgets--eleme-graph-line-bar-5-3",
};

const widgetsElementsChartGraphLineBar19Data = {
  name: "Sep",
  className: "widgets--eleme-graph-line-bar-1",
};

const widgetsElementsChartGraphLineBar20Data = {
  name: "Oct",
  className: "widgets--eleme-graph-line-bar-2",
};

const widgetsElementsChartGraphLineBar21Data = {
  name: "Nov",
  className: "widgets--eleme-graph-line-bar-1",
};

const widgetsElementsChartGraphLineBar23Data = {
  name: "Dec",
  className: "widgets--eleme-graph-line-bar-5",
};

const tooltipPointerDownData = {
  bg: "https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6181db1900fc739048a5ea9c/img/bg@1x.png",
  x750: "576",
  onlineSales: "Offline",
  titlee: "September, 2019",
};

const jobSearchData = {
  iconAwesomeJoget:
    "https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/617b34ecf55934fe66e73092/img/icon-awesome-joget@1x.png",
  title: "Job Location",
  last12Months: "Last 12 Months",
  color:
    "https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6181db1900fc739048a5ea9c/img/color@1x.png",
  x1K: "1000",
  number: "0",
  line: "https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6181db1900fc739048a5ea9c/img/line@1x.png",
  line2:
    "https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6181db1900fc739048a5ea9c/img/line-1@1x.png",
  line3:
    "https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6181db1900fc739048a5ea9c/img/line-2@1x.png",
  line4:
    "https://anima-uploads.s3.amazonaws.com/projects/6178a0ca67f4178eb43821b3/releases/6181db1900fc739048a5ea9c/img/line-3@1x.png",
  onlineProps: onlineData,
  online2Props: online2Data,
  x800Props: x800Data,
  x8002Props: x8002Data,
  x8003Props: x8003Data,
  x8004Props: x8004Data,
  widgetsElementsChartGraphLineBarPro: widgetsElementsChartGraphLineBarData,
  widgetsElementsChartGraphLineBar2Pr: widgetsElementsChartGraphLineBar2Data,
  widgetsElementsChartGraphLineBar3Pr: widgetsElementsChartGraphLineBar3Data,
  widgetsElementsChartGraphLineBar4Pr: widgetsElementsChartGraphLineBar4Data,
  widgetsElementsChartGraphLineBar5Pr: widgetsElementsChartGraphLineBar5Data,
  widgetsElementsChartGraphLineBar6Pr: widgetsElementsChartGraphLineBar6Data,
  widgetsElementsChartGraphLineBar7Pr: widgetsElementsChartGraphLineBar7Data,
  widgetsElementsChartGraphLineBar8Pr: widgetsElementsChartGraphLineBar8Data,
  widgetsElementsChartGraphLineBar2Pr2: widgetsElementsChartGraphLineBar22Data,
  widgetsElementsChartGraphLineBar9Pr: widgetsElementsChartGraphLineBar9Data,
  widgetsElementsChartGraphLineBar10P: widgetsElementsChartGraphLineBar10Data,
  widgetsElementsChartGraphLineBar11P: widgetsElementsChartGraphLineBar11Data,
  widgetsElementsChartGraphLineBar12P: widgetsElementsChartGraphLineBar12Data,
  widgetsElementsChartGraphLineBar13P: widgetsElementsChartGraphLineBar13Data,
  widgetsElementsChartGraphLineBar14P: widgetsElementsChartGraphLineBar14Data,
  widgetsElementsChartGraphLineBar15P: widgetsElementsChartGraphLineBar15Data,
  widgetsElementsChartGraphLineBar16P: widgetsElementsChartGraphLineBar16Data,
  widgetsElementsChartGraphLineBar17P: widgetsElementsChartGraphLineBar17Data,
  widgetsElementsChartGraphLineBar18P: widgetsElementsChartGraphLineBar18Data,
  widgetsElementsChartGraphLineBar19P: widgetsElementsChartGraphLineBar19Data,
  widgetsElementsChartGraphLineBar20P: widgetsElementsChartGraphLineBar20Data,
  widgetsElementsChartGraphLineBar21P: widgetsElementsChartGraphLineBar21Data,
  widgetsElementsChartGraphLineBar22P: widgetsElementsChartGraphLineBar23Data,
  tooltipPointerDownProps: tooltipPointerDownData,
};
