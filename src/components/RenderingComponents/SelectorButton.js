import React from 'react';

class SelectorButton extends React.Component{
    render(){
        return(
            <label className={`btn btn-sm btn-primary ${this.props.defaultChecked?"active":""}`}>
                <input 
                    type="radio" 
                    name="shuffle-filter" 
                    value={this.props.value} 
                    defaultChecked={this.props.defaultChecked?true:null} 
                    onClick={this.props.onClick}
                />
                {this.props.buttonText}
            </label>
        );
    }
}
export default SelectorButton;