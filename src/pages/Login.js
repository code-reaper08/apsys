import React from "react";
import { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { InputAdornment } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
const Login = ({ handleChange }) => {
  //  Login flow
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  //   Login functionality
  const LogIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email + "@sathybama.ac.in", password)
      .then((auth) => {
        alert(`Successfully logged in ✔ as ${auth.user}`);
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Grid>
      <form>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <Input
            label="Username"
            type="email"
            value={email}
            // variant="filled"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter username"
            fullWidth
            required
            endAdornment={
              <InputAdornment variant="filled" position="end">
                @sathyabama.ac.in
              </InputAdornment>
            }
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?
            <Link href="#" onClick={() => handleChange("event", 1)}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </form>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={LogIn}
        style={btnstyle}
        fullWidth
      >
        Sign in
      </Button>
    </Grid>
  );
};
export default Login;
