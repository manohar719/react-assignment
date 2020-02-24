import React from 'react';
import './App.css';
import PropertyList from './components/Property-list.js';
import PropertyDetail from './components/Property-detail.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shared_var: "init",
      selectedProperty: null
    }
  }

  setSelection = (data) => {
    this.setState({selectedProperty : data})
  }

  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <div className="container-fuild">
            <a href="#name" className="brand w-nav-brand">
              <img src="https://uploads-ssl.webflow.com/5e4eea4f69f88e24df6bf429/5e4efdd106014b740f0e9c8e_LogoMultiLivingSans.svg" width="104" alt="" />
            </a>
          </div>
          <hr></hr>
          <div className="container">
            <PropertyList setActiveElement={this.setSelection}/>
            <PropertyDetail selectedProperty={this.state.selectedProperty} />
          </div>
        </div>
      </div>
    );
  }
}

// moving this component to components folder to make better understanding as the projects goes on extend it will help us to maintain code and modularity
// class PropertyList extends React.Component {

//   constructor(props) {
//     super(props);
//     this.setActiveElement = this.setActiveElement.bind(this);
//     this.state = {
//       propertyList: null,
//       isLoading: true,
//       offset: 0,
//       limit: 4,
//       active: false,
//       activeId: 0
//     };
//   }

//   setActiveElement(id) {
//     this.setState({ activeId: id })
//   }

//   data = dummyData

//   render() {
//     if (!this.state.isLoading) {
//       return <div className="loading-list">Loading...</div>
//     }
//     if (!this.data.length) {
//       return <div className="loading-list">No Property is found.</div>
//     }
//     return (
//       <div className="property-list-wrapper">
//         <span className="count-title">SHOWING {this.state.limit} RESULTS IN POWAI WITH {this.data.length} UNITS</span>
//         <div className="property-wrap customScrollbar">
//           {
//             this.data.map((val, index) => {
//               return (

//                 <div
//                   key={index}
//                   onClick={() => this.setActiveElement(index)}
//                   className={`property-card ${index === this.state.activeId ? "selected" : ""}`}
//                 >
//                   <div className="card-title">
//                     <h4>{val.name}</h4>
//                     {
//                       typeof val.type != 'undefined' ? <span>{val.type}</span> : ''
//                     }

//                   </div>
//                   <div className="card-content">
//                     <p><span className="floor-icon"></span>{val.floor}</p>
//                     <p><span className="view-icon"></span>{val.view}</p>
//                   </div>
//                   <div className="card-footer">
//                     <h5 className="primary-clr">Rs. {val.actualPrice}</h5>
//                     <span><strike>Rs. {val.discountedPrice}</strike></span>

//                   </div>
//                 </div>
//               )
//             })
//           }
//         </div>
//       </div>
//     );
//   }
// }


//Also moving this component to component folder
// class ProperDetail extends React.Component {
//   render() {
//     return (
//       <div className="property-detail-wrapper br-rounded">
//         <div className="card-img">
//           <img src={banner} alt="property"></img>
//         </div>
//         <div className="card-details">
//           <div className="card-detail-text">
//             <h4 className="pri-text">2BHK, Hiranandani Atlantis</h4>
//             <p className="para">Hiranandani Gardens, Powai</p>
//           </div>
//           <button>Added to my bids</button>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
