//导演雷，控制游戏的逻辑
import {DataStore} from "./base/DataStore.js";
import {BackGround} from "./runtime/BackGround.js";
import {UpPencil} from "./runtime/UpPencil.js";
import {DownPencil} from "./runtime/DownPencil.js";

export class Director{

    static getInstance(){
        //单例模式就是如果不存在就创建
        if(!Director.instance){
            Director.instance=new Director()
        }
        // 如果存在就直接返回。
        return Director.instance;
    }

    constructor(){
        this.dataStore=DataStore.getInstance();
        this.moveSpeed=2;
    }

    createPencil(){
        const minTop=window.innerHeight/8;
        const maxTop=window.innerHeight/2;
        const top=minTop + Math.random()*(maxTop-minTop);//这里的Math.random方法得到的随机数仅仅知识软件层次的随机数，是一个假的随机数，真正的随机数是根据硬件运转的频率，或者外界的声音，乃至于屏摄的频率来运算出来的才是真正的随机数。
        this.dataStore.get('pencils').push(new UpPencil(top))//get是获取到pencils对应的空数组。然后往里面push数据。UpPencil这个类唯一需要传的参数就是top
        this.dataStore.get('pencils').push(new DownPencil(top))//get是获取到pencils对应的空数组。然后往里面push数据。DownPencil这个类唯一需要传的参数就是top
    }

    birdsEvent() {
        for (let i = 0; i <= 2; i++) {//在Birds.js中this.birdsY[this.index]就是y方向的位移。this.birdsY[i]=this.y[i]+offsetY，其中this.y[this.index]是固定不变的，this.birdsY[this.index]它是会随着this.y[i]+offsetY的变化而变化。所以要保持小鸟当前的位置就需要把this.birdsY[i]赋值给this.y[i]。不然会一致从最中间开始往上飞。
            this.dataStore.get('birds').y[i] =
                this.dataStore.get('birds').birdsY[i];
        }
        this.dataStore.get('birds').time = 0;//这里还需要注意时间要清零，不然会一直做自由落体运动，点击之后小鸟上飞，那么不应该继续下落，如果继续下落速度会越来越大。所以要置零。
    }

    //判断小鸟是否和铅笔撞击
    static isStrike(bird,pencil){
        // console.log(bird.top > pencil.bottom,'bird.top > pencil.bottom');
        // console.log(bird.bottom < pencil.top,'bird.bottom < pencil.top');
        // console.log(bird.right < pencil.left,'bird.right < pencil.left');
        // console.log(bird.left > pencil.right,'bird.left > pencil.right');
        // console.log(i);
        let s=false;
        if(//如下的情况就是每个地方都可以飞，所以是或的关系，但是如果到了不是下面四种情况的地方就是会停止游戏。那么下面四种情况都是false，那么s=false。那么return !s就是true。然后下面的代码if (Director.isStrike(birdsBorder, pencilBorder,i))就是true去触发游戏停止。
            bird.top > pencil.bottom || //小鸟顶部大于铅笔底部
            bird.bottom < pencil.top || //小鸟底部小于铅笔顶部
            bird.right < pencil.left || //小鸟右边小于铅笔左边
            bird.left > pencil.right)   //小鸟左边大于铅笔右边
        { //小鸟左边大于铅笔右边
            s=true;
        }
        // console.log(bird.top < pencil.bottom,'bird.top < pencil.bottom');
        // console.log(bird.left,'bird.left');
        // console.log(pencil.bottom,'pencil.bottom');
        //
        // console.log(bird.bottom > pencil.top,'bird.bottom > pencil.top');
        // console.log(bird.right > pencil.left,'bird.right > pencil.left');
        // console.log(bird.left < pencil.right,'bird.left < pencil.right');
        // if( !(bird.top < pencil.bottom &&
        //     bird.bottom > pencil.top &&
        //     bird.right < pencil.left &&
        //     bird.left > pencil.right)){
        //     s=true;
        // }
        return !s;

    };

    //判断小鸟是否撞击地板和铅笔，还有顶部
    check() {

        if(this.dataStore.get('birds').birdsY[0]<0){//判断小鸟是否撞击顶部
            console.log('撞到顶部了');
            // this.dataStore.get('startButton').draw();
            this.isGameOver = true;
            return;
        }

        const birds = this.dataStore.get('birds');
        const land = this.dataStore.get('land');
        const pencils = this.dataStore.get('pencils');
        // console.log(pencils[0].x,birds.birdsX[0]+birds.birdsWidth[0]+2*birds.clippingWidth[0])
        //地板的撞击判断
        if (birds.birdsY[0] + birds.birdsHeight[0] > land.y) {//这里没有增加小鸟的下边距距离，可能这样更好吧如果增加了下边距距离可能没有触碰到地板就停止了
            console.log('小鸟撞击地板蜡');
            // this.dataStore.get('startButton').draw();
            this.isGameOver = true;
            return;//如果return下面没有代码这里会高亮提醒你，这里的return是多余的，如果return下面有代码就不会说是多余的了。
        }
        // //铅笔撞击判断
        // if(pencils[0].y+pencils[0].height>birds.birdsY[0]+birds.clippingY[0]&&pencils[0].x<birds.birdsX[0]+birds.birdsWidth[0]&&pencils[0].x+pencils[0].width<birds.birdsX[0]){
        //     console.log(1);
        //     this.isGameOver=true;
        // };
        // // if(pencils[2].y>birds.birdsY[0]+birds.clippingY[0]&&pencils[2].x<birds.birdsX[0]&&birds.birdsX[0]+birds.clippingWidth[0]<pencils[2].x){
        // //
        // // };
        //小鸟的边框模式
        const birdsBorder = {
            top: birds.birdsY[0],//这里老师的代码是birds.y[0]，birds.birdsY[0]才是实时的y方向的坐标。
            bottom: birds.birdsY[0] + birds.birdsHeight[0],
            left: birds.birdsX[0],
            right: birds.birdsX[0] + birds.birdsWidth[0]
        };

        const length = pencils.length;
        let pencil;
        let pencilBorder;

        if(window.innerWidth<=375){
            for (let i = 0; i < length; i++) {//这里其实不用循环i为2和3的时候，因为鸟只会触碰到i是0和1的铅笔。
                pencil = pencils[i];
                pencilBorder = {
                    top: pencil.y,
                    bottom: pencil.y + pencil.height,
                    left: pencil.x,
                    right: pencil.x + pencil.width
                };
                // console.log(pencilBorder);
                // console.log('分割线'+i);

                if (Director.isStrike(birdsBorder, pencilBorder)) {
                    console.log('撞到铅笔了');
                    this.isGameOver = true;
                    // this.dataStore.get('startButton').draw();
                    return;
                }
            }
        }

        if(window.innerWidth>375){//如果是大于375，要把pencil.x修改为pencil.x-(window.innerWidth-375)
            for (let i = 0; i < length; i++) {//这里其实不用循环i为2和3的时候，因为鸟只会触碰到i是0和1的铅笔。
                pencil = pencils[i];
                pencilBorder = {
                    top: pencil.y,
                    bottom: pencil.y + pencil.height,
                    left: pencil.x-(window.innerWidth-375),
                    right: pencil.x-(window.innerWidth-375) + pencil.width
                };
                // console.log(pencilBorder);
                // console.log('分割线'+i);

                if (Director.isStrike(birdsBorder, pencilBorder,i)) {
                    console.log('撞到铅笔了');
                    this.isGameOver = true;
                    // this.dataStore.get('startButton').draw();
                    return;
                }
            }
        }
    }

    run(){
        this.check();//每秒刷新60次，说明每秒会检查60次。
        // console.log(this.dataStore.get('birds').birdsY[0]>=this.dataStore.get('land').y);
        if(!this.isGameOver){//增加一个确定游戏开始的变量值isGameOver
            // console.log(this.isGameOver)
            //因为在Main.js中已经通过init函数里面的this.dataStore.put('background',new BackGround()),把background图片设置了，那么就可以使用get('background')方法获取到
            // const backgroundSprite=this.dataStore.get('background');
            // backgroundSprite.draw();
            this.dataStore.get('background').draw();
            const pencils=this.dataStore.get('pencils');


            if(window.innerWidth<=375){
                if(pencils[0].x+pencils[0].width<=0&&pencils.length===4){//这里x是会变成负值的。铅笔的宽度加上铅笔的左侧位置刚好超过canvas宽度的x方向的x=0这个地方，
                    pencils.splice(0,1)
                    pencils.splice(0,1)//这里用下面的shift也是一样的效果
                    // pencils.shift()
                    // pencils.shift()
                    // this.createPencil()//这个会不断创建一大堆铅笔。
                }
                if(pencils[0].x<=(window.innerWidth-pencils[0].x)/2&&pencils.length===2){
                    this.createPencil()
                }

                // if(pencils[0].x<=(window.innerWidth-pencils[0].x)/2&&pencils.length===4){
                //     this.createPencil()
                // }
            }

            if(window.innerWidth>375){
                if(pencils[0].x-(window.innerWidth-375)+pencils[0].width<=0&&pencils.length===4){//这里x是会变成负值的。铅笔的宽度加上铅笔的左侧位置刚好超过canvas宽度的x方向的x=0这个地方，
                    pencils.splice(0,1)
                    pencils.splice(0,1)//这里用下面的shift也是一样的效果
                    // pencils.shift()
                    // pencils.shift()
                    // this.createPencil()//这个会不断创建一大堆铅笔。
                }
                // console.log(pencils[0].x)
                if(pencils[0].x-(window.innerWidth-375)<=(window.innerWidth-(pencils[0].x-(window.innerWidth-375)))/8&&pencils.length===2){
                    this.createPencil()
                }

                // if(pencils[0].x<=(window.innerWidth-pencils[0].x)/2&&pencils.length===4){
                //     this.createPencil()
                // }
            }




            this.dataStore.get('pencils').forEach(function(value){
                value.draw()
            });
            this.dataStore.get('land').draw();
            this.dataStore.get('birds').draw();

            // if(this.dataStore.get('birds').birdsY[0]+this.dataStore.get('birds').clippingY[0]+this.dataStore.get('birds').clippingHeight[0]>=this.dataStore.get('land').y){//这个判断要写到下一次动画requestAnimationFrame循环之前，不然，会一直循环到不了下面的代码。
            //     console.log('游戏结束1');
            //     // this.isGameOver=!this.isGameOver;
            // }

            // if(this.dataStore.get('birds').birdsY[0]+this.dataStore.get('birds').clippingY[0]+this.dataStore.get('birds').clippingHeight[0]>this.dataStore.get('land').y){//这个判断如果写到外面就会和最后的else选择一个执行，另一个不执行。具体看README中的说明，所以写到if(!this.isGameOver)里面比较好
            //     // console.log('游戏结束1');
            //     // console.log(this.dataStore.get('birds').birdsY[0])
            //     // console.log(this.dataStore.get('land').y)
            //     // console.log(this.dataStore.get('birds').birdsY[0]<this.dataStore.get('land').y)
            //     this.isGameOver=!this.isGameOver;
            // }
            let timer=requestAnimationFrame(()=>this.run())//用箭头函数的时候this是外面的this
            // let timer=setTimeout(()=>this.run(),1000)//用箭头函数的时候this是外面的this
            // let timer=setInterval(()=>this.run(),0)//用箭头函数的时候this是外面的this
            this.dataStore.put('timer',timer)
        }

        // console.log(this.dataStore.get('birds').birdsY[0])
        // console.log(this.dataStore.get('land').y)
        // if(this.dataStore.get('birds'))
        //     window.innerHeight-image.height
        else{
            console.log('游戏结束')
            this.dataStore.get('startButton').draw();
            cancelAnimationFrame(this.dataStore.get('timer'));//让动画停止。
            this.dataStore.destroy()//把所有精灵置空，保证内存是清零的。对我们的性能和内存而言都是一个释放。如果是后端不考虑内存那么服务端可能会爆掉。
        }

    }
}