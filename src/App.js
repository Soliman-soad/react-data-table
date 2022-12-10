import logo from './logo.svg';
import './App.css';
import DataTable from 'react-data-table-component';
import { useState } from 'react';

function App() {
  const [data,setData] =useState([]);
  const [loading,setLoading]= useState(false)
  useState(()=>{
    fetch('https://retoolapi.dev/4547z4/data')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  },[data])

  const columns = [
    {
        name: 'Id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'First Name',
        selector: row => row.first_name,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.last_name,
        sortable: true,
    },
    {
        name: 'Full name',
        selector: row => row.first_name+" " + row.last_name,
        sortable: true,
    },
];
  return (
    <div className="App">
      <DataTable
            columns={columns}
            data={data}
        />
    </div>
  );
}

export default App;
