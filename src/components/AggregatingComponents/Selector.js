import React from 'react';

import SelectorButton from '../RenderingComponents/SelectorButton';

import '../../css/Selector.css';

class Selector extends React.Component{
    
    state={currentlySelected:this.props.defaultValue};

    handleClick=(e)=>{
        this.setState({currentlySelected:e.target.value});
    }

    render(){
        const buttons=this.props.buttonData.map(({text,value,checked})=>{
            return (
                <SelectorButton key={text} buttonText={text} value={value} defaultChecked={checked} onClick={this.handleClick} />
            );
        });

        const filteredComponents=this.props.components.filter(
            item=>item.props[this.props.filterProperty].includes(this.state.currentlySelected)
        );

        return(
            <div className="section"> 
                <div className="container selector">
                    <div className="row mb-5">
                        <div className="col-12">
                            <div className="btn-group btn-group-toggle justify-content-center d-flex" data-toggle="buttons">
                                {buttons}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {filteredComponents}
                    </div>
                </div>
            </div>
        );
    }
}
export default Selector;