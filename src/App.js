import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

import QRCode from "qrcode.react";
import * as KlipAPI from "./klip_test.js";

//QR코드와 지갑 주소를 초기화
const DEFAULT_QR_CODE = "DEFAULT";
const DEFAULT_ADDRESS = "0x00000000000000000000000000000";

function App() {

const [qrvalue_auth, setQrvalue_auth] = useState(DEFAULT_QR_CODE);
const [myAddress, setMyAddress] = useState(DEFAULT_ADDRESS);

//지갑 연동하는 함수 실행
const getUserData = () => {
  KlipAPI.getAddress(setQrvalue_auth, async (address) => {
    setMyAddress(address);	//사용자의 지갑 주소를 가져온다
  });
};

return (
  <div className="App-header">
      <button onClick={getUserData}> klip 지갑주소 불러오기</button>
      <p></p>
      <QRCode value={qrvalue_auth}></QRCode>
      <p>
        {myAddress}
      </p>

  </div>
);
}

export default App;