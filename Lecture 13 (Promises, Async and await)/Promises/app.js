// ------------------------------Promises -------------------------------------- 

const checkEvenNumber = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 2 === 0) {
        resolve(randomNumber)
    } else {
        reject(new Error(`Not even`));
    }
})

checkEvenNumber.then((value) => {
    console.log("The promise has been resolved with the even number and the number is: ", value)
}).catch((err) => {
    console.log("There is a problem in generating even number.", err.message)
});


// Another example ---------------------------------------------------------------- 
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = Math.floor(Math.random() * 100);
        if (num < 50) {
            resolve(`Number less than 50 since num is : ${num}`);
        } else {
            reject(new Error(`Number is greater than or equal 50, since num is : ${num}`));
        }
    }, 2000);
});

// Consuming the created promise
p.then(function (msg) {
    console.log('Message inside resolve : ', msg);
})
    .catch(function (err) {
        console.log('Message inside catch : ', err.message);
    })
    .finally(() => {
        console.log('Inside Finally');
    })



// Main example ---------------------------------------------------------------------------------

    // function debit() {
//     console.log("Starting debit transaction");
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const txnId = `TXN${Math.floor(Math.random() * 10000000)}`;
//             resolve(txnId);
//         }, 2000);
//     })
// }

// function updateLedger() {
//     console.log(`Initiating ledger update`);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const updatedEntryId = Math.floor(Math.random() * 10);
//             if (updatedEntryId < 5) {
//                 return reject(new Error('Update entry id is less than 5'));
//             }
//             return resolve(updatedEntryId);
//         }, 2000);
//     })
// }

// function notifyUser() {
//     console.log('Send notification for txn update');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const notificationId = Math.floor(Math.random() * 1000);
//             resolve(notificationId);
//         }, 1000);
//     })
// }

// console.log('Transaction started');

// debit()
//     .then(function (txnId) {
//         console.log('Transacton success with id', txnId);
//         return updateLedger();
//     })
//     .then(function (updatedEntryId) {
//         console.log('Ledger updated with id', updatedEntryId);
//         return notifyUser();
//     })
//     .then(function (notificationId) {
//         console.log('Notification sent to the user : ', notificationId);
//     })
//     .catch((err) => {
//         console.log('Something went wrong', err.message);
//     })
//     .finally(() => {
//         console.log('Everything done!');
//     })