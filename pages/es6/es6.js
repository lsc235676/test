// pages/es6/es6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //------------------案例一（常量，变量）
  // test: function(e){
  //   {
  //     var num=10;
  //   }
  //     let num1="我是变量";
  //     const num2="我是常量";
  //     console.log(num,num1,num2);

  //     var data1=2;
  //     var data2=3;
  //   var str = `${data1}+${data1}=${data1+data2}`
  //   console.log(str);
  // },
  //--------------------案例二（箭头函数，箭头函数不绑定作用域）
  // test: (e)=> {
  //   {
  //     var num = 10;
  //   }
  //   let num1 = "我是变量";
  //   const num2 = "我是常量";
  //   console.log(num, num1, num2);

  //   var data1 = 2;
  //   var data2 = 3;
  //   var str = `${data1}+${data1}=${data1 + data2}`
  //   console.log(str);


  //   var arry=[1,2,3,4,5,6,7,8,9];
  //   arry.forEach((v)=> {
  //     console.log(v);
  //   });
  // },
  // //---------------------案例三(扩展函数)
  // test: (e) => {
  //   function root(...num){
  //     let sum=0;
  //     for(let n of num){
  //       sum+=n;
  //     }
  //     console.log(sum);
  //   }
  //   root(1.7);
  //   root(3,4,5,);
  //   root(3,4,5,6,20);
  // },
  // //---------------------案例四(解构赋值)
  // test: (e) => {
  //   //用表达式作为对象名
  //   var tool={
  //     ["str"+"name"+"you"]:"0k",
  //   }
  //   console.log(tool);
  //   //数组解构赋值
  //   var num=[20,30,40,50];
  //   var [a,b,c,d]=num;
  //   console.log(a,b,c,d);
  //   //对象解构赋值
  //   var constr={
  //     name: "张三",
  //     age:"18",
  //     sex:"男"
  //   };
  //   var {name, sex} = constr;
  //   console.log(name,sex);
  //   //字符串解构赋值
  //   var [a,b,c,d]="java";
  //   console.log(a,b,c,d);
  //   //函数的解构赋值
  //    function tt([x,y]){
  //      console.log(x,y);
  //    }
  //    tt([1,2]);

  // },
  //---------------------案例五(es6新特性Class)
  test: (e) => {
    //没有es6之前的写法
    var Root = function () {

    };
    Root.prototype.eat = function () {
      console.log("Es5 eat");
    };
    Root.prototype.doing = function () {
      console.log("Es5 doing");
    }
    let a = new Root();
    a.eat();
    a.doing();

    //有ES6 之后的用法
    class roots{
      constructor(){

      }
      eat (){
        console.log("Es6 eat");
      }
      static doing (){
        console.log("Es6 doing");
      }
    }
    let b=new roots();
    b.eat();
    roots.doing();


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})