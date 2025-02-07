<style scoped>
    div {
        max-width: 400px;
        margin: 200px auto; /* 向下移动整体输入框 */
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        background-color: #f9f9f9;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }

    button {
        width: 100%;
        padding: 10px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
<template>
    <div>
        <label for="username">账户:</label>
        <input type="text" id="username" v-model="username" />

        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" />

        <el-Button type="primary" @click="login">登录</el-Button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            username: 'admin',
            password: '123456'
        }
    },
    methods: {
        login() {
            debugger
            this.$request({
                method: 'POST',
                url: '/login',
                data: {
                    username: this.username,
                    password: this.password
                }
            }).then(()=>{
                this.$router.push('/home')
            })
           
        }
    }
}
</script>