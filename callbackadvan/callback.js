console.log("Hello world for html");
const callback = (err, data) => {
    if (err) {
        console.log(`>>> calling callback: `, err);
    }
    if (data) {
        console.log(`>>> calling callback with data: `, data);
    }
}
function getTodos(callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && xhttp.status === 200) {
            const data1 = xhttp.responseText;
            callback(undefined, data1);
        }
        if (this.readyState === 4 && xhttp.status !== 200) {
            callback(`somthing wrong`, undefined);
        }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    xhttp.send();
}
getTodos(callback);