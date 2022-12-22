const fs = require('fs');

const read = () => {

    try {
        const content = fs.readFileSync('todo-Data.JSON', {encoding :'utf8'});
        const data = JSON.parse(content);
        return data;   

    }catch(err){
        return [];
    }
}

const data = read();

const addTodo = (item) => {

    const duplicate = data.find( e => {
        
        return e == item;
    });

    if (duplicate) {

        console.log("Item already exists. Enter a different one!");

    } else {

        data.push(item);

        fs.writeFileSync('todo-Data.JSON', JSON.stringify(data));

        console.log("Item added!");
    };
};


const logTodo = () => {

    if(data.length == 0){

        console.log("No items to log!");

    }else {

        data.forEach(element => {
            console.log(element);
        });
    };
};

const deleteTodo = (item) => {

    const itemDelete = data.find( e => {

        return item == e;
    });

    if (itemDelete) {

        const deletedData = data.filter( (e) =>{

            return e!= item;
        });

        fs.writeFileSync('todo-Data.JSON', JSON.stringify(deletedData));

        console.log("Item deleted!");

    } else {

        console.log("No such item to delete!");
    };
};

module.exports = {addTodo, logTodo, deleteTodo};