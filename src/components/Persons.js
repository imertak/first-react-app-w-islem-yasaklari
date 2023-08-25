import React, { Component } from "react";

class Persons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
      isVisiblePerson: true,
    };
  }

  showOtherInfo(e) {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  handleMouseClickedTrashIcon = () => {
    this.setState({
      isVisiblePerson: false,
    });
  };

  render(props) {
    const { unvan, mkkSicilNo, kurulKararTarihi, kurulKararNo, payKodu, pay } =
      this.props;

    return (
      <div className="userInfo">
        <div onClick={this.showOtherInfo.bind(this)} className="userName">
          <i className="fa-solid fa-user"></i>
          <h4 className="unvan">{unvan}</h4>
        </div>

        {this.state.isVisible ? (
          <div className="otherInfo">
            <table>
              <tr>
                <td>MKK SİCİL NO: {mkkSicilNo}</td>
              </tr>

              <tr>
                <td>KURUL KARAR TARİHİ: {kurulKararTarihi}</td>
              </tr>

              <tr>
                <td>KURUL KARAR NO: {kurulKararNo}</td>
              </tr>

              <tr>
                <td>PAY KODU: {payKodu}</td>
              </tr>

              <tr>
                <td>PAY: {pay}</td>
              </tr>
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Persons;
