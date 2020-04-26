import React, { Component } from 'react';

class Controls extends Component {
    constructor(props){
        super(props)
        this.state={
            value:props.value,
        }
    }
    handleChange=(e)=>{
        this.setState({value:e.target.value}) 
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.noOfParas(this.state.value);
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2 className='text-center'>React JS Random Text Generator</h2>
                        <p>=====================================================================================================</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-field">
                                  <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange} placeholder='Enter No of paragraphs'/>
                            </div>
                            <button className='btn btn-primary btn-block mt-3' type='submit'>Get Paragraphs</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Controls;