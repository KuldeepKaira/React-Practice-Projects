import React, { useState } from "react";
import "./qrcode.css";
import { BsEmojiSmile } from "react-icons/bs";
import { saveAs } from "file-saver";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";

const QRCode = () => {
  const [input, setInput] = useState("");
  const [URL, setURL] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [showDownBtn, setShowDownBtn] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const searchBtnHandler = () => {
    setURL(
      `http://api.qrserver.com/v1/create-qr-code/?data=${input}!&size=200x200`
    );

    setShowQR(false);
    setShowMessage(false);
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setShowQR(true);
    }, 1000);

    setShowDownBtn(true);
    console.log(input);
  };

  const downloadBtnHandler = () => {
    saveAs(URL, `${input}.jpg`);
  };

  return (
    <div className="mainPage">
      <div className="box">
        <p className="title">QR Code Generator</p>
        <div className="searchBox">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setShowQR(false);
            }}
            className="inputBox"
          ></input>
          <button className="searchBtn" onClick={searchBtnHandler}>
            Generate
          </button>
        </div>
        <div className="imageDiv">
          {showMessage && (
            <div className="messageBox">
              <BsEmojiSmile className="emoji" />
              <p className="message">Type in Input to Generate QR Code</p>
            </div>
          )}
          {showLoading && (
            <TailSpin
              height="200"
              width="200"
              color="grey"
              airaLabel="loading"
            />
          )}
          {showQR && <img src={URL} alt="qrcode" className="qrImage" />}
        </div>
        {showDownBtn && (
          <button className="downloadBtn" onClick={downloadBtnHandler}>
            Download
          </button>
        )}
      </div>
    </div>
  );
};

export default QRCode;
