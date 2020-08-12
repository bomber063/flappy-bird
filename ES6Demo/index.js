


(function(){
    // 使用严格模式，这样this就不会乱变化了，ES5不使用严格模式会有一些错误的写法，这些写法会造成一些潜在的错误，包括规范上一些不合适的地方，ES6会默认使用严格模式，所以ES6就不需要加这样一段关键字了
    'use strict';

    // 声明function的两种方式
    // 一个是函数赋值给了一个变量，这种属于函数表达式，这个是必须在声明之后才能调用，Google前端规范推荐我们使用这种方式
    // var fun1=function(){

    // }
    // 另一种是直接声明函数，函数声明，他会把声明提升到JS代码的顶部，就是在任何地方都可以调用这个函数
    // function fun2(){

    // }
    // ES5的类
    // var Class1=function(){
    //     this.fun1=function(){
    //         console.log('test');
    //     }
    // };

    // Class1.prototype.fun2=function(){
    //     console.log('2')
    // }
    // new Class1().fun2()
    
    // ES6的类 ,构造方法constructor里面内部的不需要调用，直接new就可以执行了，并且外部可以使用的方法不需要使用this
    class ClassTest{
        constructor(){
            console.log('我创建啦')
        }
        fun1(){//在webStorm里面会很智能的告诉你这里的fun1可以用静态static方法，看下面的静态方法static fun2
            console.log('fun1')
        }

        static fun2(){//静态方法不需要new只需要直接调用即可，看下面的调用 ClassTest.fun2()
            console.log('2')
        }
    }

    new ClassTest().fun1();
    ClassTest.fun2();

})()