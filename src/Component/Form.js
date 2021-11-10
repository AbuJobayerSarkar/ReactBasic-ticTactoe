import React, { Component } from 'react';

class Form extends Component {


    constructor(){
        super();
        this.state={
            name:'sarkar',
            password:'password',

        }
    }





    onChangeHandler = (event)=>{
              var newname = event.target.name;
              var newValue = event.target.value
              this.setState({[newname]:newValue})

    }

    onSubmitHandler= ()=>{
        alert(this.state.name);
    }

    render() {
        return (
            
            <div>
                <p>your Name is: {this.state.name}</p>
                <p>Your Password is: {this.state.password}</p>
                <br></br>
                <form onSubmit={this.onSubmitHandler}>
               <input name="name" type="text" onChange={this.onChangeHandler} placeholder='your email'></input>
               <input name="password" type="text" onChange={this.onChangeHandler} placeholder='your password'></input>
               <input type="submit" value="Submit"></input> 
               </form>
            </div>
        );
    }
}

export default Form;