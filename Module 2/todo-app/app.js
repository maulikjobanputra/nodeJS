const yargs = require('yargs');
const operations = require(__dirname+"/operations.js")


yargs.command({

    command : 'addTodo',

    builder : {

        item : {
            type : 'String'
        }
    },

    handler : (argv) => {

        operations.addTodo(argv.item);
    }
});


yargs.command({

    command : 'logTodo',

    handler : () => {

        operations.logTodo();
    }
});

yargs.command({

    command : 'deleteTodo',

    builder : {

        item : {
            type : 'String'
        }
    },

    handler : (argv) => {

        operations.deleteTodo(argv.item);
    }
});


yargs.argv;