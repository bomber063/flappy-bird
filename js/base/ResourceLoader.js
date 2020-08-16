//资源文件加载器，确保canvas在图片资源加载完成后才进行渲染
import {Resources} from "./Resources.js";

export class ResourceLoader{
    constructor(){
        this.map=new Map(Resources)
        //这里的[key.value]其实就是map里面的一个value，因为map里面的值都是键值对，
        // 元素为键值对比如(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])，所以这里是[key,value]
        //[key,value]中key就是资源的名字，value就是资料的相对路径
        for (let [key,value] of this.map){
            const image=new Image();
            // 微信中还可以使用 wx.createImage(),https://developers.weixin.qq.com/minigame/dev/api/render/image/wx.createImage.html
            image.src=value;
            this.map.set(key,image)//因为map对象里面的key和image是一一对应并且唯一的。把map里面的value替换成了真正的图片
        //    也就是图片的相对路径替换成了图片的真正实例本身，并且已经加载了图片资源的图片本身
        }
        //上面的循环完后，那么map就变成了一个key对应一个Image对象
    }
    //加载全部结束的方法，为了确保所有图片已经加载完毕，需要一个变量来确认并记录它的完毕
    onLoaded(callback){
        let loadedCount=0;
        for(let value of this.map.values()){
            //通过this.map.values()取出来的都是map里面的value，忽略掉它的key,不需要去管它的key了
            value.onload=()=>{//图片加载完成这里使用onload
                loadedCount++
                if(loadedCount>=this.map.size){
                    callback(this.map)//加载完后执行回调callback，并传参数为this.map传到外面给别人用
                    // console.log('加载完毕',callback)
                }
            }
        }
    }
    static create(){
        return new ResourceLoader()
    }
}