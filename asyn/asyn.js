// Api
/*fetch(`https://jsonplaceholder.typicode.com/todos/1`).then(response => {
    return response.json();
}).then(data => {
    console.log(`check data: `, data);
})*/

const getNewTodos = async (id) => {

        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (response && response.status !== 200) {
            throw new Error(`Wrong!!!: ` + response.status);
        }
        let data = await response.json();
        return data; // Trả về dữ liệu nếu thành công
};

getNewTodos(`fwug`).then(data => {
    if (data) {
        console.log(`check data: `, data);
    }
}).catch(err => {
    console.log(`check error: `, err);
});
