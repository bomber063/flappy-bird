//初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";

export class Main{
    constructor(){
        console.log('我执行了')
        new ResourceLoader()
    }
}