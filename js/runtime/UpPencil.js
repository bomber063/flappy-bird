//上半部分铅笔
import {Pencil} from "./Pencil.js";
import {Sprite} from "../base/Sprite.js";

export class UpPencil extends Pencil{
    constructor(top){//这里的top是由Director.js的createPencil里面传过来的。
        const image=Sprite.getImage('pencilUp');
        super(image,top)
    }
    draw() {
        this.y=this.top-this.height;//如果this.top是0，那么就刚好y方向看不到UpPencil
        super.draw();
    }
}