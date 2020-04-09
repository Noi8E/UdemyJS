

// setTimeout(() => {
//     console.log('Preparing Data...')
//     const backendData = {
//         server: 'AWS',
//         port: 8080,
//         BFF: true,
//     }
//     setTimeout(() => {
//         backendData.BFF = false;
//         console.log(backendData);
//         console.log('Data is recieved');

//     }, 2000)
    
// }, 5000);

console.log('Request Data...');

const timeOut = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing Data...')
        const backendData = {
            server: 'gCloud',
            port: 8080,
            status: 'open'
        }
        reject(backendData)
    }, 2000);
})
p.then(data => {
    console.log('zis is then resolving', data)
})


// p.catch(data => {
//     console.log('zis is catch rejecting', data)
// })


