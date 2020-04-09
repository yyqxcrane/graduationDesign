<template>
    <div class="login" :style="{backgroundImage: 'url(' + changeurl(this.islog) + ')'}">
        <!-- 登陆注册的<div> -->
        <div class="login-content">
            <div class="login-content-left">
                <img :src="this.islog?'../../static/image/login-image-1.png':'../../static/image/zhuce-image-1.png'" alt="" class="img-first">
                <img :src="this.islog?'../../static/image/login-image-2.png':'../../static/image/zhuce-image-2.png'" alt="" class="img-second">
                <img :src="this.islog?'../../static/image/login-image-3.png':'../../static/image/zhuce-image-3.png'" alt="" class="img-third">
            </div>
            <div class="login-content-right">
                <div class="user-icon">
                    <img src="../../static/image/user.png" alt="">
                    <span>{{this.islog?'登录':'注册'}}</span>
                </div>
                <div class="user-register">
                    {{this.islog?'还没有账号？':'已经注册？'}}
                    <span @click="register()">{{this.islog?'立即注册':'请登录'}}</span>
                </div>
                <div class="user-name" v-if="!this.islog">
                    <span >身份：</span>
                    <input type="text" placeholder="请选择身份...">
                </div>
                <div class="user-name">
                    <span>用户名：</span>
                    <input type="text" placeholder="请输入用户名...">
                </div>
                <div class="user-password">
                    <span>登录密码：</span>
                    <input type="text" placeholder="请输入密码...">
                </div>
                <div class="user-check">
                    <span>{{this.islog?'验证码：':'重复密码：'}}</span>
                    <input type="text" :placeholder=" this.islog ? '验证码...':'重复密码...'">
                </div>
                <div class="user-btn">
                    {{this.islog?'登录':'注册'}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
           islog: true,//是否登录or注册
           
        }
    },
    methods:{
        //注册
        register(){
           this.islog=!this.islog;//切换状态
        },
        //更改背景图
        changeurl(flag){
           if(flag){
               return '../../static/image/bk-login.png';
           }else{
               return '../../static/image/bk-zhuce-1.png';
           }
        },

    }
}
</script>

<style scoped lang="scss">
.login{
    position: fixed;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    // background: url('../../static/image/bk-login.png');
    background-size: 100%;
    &-content{
        width: 1100px;
        height: 450px;
        background: #fff;
        margin: 0 auto;
        margin-top: 40px;
        margin-bottom: 10px;
    }
}
.login-content-left{
    width:660px;
    position: relative;
    // 照片
    img{
        width:300px;
        height: 300px;
    }
    .img-first{
        position: absolute;
        top:100px;
        left: 40px;
        z-index: 3;
    }
    .img-second{
        position: absolute;
        top:50px;
        left: 160px;
        z-index: 2;
    }
    .img-third{
        position: absolute;
        top:60px;
        left: 270px;
        z-index: 1;
    }
}
.login-content-right{
    width:440px;
    height: 100%;
    margin-left: 600px;
    position: relative;
    .user-icon{
        height: 74px;
        padding-top: 20px;
        img{
            float: left;
        }
        span{
            height: 74px;
            line-height: 74px;
            font-size: 18px;
            color: #333;
            padding-left: 20px;
            letter-spacing: 9px;
        }
    }
    .user-register{
        width: 456px;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #666;
        border-bottom: 1px solid #cccccc;
        text-align: right;
        margin-right: 60px;
        span{
            color: #36aaf4;
            padding-right: 25px;
        }
    }
    .user-name,.user-password,.user-check{
        width: 456px;
        height: 40px;
        margin-top: 25px;
        span{
            width: 90px;
            font-size: 14px;
            color: #666;
            height: 40px;
            line-height: 40px;
            letter-spacing: 8px;//字之间有空格
        }
        input{
            width: 250px;
            height: 30px;
            border: 1px solid #ccc;
            padding-left: 20px;
            margin-left: 20px;
        }
    }
    .user-btn{
        position: absolute;
        bottom: 20px;
        right: 10px;
        width: 80px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #36aaf4; 
        text-align: center;
        letter-spacing: 4px;
        background: #36aaf4;
        color:white;
    }
    //focus时边框发亮
    input{
        &:focus{
            border-color:rgba(82, 168, 236, 0.8);
            outline:0;
            outline:thin dotted \9;
            -webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
            -moz-box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
            box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
        }
    }
}
</style>
