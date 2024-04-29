"use client";
import React, { useState } from "react";
import "./Password.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RefreshIcon from "@mui/icons-material/Refresh";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import DangerousOutlinedIcon from "@mui/icons-material/DangerousOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Tooltip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// const cps = require("check-password-strength");

import cps from "check-password-strength";

function Password(props) {
  const passwordOptions = [
    {
      id: 0,
      value: "Select at least 1 character",
      minDiversity: 0,
      minLength: 0,
    },
    {
      id: 1,
      value: "Too weak",
      minDiversity: 0,
      minLength: 1,
    },
    {
      id: 2,
      value: "Weak",
      minDiversity: 1,
      minLength: 5,
    },
    {
      id: 3,
      value: "Good",
      minDiversity: 1,
      minLength: 8,
    },
    {
      id: 4,
      value: "Very Good",
      minDiversity: 3,
      minLength: 10,
    },
    {
      id: 5,
      value: "Strong",
      minDiversity: 4,
      minLength: 12,
    },
  ];

  const copyTheme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "0.8em",
            fontFamily: "Poppins",
          },
        },
      },
    },
  });

  var message = cps.passwordStrength(props.password, passwordOptions);
  function copytoClip() {
    var copyPass = props.password;
    navigator.clipboard.writeText(copyPass);
    settooltipTitle("Copied!");
  }
  function tooltipClose() {
    settooltipTitle("Copy to Clipboard");
  }
  const icons = [
    <DangerousOutlinedIcon className="message-icon" />,
    <RemoveCircleOutlineOutlinedIcon className="message-icon" />,
    <RemoveCircleOutlineOutlinedIcon className="message-icon" />,
    <CheckOutlinedIcon className="message-icon" />,
    <CheckOutlinedIcon className="message-icon" />,
    <GppGoodOutlinedIcon className="message-icon" />,
  ];
  const [tooltipTitle, settooltipTitle] = useState("Copy to Clipboard");
  return (
    <div className="password-ip">
      <div>
        <input value={props.password} onChange={props.changePassword}></input>
        {/* style={{borderBottom: message.id>2? '0.2em solid #359B27' : message.id>1? '0.2em solid #fe9d00' : '0.2em solid #ff4a4a'}} */}
        <div className="copy-btn-div">
          <ThemeProvider theme={copyTheme}>
            <Tooltip title={tooltipTitle} arrow onClose={tooltipClose}>
              <button className="copy-btn" onClick={copytoClip}>
                <ContentCopyIcon className="password-icon" />
              </button>
            </Tooltip>
          </ThemeProvider>
        </div>
      </div>
      <div
        className="strength"
        style={{
          color:
            message.id > 2 ? "#359B27" : message.id > 1 ? "#fe9d00" : "#ff4a4a",
        }}
      >
        {icons[message.id]}
        {message.value}
      </div>
      <div className="refresh-btn-div">
        <button className="refresh-btn" onClick={props.generatePassword}>
          Generate
          <RefreshIcon className="password-icon refresh-icon" />
        </button>
      </div>
      <div className="passtype-div">
        <Select
          value={props.passType}
          onChange={props.changePassType}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "100%", fontFamily: "Poppins", fontSize: "1em" }}
        >
          <MenuItem sx={{ fontFamily: "Poppins" }} value={1}>
            Secure Password
          </MenuItem>
          <MenuItem sx={{ fontFamily: "Poppins" }} value={2}>
            Rememberable Password
          </MenuItem>
          <MenuItem sx={{ fontFamily: "Poppins" }} value={3}>
            Words Based Password
          </MenuItem>
        </Select>
      </div>
    </div>
  );
}

export default Password;
