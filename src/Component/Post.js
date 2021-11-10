import axios from 'axios';
import React, { Component } from 'react';

class Post extends Component {

    constructor(){
        super()
        this.state={
            postData:"test",
            getData:""
        }
    }


onClickHandler=()=>{
    axios.post('https://webhook.site/6336d641-4015-4098-a187-52f6d168a65d',this.state.postData)
    .then(response=>{
        this.setState({getData:response.data})
        alert(this.state.getData)
    })
    .catch(error=>{console.log(error)})
}

onChangeHandler=(event)=>{
    var sData = event.target.value;
    this.setState({postData:sData})
}

    render() {
        return (
            <div>
               <input onChange={this.onChangeHandler} type="text"/>
               <p>{this.state.postData}</p>
               <button onClick={this.onClickHandler}>Send</button>
                   
            </div>
        );
    }
}

export default Post;