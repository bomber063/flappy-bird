//开始按钮
import {Sprite} from "../base/Sprite.js";

export class StartButton extends Sprite{
    constructor() {
        const img = Sprite.getImage('startButton')
        super(img,
            0, 0,
            img.width, img.height,
            (window.innerWidth - img.width) / 2, (window.innerHeight - img.height) / 2.5,//因为下面对this.x重新赋值了，所以这里的值在宽度大于375的时候会变化
            img.width, img.height
        );
        if(window.innerWidth<=375){//这个if其实可以省略，因为前面的代码和整个if里面的代码是一样的。
            // console.log((window.innerWidth - img.width) / 2)
            // console.log((window.innerHeight - img.height) / 2.5)

            this.x=(window.innerWidth - img.width) / 2;
            // this.y=(window.innerHeight - img.height) / 2.5;
        }
        if(window.innerWidth>375){//兼容大屏幕，宽度超过375

            // console.log((img2.width - img.width) / 2)
            // console.log(img2.width)
            // console.log((375-img.width)/2)
            this.x=(375-img.width)/2;
            // this.y=(window.innerHeight - img.height) / 2.5;
        }
    }
        draw(){
            super.draw(
                this.img,
                0,0,
                this.img.width,this.img.height,
                this.x,this.y,
                this.img.width,this.img.height
            )
        }
}