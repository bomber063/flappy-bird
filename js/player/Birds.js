//小鸟类
//循环的渲染三只小鸟
//其实是循环渲染图片的三个部分
import {Sprite} from "../base/Sprite.js";

export class Birds extends Sprite{
    constructor(){
        const image=Sprite.getImage('birds')
        super(image,0,0,image.width,image.height,
            0,0,image.width,image.height);

        // 小鸟的三种状态需要一个数组去存储
        //小鸟的宽是34，小鸟的高度是24，上下边距是10，小鸟左右边距是9
        this.clippingX=[
            9,//第一张小鸟图的x位置，第一只小鸟左边距9
            9+34+18,//第二张小鸟图的x位置，第一只小鸟左边距9加上第一只小鸟的宽度34，加上第一只小鸟右边距和第二只小鸟的左边距一共18
            9+34+18+34+18//第三张小鸟图的x位置，第一只小鸟左边距9加上第一只小鸟的宽度34，加上第一只小鸟右边距和第二只小鸟的左边距一共18，然后再加上第二只小鸟的宽度34，在加上第二只小鸟右边距和第三只小鸟的左边距一共18
        ];
        this.clippingY=[10,10,10];//三只小鸟距离上边距都是10
        this.clippingWidth=[34,34,34];//三只小鸟的宽度都是34
        this.clippingHeight=[24,24,24];//三只小鸟的高度都是24
        if(window.innerWidth<=375){
            this.birdX=window.innerWidth/4;//一只小鸟的初始x位置为window内部的4分之一的位置，也就是偏左方的位置。
        }
        if(window.innerWidth>375){//兼容window大宽度
            this.birdX=this.srcW/4
        }
        this.birdsX=[this.birdX,this.birdX,this.birdX];//三只小鸟的x位置统一在一个数组里面
        this.birdY=window.innerHeight/2;//小鸟的初始y位置居中
        this.birdsY=[this.birdY,this.birdY,this.birdY];//三只小鸟的y位置统一在一个数组里面
        this.birdWidth=34;//小鸟的宽度为34
        this.birdsWidth=[this.birdWidth,this.birdWidth,this.birdWidth];//三只小鸟的宽度统一放到数组里面
        this.birdHeight=24;//小鸟的高度为24
        this.birdsHeight=[this.birdHeight,this.birdHeight,this.birdHeight];//三只小鸟的高度统一放到数组里面


        this.y=[this.birdY,this.birdY,this.birdY];//跟前面的this.birdsY一样,但是这里的this.y是基类Sprite.js中的y
        this.index=0;//脚标必须为整数
        this.count=0;//这个是用来循环小鸟个数的，必须为整数
        this.time=0;


        // this.y=this.birdsY[this.index]*1/2*9.8*this.time*this.time

        // let g=1/2*9.8*this.time*this.time

    }
    draw(){
        //如果索引为2就重置到0的状态
        const speed=0.2;
        this.count=this.count+speed;
        if(this.index>=2){
            this.count=0;
        }
            this.index=Math.floor(this.count);
            this.time=this.time+1;
        //模拟中立加速度
        const g=9.8/24;
        //向上移动一丢丢的偏移量
        const offsetUp=30;
        //小鸟的位移
        const offsetY=(g*this.time*(this.time-offsetUp))/2;
        for(let i=0;i<=2;i++){//这里的循环是跟Director.js里面birdsEvent同步的，如果不用i，会导致不同步而出现奇怪的画面。
        // this.birdsY[this.index]= this.birdsY[this.index]+offsetY;//this.y[this.index]是固定不变的，如果是this.birdsY[this.index]它是会不断变化。
        this.birdsY[i]=this.y[i]+offsetY;//this.y[this.index]是固定不变的，如果是this.birdsY[this.index]它是会不断变化。上面的代码会出现奇怪的效果。我这里第一次写错了，没有注意。
        }
        super.draw(
            this.image,
            this.clippingX[this.index],
            this.clippingY[this.index],
            this.clippingWidth[this.index],
            this.clippingHeight[this.index],
            this.birdsX[this.index],
            this.birdsY[this.index],
            this.birdsWidth[this.index],
            this.birdsHeight[this.index]
        )
    }
}