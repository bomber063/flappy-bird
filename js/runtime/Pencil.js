/*铅笔基类*/

import {Sprite} from "../base/Sprite.js";
import {Director} from "../Director.js";

export class Pencil extends Sprite{
    constructor(image,top) {//top就是铅笔距离顶部的距离，也可以定义bottom就是距离底部的距离，这里的top最终是由Director.js的createPencil里面传过来的。
        super(image,
            0, 0,
            image.width, image.height,
            //刚好放在右侧看不到的位置
            window.innerWidth, 0,
            image.width, image.height
        );
        this.top=top
    }

    draw(){
        // let w=(window.innerWidth-this.width)/2
        // console.log(this.x,window.innerWidth,this.width,this.srcW)

        this.x=this.x-Director.getInstance().moveSpeed//这里的this.x是上面constructor里面的window.innerWidth，它是根据Sprite.js里面的constructor里面的x而来的。也就是说把window.innerWidth传值给了x，并且this.x=x
        // console.log(window.innerWidth)
        if(window.innerWidth<375){
            super.draw(//这里面的参数都可以不写，因为在Sprite.js里面都已经写过，而且是一样的。这里的y的最终值是分别从DownPencil.js和UpPencil.js传过来的
                this.img,
                0,0,
                // this.img.width,this.img.height,
                this.width,this.height,//因为前面constructor里面的super已经把image.width和image.height通过Sprite.js的this.width = width和this.height = height传值了，所以可以直接写成this.width,this.height;
                this.x,//x不断变化，所以铅笔会向左不断移动
                this.y,
                // this.img.width,this.img.height
                this.width,this.height//这个跟上面的注释说明一样
            )
        }
        else{
            if(window.innerWidth>375){
                super.draw(//这里面的参数都可以不写，因为在Sprite.js里面都已经写过，而且是一样的。这里的y的最终值是分别从DownPencil.js和UpPencil.js传过来的
                    this.img,
                    0,0,
                    // this.img.width,this.img.height,
                    this.width,this.height,//因为前面constructor里面的super已经把image.width和image.height通过Sprite.js的this.width = width和this.height = height传值了，所以可以直接写成this.width,this.height;
                    this.x-(window.innerWidth-375),//x不断变化，减去比375宽度出来的部分window.innerWidth-380。铅笔会向左不断移动
                    this.y,
                    // this.img.width,this.img.height
                    this.width,this.height//这个跟上面的注释说明一样
                )
            }
        }

    }

}