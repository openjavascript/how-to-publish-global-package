#! /usr/bin/env node
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';
import path from 'path';

class App {
    constructor( appRoot, projectRoot ){
        this.appRoot = appRoot;
        this.projectRoot = projectRoot;

        this.welcome();
    }

    welcome() {
        console.log(
          chalk.yellow(
            figlet.textSync( 'GLOBAL EXAMPLE', { horizontalLayout: 'full' })
          )
        );
    }

    sayHello() {
    }
}

let app = new App( path.resolve(__dirname, '..'), process.env.PWD );
