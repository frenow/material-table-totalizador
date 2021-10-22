import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import { TablePagination, Grid, Typography, Divider } from '@material-ui/core'

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', status: 0, valor: 100 },
  { id: 2, name: "Raj", email: 'raj@gmail.com', status: 1, valor: 10 },
  { id: 3, name: "David", email: 'david342@gmail.com', status: 1, valor: 30 },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', status: 0, valor: 200 },
]

function App() {


  const total = 200;
  
  const columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" }, 
    { title: "Status", field: 'status', },
    { title: "Valor", field: "valor", }
  ] 
 

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <h4 align='center'>Material Table</h4>
      <MaterialTable
        title="Employee Data"
        data={empList}
        columns={columns}
        components={{
          Pagination: (props) => <>
            <Grid container style={{ padding:15}}>
              <Grid sm={6} item><Typography variant="subtitle2">Valor Total</Typography></Grid>
              <Grid sm={6} item align="left"><Typography variant="subtitle2" >R$ {total}</Typography></Grid>
            </Grid>
            <Divider/>
            <TablePagination {...props} />
          </>
        }}
      />
    </div>
  );
}

export default App;
