//初始化整个游戏的精灵，作为游戏开始的入口
import {ResourceLoader} from "./js/base/ResourceLoader.js";
import {Director} from "./js/Director.js";
import {BackGround} from "./js/runtime/BackGround.js";
import {DataStore} from "./js/base/DataStore.js";

export class Main{
    constructor(){
        //这里用this的原因是整个Main都可以获取到它。canvas和ctx就是整个类的变量
        this.canvas=document.getElementById('game_canvas')
        this.ctx=this.canvas.getContext('2d');
        this.dataStore=DataStore.getInstance();
        const loader=ResourceLoader.create();
        //把map传参到onResourceFisrtLoaded函数里面去
        // console.log(loader)
        //下面的map是获取到ResourceLoader里面的onLoaded传过来的参数实参this.map，在Main类里面用map作为形参代替,传给onResourceFisrtLoaded函数
        loader.onLoaded(map=>this.onResourceFisrtLoaded(map));
        // Director.getInstance()
        // Director.getInstance()
        // Director.getInstance()
        // let image=new Image();//新建的图片
        // image.src='res/background.png';
        // image.onload=()=>{//为了确保图片加载完成，需要把drawImage放到onload里面去
        //     this.ctx.drawImage(//这里的drawImage才是会图片呈现到浏览器上。
        //         image,//被裁剪的图片
        //         0,//x轴0开始切
        //         0,//y轴0开始切
        //         image.width,//被裁剪图片的宽度
        //         image.height,//被裁剪图片的高度
        //         0,//放置的位置,x轴0
        //         0,//放置位置,y轴0
        //         image.width,//目标canvas上绘制的宽度
        //         image.height//目标canvas上绘制的高度
        //     );
        // }

    }
    //资源只需要加载一次，其他都是重置逻辑就好了，所里这里是第一次加载资源
    onResourceFisrtLoaded(map){
        //当第一次加载完成后需要给this.dataStore赋值一些永远不变的值,这里不需要使用dataStore中的put方法，因为这些永远不变的值是不需要销毁的。可以一同放到单例类变量中，而在游戏完成后需要销毁的才使用put,把它放到dataStore的map中。
        this.dataStore.ctx=this.ctx;
        this.dataStore.res=map;
        // console.log(map)
        //map.get就是获取map对象里面元素键值的key对应的value，因为前面的value已经变为图片的实例了，所以这里就是background的图片实例
        // let background=new BackGround(this.ctx,map.get('background'));
        //创建图片，然后下面background.draw()就是直接在浏览器上显示图片
        // background.draw();
        this.init();
    }

    init(){
        //image图片对象信息通过下面的put传进来
        this.dataStore
            .put('background',new BackGround(this.ctx,this.dataStore.res.get('background')))
        // let background=new BackGround(this.ctx,map.get('background'));
        //创建图片，然后下面background.draw()就是直接在浏览器上显示图片
        // this.dataStore.res.background.draw();这句话代码通过导演类Director里面的方法来执行
        Director.getInstance().run();
        //上面的代码就是使用dataStore的get方法去获取图片实例。
        //        const backgroundSprite=this.dataStore.get('background');
        //         backgroundSprite.draw();
    }
}