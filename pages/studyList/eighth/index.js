// pages/studyList/eighth/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formError: "",
    userName: "",
    userPwd1: "",
    userPwd2: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  submitFrom: function(e){
    var userName = e.detail.value.userName,
      pwd1 = e.detail.value.userPwd1,
      pwd2 = e.detail.value.userPwd2;
    if (userName.length == 0 || pwd1.length == 0 || pwd2.length==0){
      this.setData({ formError: "用户名或密码不能为空！！！" });
      return false;
    }
    if (pwd1 !== pwd2){
      this.setData({ formError: "两次密码必须相同！！！" });
      return false;
    }
    this.setData({ formError: "" });
    console.log(e.detail);
    wx.navigateBack({
      
    })
  },
  resetFrom(){
    this.setData({ userName: "", userPwd1: "", userPwd2: ""});
  }
})