import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  CardActions,
  CardContent,
  Button,
  Typography,
  Card,
  // Box,
  // TextField,
  // Divider,
  // List,
  // ListItem,
} from "@mui/material";

// import AddComments from "../containers/AddComments";
import AddImage from "../components/AddImage";

import axios from "axios";

const DetailsFound = (props) => {
  // const [value, setValue] = React.useState();
  // const [state, setState] = useState({
  //   comments: "",
  // });
  const [entry, setEntry] = useState();
  const [status, setStatus] = useState(0);
  // const { found } = props;
  // usePharams is a function that pulls information out from the addressbar
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://spotteddb.herokuapp.com/found/${id}`)
      // axios.get("http://localhost:4000/found")
      .then((res) => {
        setStatus(res.status);
        setEntry(res.data);
        //console.log(res.data)
      });
  }, []);
  console.log(entry);
  return (
    <Container>
      {/* { entry? ( entry.map(e => {
        return */}
      {status == 200 ? (
        <Card sx={{ m: 30, p: 5 }}>
         <AddImage />

          <CardContent>
            <Typography variant="h4" component="div">
              FOUND PET
            </Typography>
            <br />
            <Typography gutterBottom variant="h5" component="div">
              PET ID: #  {entry[0].foundId}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {entry[0].name}
            </Typography>
            <Typography padding={1}>DATE FOUND: {entry[0].date}</Typography>
            <Typography padding={1}>TYPE: {entry[0].species}</Typography>

            <Typography padding={1}>GENDER: {entry[0].gender}</Typography>
            {/* commentout <Typography padding={1}>COMMENTS: {e.comments}</Typography>    */}

            <Typography padding={1}>CONTACT </Typography>
            <Typography padding={1}>EMAIL: {entry[0].email}</Typography>
            <Typography padding={1}>PHONE: {entry[0].phone}</Typography>
          </CardContent>

          <CardActions>
            <Button size="small"><a href="http://facebook.com"></a>Share</Button>
          </CardActions>
        </Card>
      ) : (
        <h1>No</h1>
      )}

      {/* for later on */}

      <div className="map">
        {/* <Map address={details.address} zoom={15} /> */}
      </div>

      {/* <Card sx={{ m: 30, p: 12 }}>
        <List
sx={{
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
}}>
    <ListItem>
    <Typography padding={1}>USER: # {detailsfound.userId}</Typography>
    </ListItem>

    <ListItem> 
    <Typography padding={1}>COMMENTS: {detailsfound.comments}</Typography>
    </ListItem>
    <Divider ariant="inset" component="li" />
    </List>
    <br/>
    <br/>
      
    <AddComments />

        </Card> */}
    </Container>
  );
};

export default DetailsFound;
