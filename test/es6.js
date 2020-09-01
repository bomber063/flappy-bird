class Animal{

    constructor(name='无姓名',age=0){
        this.name=name;
        this.age=age;
    }

    say(){//这个很像ES5的Animal.prototype.say
        console.log(this.name,this.age);
    }
}


class Cat extends Animal{
    constructor(name,age){
        super(name,age)//ES6的继承必须要在constructor里面调用super，这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。具体可以看阮一峰的教程https://es6.ruanyifeng.com/#docs/class-extends
    }


    say(){
        super.say()
        console.log('这是子类的say')
    }
}

const cat=new Cat('小猫哈哈',2)
cat.say()