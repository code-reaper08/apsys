import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@material-ui/core";
import { Input } from "@mui/material";
// import InputAdornment from "@mui/material/InputAdornment";
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));
function getSteps() {
  return [
    "Profile",
    "Score A",
    "Score B",
    "Score C",
    "Preview and Submit",
    "S Score",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <span>Change Image</span>
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              id="output"
              width="150"
              alt="profile"
            />
            <label className="-label" for="file">
              <span className="glyphicon glyphicon-camera"></span>
            </label>
            <input id="file" type="file" onchange="loadFile(event)" />
          </Box>
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="first name"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="Employee Number"
            label="Employee Number"
            variant="outlined"
            placeholder="Enter Employee Number"
            fullWidth
            margin="normal"
            name="nickName"
          />
          <TextField
            id="Phone Number"
            label="Phone number"
            variant="outlined"
            placeholder="Phone number"
            input
            type="tel"
            fullWidth
            margin="normal"
            name="nickName"
          />
          <TextField
            id="Date of birth"
            label="Birth Date"
            variant="outlined"
            placeholder="dd-mm-yyyy"
            input
            type="text"
            fullWidth
            margin="normal"
            name="nickName"
          />
          <TextField
            id="Name of Department & School/Research Centre"
            label="Name of Department & School/Research Centre"
            variant="outlined"
            placeholder="Name of Department & School/Research Centre"
            input
            type="text"
            fullWidth
            margin="normal"
            name="nickName"
          />
          <TextField
            id="Date of joining"
            label="Date of joining"
            variant="outlined"
            placeholder="dd-mm-yy"
            input
            type="text"
            fullWidth
            margin="normal"
            name="nickName"
          />
          <TextField
            id="Whether Awarded PhD"
            label="Whether Awarded PhD"
            variant="outlined"
            placeholder="Whether Awarded PhD"
            input
            type="text"
            fullWidth
            margin="normal"
            name="nickName"
          />
          <TextField
            id="Year Awarded PhD"
            label="Year Awarded PhD"
            variant="outlined"
            placeholder="Year Awarded PhD"
            input
            type="text"
            fullWidth
            margin="normal"
            name="nickName"
          />
          <TextField
            id="Email id"
            label="Email id"
            variant="outlined"
            placeholder="Email id"
            input
            type="text"
            fullWidth
            margin="normal"
            name="nickName"
          />
          <TextField
            id="Current Gross Salary"
            label="Current Gross Salary"
            variant="outlined"
            placeholder="Current Gross Salary"
            input
            type="text"
            fullWidth
            margin="normal"
          />
        </>
      );

    case 1:
      return (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell align="center">Activity Name</TableCell>
                  <TableCell align="center">Points Alloted</TableCell>
                  <TableCell align="center">No. of Activities</TableCell>
                  <TableCell align="center">Points Scored</TableCell>
                  <TableCell align="center">Upload Proof</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">1</TableCell>
                  <TableCell align="center">
                    {" "}
                    E-Materials (National/International Platforms like SWAYAM,
                    Unacademy, Udemy, Coursera, etc)
                  </TableCell>
                  <TableCell align="center">20.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">2</TableCell>
                  <TableCell align="center">
                    E-Materials (Sathyabama LMS)
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">3</TableCell>
                  <TableCell align="center">
                    Initiating courses in new and emerging areas/Labs
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">4</TableCell>
                  <TableCell align="center">
                    Innovative Teaching (ICT-enabled classroom, Flipped
                    Classroom, Case-Studies, Solving Complex Engineering
                    Problems, Activity based learning, Gamification, Quizzes,
                    etc.)
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">5</TableCell>
                  <TableCell align="center">
                    YouTube Lectures with more than 100 Views
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">6</TableCell>
                  <TableCell align="center">
                    YouTube Lectures with more than 100 Views
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">7</TableCell>
                  <TableCell align="center">Extra Teaching Activity</TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">8</TableCell>
                  <TableCell align="center">
                    {" "}
                    Fellowships, Awards from recognized bodies
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">9</TableCell>
                  <TableCell align="center">
                    Member in other academic boards such as Board of Studies,
                    Academic Council in state/national institutes or
                    universities or Govt. of India committees/panel
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">10</TableCell>
                  <TableCell align="center">
                    Value Added Programmes (30 hours course, Points be claimed
                    by course co-ordinator)
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">11</TableCell>
                  <TableCell align="center">
                    Overall contribution to the department (to be evaluated by
                    the respective department HODs) (Max. 10 points/person)
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">12</TableCell>
                  <TableCell align="center">
                    Evaluation of examination papers on time without any
                    discrepancies (Maximum 10 points yearly, ie., two semesters
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th">13</TableCell>
                  <TableCell align="center">
                    Mentor for students in national level events, like Smart
                    India Hackathon, AICTE Lilavati Awards, Vishwakarma Award,
                    etc. (Points can be claimed only if studnets have won the
                    event)
                  </TableCell>
                  <TableCell align="center">5.0</TableCell>
                  <TableCell align="center">
                    <Input type="number" name="" id="" />
                  </TableCell>
                  <TableCell align="center">0.00</TableCell>
                  <TableCell align="center">
                    <Input type="file" name="" id="" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      );
    case 2:
      return (
        <>
          <table style="width:100%">
            <tr>
              <th>
                <center>
                  Research Papers Published in Journals with Impact Factor
                  during June 2020 to May 2024 (Article ScoreAuthorship
                  Position)
                </center>
              </th>
            </tr>
            <tr>
              <th></th>
              <th>Name of Journal</th>
              <th>Imapct Factor</th>
              <th>DOI Link</th>
              <th>Points</th>
            </tr>
            <tr>
              <th rowspan="6">Single Author(Only Sathyabama Affiliation)</th>
            </tr>
            <tr>
              <td>
                <input width="100%" type="text-area" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
              <td>
                <input type="link" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
            </tr>
            <tr>
              <td>
                <input width="100%" type="text-area" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
              <td>
                <input type="link" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
            </tr>
            <tr>
              <td>
                <input width="100%" type="text-area" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
              <td>
                <input type="link" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
            </tr>
            <tr>
              <td>
                <input width="100%" type="text-area" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
              <td>
                <input type="link" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
            </tr>
            <tr>
              <td>
                <input width="100%" type="text-area" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
              <td>
                <input type="link" />
              </td>
              <td>
                <input width="100%" type="number" value="0.0" />
              </td>
            </tr>
            <tr>
              <th rowspan="6">
                Both First & Corresponding Author are the same person(Only
                Sathyabama Affiliation)
              </th>

              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="link" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="link" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                </tr>
              </tr>
              <tr>
                <th rowspan="2">
                  First & Corresponding Author are from Sathyabama
                </th>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="text-area" />
                </td>

                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <th rowspan="6">
                  First Author from Sathyabama & Corresponding Author from other
                  institute
                </th>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>

              <tr>
                <th rowspan="2">
                  All Co-Authors (Excluding First and Corresponding Author,
                  Select the No of Co-Authors)
                </th>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <th>
                  <center>
                    Research Papers Published in Journals with No Impact Factor
                    during June 2020 to May 2024
                  </center>
                </th>
              </tr>
              <tr>
                <th rowspan="7">
                  Paper published only in Scopus Indexed/UGC CARE Journals (No
                  impact factor)
                </th>
              </tr>
              <tr>
                <th>Name of Journal</th>
                <th>
                  Role (Select 1 for First/Corresponding Author & 2 for
                  co-author)
                </th>
                <th>DOI Link</th>
                <th>Points</th>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <td>
                  <input width="100%" type="text-area" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
                <td>
                  <input type="link" />
                </td>
                <td>
                  <input width="100%" type="number" value="0.0" />
                </td>
              </tr>
              <tr>
                <th>
                  <center>Article ScoreCitations</center>
                </th>
                <tr>
                  <th>
                    Average Citations as per WoS (Total Citations/No of articles
                    published so far after joining Sathyabama)
                  </th>
                  <tr>
                    <th>No Papers Published after joining Sathyabama</th>
                    <th>Total Citations</th>
                    <th>Average Citations</th>
                    <th>H-index (as per WoS)</th>
                    <th>Points</th>
                  </tr>
                  <tr>
                    <td>
                      <input width="100%" type="text-area" />
                    </td>
                    <td>
                      <input width="100%" type="text-area" />
                    </td>
                    <td>
                      <input width="100%" type="text-area" />
                    </td>
                    <td>
                      <input width="100%" type="text-area" />
                    </td>
                    <td>
                      <input width="100%" type="number" value="0.0" />
                    </td>
                  </tr>
                </tr>
                <tr>
                  <th>
                    <center>Research Activities</center>
                  </th>
                </tr>
                <tr>
                  <th>
                    <center>
                      Books Published/Edited/Guest Editor/Editor Published (in
                      reputed publishing house) during June 2020 to May 2024
                    </center>
                  </th>
                </tr>

                <tr>
                  <th>Name of Publisher</th>
                  <th>No Books Published/Edited/Guest Editor/Editor</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Book Chapters Published (in reputed publishing house)
                      during June 2020 to May 2024
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Publisher</th>
                  <th>No Book Chapters</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Articles Published in Leading Magazines/Newsletters during
                      June 2020 to May 2024
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Magazine/Newsletter</th>
                  <th>No Articles</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Reviewer for Journals with Impact Factor during June 2020
                      to May 2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Journal Reviewed</th>
                  <th>No Reveiws in that Journal</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Product Patent if Granted Only (All Inventors) during June
                      2020 to May 2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Product Patent</th>
                  <th> Choose 1 if you are awarded a product patent</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Design Patent/Copyright if Granted Only (All Inventors)
                      during June 2020 to May 2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of design patent/Copyright</th>
                  <th>Role</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Commercial Product Developed during June 2020 to May 2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Product Developed</th>
                  <th>No Products developed</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Start Up from Institute during June 2020 to May 2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Start-Up</th>
                  <th> Choose 1 if you are a Start-up</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Research Guidance (Full-Time PhD Scholar Guiding) during
                      June 2020 to May 2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>No of Full-time Scholars currently pursuing PhD</th>
                  <th>Points alloted</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>10</td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Research Guidance (Part-Time PhD Scholar Guiding) during
                      June 2020 to May 2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>No of Part-time Scholars currently pursuing PhD</th>
                  <th>Points alloted</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>5</td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Research Guidance (Full-Time Scholar Completed PhD) during
                      June 2020 to May 2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>No of Full-time Scholars Awarded the Degree</th>
                  <th>Points alloted</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>20</td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Research Guidance (Part-Time Scholar Completed PhD) during
                      June 2020 to May 2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>No of Part-time Scholars Awarded the Degree</th>
                  <th>Points alloted</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>10</td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Projects (As PI) (Based on amount received during June
                      2020 to May 2021)
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Project and Funding Agency</th>
                  <th>
                    Amount Recieved in Lakhs for the period June 2020 to May
                    2021 (Enter 1.00 for 1 Lakh, 0.2 for twenty thousand)
                  </th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Projects (As Co-PI) (Based on amount received during June
                      2020 to May 2021)
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Project and Funding Agency</th>
                  <th>
                    Amount Recieved in Lakhs for the period June 2020 to May
                    2021 (Enter 1.00 for 1 Lakh, 0.2 for twenty thousand)
                  </th>
                  <th>No of Investigators (inclusive of PI)</th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Projects (As Mentor/Supervisor for NPDF, UGC-Postdoc, RA,
                      WoS-A,-B,-C, etc) (Based on amount received during June
                      2020 to May 2021)
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Project and Funding Agency</th>
                  <th>
                    Amount Recieved in Lakhs for the period June 2020 to May
                    2021 (Enter 1.00 for 1 Lakh, 0.2 for twenty thousand)
                  </th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>
                    <center>
                      Fund Generated Through Consultancy during June 2020 to May
                      2021
                    </center>
                  </th>
                </tr>
                <tr>
                  <th>Name of Consultant Work</th>
                  <th>
                    Amount Generated in Lakhs (Enter 1.00 for 1 Lakh, 0.2 for
                    twenty thousand)
                  </th>
                  <th>Points Scored</th>
                  <th>Upload Proof</th>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                  <td>
                    <input width="100%" type="number" value="0.0" />
                  </td>
                  <td>
                    <input type="file" id="myfile" name="myfile" />
                  </td>
                </tr>
                <tr>
                  <th>Total Score B</th>
                  <td>
                    <input width="100%" type="text-area" />
                  </td>
                </tr>
              </tr>
            </tr>
          </table>
        </>
      );
    case 3:
      return (
        <>
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            name="cardNumber"
          />
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            name="cardMonth"
          />
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            name="cardYear"
          />
        </>
      );
    default:
      return "unknown step";
  }
}
const LinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };

  return (
    <Typography>
      <div>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography
                  variant="caption"
                  align="center"
                  style={{ display: "block" }}
                >
                  optional
                </Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <Typography variant="h3" align="center">
            Thank You
          </Typography>
        ) : (
          <>
            <form>{getStepContent(activeStep)}</form>
            <Button
              className={classes.button}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              back
            </Button>
            {/* {isStepOptional(activeStep) && (
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                onClick={handleSkip}
              >
                skip
              </Button>
            )} */}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Submit & Proceed"}
            </Button>
          </>
        )}
      </div>
    </Typography>
  );
};
export default LinearStepper;
