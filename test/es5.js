(function(){
    'use strict';
    //函数声明,它是google和老师不推荐的写法，它会把function的作用域提升到所有的变量之前。也就是当JS文件一加载就会初始化这个function,而不管你写在什么位置。这样的话，如果我们需要用条件去判断一个function是否创造，或者给function赋值不同的执行体的时候。就不行了。
    // function Animal(){}这种就是函数声明
    //下面的就是函数表达式
    var Animal=function(name,age){
        this.name=name;
        this.age=age;
        this.say=function(){
            console.log(this.name+' '+this.age);
        }
    };
    //使用的时候就使用new，然后传值参数即可
    var cat=new Animal('小猫','3');
    cat.say()

})();