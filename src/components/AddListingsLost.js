import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
} from "@mui/material";

import cookie from 'cookie'

const AddListingsLost = (props) => {

  const navigate = useNavigate();
  const cookies = cookie.parse(document.cookie);

  const [state, setState] = useState({
    gender: "",
    name: "",
    species: "",
    date: "",
    email: "",
    phone: "",

  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state)
    console.log(cookies)

    axios.post('https://spotteddb.herokuapp.com/lost', {
      // axios
      //   .post("http://localhost:4000/lost", {
      gender: state.gender,
      name: state.name,
      species: state.species,
      date: state.date,
      email: state.email,
      phone: state.phone,

      userId: parseInt(cookies.userId),
    }, {
      headers: {
        Authorization: cookies.jwt
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error)
      })
    navigate("/listingslost")
  };


  return (
    <div className="logger">
      <Container maxWidth="sm">
        <Box
          style={{ background: "#ffffff", color: "#000000", opacity: "0.9" }}
          display="flex"
          flex-direction={"column"}
          maxWidth={600}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={30}
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
              REPORT MISSING PET
            </Typography>
          </div>
          <form
            className="lost-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <TextField
              margin="normal"
              onChange={handleChange}
              value={state.name}
              name="name"
              label="Name"
              type="text"
            />
            <TextField
              margin="normal"
              onChange={handleChange}
              value={state.gender}
              name="gender"
              label="Gender"
              type="text"
            />

            <TextField
              margin="normal"
              onChange={handleChange}
              value={state.species}
              name="species"
              label="Species"
              type="text"
            />

            <TextField
              margin="normal"
              // required
              onChange={handleChange}
              value={state.date}
              name="date"
              label="Date Missing"
              type="text"
            />
            <TextField
              required
              margin="normal"
              onChange={handleChange}
              value={state.email}
              name="email"
              label="Email"
              type="text"
            />
            <TextField
              margin="normal"
              onChange={handleChange}
              value={state.phone}
              name="phone"
              label="Phone"
              type="text"
            />

            <Button
              sx={{ marginTop: 3, BorderRadius: 3 }}
              type="submit"
              variant="contained"
              color="warning"
            >
              REPORT MISSING
            </Button>
            <br />
          </form>
        </Box>
      </Container>
    </div>
  );
};


export default AddListingsLost;
