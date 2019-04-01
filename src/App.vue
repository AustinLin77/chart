<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<style>
    @import "../static/css/main.css";
    @import "../static/css/color-dark.css";     /*深色主题*/
    /*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
   #app .el-checkbox+.el-checkbox {
        margin-left: 0;
        margin-top: 10px;
    }
    #app .el-checkbox {
        display: block;
        transform: scale(1.1,1.1);
        transform-origin:left;
    }
    #app .setRoleDia .el-dialog__body{
        padding-top: 0;
    }
    .upload-demo .el-upload--text{
        background-color: #fff;
        border:none;
        border-radius: 6px;
        width: auto;
        height: auto;
        overflow:visible;
        cursor: pointer;
    }
</style>
