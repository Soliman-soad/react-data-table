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
    {
        name: 'Gender',
        selector: row => row.gender,
        sortable: true,
    },
    {
        name: 'Mobile',
        selector: row => row.mobile,
        sortable: true,
    },
    {
        name: 'Time',
        selector: row => row.time,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Area',
        selector: row => row.area,
        sortable: true,
    },
    {
        name: 'Airport code',
        selector: row => row.airport_code,
        sortable: true,
    },
    {
        name: 'Ip address',
        selector: row => row.ip_address,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
];
const conditionalRowStyles = [
  {
    when: row => row.status === "true",
    style: {
      backgroundColor: 'green',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  {
    when: row => row.status === "false",
    style: {
      backgroundColor: 'red',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }
  
];
  return (
    <div className="App">
      <DataTable
            columns={columns}
            data={data}
            conditionalRowStyles = {conditionalRowStyles}
        />
    </div>
  );
}

export default App;
