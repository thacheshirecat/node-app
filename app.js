///////////////////
//
//Requiring Modules
//
///////////////////
// const names = require('./birds')
// const sayBird = require('./bird-utils')

// sayBird(names.bird1)
// sayBird(names.bird2)
// sayBird(names.bird3)

////////////
//
//OS Module
//
////////////
// const os = require('os')

// const user = os.userInfo()
// const uptime = os.uptime()
// console.log(`The System uptime is ${uptime/60/60} minutes`)

// const currentOS = {
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem: os.freemem(),
// }

// console.log(currentOS)

/////////////
//
//Synchronous
//
/////////////
// const fs = require('fs')

// const birdReader = fs.readFileSync('./content/content.txt','utf8')
// const birdReader2 = fs.readFileSync('./content/outofcontext.txt','utf8')

// console.log(birdReader,birdReader2)

// fs.writeFileSync('./content/birdout.txt', `The birds are learning: ${birdReader}! ${birdReader2}`)

///////////////////////////////////
//
//Callbacks for async functionality
//
///////////////////////////////////
// const { readFile, writeFile } = require('fs')

// console.log('start')
// readFile('./content/content.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const first = result
//     readFile('./content/outofcontext.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile('./content/birdoutasync.txt', `The birds are learning async: ${first}! ${second}`, (err,result) => {
//             if (err) {
//                 console.log(err)
//                 return
//             }
//             console.log('done with task')
//         })
//     })
// })
// console.log('starting next task')

/////////////
//
//HTTP Module
//
/////////////
// const http = require('http')

// const server = http.createServer((req,res) => {
// if(req.url === '/')
// {
//     return res.end('eat it, eat the whole thing')
// }
// if(req.url === '/about')
// {
//     return res.end('This site tells you to eat it')
// }
// return res.end(`
// <h1>You done goofed</h1>
// <p>This page don't exist</p>
// <a href="/">Go Away</a>`
// )
// })

// server.listen(5000)


// const _ = require('lodash')

// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems)

// let value = 0

// console.log('start')

// setInterval(() => {
//     if(value <= 9)
//     {
//         value += 2
//         console.log(value)
//     }
// },2000)

///////////
//
//Promises
//
///////////
// const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async() => {
//     try {
//         const first = await readFile('./content/content.txt', 'utf8')
//         const second = await readFile('./content/outofcontext.txt', 'utf8')
//         await writeFile('./content/birdout.txt', `Promisify says: ${first} and ${second}`, { flag: 'a'})
//     }
//     catch (error) {
//         console.log(error)
//     }    
// }

// start()

// const getText = (path) => {
//     return new Promise((resolve,reject)=>{
//         readFile(path, 'utf8', (err,data)=> {
//             if(err)
//             {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/content.txt')
//     .then(result => console.log(result))
//     .catch(err =>console.log(err))


////////
//
//Events
//
////////
// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()

// customEmitter.on('response',(name,id)=>{
//     console.log(`data recieved ${name} and ${id}`)
// })
// customEmitter.on('response',()=>{
//     console.log(`Birds eat seed`)
// })

// customEmitter.emit('response', 'Bord', 2)


/////////
//
//Streams
//
/////////
// const { createReadStream } = require('fs')

// const stream = createReadStream('./content/beegyoshi.txt', {highWaterMark: 90000, encoding: 'utf8'})

// stream.on('data', (result) => {
//     console.log(result)
// })
// stream.on('error', (err)=> {
//     console.log(err)
// })