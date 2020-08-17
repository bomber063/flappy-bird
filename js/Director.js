//导演雷，控制游戏的逻辑
export class Director{

    constructor(){
        console.log('构造器初始化')
    }

    static getInstance(){
        //单例模式就是如果不存在就创建
        if(!Director.instance){
            Director.instance=new Director()
        }
        // 如果存在就直接返回。
        return Director.instance;
    }
}