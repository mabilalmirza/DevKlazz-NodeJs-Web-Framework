// const path = require('path')
// const fs = require('fs/promises')



// try {
//     const text = fs.readFileSync("data.txtasdf", "utf-8")
//     console.log(text)
// } catch(e) {
//     console.log(e)
// }

//readFile('datas.txt')
// fs.readFile("data.txt", 'utf-8')
//     .then(data => console.log(data))
//     .catch(e => console.log(e))

// console.log("My Function")


// function readFile(filename) {

//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, 'utf-8', (e, data) => {
//             if (e) {
//                 reject(e)
//             } else {
//                 resolve(data)
//             }            
//         })
//     })

// }



// const person = { name: "Abdul Hadi", class: "nursery" }
// const personText = JSON.stringify(person)

// fs.open("data.json", 'w', (e, fileDescriptor) => {
//     if (e) {
//         console.log(e)
//         return
//     }

//     fs.writeFile(fileDescriptor, personText, (e) => {
//         if (e) {
//             console.log(e)
//             return
//         }
//         fs.close(fileDescriptor, (e) => {
//             if(e) {
//                 console.log(e);
//                 return
//             }
//         })
//     })


// })

// fs.open('data.json', 'w')
//     .then(fh => {
//         fh.write(personText)
//         return fh
//     })
//     .then(fh => fh.close())
//     .then(() => console.log("File written"))
//     .catch(e => {
//         console.log(e)
//     })

// writeFile("the-data.json", personText)

// async function writeFile(filname, data) {
//     try {
//         const fh = await fs.open(filname, 'w')
//         await fh.write(data)
//         await fh.close()
//         console.log("Written")
//     } catch(e) {
//         console.log(e)
//     }
    
// }


//Event loop
// setTimeout(() => {
//     console.log("asd")

// }, 0)
// console.log("xyz")

