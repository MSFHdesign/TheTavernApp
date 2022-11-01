import { Box } from "@mui/material";
import React from "react";

import Avatar from "react-avatar-edit";
// Michael

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const src = "https://dummyimage.com/600x400/000/fff";
    this.state = {
      preview: null,
      src
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 91680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }

  render() {
    return (
      <div>
        <Avatar
          width={390}
          height={295}
          onCrop={this.onCrop}
          onClose={this.onClose}
          onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.src}
          //crossOrigin="anonymous"
        />

        <Box sx={{display: 'flex', justifyContent: 'center', pt: 5 }}> 
        <img src={this.state.preview} alt="Preview" />
        </Box>
      </div>
    );
  }
}



export function ProfilPictureFunction() {
    return (<img src={this.state.preview} alt="Preview" />)
}
