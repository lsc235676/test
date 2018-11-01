// pages/cal/cal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id0:"num_0",
    id1:"num_1",
    id2:"num_2",
    id3:"num_3",
    id4:"num_4",
    id5:"num_5",
    id6:"num_6",
    id7:"num_7",
    id8:"num_8",
    id9:"num_9",
    id10:"clear",
    id11:"back",
    id12:"history",
    id13:"div",
    id14:"mul",
    id15:"sub",
    id16:"add",
    id17:"equal",
    id18:"dot",
    calresult: "0",
    dotSign:false//是否输入过小数点
  },
  clickButton: function(e){
    var btnValue=e.target.id;
    var res=this.data.calresult;
    var newDotSign=this.data.dotSign;
    if (btnValue >= "num_0" && btnValue <= "num_9"){//数字部分
      var num = btnValue.split('_')[1];
      if(res=="0"){
        res=num;
      }else{
        res+=num;
      }
      this.setData({
        calresult:res
      });
    }else{//非数字部分
      if (btnValue =="dot"){//小数点
        if (!newDotSign){
           res+='.';
          newDotSign=true;
        }
      }else if (btnValue == "clear"){//清除
           res="0";
           newDotSign=false;
      }else if (btnValue == "back"){//回退
        var length=res.length;
        if(length>1){
          var end=res.substr(length-1,length);
          res = res.substr(0,length-1);
          if (end == '.') {//判断回退时候截取的最后一位是不是小数点
            newDotSign = false;
          }
        }else{
          res="0";
          newDotSign=false;
        }
      } else if (btnValue == "add" || btnValue == "sub" || btnValue == "mul" || btnValue == "div"){
          newDotSign=false;
          var sign;
          switch (btnValue){
            case "add":
              sign='+';
              break
            case "sub":
              sign = '-';
              break
            case "mul":
              sign = '*';
              break
            case "div":
              sign = '/';
              break
            default:
              break 
          }
         var length = res.length;
        if (!isNaN(res.substr(length - 1, length))) {
             res += sign;
          }
        // if (!isNaN(res.chartAt(length-1))){
        //    res += sign;
        //  }
      }
      this.setData({
        calresult: res,
        dotSign: newDotSign,
      });
    }

  },
  equals: function(e){
    var str=this.data.calresult;
    var strArr=[];
    var item='';
    var temp=0;
    var length = str.length;
    for (var i = 0; i <length;i++){
      var ch=str.chartAt(i);
      // var ch=str.substr(i,i+1);
      console.log(ch);
      
      if((ch!=''&&ch>=0&&ch<=9)||ch=='.'){
        item+=ch;
      }else{
        strArr[temp]=item;
        temp++;
        strArr[temp] = ch;
        temp++;
        item='';
      }
      if(isNaN(strArr[strArr.length-1])){
         strArr.pop();
      }
      for(var i=0;i<strArr.length;i++){//最后一项不是数字就删除掉
        // console.log(strArr[i]);
      }

    }

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