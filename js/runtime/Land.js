//不断移动的陆地
import {Sprite} from "../base/Sprite.js";
import {Director} from "../Director.js";

export class Land extends Sprite{
    constructor() {
        const image = Sprite.getImage('land')
        super(image,
            0,0,
            image.width,image.height,
            0,window.innerHeight-image.height,
            image.width,image.height
            );
        this.landX=0;//地板水平变化坐标
        // this.landSpeed=2;//地板的移动速度
        this.landSpeed=Director.getInstance().moveSpeed
    }

    draw(){
        // console.log(this.landX,'this.srcW'+this.srcW,'window.innerWidth'+window.innerWidth,Math.abs(this.srcW-window.innerWidth))
        this.landX=this.landX+this.landSpeed//每次变化this.landSpeed像素的坐标
        // if(Math.abs(this.srcW-window.innerWidth)<this.srcW/3){
        //     console.log('this.srcW-window.innerWidth)>this.srcW')
        //     if(this.landX>this.srcW/3){//增加一个判断，判断如果移动的像素超过图片和window的宽度的差值，就重置为0，这样就可以无限循环左移了。这里我增加绝对值，是因为手机宽度和电脑宽度导致结果有负数
        //         this.landX=0
        //     }
        // }
        // if(Math.abs(this.srcW-window.innerWidth)>this.srcW/3){
        //     console.log('this.srcW-window.innerWidth)<this.srcW')
        if(window.innerWidth<=375){
            if(this.landX>Math.abs(this.srcW-window.innerWidth)){//增加一个判断，判断如果移动的像素超过图片和window的宽度的差值，就重置为0，这样就可以无限循环左移了。这里我增加绝对值，是因为手机宽度和电脑宽度导致结果有负数
                this.landX=0
            }
        }
        if(window.innerWidth>375){
            // if(this.landX>this.srcW/3){
            //     this.landX=0
            // }
            if(this.landX>this.srcW/3){//这个判断是为了在宽度太宽的时候防止穿帮，就是不要移动超过图片本身的3分之一
                this.landX=0
            }
        }
        // }

        super.draw(
            this.image,
            this.srcX,
            this.srcY,
            this.srcW,
            this.srcH,
            -this.landX,//负数就可以往左移动
            this.y,
            this.width,
            this.height
        )
    }
}