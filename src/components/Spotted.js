import React from "react";
import front from "../assets/front.jpg";
import {
  Container,
  Box,
  Table,
  TableHead,
  TableContainer,
  TableCell,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";




const Spotted = (props) => {
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          style={{ background: "#ffffff", color: "#000000", opacity: "0.9" }}
          display="flex"
          flex-direction={"column"}
       
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={50}
          padding={2}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ":hover": {
              boxShadow: "8px 8px 8px black",
            },
          }}
        >
          <div>
            <Typography variant="h4" padding={2}>
              You don't have to feel helpless
            </Typography>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
            
          <img src={front} width="200" height="150" />
        
                <TableCell>
                <front />
                </TableCell>
              </TableHead>
            </Table>
           <div className="footer-icons">
           <a href="http://facebook.com"><FacebookIcon fontSize="medium" />
           <InstagramIcon fontSize="medium" /></a>
            <a href="http://instagram.com"> </a>
            <a href="http://google.com"> <GoogleIcon fontSize="medium" /></a>
            </div>
          </TableContainer>
        </Box>
    
       
      </Container>
    </div>
  );
};

export default Spotted;