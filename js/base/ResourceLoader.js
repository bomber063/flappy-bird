//资源文件加载器，确保canvas在图片资源加载完成后才进行渲染
import {Resources} from "./Resources.js";

export class ResourceLoader{
    map=null;
    constructor(){
        this.map=new Map(Resources)
        //这里的[key.value]其实就是map里面的一个value，因为map里面的值都是键值对，
        // 元素为键值对比如(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])，所以这里是[key,value]
        //[key,value]中key就是资源的名字，value就是资料的相对路径
        for (let [key,value] of this.map){
            console.log(key,value)
        }
    }
}