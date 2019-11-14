// pages/studyList/fifth/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    current: 0,
    imageData: [
      { id: 0, src: "../../../images/swiper01.jpg", url: "../first/index", text: "第一张" },
      { id: 1, src: "../../../images/swiper02.jpg", url: "../second/index", text: "第二张" },
      { id: 2, src: "../../../images/swiper03.jpg", url: "../third/index", text: "第三张" },
      { id: 3, src: "../../../images/swiper04.jpg", url: "../fouth/index", text: "第四张" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  currentChange: function (e){
    this.setData({
      current: e.detail.current
    });
  }
})