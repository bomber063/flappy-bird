//导演雷，控制游戏的逻辑
import {DataStore} from "./base/DataStore.js";

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
        //因为在ResourceLoader.js中已经把map对象的value循环赋值为图片的实例了，所以通过map，也就是this.dataStore.get('background')，它就是this.map.get(key)
        const backgroundSprite=this.dataStore.get('background');
        backgroundSprite.draw();
    }
}