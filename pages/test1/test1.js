// pages/test1/test1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    chinesescore:"",
    mathscore:"",
    avg:"",
    flage: true
  },
  input1: function(e){
    console.log(e);
    var input=e.detail.value;
    this.setData({
      name:input
    });
  },
  input2: function (e) {
    console.log(e);
    var input = e.detail.value;
    this.setData({
      chinesescore: input
    });

  },
  input3: function (e) {
    console.log(e);
    var input = e.detail.value;
    this.setData({
      mathscore: input
    });

  },
  test: function () {
    if (this.data.name == '' || this.data.chinesescore == '' ||     this.data.mathscore=='') return;
    var result=(this.data.mathscore*1+this.data.chinesescore*1)/2;
    this.setData({
      avg: result,
      flage:false
    });
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