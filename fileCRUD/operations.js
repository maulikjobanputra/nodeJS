const fs = require('fs');

const addNew = (data) => {
    
    let allData = read();
    
    // Validating on basis of empID

    const duplicate = allData.find( e => {

        return e.empID == data.empID

    });

    if (duplicate) {

        console.log("Employee ID already exists. Enter a new one!");
        return;

    } else {

        allData.push(data);
        fs.writeFileSync('newFile.JSON', JSON.stringify(allData));
        console.log("New Employee added!");
    };
};

const readFile = () => { 

    const content = read();
    console.log(content);
};

const read = () => {

    try{

        let content = fs.readFileSync('newFile.JSON', "utf-8");
        content = JSON.parse(content);
        return content;

    } catch (error){
       
        return [];

    };   
};

const remove = (id) => {
    
    let allData = read();
    let newData = allData.filter( e => {

        return e.empID != id

    });

    fs.writeFileSync('newFile.JSON', JSON.stringify(newData));
    console.log("Employee data updated!");
};

module.exports = {addNew, readFile, remove}