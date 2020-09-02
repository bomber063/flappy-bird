//导演雷，控制游戏的逻辑
import {DataStore} from "./base/DataStore.js";
import {BackGround} from "./runtime/BackGround.js";

export class Director{



    static getInstance(){
        //单例模式就是如果不存在就创建
        if(!Director.instance){
            Director.instance=new Director()
        }
        // 如果存在就直接返回。
        return Director.instance;
    }

    constructor(){
        this.dataStore=DataStore.getInstance();
    }

    run(){
        //因为在Main.js中已经通过init函数里面的this.dataStore.put('background',new BackGround()),把background图片设置了，那么就可以使用get('background')方法获取到
        // const backgroundSprite=this.dataStore.get('background');
        // backgroundSprite.draw();
        this.dataStore.get('background').draw();
        this.dataStore.get('land').draw();
        let timer=requestAnimationFrame(()=>this.run())//用箭头函数的时候this是外面的this
        this.dataStore.put('timer',timer)
        // cancelAnimationFrame(this.dataStore.get('timer'))
    }
}