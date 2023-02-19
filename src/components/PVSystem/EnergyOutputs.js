import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { style } from '@mui/system';

export default function EnergyOutputs(props) {

  const acOutputs = []
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    props.output.ac_monthly.map((month) => {
    return acOutputs.push(month.toFixed(2));
    
  })
    return (
      <div className="output-tables">
        <TableContainer>
        <Table aria-label="simple table" size='small'>
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell>DC Output (kWh)</TableCell>
              <TableCell>AC Output (kWh)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.output.dc_monthly.map((month, i) => {
              return (
                <TableRow 
                  key={i}
                  hover
                >
                  <TableCell size='small'>
                    <h4 style={{margin: '5px'}}>{months[i]}</h4>
                  </TableCell>
                  <TableCell size='small'>
                    <h4 style={{margin: '5px'}}>{month.toFixed(2)}</h4>
                  </TableCell>
                  <TableCell size='small'>
                    <h4 style={{margin: '5px'}}>{acOutputs[i]}</h4>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        </TableContainer>

    </div>
  )
}
