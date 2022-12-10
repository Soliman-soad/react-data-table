import logo from './logo.svg';
import './App.css';
import DataTable from 'react-data-table-component';
import { useState } from 'react';
import Navber from './Navber';

function App() {
  const [data,setData] =useState([]);
  const[loading, setLoading] = useState(true)
  useState(()=>{
    fetch('https://retoolapi.dev/4547z4/data')
    .then(res => res.json())
    .then(data => {
      setData(data)
    })
  },[data,loading])
  const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            borderTop:  "solid 1px gray"
            
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

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
const toggleColor = (e) =>{
  
  if(e.status === "true"){
    e.status='false'
    setLoading(!loading)
  }
  else if(e.status === "false"){
    e.status='true'
    setLoading(!loading)
  }
}
const conditionalRowStyles = [
  {
    when: row => row.status === "true",
    style: {
      backgroundColor: '#50C878',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  {
    when: row => row.status === "false",
    style: {
      backgroundColor: '#FF6347',
      color: 'white',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }
  
];

  return (
    <div className="App">
      <Navber/>
      <DataTable
            columns={columns}
            data={data}
            conditionalRowStyles = {conditionalRowStyles}
            customStyles={customStyles}
            pagination 
            onRowClicked={toggleColor}
        />
    </div>
  );
}

export default App;
