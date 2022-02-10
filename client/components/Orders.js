import * as React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { loanInformationItems } from './loanInformationItems';

/* COMPONENTS */
import Title from './Title';

const rows = loanInformationItems

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Loan Activity</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Application ID</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Original Loan Date</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Email</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Outstanding Loan Amount</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Total Loan Amount</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Next Loan Payment Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center">{row.application_id}</TableCell>
              <TableCell align="center">{row.original_loan_date}</TableCell>
              <TableCell align="center">{row.full_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.outstanding_loan_amount}</TableCell>
              <TableCell align="center">{row.total_loan_amount}</TableCell>
              <TableCell align="center">{row.next_loan_payment_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ 'paddingTop': '10px' }}>
        <Button sx={{ backgroundColor: "#2b6777", width: '20%' }} variant="contained">
          View All Recent Loans
        </Button>
      </div>
    </React.Fragment>
  );
}
