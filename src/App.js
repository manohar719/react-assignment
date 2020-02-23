import React from 'react';
import './App.css';
import banner from './assets/banner/property1.jpeg';

function App() {
  return (
    <div className="App">
      <div class="wrapper"> 
        <div class="container-fuild">
          <a href="#" class="brand w-nav-brand">
            <img src="https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4efdd106014b740f0e9c8e_LogoMultiLivingSans.svg" width="104" alt=""/>
          </a>
        </div>
        <hr></hr>
        <div class="container">
      <PropertyList name="Own Property" />
      <ProperDetail property="Property Detail"/>
    </div>
    
    </div>
      </div>
  );
}

class PropertyList extends React.Component {
  render() {
    return (
      
          
           <div class="property-list-wrapper">
            <span class="count-title">SHOWING 8 RESULTS IN POWAI WITH 26 UNITS</span>
            <div class="property-card selected">
              <div class="card-title">
                <h4>2BHK, Hiranandani Atlantis</h4>
                <span>GOLD</span>
              </div>
              <div class="card-content">
                <p><span class="floor-icon"></span>higher floor</p>
                <p><span class="view-icon"></span>garden facing</p>
              </div>
              <div class="card-footer">
              <h5 class="primary-clr">Rs. 70,000</h5>
              <span><strike>Rs. 80,000</strike></span>
                
              </div>
            </div>
            <div class="property-card">
              <div class="card-title">
                <h4>2BHK, Hiranandani Atlantis</h4>
                <span>GOLD</span>
              </div>
              <div class="card-content">
                <p><span class="floor-icon"></span>higher floor</p>
                <p><span class="view-icon"></span>garden facing</p>
              </div>
              <div class="card-footer">
              <h5 class="primary-clr">Rs. 70,000</h5>
              <span><strike>Rs. 80,000</strike></span>
                
              </div>
            </div>
            <div class="property-card">
              <div class="card-title">
                <h4>2BHK, Hiranandani Atlantis</h4>
                <span>GOLD</span>
              </div>
              <div class="card-content">
                <p><span class="floor-icon"></span>higher floor</p>
                <p><span class="view-icon"></span>garden facing</p>
              </div>
              <div class="card-footer">
              <h5 class="primary-clr">Rs. 70,000</h5>
              <span><strike>Rs. 80,000</strike></span>
                
              </div>
            </div>
          </div>
    );
  }
}

class ProperDetail extends React.Component {
  render() {
    return (
      <div class="property-detail-wrapper br-rounded">
        <div class="card-img">
          <img src={banner} alt="property"></img>
        </div>
        <div class="card-details">
          <div class="card-detail-text">
            <h4 class="pri-text">2BHK, Hiranandani Atlantis</h4>
            <p class="para">Hiranandani Gardens, Powai</p>
          </div>
          <button>Added to my bids</button>
        </div>
      </div>
    );
  }
}



export default App;
