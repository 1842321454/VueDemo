
<template>

<el-form :inline="true" :model="listQuery" class="demo-form-inline">
 <el-form-item>
 <el-button type="primary" @click="userQuery" icon="el-icon-search">查询</el-button>
 </el-form-item>
</el-form>
    <el-table :data="list" style="width: 100%">
      <el-table-column fixed prop="date" label="日期" width="150" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="state" label="状态" width="120" />
      <el-table-column prop="city" label="城市" width="120" />
      <el-table-column prop="address" label="详细地址" width="600" />
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">
            详情
          </el-button>
          <el-button link type="primary" size="small">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </template>
  
  <script>

  export default{
    data(){
      return{
        list:null
      }
    },
    methods:{
      userQuery() {
        this.$request({
                method: 'GET',
                url: '/userQuery'
            }).then((response)=>{
              this.list=response.data
              console.log(response.data)
            })
      }
    },
    mounted(){
      this.userQuery();
    }
  }

  </script>
  