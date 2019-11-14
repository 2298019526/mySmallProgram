// pages/studyList/ninth/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: 0,
    inputValue: "",
    storageArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showStorage();
  },
  //获取输入框的内容，并赋值到text中
  expInput: function (e) {
    this.setData({ inputValue: e.detail.value })
  },
  addStorage: function () {
    var key = this.data.key;
    var value = this.data.inputValue;
    this.setData({key: key+1});
    //wx.clearStorage();
    wx.setStorageSync("key_" + key,value)
    this.showStorage();
  },
  clearStorage(){
    wx.clearStorageSync();
    this.showStorage();
  },
  showStorage(){
    var storageArr = [];
    var keyArr = [];
    const res = wx.getStorageInfoSync();
    keyArr = res.keys;
    console.log(keyArr);
    for (let i = 0; i < keyArr.length; i++){
      let value = wx.getStorageSync(keyArr[i]);
      let obj = { "key": keyArr[i], "value": value};
      storageArr.push(JSON.stringify(obj));
    }
    this.setData({ storageArr: storageArr});
  }
})