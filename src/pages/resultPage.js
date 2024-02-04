import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import generatePDF from "react-to-pdf";

export default function ResultPage() {
  const [reports, setReports] = useState([]);
  const [open, setOpen] = useState(false);

  //to fetch all results in students class
  const getResults = async () => {
    try {
      setOpen(true);
      const response = await axios.get(
        `https://dbmsc-server.onrender.com/api/studentsresults/SECOND/JSS 3`
      );
      setReports(response.data.results[0].results);
    } catch (error) {
      console.log(error);
    }
  };

//report download ref
const resultRef = useRef()

  //student admission number
  const studentAdmissionNumber = "0030";
  const results = reports.find((row) => row[0] === studentAdmissionNumber);
  console.log(results);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <button onClick={getResults}>check result</button>
      {
        results ? <button onClick={()=>{
            generatePDF(resultRef, {filename: studentAdmissionNumber + "second-term-results"} )
          }}>download result</button> : ""
      }

      {results ? (
        <>
          {open ? (
            <ResultDiv className="p-3" ref={resultRef}>
                <div className="d-flex flex-column body-div" >
              <div className="header-box d-flex flex-row justify-content-between px-3 align-items-center">
                <div className="image">
                  <img src="/logo.jpg" />
                </div>
                <div className="second-box d-flex flex-column justify-content-center align-items-end">
                  <h3>DIVINE BLOSSOM MODEL PRIVATE SCHOOLS</h3>
                  <h5>Obada Town, Abeokuta Ogun State.</h5>
                  <h5>Email: divineblossom99@gmail.com</h5>
                  <h5>Website: www.divineblossomschools.com</h5>
                </div>
              </div>
              <div className="middle-box d-flex flex-column ">
                <div className="d-flex first justify-content-center align-items-center">
                  <h5>SECOND TERM RESULT</h5>
                </div>
                <div className="d-flex second p-3 justify-content-between">
                  <div className="d-flex flex-column gap-2">
                    <h6>Name : Ademide </h6>
                    <h6>Admission Number : {results ? results[0] : ""} </h6>
                    <h6>Gender : Male </h6>
                    <h6>Date of Birth : Male </h6>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <h6>Class: JSS 3</h6>
                    <h6>
                      No. Times School Opened:{" "}
                      <span>{results ? results[175] : ""}</span>{" "}
                    </h6>
                    <h6>
                      No. Times Present:{" "}
                      <span>{results ? results[176] : ""}</span>
                    </h6>
                    <h6>
                      No. Times Absent:{" "}
                      <span>{results ? results[177] : ""}</span>
                    </h6>
                  </div>
                  <div className="d-flex flex-column gap-2 justify-content-between">
                    <h6>
                      percentage: <br />{" "}
                      <span>{results ? results[174] + "%" : ""}</span>{" "}
                    </h6>
                    <h6>
                      Next term Begins: <br />{" "}
                      <span>{results ? results[192] : ""}</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="result-div">
                <table border="1">
                  <thead>
                    <tr>
                      <th rowSpan={2}>subjects</th>
                      <th colspan="3">First term result</th>
                      <th rowSpan={2}>first term (100)</th>
                      <th rowSpan={2}>second term (100)</th>
                      <th rowSpan={2}>third term (100)</th>
                      <th rowSpan={2}>anual total (300)</th>
                      <th rowSpan={2}>average</th>
                      <th rowSpan={2}>grade</th>
                      <th rowSpan={2}>remark</th>
                    </tr>
                    <tr>
                      <th>test (30)</th>
                      <th>exam (70)</th>
                      <th>total (100)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="subject">MATHEMATICS</td>
                      {results?.slice(1, 11)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>ENGLISH LANGUAGE</td>
                      {results?.slice(11, 21)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>BASIC SCIENCE</td>
                      {results?.slice(21, 31)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>BASIC TECH.</td>
                      {results?.slice(31, 41)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>BASIC SCIENCE</td>
                      {results?.slice(41, 51)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>AGRIC. SCIENCE</td>
                      {results?.slice(51, 61)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>CIVIC EDUCATION</td>
                      {results?.slice(51, 61)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>PHYSICAL EDUCATION</td>
                      {results?.slice(61, 71)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>BUSINESS STUDIES</td>
                      {results?.slice(71, 81)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>COMPUTER</td>
                      {results?.slice(81, 91)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>SOCIAL STUDIES</td>
                      {results?.slice(91, 101)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>HOME ECONOMICS</td>
                      {results?.slice(101, 111)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>CULTURAL & CREATIVE ARTS</td>
                      {results?.slice(111, 121)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>CRK</td>
                      {results?.slice(121, 131)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>FRENCH</td>
                      {results?.slice(131, 141)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>LITERATURE IN ENGLISH</td>
                      {results?.slice(141, 151)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>HISTORY</td>
                      {results?.slice(151, 161)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td>YORUBA</td>
                      {results?.slice(161, 171)?.map((score, index) => (
                        <td key={index} className="score">
                          {score}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
                <div className="end-box d-flex d-flex second justify-content-between">
                  <div className="d-flex flex-row gap-2 remarks-div justify-content-between">
                    <div className="d-flex first-remark flex-column p-2">
                      <h6 className="small-title">
                        AFFECTIVE & PSYCOMOTOR TRAITS
                      </h6>
                      <p>Hand Writing</p>
                      <p>Fluency</p>
                      <p>IQ Level</p>
                      <p>Punctuality</p>
                      <p>Neatness</p>
                      <p>Politeness</p>
                      <p>Honesty</p>
                      <p>Activeness</p>
                      <p>Creativity</p>
                      <p>Sport and Clubs</p>
                    </div>
                    <div className="d-flex second-remark flex-column p-2">
                      <h6 className="small-title">REMARKS</h6>
                      {results?.slice(178, 188)?.map((remark, index) => (
                        <p key={index}>{remark}</p>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-3 p-3 ">
                    <h6>NUMBER OF STUDENTS IN CLASS:</h6>
                    <h6>
                      TOTAL MARKS OBTAINABLE:{" "}
                      <span>{results ? results[171] : ""}</span>
                    </h6>
                    <h6>
                      TOTAL MARKS OBTAINED:{" "}
                      <span>{results ? results[172] : ""}</span>
                    </h6>
                    <h6>
                      TOTAL MARKS OBTAINED:{" "}
                      <span>{results ? results[173] : ""}</span>
                    </h6>
                    <h6>
                      OVERALL AVERAGE:{" "}
                      <span>{results ? results[173] : ""}</span>
                    </h6>
                    <h5>
                      OVERALL PERCENTAGE:{" "}
                      <span className="percent">
                        {results ? results[174] + "%" : ""}
                      </span>
                    </h5>
                  </div>
                  <div className="d-flex flex-column gap-2 p-3 ">
                    <h6>A1 - Excellent 75-100</h6>
                    <h6>B2- Very Good 70-74</h6>
                    <h6>B2- Good</h6>
                  </div>
                </div>
              </div>

                </div>
            </ResultDiv>
          ) : (
            ""
          )}
        </>
      ) : (
        "...loading"
      )}
    </div>
  );
}

const ResultDiv = styled.div`
  width: 900px;
  .body-div{
    border: 1px solid black;
  }
  td {
    font-weight: 600;
  }

  .header-box {
    width: 100%;
    height: 200px;
    border: 1px solid black;
  }
  .middle-box {
    .first {
      height: 50px;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
    span {
      font-weight: 700;
    }
    .second {
      border: 1px solid black;
      border-bottom: 0 !important;
      height: fit-content;
      h6 {
        text-transform: uppercase;
      }
    }
  }
  .result-div {
    /* border-top: 1px solid black; */
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
    font-size: 14px !important;
  }
  .score {
    text-align: center;
  }
  th {
    text-align: center;
    text-transform: capitalize;
  }
  th[colspan="3"] {
    text-align: center;
  }
  .image {
    width: 150px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0 !important;
  }
  .end-box {
    border-left: 1px solid black;
    border-right: 1px solid black;

    border-bottom: 1px solid black;

    border-top: 0;
    .percent {
      font-size: 30px;
    }
    span {
      font-size: 18px;
      font-weight: 700;
    }
    .d-flex {
      &:first-child {
        border-right: 1px solid black;
        width: 30%;
      }
      &:nth-child(2) {
        border-right: 1px solid black;
        width: 40%;
      }
      &:nth-child(3) {
        width: 30%;
      }
      .small-title {
        font-size: 13px;
        font-weight: 600;
        height: 40px;
      }
    }
    .remarks-div {
      .first-remark {
        h6 {
          font-weight: 700;
        }
        border: 0 !important;
        width: fit-content;
      }
      .second-remark {
        h6 {
          font-weight: 700;
        }
        border-left: 1px solid black !important;
        border-right: 0 !important;
        width: fit-content !important;
      }
    }
  }
`;
