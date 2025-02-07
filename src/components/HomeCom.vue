<template>
    <div class="full-page-layout" style="height: 100vh; background-color: #f5f5f5; margin: 0;">
        <el-container style="height: 100%;">
            <el-aside width="200px" style="background-color: #ffffff; border-right: 1px solid #e0e0e0; padding: 10px; height: 100%;">
                <h2 style="color: #007bff; text-align: center;">导航栏</h2>
                <ul style="list-style-type: none; padding: 0;">
                    <li style="margin: 10px 0;">
                        <router-link to="/user" style="text-decoration: none; color: #007bff; font-weight: bold;">用户管理</router-link>
                    </li>
                </ul>
            </el-aside>
            <el-container>
                <el-header style="background-color: #007bff; color: white; text-align: center; padding: 10px;">
                    <h1>用户信息</h1>
                </el-header>
                <el-main style="padding: 20px; background-color: #ffffff; border-radius: 8px; height: calc(100% - 50px);">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
  