import React, { Component } from 'react';
import './SavedImagesItem.css';

export default class SavedImagesItem extends Component{

  handleDeleteClick(id, username) {
    this.props.deleteSaved(id);
    setTimeout(() => {this.props.getSavedImages(username)}, 300);
  }


  render(){
    return (
      <div className="saved-container">
        <div className="saved-image-container">
            <img src={this.props.roverurl} />
            <img src={this.props.bingurl} />
        </div>  
        <div className="saved-vision-container">
          <h3>{this.props.visiontext}</h3>
        </div>
        <div onClick={() => this.handleDeleteClick(this.props.id, this.props.username)}>Delete</div>

      </div>
    );
  }
}


