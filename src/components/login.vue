<template>
    <div class="container">
        <form id="login_bg">
            <div class="login_item">
                <span>账号：</span>
                <input class="log_in_input" type="text" placeholder="请输入账号" v-model="userName">
            </div>
            <div class="login_item">
                <span>密码：</span>
                <input class="log_in_input" type="password" placeholder="请输入密码" v-model="passWord">
            </div>
            <div class="btn login_item">
                <el-button type="primary" @click="login_in">登录</el-button>
                <el-button @click="reset">重置</el-button>
            </div>
        </form>
    </div>
</template>

<script>
    import {login} from '../network/login'
    export default {
        name: "login",
        data(){
            return {
                userName:"",
                passWord:""
            }
        },
        methods:{
            login_in(){
                const data = {
                    userName: this.userName,
                    passWord: this.passWord
                }
                login(data).then(
                    response =>{
                        if(response.data.data.login === "success"){
                            this.$router.push("/home")
                        }
                    }
                )
            },
            reset(){
                this.userName="";
                this.passWord=""
            }
        }
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
        width: inherit;
        background-color: #2b4b6b;
    }
    #login_bg{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 336px;
        height: 250px;
        border-radius: 10px;
        background-color: rgb(255,251,240);
        /*font-family: "Microsoft JhengHei UI";*/
        font-family: Helvetica;
        font-weight: bold;
        font-size: 20px;
    }
    #login_bg div:nth-child(1){
        padding-top: 70px;
    }
    .login_item{
        padding-top: 27px;
    }
    .log_in_input{
        height: 25px;
        width: 230px;
        border-radius: 5px;
    }
    .btn{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 273px;
    }
    ::placeholder{
        color: slategray;
        font-size: 18px;
    }
</style>