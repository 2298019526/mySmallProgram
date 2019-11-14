// pages/studyList/third/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusCode: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getData();
  },
  getData: function(){
    var that = this;
    wx.request({
      url: 'https://www.baidu.com', //一般会报不在request合法域名列表的错，点击右上角详情-》本地设置-》选中不校验合法域名
      data: {},
      success: function(result){
        console.log(result);
        that.setData({
          statusCode: result.statusCode
        });
      },
      fail: function(){

      }
    })
  }
})