console.log("Hello world for html");
const callback = (err, data) => {
    if (err) {
        console.log(`>>> calling callback: `, err);
    }
    if (data) {
        console.log(`>>> calling callback with data: `, data);
    }
}
function getTodos(id, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && xhttp.status === 200) {
            const data1 = JSON.parse(xhttp.responseText);
            const dataString = JSON.stringify(data1);
            callback(undefined, data1);
            callback(undefined, dataString);
        }
        if (this.readyState === 4 && xhttp.status !== 200) {
            callback(`somthing wrong`, undefined);
        }
    };
    xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
    xhttp.send();
}
getTodos(1, callback);
getTodos(2, callback);