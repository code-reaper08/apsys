import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Input } from "@material-ui/core";
import { InputAdornment } from "@material-ui/core";
import { auth } from "../firebase";
const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };

  //   form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const history = useHistory();
  const [curUser, setCurUSer] = useState("");
  //   register function
  //   email = email + "@sathybama.ac.in";
  //   console.log(email);
  const register = (e) => {
    e.preventDefault();
    if (password === password2) {
      auth
        .createUserWithEmailAndPassword(email + "@sathybama.ac.in", password)
        .then((auth) => {
          console.log(auth);
          if (auth) {
            setCurUSer(auth.user.delegate.email);
            console.log(auth.user);
            console.log(`email: ${curUser}`);
            history.push("/");
          }
        })
        .catch((error) => alert(error.message));
    } else {
      alert("DO NOT MATCH");
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
          <TextField fullWidth label="Name" placeholder="Enter your name" />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="Email"
            placeholder="Enter your email"
            endAdornment={
              <InputAdornment variant="filled" position="end">
                @sathyabama.ac.in
              </InputAdornment>
            }
          />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <TextField
            type="password"
            fullWidth
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Confirm your password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
        </form>
        <Button
          onClick={register}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign up
        </Button>
      </Paper>
    </Grid>
  );
};

export default Signup;
