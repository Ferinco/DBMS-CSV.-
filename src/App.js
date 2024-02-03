import logo from './logo.svg';
import './App.css';
import Papa from "papaparse"
import { useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  const [columnArray, setColumn] = useState([])
const [values, setValues] = useState([])
  const [tester, setTester] = useState([])


  const handleFile = (event)=>{
Papa.parse(event.target.files[0],{
  header: false,
  skipEmptyLines: true,
  complete: function(result){
   

    const headerRow = result.data[1];
      
    if (headerRow) {
      const columnArray = Object.values(headerRow);
      const valuesArray = result.data.slice(2).map(row => Object.values(row));

      setData(result.data);
      setColumn(columnArray);
      setValues(valuesArray);
      setTester(result.data.slice(2)); // Skip the first two rows (header and data)

    }
  },
})
  }
  console.log(tester)
  console.log(data)
  const admissionNumberToFind = "3";

  const studentData = data.find(row => row[0] === admissionNumberToFind);
  
  console.log(studentData);

  return (
    <div className="App">
      <input
      type='file'
      name='file'
      accept='.csv'
      onChange={handleFile}
      >
      </input>
      <table className=''>
        <thead>
          <tr>
            {
              columnArray.map((head, i)=>(
                <th key={1}>{head}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            values.map((body, i)=>(
              <tr key={i}>
                {
                  body.map((value, i)=>(

                    <td>{value}</td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
