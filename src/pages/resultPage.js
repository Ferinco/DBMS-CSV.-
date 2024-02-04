import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

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

  //student admission number
  const studentAdmissionNumber = "0030";
  const results = reports.find((row) => row[0] === studentAdmissionNumber);
  console.log(results);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <button onClick={getResults}>check result</button>
      {open ? (
        <ResultDiv className="d-flex flex-column">
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
                <h6>Admission Number : {results[0]} </h6>
                <h6>Gender : Male </h6>
                <h6>Date of Birth : Male </h6>
              </div>
              <div className="d-flex flex-column gap-2">
                <h6>Class: JSS 3</h6>
                <h6>No. Times School Opened: JSS 3</h6>
                <h6>No. Times Present: JSS 3</h6>
                <h6>No. Times Absent: JSS 3</h6>

              </div>
              <div className="d-flex flex-column gap-2">
                <h6>percentage </h6>
                <h6>Next term Begins</h6>
              </div>
            </div>
          </div>
          <div className="result-div">
            <table border="1">
              <thead>
                <tr>
                  <th rowSpan={2}>subjects</th>
                  <th colspan="3">First term result</th>
                  <th rowSpan={2}>first term</th>
                  <th rowSpan={2}>second term</th>
                  <th rowSpan={2}>third term</th>
                  <th rowSpan={2}>anual total</th>
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
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>ENGLISH LANGUAGE</td>
                  {results?.slice(11, 21)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>BASIC SCIENCE</td>
                  {results?.slice(21, 31)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>BASIC TECH.</td>
                  {results?.slice(31, 41)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>BASIC SCIENCE</td>
                  {results?.slice(41, 51)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>AGRIC. SCIENCE</td>
                  {results?.slice(51, 61)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>CIVIC EDUCATION</td>
                  {results?.slice(51, 61)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>PHYSICAL EDUCATION</td>
                  {results?.slice(61, 71)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>BUSINESS STUDIES</td>
                  {results?.slice(71, 81)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>COMPUTER</td>
                  {results?.slice(81, 91)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>SOCIAL STUDIES</td>
                  {results?.slice(91, 101)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>HOME ECONOMICS</td>
                  {results?.slice(101, 111)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>CULTURAL & CREATIVE ARTS</td>
                  {results?.slice(111, 121)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>CRK</td>
                  {results?.slice(121, 131)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>FRENCH</td>
                  {results?.slice(131, 141)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>LITERATURE IN ENGLISH</td>
                  {results?.slice(141, 151)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>HISTORY</td>
                  {results?.slice(151, 161)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
                <tr>
                  <td>YORUBA</td>
                  {results?.slice(161, 171)?.map((score, index) => (
                    <td key={index}>{score}</td>
                  ))}
                </tr>
              </tbody>
            </table>
            <div className="end-box d-flex d-flex second justify-content-between">
              <div className="d-flex flex-row gap-2 p-3 ">
<div className="d-flex flex-column">
    <h6 className="small-title">AFFECTIVE & PSYCOMOTOR TRAITS</h6>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>

</div>
<div className="d-flex flex-column">
    <h6 className="small-title">REMARKS</h6>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>
    <p>Hand writing</p>

</div>
              </div>
              <div className="d-flex flex-column gap-2 p-3 ">
                <h6>Class: JSS 3</h6>
                <h6>No. Times School Opened: JSS 3</h6>
                <h6>No. Times Present: JSS 3</h6>
                <h6>No. Times Absent: JSS 3</h6>

              </div>
              <div className="d-flex flex-column gap-2 p-3 ">
                <h6>percentage </h6>
                <h6>Next term Begins</h6>
              </div>
            </div>
          </div>
        </ResultDiv>
      ) : (
        ""
      )}
    </div>
  );
}

const ResultDiv = styled.div`
  width: 900px;
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
    .second {
      border: 1px solid black;
      border-bottom: 0 !important;
      height: fit-content;
      h6{
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
  h6 {
    margin: 0 !important;
  }
  .end-box{
    border: 1px solid black;
    border-top: 0 ;
    .d-flex{
        &:first-child{
            border-right: 1px solid black;
            width: 30%;
        }
        &:nth-child(2){
            border-right: 1px solid black;
            width: 40%;
        }
        &:nth-child(3){
            width: 30%;
        }
    }
  }
`;
