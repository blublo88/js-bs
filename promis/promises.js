// const promisesExp = () => {

//     return new Promise((resolve, reject) => {
//              resolve({name: "Dang", address: "Cantho"})
//         //reject(`something wrongs`);
//     });
// }
// promisesExp().then(data => {
//     console.log(data);
// }).catch(error =>{
//     console.log(error);
// })
console.log("Hello world for html");
// const callback = (err, data) => {
//     if (err) {
//         console.log(`>>> calling callback: `, err);
//     }
//     if (data) {
//         console.log(`>>> calling callback with data: `, data);
//     }
// }
function getTodos(id) {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && xhttp.status === 200) {
                const data1 = JSON.parse(xhttp.responseText);
                const dataString = JSON.stringify(data1);
                // callback(undefined, data1);
                // callback(undefined, dataString);
                resolve(data1);
            }
            if (this.readyState === 4 && xhttp.status !== 200) {
                // callback(`somthing wrong`, undefined);
                reject(`something wrongs`);
            }
        };
        xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        xhttp.send();
    })

}
getTodos(1).then(data1 => {
    console.log(`get data1: `, data1);
    return getTodos(2);
}).then(data2 => {
    console.log(`get data2: `, data2);
    return getTodos(3);
}).then(data3 => {
    console.log(`get data3: `, data3);
    return getTodos(2);
})