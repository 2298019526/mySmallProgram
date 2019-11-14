//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageData: [
      { id: 0, src: "../../images/swiper01.jpg", url: "../studyList/first/index", text: "第一张" },
      { id: 1, src: "../../images/swiper02.jpg", url: "../studyList/second/index", text: "第二张" },
      { id: 2, src: "../../images/swiper03.jpg", url: "../studyList/third/index", text: "第三张" },
      { id: 3, src: "../../images/swiper04.jpg", url: "../studyList/fouth/index", text: "第四张" }
    ],
    menuData: [
      { id: 1, src: "../../images/03.png", url: "../studyList/first/index", text: "菜单一" },
      { id: 2, src: "../../images/04.png", url: "../studyList/second/index", text: "菜单二" },
      { id: 3, src: "../../images/05.png", url: "../studyList/third/index", text: "菜单三" },
      { id: 4, src: "../../images/06.png", url: "../studyList/fouth/index", text: "菜单四" },
      { id: 5, src: "../../images/06.png", url: "../studyList/fouth/index", text: "菜单四" },
      { id: 6, src: "../../images/05.png", url: "../studyList/fouth/index", text: "菜单四" }
    ],
    commodityData: [
      { id: 1, src: "../../images/shop-01.jpg", title: "绝味鸭脖", price: "12.00", visitorsNum: "123" },
      { id: 2, src: "../../images/shop-02.jpg", title: "葡萄干", price: "18.00", visitorsNum: "22" },
      { id: 3, src: "../../images/shop-03.jpg", title: "小龙虾", price: "45.00", visitorsNum: "212" },
      { id: 4, src: "../../images/shop-04.jpg", title: "联想笔记本mate book", price: "2199.00", visitorsNum: "120" },
      { id: 5, src: "../../images/shop-05.jpg", title: "哈密瓜", price: "10.00", visitorsNum: "340" },
      { id: 6, src: "../../images/shop-06.jpg", title: "红枣500g", price: "15.00", visitorsNum: "5120" },
      { id: 7, src: "../../images/shop-07.jpg", title: "杏仁500g", price: "18.00", visitorsNum: "1200" }
    ],
    saleData: [
      { id: 1, src: "../../images/shop-01.jpg", title: "绝味鸭脖", describe: "是否够不上天津体育的明星", saleNum: 1, visitors: 5120, price: "19.00" }, 
      { id: 2, src: "../../images/shop-02.jpg", title: "葡萄干", describe: "是否够不上天津体育的明星", saleNum: 2, visitors: 4120, price: "8.00" },
      { id: 3, src: "../../images/shop-03.jpg", title: "小龙虾", describe: "是否够不上天津体育的明星", saleNum: 3, visitors: 3220, price: "100.00" },
      { id: 4, src: "../../images/shop-04.jpg", title: "联想笔记本mate", describe: "是否够不上天津体育的明星", saleNum: 4, visitors: 3120, price: "3600.00" },
      { id: 5, src: "../../images/shop-05.jpg", title: "哈密瓜", describe: "是否够不上天津体育的明星", saleNum: 5, visitors: 2520, price: "12.00" }
    ]
  },
  onLoad: function () {
    
  }
})
