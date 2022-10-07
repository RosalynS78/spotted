import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LoginIcon from "@mui/icons-material/Login";


const Login = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
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

  const login = (e) => {
    document.cookie = "loggedIn=true;max-age=60*1000";
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    axios.post('https://spotteddb.herokuapp.com/auth/login', {
    // axios
    //   .post("http://localhost:4000/auth/login", {
        username: state.username,
        password: state.password,
      })
      .then((response) => {
        console.log(response);
        document.cookie = `jwt=${response.headers.authorization};max-age=60*1000`;
        document.cookie = `userId=${response.data.userId};max-age=60*1000`;
        login();
      })
      .catch(function (error) {
        console.log(error);
      });
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
           <a href="http://facebook.com"><FacebookIcon fontSize="medium" />
           <InstagramIcon fontSize="medium" /></a>
            <a href="http://instagram.com"> </a>
            <a href="http://google.com"> <GoogleIcon fontSize="medium" /></a>
            <Typography variant="h6" padding={3}>
              New? <br />
              <Button>
                <Link to="/signup">Sign up</Link>
              </Button>
              <br /> for an account
            </Typography>
          </div>

          <form
            className="login-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <TextField
              required
              margin="normal"
              onChange={handleChange}
              value={state.username}
              name="username"
              label="User Name"
              type="text"
            />

            <TextField
              required
              margin="normal"
              // required
              onChange={handleChange}
              value={state.password}
              name="password"
              label="Password"
              type="password"
            />

            <Button
              endIcon={<LoginIcon />}
              sx={{ marginTop: 3, BorderRadius: 3 }}
              type="submit"
              variant="contained"
              color="warning"
            >
              Login
            </Button>
            <br />
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
