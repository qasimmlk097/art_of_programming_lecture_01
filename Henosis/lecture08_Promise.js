let waitingData = new Promise ((resolve, reject)=>{
setTimeout(()=>{
    resolve('Ali')
},2000)

})
waitingData.then((data)=>{
    console.log(`Helo My Friend ${data}, how Are you?`);
})