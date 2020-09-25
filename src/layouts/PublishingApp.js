import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({ });

class PublishingApp extends Component {
   constructor(props){
       super(props);
   }
    render() {
        console.log(this.props);
        return (
            <div>
                Our publishing app    
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishingApp);


