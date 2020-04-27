import React, { Component } from 'react';
import { connect } from 'react-redux'

import { storage } from '../config/fbConfig'

class ImageUpload extends Component {
    state = {
        image: null,
        url: ""
    }
    handleChange = (e) => {
        if(e.target.files[0]){
            const image = e.target.files[0];
            this.setState(() => ({image}));
        }
    }
    handleUpload = (e) => {
        e.preventDefault();
        const {auth} = this.props;
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
         (snapshot) => {
             //progress function
         },
          (error) => {
              //error function
              console.log(error);
         },
          () => {
              //complete function
              storage.ref('images').child(image.name).getDownloadURL().then(url => {
                  this.props.setUrl(url);
                  this.setState({url});
              })
         })
    }
    render(){
        return(
            <div>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
                <br/>
                <img src={this.state.url} alt="Uploaded images" height="100" width="200"/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ImageUpload)