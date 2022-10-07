import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  TablePagination,
  Box,
  Typography,
} from "@mui/material";
import axios from 'axios';


const ListingsFound = (props) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [found] = useState([]);
  const [entry, setEntry] = useState([]);


  useEffect(() => {
    
    axios.get("https://spotteddb.herokuapp.com/found")
    // axios.get("http://localhost:4000/found")
      .then(res => {
        setEntry(res.data)
        console.log(res)
      })

  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, entry.length - page * rowsPerPage);

  return (
    <Container>
           <Box
        display="flex"
        flex-direction={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={20}
        padding={5}
      >
      <Typography variant="h6" component="div"><h2>Found Pets</h2></Typography>
      </Box>
      <Box
        style={{ background: "#ffffff", color: "#000000", opacity: "0.9" }}
        display="flex"
        flex-direction={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={5}
        padding={5}
        borderRadius={5}
        boxShadow="5px 5px 10px #ccc"
        sx={{
          ":hover": {
            boxShadow: "8px 8px 8px black",
          },
        }}
      >

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" component="div">
                    Contact
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" component="div">
                    Species
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" component="div">
                    Gender
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" component="div">
                    Date Found
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" component="div">
                    PET ID
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entry
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover key={index}>
                    <TableCell>
                      <Link to={`/detailsfound/${row.foundId}`}>
                        <br />
                        Details
                      </Link>{" "}
                    </TableCell>
                    <TableCell>{row.species}</TableCell>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>ID #{row.foundId}</TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 1 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* pagination */}
          <TablePagination
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            component="div"
            count={entry.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                "aria-label": "rows per page",
              },
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Box>

    </Container>
  );
};

export default ListingsFound;
