// import { Typography } from "@material-ui/core";
import React, { useState } from "react";
// import { TextField, Button, Stepper, Step, StepLabel } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import { Box } from "@material-ui/core";
import { Input } from "@mui/material";

const ScoreA = () => {
  const [ematscore, setEmatScore] = useState("");
  const [ematLMS, setEmatLMS] = useState("");
  const [initCourse, setInitCourse] = useState("");
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
                <Input
                  value={ematscore}
                  onChange={(e) => setEmatScore(e.target.value)}
                  type="number"
                  name=""
                  id=""
                />
              </TableCell>
              <TableCell align="center">
                {ematscore > 20 ? "Exceeded value" : 20 * ematscore}
              </TableCell>
              <TableCell align="center">
                <Input type="file" name="" id="" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">2</TableCell>
              <TableCell align="center">E-Materials (Sathyabama LMS)</TableCell>
              <TableCell align="center">5.0</TableCell>
              <TableCell align="center">
                <Input
                  value={ematLMS}
                  onChange={(e) => setEmatLMS(e.target.value)}
                  type="number"
                  name=""
                  id=""
                />
              </TableCell>
              <TableCell align="center">{5 * ematLMS}</TableCell>
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
                <Input
                  value={initCourse}
                  onChange={(e) => setInitCourse(e.target.value)}
                  type="number"
                  name=""
                  id=""
                />
              </TableCell>
              <TableCell align="center">{5 * initCourse}</TableCell>
              <TableCell align="center">
                <Input type="file" name="" id="" />
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th">4</TableCell>
              <TableCell align="center">
                Innovative Teaching (ICT-enabled classroom, Flipped Classroom,
                Case-Studies, Solving Complex Engineering Problems, Activity
                based learning, Gamification, Quizzes, etc.)
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
                Academic Council in state/national institutes or universities or
                Govt. of India committees/panel
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
                Value Added Programmes (30 hours course, Points be claimed by
                course co-ordinator)
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
                Overall contribution to the department (to be evaluated by the
                respective department HODs) (Max. 10 points/person)
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
                Mentor for students in national level events, like Smart India
                Hackathon, AICTE Lilavati Awards, Vishwakarma Award, etc.
                (Points can be claimed only if studnets have won the event)
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
};

export default ScoreA;
