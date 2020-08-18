//背景
import {Sprite} from "../base/Sprite.js";

export class BackGround extends Sprite{//BackGround继承Sprite类
    constructor(ctx,image){//只需要传两个参数。这个ctx和image是通过Main.js里面的代码传值过来的
        //继承的话，调用super就可以直接使用父类的函数了
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super
        super(ctx,image,
            0,0,
            image.width,image.height,
            0,0,
            // innerWidth和innerHeight,
            // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerHeight
            // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth
            window.innerWidth,window.innerHeight
            )
    }
}