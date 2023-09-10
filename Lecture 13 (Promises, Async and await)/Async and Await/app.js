// https://api.github.com/users/sabeelhps

// console.log('START');

// const response = fetch('https://api.github.com/users/sabeelhps');

// response
//     .then((val) => {
//         console.log(val);
//         return val.json();
//     })
//     .then((jsonData) => {
//         console.log(jsonData);
//     })

// console.log('END');

// Async - Await syntax

async function fun() {
    // if (true) {
    //     throw new Error('Something went wrong!');
    // }
    return 100;
}

// fun()
//     .then((val) => {
//         console.log('Inside resolve')
//         console.log(val);
//     })
//     .catch((err) => {
//         console.log('Error : ', err.message);
//     })

// function connectToDB() {
//     return new Promise((resolve, reject) => {
//         resolve(true);
//     })
// }




// async function demo() {
//     console.log('Entry in demo function');
//     const val = await fun();
//     console.log('After fun function')
//     console.log(val);
//     console.log('starting to connect to db')
//     const isConnected = await connectToDB();
//     console.log('After db connection');
//     console.log('DB connected : ', isConnected);
// }

// demo();

// console.log('After demo 1')
// console.log('After demo 2')
// console.log('After demo 3')
// console.log('After demo 4')
// console.log('After demo 5')
// console.log('After demo 6')
// console.log('After demo 7')


async function main() {
    try {
        const res = await fetch('http://api.github.com/users/sabeelhps');
        const jsonData = await res.json();
        console.log('Resolved!');
        console.log(jsonData); 
        return 10;
    }
    catch (err) {
        console.log('Inside catch');
        console.log(err);
        console.log(err.message);
    }
}

main()