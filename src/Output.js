import React, { Component } from 'react';

class Output extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="col mt-5 p-3" style={{border:'2px solid teal'}}>
                        <h4 className="display-4 text-center">Here is your Generated Text</h4>
                       <p> {this.props.value}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Output;