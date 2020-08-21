//背景
import {Sprite} from "../base/Sprite.js";

export class BackGround extends Sprite{//BackGround继承Sprite类
    //这里需要穿图片进来，其实在基类Sprite里面传图片也可以。
    constructor(){//只需要传两个参数。这个ctx和image是通过Main.js里面的代码传值过来的
        //继承的话，调用super就可以直接使用父类的函数了
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super
        // this//this在这里是获取不到的
        const image=Sprite.getImage('background');//这句话=后面也可以使用BackGround.getImage('background')，因为继承了Sprite.js
        super(image,
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