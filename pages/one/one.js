// pages/one/one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    isSucees:false
  },
  bindKeyinpiut:function(e){
    var value = e.detail.value;
    console.log(value);
    this.setData({
      name: value
    })
  },
  onclick:function(e){
    console.log(this)
    var valueName = this.data.name;
    if(valueName==''){
      wx.showToast({
        title: '请输入姓名',
        icon:'loading',
        duration:1000,
        mask:true
      })
    }else{
     wx.navigateTo({
       url: '../two/two?name=' + valueName,
     })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var nn = decodeURIComponent(options.isSucees);
    console.log(nn);
    if (nn=='true'){
      wx.showToast({
        title: '信息保存成功',
        icon: 'loading',
        duration: 1000,
        mask: true
      })
    }
    this.setData({
      isSucees: nn
    });
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