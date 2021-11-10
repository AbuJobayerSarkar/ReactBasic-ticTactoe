import React, { Component } from 'react';

class select extends Component {
   constructor(){
       super()
       this.state = {
           name1: 'jobayer',
           name2: 'sarkar',
            name3: 'abu' ,
            auto:'sarkar'

    }
   }
  onChangeHandler = (event)=> {
    var selectedValue = event.target.value;
     this.setState({auto:selectedValue})
     
 }
    render() {
        return (
            <div>
                <p>{this.state.auto}</p>
                <select onChange={this.onChangeHandler} value = {this.state.auto}>
                    <option>
                        {this.state.name1}
                     </option>
                    <option>
                    {this.state.name2}
                    </option>
                    <option>
                    {this.state.name3}
                    </option>
                </select>
            </div>
        );
    }
}

export default select;