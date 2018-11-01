// pages/two/two.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    phone:'',
  },
  onclick:function(e){
    var mypone=this.data.phone;
    var myName=this.data.name;
    if(mypone==''){
      wx.showToast({
        title: '请输入电话号码',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    }else{
      wx.navigateTo({
        url: '../three/three?name=' + myName + '&phone=' + mypone,
    })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name:decodeURIComponent(options.name)
    });
    console.log("我是姓名："+this.data.name);
  },

  bindKeyinpiut: function(e){
  var myPhone = e.detail.value;
    this.setData({
      phone: myPhone
    });
    console.log(this.data.phone);
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