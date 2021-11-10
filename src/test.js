async function fn(){


    const devices = await navigator.mediaDevices.enumerateDevices();
    const audioDevices = devices.filter(device => device.kind === 'audiooutput');
    const audio = document.createElement('audio');
    
    console.log(audioDevices)
    //await audio.setSinkId(audioDevices[0].deviceId);
    //console.log('Audio is being played on ' + audio.sinkId);
    
    }
    
    fn()