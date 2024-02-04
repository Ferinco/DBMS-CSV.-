import logo from "./logo.svg";
import "./App.css";
import Papa from "papaparse";
import { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [reports, setReports] = useState([]);

  const [columnArray, setColumn] = useState([]);
  const [values, setValues] = useState([]);
  const [tester, setTester] = useState([]);

  const handleFile = (event) => {
    Papa.parse(event.target.files[0], {
      header: false,
      skipEmptyLines: true,
      complete: function (result) {
        const headerRow = result.data[0];

        if (headerRow) {
          const columnArray = Object.values(headerRow);
          const valuesArray = result.data
            .slice(1)
            .map((row) => Object.values(row));

          setColumn(columnArray);
          setValues(valuesArray);
          setTester(result.data);
          setData(result.data.slice(2));
        }
      },
    });
  };

  console.log(data);


  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://dbmsc-server.onrender.com/api/save-results",
        { results: data, selectedClass: "JSS 3", term: "SECOND" }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const getResults = async () => {
    try {
      const response = await axios.get(
        `https://dbmsc-server.onrender.com/api/studentsresults/SECOND/JSS 3`
      );
      setReports(response.data.results[0].results);
    } catch (error) {
      console.log(error);
    }
  };
  const admissionNumberToFind = "0030";

  const studentData = reports.find((row) => row[0] === admissionNumberToFind);
  console.log(studentData);

  return (
    <div className="App">
      <input
        type="file"
        name="file"
        accept=".csv"
        onChange={handleFile}
      ></input>
      <table className="">
        <thead>
          <tr>
            {columnArray.map((head, i) => (
              <th key={1}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((body, i) => (
            <tr key={i}>
              {body.map((value, i) => (
                <td>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>submit werey</button>
      <button onClick={getResults}>show</button>
    </div>
  );
}

export default App;
