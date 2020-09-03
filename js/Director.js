//导演雷，控制游戏的逻辑
import {DataStore} from "./base/DataStore.js";
import {BackGround} from "./runtime/BackGround.js";
import {UpPencil} from "./runtime/UpPencil.js";
import {DownPencil} from "./runtime/DownPencil.js";

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
        this.moveSpeed=2;
    }

    createPencil(){
        const minTop=window.innerHeight/8;
        const maxTop=window.innerHeight/2;
        const top=minTop + Math.random()*(maxTop-minTop);//这里的Math.random方法得到的随机数仅仅知识软件层次的随机数，是一个假的随机数，真正的随机数是根据硬件运转的频率，或者外界的声音，乃至于屏摄的频率来运算出来的才是真正的随机数。
        this.dataStore.get('pencils').push(new UpPencil(top))//get是获取到pencils对应的空数组。然后往里面push数据。UpPencil这个类唯一需要传的参数就是top
        this.dataStore.get('pencils').push(new DownPencil(top))//get是获取到pencils对应的空数组。然后往里面push数据。DownPencil这个类唯一需要传的参数就是top
    }

    run(){
        //因为在Main.js中已经通过init函数里面的this.dataStore.put('background',new BackGround()),把background图片设置了，那么就可以使用get('background')方法获取到
        // const backgroundSprite=this.dataStore.get('background');
        // backgroundSprite.draw();
        this.dataStore.get('background').draw();
        this.dataStore.get('land').draw();
        // this.dataStore.get('pencilUp').draw();
        // this.dataStore.get('pencilDown').draw();
        this.dataStore.get('pencils').forEach(function(value){
            value.draw()
        });
        let timer=requestAnimationFrame(()=>this.run())//用箭头函数的时候this是外面的this
        // let timer=setTimeout(()=>this.run(),1000)//用箭头函数的时候this是外面的this
        // let timer=setInterval(()=>this.run(),0)//用箭头函数的时候this是外面的this
        // cancelAnimationFrame(this.dataStore.get('timer'))
        this.dataStore.put('timer',timer)
    }
}