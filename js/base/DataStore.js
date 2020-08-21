//变量缓存器，方便我们在不同的类中访问和修改变量
export class DataStore{//需要长期保存的就存放在DataStore这个类变量中
    //静态方法创建单例
    static getInstance(){
        if(!DataStore.instance){
            DataStore.instance=new DataStore();
        }
        return DataStore.instance
    }

    constructor(){//需要销毁的保存在map中
        this.map=new Map();
    }

    put(key,value){//设置，这样写可以链式put
        if(typeof value ==='function'){//帮Main.js省略了new的步骤
            value=new value();
        }
        this.map.set(key,value);
        return this;
    }

    get(key){//获取
        return this.map.get(key);
    }

    destroy(){//销毁，把map对象里面的value都设置为null
        for (let value of this.map.values()){
            value=null;
        }
    }
}