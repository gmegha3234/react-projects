const getData = () => new Promise((res, rej) => {
    setTimeout(() => {
        res("megha");
    }, 2000)
});

const processData = (data) => new Promise((res, rej) => {
    setTimeout(() => {
        res(data.toUpperCase());
    }, 1000);
})

const hashIt = (data) => new Promise((res, rej) => {
    setTimeout(() => {
        res("#" + data);
    }, 1000);
})

//----------------------------------------------------------

// console.log("START");

// const dataP = getData();
// //------------------------------
// dataP.then(data => {
//     console.log(data);
//     const processedP = processData(data);
//     //--------------------------------------
//     processedP.then(pd => {
//         console.log(pd);

//         const hashP = hashIt(pd);
//         //---------------------------------
//         hashP.then(hd => {
//             console.log(hd);
//             console.log("Inside hashP")
//         })
//         //----------------------------------
//         console.log("Inside processedP");
//     })
//     //------------------------------------------
//     console.log("Inside dataP");
// })
// //----------------------------------------

// console.log("END");

// async function run() {
//     const data = await getData();
//     const pd = await processData(data);
//     const hd = await hashIt(pd);
//     console.log(hd);
// }

// console.log("START");
// run();
// console.log("END");

console.table([{ name: "megha", age: 80 },{ name: "megha", age: 80 }]);