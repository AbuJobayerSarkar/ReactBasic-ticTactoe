import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
     

    constructor(){
        super()
        this.state={
            post:'',
            get:[]
        }
    }
   
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(
            response=>{
                //console.log(response.data)
                this.setState({get:response.data})
            })
        .catch(
            error=>{
                console.log(error)
            })
    }
    

    render() {
       
         const getDat = this.state.get
        // console.log(getDat)
          const ids = getDat.map((sarkar)=>{
              return <li>{sarkar.name}</li>
          })
        
      
        return (
            <div>
                <ul>{ids}</ul>
            </div>
        );
    }
}

export default List;