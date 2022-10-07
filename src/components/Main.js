import React, { useState, useEffect } from "react";
import axios from "axios";

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
import LoginIcon from "@mui/icons-material/Login";

const Home = (props) => {
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          style={{ background: "#ffffff", color: "#000000", opacity: "0.9" }}
          display="flex"
          flex-direction={"column"}
          maxWidth={600}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={50}
          padding={5}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ":hover": {
              boxShadow: "8px 8px 8px black",
            },
          }}
        >
          <div>
            <Typography variant="h4" padding={3}>
              Welcome
            </Typography>
          </div>
          <TableContainer>
            <Table>
              <TableHead>
                <TableCell></TableCell>
                <TableCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  lectus tellus, vulputate ac lacinia id, consequat in ipsum.
                  Quisque quis tempor justo. Integer a enim et odio bibendum
                  venenatis placerat sit amet metus. Nulla facilisi. Vivamus eu
                  odio at lorem efficitur gravida sit amet id eros. Etiam eget
                  nibh ultricies, posuere sapien eu, tincidunt ex. Vestibulum
                  dignissim arcu et mollis sollicitudin. <br /> <br />
                  Curabitur vulputate nulla vitae eros interdum, sed sagittis
                  ante malesuada. Cras luctus ipsum auctor euismod facilisis.
                  Curabitur tempus augue at orci fermentum, a dignissim ligula
                  volutpat. Curabitur eu massa auctor lorem commodo ullamcorper
                  suscipit at nisl. Donec quis lacus magna. Sed egestas sapien
                  tincidunt mi finibus, vitae sodales lectus lacinia. Vestibulum
                  nisi tortor, posuere ullamcorper suscipit tempor, tempus vel
                  nisl.
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

export default Home;
