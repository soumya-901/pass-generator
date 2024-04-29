"use client";
import React, { useState, useEffect } from "react";
import "./Generator.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Collapse } from "@mui/material";
import Password from "./Password.js";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import SettingsIcon from "@mui/icons-material/Settings";

import generator from "generate-password";
// import randomWords from 'random-words';
import { generate as randomWords } from "random-words";

function Generator() {
  const [letters, setLetters] = useState(8);
  const [numbers, setNumbers] = useState(2);
  const [length, setLength] = useState(10);
  const [wordsLength, setWordsLength] = useState(4);
  const [passType, setPassType] = useState(2);
  const [params, setParams] = useState({
    lowercase: true,
    uppercase: true,
    symbols: false,
    numbers: true,
    similar: false,
    digitsFirst: false,
    simpleSymbols: false,
    difficultSymbols: true,
    seperate: true,
    dash: false,
    capitalizeFirst: true,
  });
  const [password, setPassword] = useState("");
  var difficultSymbols = "{}[]()<>/ ` ~ , ; : . - _ = +";
  // var simpleSymbols = "!@#$%^&*";
  function changePassword(event) {
    var temp = event.target.value;
    setPassword(temp);
  }
  function changeLetters(event) {
    var temp = Number(event.target.value);
    setLetters(temp);
  }
  function changeNumbers(event) {
    var temp = Number(event.target.value);
    setNumbers(temp);
  }
  function changeLength(event) {
    var temp = Number(event.target.value);
    setLength(temp);
  }
  function changeWordsLength(event) {
    var temp = Number(event.target.value);
    setWordsLength(temp);
  }
  function handleChecks(event) {
    const { name } = event.target;
    setParams((prevValue) => {
      return {
        ...prevValue,
        [name]: !prevValue[name],
      };
    });
  }
  function changePassType(event) {
    var temp = event.target.value;
    setPassType(temp);
  }

  function generatePassword() {
    if (passType === 2) {
      let generatedPassword = generator.generate({
        length: letters,
        uppercase: false,
      });
      if (params.capitalizeFirst) {
        generatedPassword =
          generatedPassword.charAt(0).toUpperCase() +
          generatedPassword.slice(1);
      }
      if (numbers) {
        for (var i = 0; i < numbers; i++) {
          var num = Math.floor(Math.random() * 10);
          generatedPassword = params.digitsFirst
            ? num + generatedPassword
            : generatedPassword + num;
        }
      }
      setPassword(generatedPassword);
    } else if (passType === 1) {
      try {
        var excludeString = "";
        excludeString += "'";
        excludeString += '"';
        if (params.difficultSymbols) {
          excludeString += difficultSymbols;
        }
        let generatedPassword = generator.generate({
          length: length,
          uppercase: params.uppercase,
          lowercase: params.lowercase,
          symbols: params.symbols,
          numbers: params.numbers,
          excludeSimilarCharacters: params.similar,
          exclude: excludeString,
          strict: false,
        });
        setPassword(generatedPassword);
      } catch (err) {
        var generatedPassword = "";
        setPassword(generatedPassword);
      }
    } else {
      // Generate an array of random words with specified length
      const generatedPasswordArray = randomWords({ exactly: wordsLength });

      // Join the array of words with the specified separator
      const separator =
        params.seperate && params.dash
          ? " - "
          : params.dash
          ? "-"
          : params.seperate
          ? " "
          : "";
      const generatedPassword = generatedPasswordArray.join(separator);

      // Set the generated password in state or use it as needed
      setPassword(generatedPassword);
    }
  }

  useEffect(() => {
    generatePassword();
    // eslint-disable-next-line
  }, [passType]);

  return (
    <div>
      <div className="top-div">
        <div className="generator-div">
          <Password
            generatePassword={generatePassword}
            password={password}
            changePassword={changePassword}
            changePassType={changePassType}
            passType={passType}
          />
          <div className="generator-heading">
            <div className="customize-heading">
              <SettingsIcon className="customize-icon" /> Customize your
              password:
            </div>
          </div>

          <div className="ip-form">
            <Collapse in={passType === 1} className="collapse-div">
              <div className="form-div">
                <div className="form-title">
                  Password Length : <b>{length}</b>{" "}
                </div>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1, mt: 0.5 }}
                  alignItems="center"
                >
                  <RemoveCircleOutlineIcon
                    className="range-icons"
                    onClick={() => setLength(Math.max(length - 1, 1))}
                  />
                  <Slider
                    min={1}
                    max={50}
                    value={length}
                    onChange={changeLength}
                  />
                  <AddCircleOutlineIcon
                    className="range-icons"
                    onClick={() => setLength(Math.min(length + 1, 50))}
                  />
                </Stack>
              </div>

              <div className="form-div">
                <div className="top-div">
                  <div className="check-div">
                    <input
                      type="checkbox"
                      checked={params.uppercase}
                      name="uppercase"
                      onChange={handleChecks}
                    ></input>
                    Uppercase
                  </div>
                  <div className="check-div">
                    <input
                      type="checkbox"
                      checked={params.lowercase}
                      name="lowercase"
                      onChange={handleChecks}
                    ></input>
                    Lowercase
                  </div>
                  <div className="check-div">
                    <input
                      type="checkbox"
                      checked={params.numbers}
                      name="numbers"
                      onChange={handleChecks}
                    ></input>
                    Numbers
                  </div>
                  <div className="check-div">
                    <input
                      type="checkbox"
                      checked={params.symbols}
                      name="symbols"
                      onChange={handleChecks}
                    ></input>
                    Symbols
                  </div>
                  <div className="check-div check-2">
                    <input
                      type="checkbox"
                      checked={params.similar}
                      name="similar"
                      onChange={handleChecks}
                    ></input>
                    Exclude Similar letters (eg. l L 1)
                  </div>
                  <div className="check-div check-2">
                    <input
                      type="checkbox"
                      checked={params.difficultSymbols}
                      name="difficultSymbols"
                      onChange={handleChecks}
                    ></input>
                    Exclude {difficultSymbols}
                  </div>
                </div>
              </div>
            </Collapse>

            <Collapse in={passType === 2} className="collapse-div">
              <div className="form-div">
                <div className="form-title">
                  Letters : <b>{letters}</b>{" "}
                </div>

                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1, mt: 0.5 }}
                  alignItems="center"
                >
                  <RemoveCircleOutlineIcon
                    className="range-icons"
                    onClick={() => setLetters(Math.max(letters - 1, 0))}
                  />
                  <Slider
                    min={0}
                    max={20}
                    value={letters}
                    onChange={changeLetters}
                  />
                  <AddCircleOutlineIcon
                    className="range-icons"
                    onClick={() => setLetters(Math.min(letters + 1, 20))}
                  />
                </Stack>
              </div>

              <div className="form-div">
                <div className="form-title">
                  Numbers : <b>{numbers}</b>
                </div>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1, mt: 0.5 }}
                  alignItems="center"
                >
                  <RemoveCircleOutlineIcon
                    className="range-icons"
                    onClick={() => setNumbers(Math.max(numbers - 1, 0))}
                  />
                  <Slider
                    min={0}
                    max={20}
                    value={numbers}
                    onChange={changeNumbers}
                  />
                  <AddCircleOutlineIcon
                    className="range-icons"
                    onClick={() => setNumbers(Math.min(numbers + 1, 20))}
                  />
                </Stack>
              </div>
              <div className="form-div">
                <div className="top-div">
                  <div className="check-div">
                    <input
                      type="checkbox"
                      checked={params.digitsFirst}
                      name="digitsFirst"
                      onChange={handleChecks}
                    ></input>
                    Numbers first
                  </div>
                  <div className="check-div">
                    <input
                      type="checkbox"
                      checked={params.capitalizeFirst}
                      name="capitalizeFirst"
                      onChange={handleChecks}
                    ></input>
                    Capitalize first
                  </div>
                </div>
              </div>
            </Collapse>

            <Collapse in={passType === 3} className="collapse-div">
              <div className="form-div">
                <div className="form-title">
                  Number of words : <b>{wordsLength}</b>{" "}
                </div>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1, mt: 0.5 }}
                  alignItems="center"
                >
                  <RemoveCircleOutlineIcon
                    className="range-icons"
                    onClick={() => setWordsLength(Math.max(wordsLength - 1, 1))}
                  />
                  <Slider
                    min={1}
                    max={10}
                    value={wordsLength}
                    onChange={changeWordsLength}
                  />
                  <AddCircleOutlineIcon
                    className="range-icons"
                    onClick={() =>
                      setWordsLength(Math.min(wordsLength + 1, 10))
                    }
                  />
                </Stack>
              </div>
              <div className="form-div">
                <div className="top-div">
                  <div className="check-div ">
                    <input
                      type="checkbox"
                      checked={params.seperate}
                      name="seperate"
                      onChange={handleChecks}
                    ></input>
                    Add spaces
                  </div>
                  <div className="check-div ">
                    <input
                      type="checkbox"
                      checked={params.dash}
                      name="dash"
                      onChange={handleChecks}
                    ></input>
                    Add dashes '-'
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generator;
