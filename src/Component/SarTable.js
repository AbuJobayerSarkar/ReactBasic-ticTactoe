import React, { Component } from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import axios from 'axios';

class SarTable extends Component {



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
        //const sa = <button>send</button>
        const tableData=this.state.get
        const col =[{Header:"Name",accessor:"name"},{Header:"Capital",accessor:"capital"}];
        fn()

       return (
           <div>
                    <audio id="welcome">
            
            <source src="./BirdSing.mp3" type="audio/mpeg"> 
        
                </audio>
               <ReactTable
                 data={tableData}
                 columns={col}
                 defaultPageSize={7}
                 pageSizeOptions={[1,3,5,7]}
                /> 
           </div>
       );
    }
}

export default SarTable;

/*
<ReactTable
               data={tableData}
               columns={col}
               defaultPageSize={7}
               pageSizeOptions={[1,3,5,7]}
              /> 

              */


              
    async function fn(){


        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioDevices = devices.filter(device => device.kind === 'audiooutput');
        const audio = document.createElement('audio');
        
        console.log(audioDevices)
        await audio.setSinkId(audioDevices[0].deviceId);

        console.log('Audio is being played on ' + audio.sinkId);
        var audioPlay = new Audio('./BirdSing.mp3');
         audioPlay.play()
        }