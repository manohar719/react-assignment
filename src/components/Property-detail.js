import React from 'react';

class PropertyDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            property : props.selectedProperty
        }
    }
    
    render() {
        //console.log(this.state.property);
        let banner = 'https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4fde5ee7b6f88d892cc09c_GreySlateInterior-p-800.jpeg';
      return (
        <div className="property-detail-wrapper br-rounded">
          <div className="card-img">
            <img src={banner} alt="property"></img>
          </div>
          <div className="card-details">
            <div className="card-detail-text">
              <h4 className="pri-text">2BHK, Hiranandani Atlantis</h4>
              <p className="para">Hiranandani Gardens, Powai</p>
            </div>
            <button>Added to my bids</button>
          </div>
        </div>
      );
    }
  }

  export default PropertyDetail;