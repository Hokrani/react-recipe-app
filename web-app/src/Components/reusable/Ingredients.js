import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Ingredients=(props)=> {

    let ingredients = []
    let measures = []
    
    // Convert json to array and slice array for ingredients and measures, 
    // then loop over them to remove null values
    Object.keys(props.meal).map((key) => props.meal[key]).slice(9, 29).forEach((item, index) => {
      if(item) {
        ingredients.push(item)
        measures.push(Object.keys(props.meal).map((key) => props.meal[key]).slice(29, 49)[index])
      }
    })
    // Add table for displaying ingredients
    return (      
        <TableContainer component={Paper} style={{ paddingTop: '5%',}}>
        <Table xs={{ minWidth: 200 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Ingredients</StyledTableCell>
                    <StyledTableCell align="left">Measure</StyledTableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {ingredients.map((item, index) => (
                    <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="item">
                            {item}
                        </StyledTableCell>
                        <StyledTableCell align="left">{measures[index]}</StyledTableCell>
                    </StyledTableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    )
};

export default Ingredients;