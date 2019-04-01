import Vue from 'vue'
import App from './App';
import router from './router';
import axios from 'axios';
import 'url-search-params-polyfill';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import Echarts from 'echarts'
import '../static/css/icon.css';
import  dateFns from 'date-fns'
import "babel-polyfill";
import Print from 'vue-print-nb'

import utils from "./api/utils";

import {post,fetch,patch,put,del} from './api/http'
//定义全局变量

Vue.prototype.echarts = Echarts

Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$del=del;
Vue.prototype.$utils = utils;
Vue.prototype.$path="http://nhcj.sunwoda.com:9001/lottery/";
// Vue.prototype.$path="http://172.30.201.122:9001/lottery/";
// Vue.prototype.$path="http://172.30.128.32:8080/lottery/";
// Vue.prototype.$path="http://172.30.128.37:8080/lottery/";
// Vue.prototype.$path="http://192.168.9.85:8085/lottery/";
Vue.use(ElementUI, { size: 'small' });
Vue.use(Print);
Vue.use(Echarts)
Vue.prototype.$axios = axios;

Vue.prototype.$dateFns=dateFns; //时间格式化


Vue.config.productionTip = false;

//使用钩子函数对路由进行权限跳转

router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('draw_user');
    if(to.path == '/fileup'){
        next();
    }
    else if(!role && to.path !== '/login'){
        next('/login');
        // next();
    }
    //else if(to.path !== '/login' ){
    //    if(roleMenu.indexOf(to.path.substring(1)) == -1){
    //        next('/mypage');
    //    }else {
    //        next();
    //    }
    //}
    else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
