const yargs = require('yargs');
const file = require(__dirname+"/operations.js");

yargs.command({

    command : 'new',

    builder : {
        empID : {
            type : "number"
        },

        empName : {
            type : "String"
        },

        deptName : {
            typre : "String"
        }
    },

    handler : (argv) => {

        const newEmp = {
            empID : argv.empID,
            empName : argv.empName,
            deptName : argv.deptName
        };

        file.addNew(newEmp);
    }
})

yargs.command({

    command: "view",

    handler: () => {

        file.readFile();
    }
});

yargs.command({

    command : "remove",

    builder : {

        empID : {
            type : 'Number'
        }

    },

    handler : (argv) => {

        file.remove(argv.empID);
    }
})

yargs.argv;