<template>
      <van-tabbar v-model="active" @change="change">
        <van-tabbar-item  to="/">首页</van-tabbar-item>
        <van-tabbar-item  to="/review">赛事回顾</van-tabbar-item>
        <van-tabbar-item  to="/knowledge">排球知识</van-tabbar-item>
        <van-tabbar-item  to="/bbs">公告论坛</van-tabbar-item>
        <van-tabbar-item  to="/dataanalysis">数据统计</van-tabbar-item>
        <van-tabbar-item  to="/login">个人中心</van-tabbar-item>
      </van-tabbar>
</template>

 <script>
 export default {
     data(){
        return{
           active:0
        }
     },
     created(){
        this.active=parseInt(localStorage.getItem('active'));
     },
     methods:{
         change(active){
             localStorage.setItem('active',active);
         }
     }
 }
 </script>

 <style scoped>
 .van-tabbar--fixed{
     position: fixed;
     top:0;
     height: 50px;
     background: #09183a;
 }
 .van-tabbar-item{
     font-size: 16px;
 }
 .van-tabbar-item--active{
     background: #0A255E;
     color: white;
 }
 </style>