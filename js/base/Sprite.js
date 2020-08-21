//精灵的基类，负责初始化精灵加载的资源和大小及位置，它是一个父类，其它精灵都是继承它
import {DataStore} from "./DataStore.js";

export class Sprite{

    //括号里面的是ES6的默认值，也就是没有传参数的时候默认会有这些参数和对应的值。
constructor(img = null,
        srcX = 0,
        srcY = 0,
        srcW = 0,
        srcH = 0,
        x = 0, y = 0,
        width = 0, height = 0) {
            //下面获取的值变量就是上面的值，如果没有传值也有默认值。
    // this.ctx=ctx;
    this.dataStore=DataStore.getInstance();
    //通过Main.js可以得知：this.dataStore.ctx就是this.ctx=this.canvas.getContext('2d')
    this.ctx=this.dataStore.ctx;
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

        //为了让Background类获取到图片这里添加一个静态方法,static方法不需要new一个实例去访问它。直接用类去访问就行。
    static getImage(key){//这里的key就会对应哪一个图片，比如有background,DownPencil,Land等
        return DataStore.getInstance().res.get(key);
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
        //这里面增加参数是为了两点
        //1.如果没有传参数，那么就用上面constructor里面的参数
        //2.如果传参数了，就使用所传的参数
    draw(img=this.img,
         srcX=this.srcX,
         srcY=this.srcY,
         srcW=this.srcW,
         srcH=this.srcH,
         x=this.x,
         y=this.y,
         width=this.width,
         height=this.height
        ) {
        //参数中已经传了值，所以下面可以直接使用了，不需要前面的this了
       this.ctx.drawImage(
           // this.img,
           // this.srcX,
           // this.srcY,
           // this.srcW,
           // this.srcH,
           // this.x,
           // this.y,
           // this.width,
           // this.height
           img,
           srcX,
           srcY,
           srcW,
           srcH,
           x,
           y,
           width,
           height
       );
   }

}