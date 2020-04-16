<template>
    <div class="container">
        <form id="login_bg">
            <div class="login_item"><span>账号：</span><input class="log_in_input" type="text" placeholder="请输入账号"></div>
            <div class="login_item"><span>密码：</span><input class="log_in_input" type="password" placeholder="请输入密码"></div>
            <div class="btn login_item">
                <el-button type="primary">登录</el-button>
                <el-button>取消</el-button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login"
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
        width: 500px;
        height: 300px;
        border-radius: 10px;
        background-color: rgb(255,251,240);
        /*font-family: "Microsoft JhengHei UI";*/
        font-family: Helvetica;
        font-weight: bold;
        font-size: 25px;
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