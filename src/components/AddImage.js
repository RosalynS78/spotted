import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const styles = {
  fontFamily: 'sans-serif',
  justifyContent: 'center',
  img: {
    width: "250px",
   
  },
};

class AddImage extends React.Component {
  constructor() {
    super();
    this.state = {
      imgURL: "",
    };
  };

  getRandomImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        this.setState({
          imgURL: response.data.message,
        });
      })
      .catch(err => {
        console.log("error fetching image:", err);
      })
  }

  componentDidMount() {
    this.getRandomImage();
  }

  render() {
    const { imgURL } = this.state;
    return (
      <div style={styles}>
        <div>
          <img style={styles.img} alt="" src={imgURL}/>
        </div>
      </div>
    );
  }

}

export default AddImage;