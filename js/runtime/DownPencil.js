//下半部分铅笔
import {Pencil} from "./Pencil.js";
import {Sprite} from "../base/Sprite.js";

export class DownPencil extends Pencil{
    constructor(top){//这里的top是由Director.js的createPencil里面传过来的。
        const image=Sprite.getImage('pencilDown');
        super(image,top);
    }
    draw() {
        let gap=window.innerHeight/5;//上下两根铅笔有一个固定的间隙
        this.y=this.top+gap//下铅笔的距离顶部的高度加上一个间隙就是当前左上角y的位置
        super.draw();
    }
}