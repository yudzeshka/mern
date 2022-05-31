import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable({ table }) {
  const { recipient, inn, kpp, recipientAcc, bik, date } = table;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>
                Дата платежа: {new Date(date).toLocaleDateString()}
              </strong>
            </TableCell>
            <TableCell align="right">
              <strong>Наименование получателя</strong>
            </TableCell>
            <TableCell align="right">
              <strong>ИНН</strong>
            </TableCell>
            <TableCell align="right">
              <strong>КПП</strong>
            </TableCell>
            <TableCell align="right">
              <strong>Банк получателя</strong>
            </TableCell>
            <TableCell align="right">
              <strong>БИК</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right">{recipient}</TableCell>
            <TableCell align="right">{inn}</TableCell>
            <TableCell align="right">{kpp}</TableCell>
            <TableCell align="right">{recipientAcc}</TableCell>
            <TableCell align="right">{bik}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
