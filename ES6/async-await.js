// const photos = [];

// async function photoUpload () {
//     let uploadStatus = new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             photos.push("Profile Pic");
//             resolve("Photo Uploaded")
//         }, 3000)
//     })
    
//     let result = await uploadStatus;
    
//     console.log(result);
//     console.log(photos.length);
// }

// photoUpload();


// ----result--- without async/await

// promise
// 0





// ----result--- with async/await
// Photo Uploaded
// 1









//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";


const randomJoke = async() => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data.value)
}

randomJoke()


