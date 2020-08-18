//精灵的基类，负责初始化精灵加载的资源和大小及位置，它是一个父类，其它精灵都是继承它
export class Sprite{

    //括号里面的是ES6的默认值，也就是没有传参数的时候默认会有这些参数和对应的值。
constructor(ctx=null,
        img = null,
        srcX = 0,
        srcY = 0,
        srcW = 0,
        srcH = 0,
        x = 0, y = 0,
        width = 0, height = 0) {
            //下面获取的值变量就是上面的值，如果没有传值也有默认值。
    this.ctx=ctx;
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }

        /**
     * img 传入Image对象
     * srcX 要剪裁的起始X坐标
     * srcY 要剪裁的起始Y坐标
     * srcW 剪裁的宽度
     * srcH 剪裁的高度
     * x 放置的x坐标
     * y 放置的y坐标
     * width 要使用的宽度
     * height 要使用的高度
     */
    // 上面是创建变量，下面是在浏览器中显示图形
    draw() {
       this.ctx.drawImage(
           this.img,
           this.srcX,
           this.srcY,
           this.srcW,
           this.srcH,
           this.x,
           this.y,
           this.width,
           this.height
       );
   }

}