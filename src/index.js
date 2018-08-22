#! /usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

let args = [ ...process.argv ].slice(2);

class App {
    constructor( appRoot, projectRoot, args ){
        //node 脚本根目录
        this.appRoot = appRoot;
        //脚本当前的运行目录
        this.projectRoot = projectRoot;
        //用户输入的参数
        this.args = args;
        //创建一个用于用户交互的问答功能
        this.prompt = inquirer.createPromptModule();
        this.welcome();//显示欢迎信息

        this.captureUserData();
    }

    //显示程序信息
    welcome() {
        console.log(
          chalk.yellow(
            figlet.textSync( 'BIN EXAMPLE', { horizontalLayout: 'full' })
          ));
        //打印用户输入的参数，如果有的话
        args.length && console.log( 'user args:', args );
    }






    //获取用户输入的内容
    captureUserData() {
        console.log( 'handle user type example' );
        this.q1().then( ()=> {
            console.log( `q1 done: ${this.q1val}` );
            return this.q2();
        }).then( ()=>{
            console.log( `q2 done: ${this.q2val}` );
        });;
    }

    async q1(){
        let data = await this.prompt( Q_1 );
        this.q1val = ( data.q1val || '' ).trim();
    }

    async q2(){
        let data = await this.prompt( Q_2 );
        this.q2val = ( data.q2val || '' ).trim();
    }
}

const Q_1 = [{ 
    "name": "q1val"
    , "type": "input"
    , "message": "q1: 请随便输入点什么~"
}];
const Q_2 = [{ 
    "name": "q2val"
    , "type": "input"
    , "message": "q2: 请再随便输入点什么~"
}];

let app = new App( 
    path.resolve(__dirname, '..')
    , process.env.PWD
    , args 
);
