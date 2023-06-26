// Promise

// const buyTickets = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = false;

//             if(error){
//                 reject("some error occured!")
//             }
//             else{
//                 resolve("Successfull!")
//             }
//         }, 3000)
//     })
// }

// buyTickets()
// .then((success) => {
//     console.log("success", success)
// })
// .catch((error) => {
//     console.log("error", error)
// })


/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/


const userData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        let user = {
            "name": "Vivek",
            age: 24,
        }
        
        if(user.name === 'Vivek'){
            resolve(user)
        }
        else{
            reject("User Not Found")
        }
        
        
        
    }, 3000)
    })
}

userData()
.then((success) => {
    console.log("user data: ", success)
})
.catch((error) => {
    console.log("error: ", error)
})
