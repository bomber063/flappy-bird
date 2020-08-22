(function(){
    'use strict';
    //函数声明,它是google和老师不推荐的写法，它会把function的作用域提升到所有的变量之前。也就是当JS文件一加载就会初始化这个function,而不管你写在什么位置。这样的话，如果我们需要用条件去判断一个function是否创造，或者给function赋值不同的执行体的时候。就不行了。
    // function Animal(){}这种就是函数声明
    //下面的就是函数表达式
    var Animal=function(name,age){
        this.name=name;
        this.age=age;
    };
    Animal.prototype.say=function(){
        console.log(this.name+' '+this.age);
    }
    //使用的时候就使用new，然后传值参数即可
    var cat=new Animal('小猫','3');
    cat.say()

    //call() apply()
    //调用一个对象的一个方法，用另一个对象替换当前对象，
    //我的理解就是替换了this。
    // Animal.prototype.say.call(cat)
    // var params={
    //     name:'第二只猫',
    //     age:4
    // }
    // cat.say.call(params)
    //打出第二只猫 4
    //其实这里就是把this替换为了params，所以前面那句话也可以说调用一个对象的一个方法，用另一个this替换当前this.

    //寄生组合继承
    var Cat=function(name,age){
        //首先调用一下父类的方法
        Animal.apply(this,arguments)//这里的this就是Cat，这里的arguments就是name,age参数的全局对象，代表一个数组，相当于Animal.apply(this,[name,age]),跟下面的call很像，不过call的参数不是数组，而apply的参数是一个数组
        // Animal.call(this,name,age)
    }

    //然后把Animal的原型对象赋值给Cat的原型。
    Cat.prototype=Object.create(Animal.prototype)//做一个浅克隆再赋值
    //区分
    // Cat.prototype=new Animal();//这个是直接赋值，上面的是把Animal的原型对象做一个浅克隆在赋值过去

    //下面这句代码因为和父类一样所以会覆盖掉父类的方法，如果没有这个代码，就会使用父类的say方法。
    // Cat.prototype.say=function(){
    //     console.log('这是子类的名字'+this.name+this.age);
    // }

    //下面的代码是既调用父类的say,也调用子类的say，并且把调用父类的参数替换成了我们想要的参数
    Cat.prototype.say=function(){
        var p={
            name:'父类的名字',
            age:10
        };
        Animal.prototype.say.apply(p)
        console.log('这是子类的名字'+this.name+this.age);
    }

    var cat1=new Cat('子猫',5);
    cat1.say();
})();