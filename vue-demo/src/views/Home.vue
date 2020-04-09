<template>
    <div class="content">
         <div style="padding-bottom:10px">
             <input type="text" name="" id="" placeholder="  search..." @keyup="search(value)" v-model="value">
             <button @click="add()">新增用户</button>
         </div>
        <tr>
            <th>id</th>
            <th>用户名</th>
            <th>邮箱</th>
            <th>性别</th>
            <th>省份</th>
            <th>爱好</th>
            <th>操作</th>
        </tr>
        <tr v-cloak v-for="(item, index) of list" :key="index">
            <td style="width:60px">{{index+1}}</td>
            <td>{{item.username}}</td>
            <td>{{item.email}}</td>
            <td style="width:60px">{{item.sex}}</td>
            <td>{{item.province}}</td>
            <td>{{item.hobby.join(' | ')}}</td>
            <td><a href="javascript:;" @click="showOverlay(index)">修改</a> | <a href="javascript:;" @click="del(index)">删除</a></td>
        </tr>
        <!-- 弹窗 -->
        <div class="mask" v-if="this.isshow"></div>
        <div class="tanchuang" v-if="this.isshow">
            用户名:<input type="text" v-model="obj.username"><br>
            邮箱:<input type="text" v-model="obj.email"><br>
            性别:<input type="text" v-model="obj.sex"><br>
            省份:<input type="text" v-model="obj.province"><br>
            爱好: 
            <div @click="choice()" class="hobby">
                <input type="checkbox" name="篮球" id="0" :checked="obj.hobby.includes('篮球')">篮球
                <input type="checkbox" name="读书" id="1" :checked="obj.hobby.includes('读书')">读书
                <input type="checkbox" name="插画" id="2" :checked="obj.hobby.includes('插画')">插画
                <input type="checkbox" name="编程" id="3" :checked="obj.hobby.includes('编程')">编程
                <input type="checkbox" name="唱歌" id="4" :checked="obj.hobby.includes('唱歌')">唱歌
                <input type="checkbox" name="写作" id="5" :checked="obj.hobby.includes('写作')">写作
            </div>
            <br>
            <button @click="addobj()">增加</button>
            <button @click="genggaiobj()">修改</button>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            list: [
                {
                    username: 'aaaaa',
                    email: '123@qq.com',
                    sex: '男',
                    province: '北京市',
                    hobby: ['篮球', '读书', '编程']
                },{
                    username: 'bbbbb',
                    email: 'bbbbbbb@163.com',
                    sex: '女',
                    province: '河北省',
                    hobby: ['弹琴', '读书', '插画']
                },{
                    username: 'cccc',
                    email: '123ascv@163.com',
                    sex: '女',
                    province: '杭州市',
                    hobby: ['写作', '唱歌', '旅游']
                }
            ],
            value:'',//用户输入
            slist:[
                {
                    username: 'aaaaa',
                    email: '123@qq.com',
                    sex: '男',
                    province: '北京市',
                    hobby: ['篮球', '读书', '编程']
                },{
                    username: 'bbbbb',
                    email: 'bbbbbbb@163.com',
                    sex: '女',
                    province: '河北省',
                    hobby: ['弹琴', '读书', '插画']
                },{
                    username: 'cccc',
                    email: '123ascv@163.com',
                    sex: '女',
                    province: '杭州市',
                    hobby: ['写作', '唱歌', '旅游']
                }
            ],
            isshow:false,//不显示
            obj:{
                username:'',
                email:'',
                sex:'',
                province:'',
                hobby:[],
            }
        }
    },
    create(){
        
    },
    methods:{
        //搜索
        search(value){
           var reg=new RegExp("^"+value);
           var res=[];
           for(var i=0;i<this.list.length;i++){
              if(this.list[i].username.match(reg)!=null){
                res.push(this.list[i]);
              }
           }
            if(value){
               this.list=res;
            }else{
               this.list= this.slist;
            }
        },
        //修改
        showOverlay(index){
            this.isshow=!this.isshow;
            this.obj=this.list[index];
            this.list.splice(index,1)
        },
        genggaiobj(){
            this.isshow=!this.isshow;
            this.list.push(this.obj);
        },
        //删除
        del(index){
           this.list.splice(index,1);
        },
        //新增
        add(){
            //控制弹窗显示隐藏
            this.isshow=!this.isshow;
        },
        choice(){
            var oinp=document.querySelectorAll(".hobby input");
            for(var i=0;i<oinp.length;i++){
                if(oinp[i].checked){
                    this.obj.hobby.push(oinp[i].name);
                }
            }
        },
        addobj(){
            this.isshow=!this.isshow;
            //将输入的东西封装成对象添加到list
            this.list.push(this.obj);
        },
    }
}
</script>

<style scoped>
.content{
    /* width: 100vw; */
    /* height: 100vh; */
    padding-top: 50px;
    padding-left: 100px;
}
tr th{
    width:12vw;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid gray;
}
tr td{
    width:12vw;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid gray;
}
.mask{
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 100;
/*移动端*/
background: rgba(0,0,0,.5);
/*ie*/
background: #000;
opacity: 0.5;
filter: alpha(opacity = 0.5);
}
.tanchuang{
    position: absolute;
    height: 300px;
    width: 500px;
    z-index: 1000;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: white;
}
.tanchuang>input{
    height: 7%;
    margin: 2% 10%;
}
</style>
