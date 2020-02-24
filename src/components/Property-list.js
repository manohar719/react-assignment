import React from 'react';
import dummyData from './sample.json'

class PropertyList extends React.Component {

    constructor(props) {
      super(props);
      this.setActiveElement = this.setActiveElement.bind(this);
      this.state = {
        propertyList: null,
        isLoading: true,
        offset: 0,
        limit: 4,
        active: false,
        activeId: 0,
        selectedProperty: null
      };
    }
    
    setActiveElement(id) {
      this.setState({ activeId: id });
      this.setState({selectedProperty: dummyData[id]});
    }
  
    data = dummyData;

    render() {
      if (!this.state.isLoading) {
        return <div className="loading-list">Loading...</div>
      }
      if (!this.data.length) {
        return <div className="loading-list">No Property is found.</div>
      }
      return (
        <div className="property-list-wrapper">
          <span className="count-title">SHOWING {this.state.limit} RESULTS IN POWAI WITH {this.data.length} UNITS</span>
          <div className="property-wrap customScrollbar">
            {
              this.data.map((val, index) => {
                return (
  
                  <div
                    key={index}
                    onClick={() => this.setActiveElement(index)}
                    className={`property-card ${index === this.state.activeId ? "selected" : ""}`}
                  >
                    <div className="card-title">
                      <h4>{val.name}</h4>
                      {
                        typeof val.type != 'undefined' ? <span>{val.type}</span> : ''
                      }
  
                    </div>
                    <div className="card-content">
                      <p><span className="floor-icon"></span>{val.floor}</p>
                      <p><span className="view-icon"></span>{val.view}</p>
                    </div>
                    <div className="card-footer">
                      <h5 className="primary-clr">Rs. {val.actualPrice.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</h5>
                      <span><strike>Rs. {val.discountedPrice.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</strike></span>
  
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      );
    }
  }

  export default PropertyList;