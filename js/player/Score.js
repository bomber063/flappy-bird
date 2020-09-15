//计分器类
import {DataStore} from "../base/DataStore.js";

export class Score {
    constructor() {
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        this.isScore=true;//这个我没有想到，它是用来防止canvas刷新太快导致分数增加太快而设置的
    }

    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#ff7b82';//这里在webStorm中可以通过左边的颜色矩形直接选择各种颜色。
        if(window.innerWidth<=375){
            this.ctx.fillText(
                '分数'+this.scoreNumber,
                window.innerWidth/2-20,
                window.innerHeight/18,
                1000//这个是可选参数，最大宽度。
            )
        }
        if(window.innerWidth>375){
            this.ctx.fillText(
                '分数'+this.scoreNumber,
                375/2-20,
                window.innerHeight/18,
                1000//这个是可选参数，最大宽度。
            )
        }

    }
}