<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.menu_href" :key="item.menu_href">
                        <template slot="title">
                            <i :class="item.menu_icon"></i><span slot="title">{{ item.menu_name }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.menu_href" :key="subItem.menu_href">
                                <template slot="title">{{ subItem.menu_name }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.menu_href">
                                    {{ threeItem.menu_name }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.menu_href" :key="subItem.menu_href">
                                {{ subItem.menu_name }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.menu_href" :key="item.menu_href">
                        <i :class="item.menu_icon"></i><span slot="title">{{ item.menu_name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script type="text/ecmascript-6">
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
//                    {
//                        icon: 'el-icon-lx-people',
//                        index: '1',
//                        title: '用户权限',
//                        subs: [
//                            {
//                                index: 'user_management',
//                                title: '用户管理'
//                            },
//                            {
//                                index: 'menu_management',
//                                title: '角色权限'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-lx-apps',
//                        index: '2',
//                        title: '系统管理',
//                        subs: [
//                            {
//                                index: 'projectPortfolioManagement',
//                                title: '项目组管理'
//                            },
//                            {
//                                index: 'sampleTypemManagement',
//                                title: '样品类型管理'
//                            },{
//                                index: 'testStandardManagement',
//                                title: '测试依据'
//                            },{
//                                index: 'testItemManagement',
//                                title: '测试项目'
//                            },{
//                                index: 'testCategoryManagement',
//                                title: '测试类别管理'
//                            },{
//                                index: 'sampleStorageManagement',
//                                title: '样品储位管理'
//                            },
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-lx-calendar',
//                        index: '3',
//                        title: '测试资源',
//                        subs: [
//                            {
//                                index: 'laboratoryEquipmentCapability',
//                                title: '实验室设备能力'
//                            },
//                            {
//                                index: 'equipmentlLedger',
//                                title: '设备台账'
//                            },
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-lx-copy',
//                        index: '4',
//                        title: '收样管理',
//                        subs: [
//                            {
//                                index: 'confirmationoOfSample',
//                                title: '样品确认'
//                            },
//                            {
//                                index: 'sampleReceive',
//                                title: '样品接收'
//                            },{
//                                index: 'sampleRent',
//                                title: '样品领取'
//                            },{
//                                index: 'sampleReturn',
//                                title: '样品归还'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-lx-sort',
//                        index: '5',
//                        title: '排配系统',
//                        subs: [
//                            {
//                                index: 'SampleFillet',
//                                title: '样品排配'
//                            },
//                            {
//                                index: 'channelInfo',
//                                title: '通道信息'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-lx-edit',
//                        index: '6',
//                        title: '测试任务',
//                        subs: [
//                            {
//                                index: 'waitGetSamples',
//                                title: '待领样'
//                            },
//                            {
//                                index: 'waitTest',
//                                title: '待测试'
//                            }, {
//                                index: 'testInProcess',
//                                title: '测试中'
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-lx-punch',
//                        index: '7',
//                        title: '数据审核',
//                        subs: [
//                            {
//                                index: 'dataAuditing',
//                                title: '数据审核'
//                            },
//                            {
//                                index: 'exceptionHandling',
//                                title: '异常处理',
//                                subs: [
//                                    {
//                                        index: 'SamplesAbnormal',
//                                        title: '样品异常'
//                                    },{
//                                        index: 'testDataException',
//                                        title: '测试数据异常'
//                                    },{
//                                        index: 'deviceExceptionHandling',
//                                        title: '设备异常处理'
//                                    },
//                                ]
//                            }
//                        ]
//                    },
//                    {
//                        icon: 'el-icon-lx-searchlist',
//                        index: '0',
//                        title: '其他组件',
//                        subs: [
//                            {
//                                index: 'form',
//                                title: '基本表单'
//                            },
//                            {
//                                icon: 'el-icon-lx-home',
//                                index: 'dashboard',
//                                title: '系统首页'
//                            },
//                            {
//                                icon: 'el-icon-lx-cascades',
//                                index: 'table',
//                                title: '基础表格'
//                            },
//                            {
//                                icon: 'el-icon-lx-copy',
//                                index: 'tabs',
//                                title: 'tab选项卡'
//                            },
//                            {
//                                icon: 'el-icon-lx-emoji',
//                                index: 'icon',
//                                title: '自定义图标'
//                            },
//                            {
//                                icon: 'el-icon-lx-favor',
//                                index: 'charts',
//                                title: 'schart图表'
//                            },
//                            {
//                                icon: 'el-icon-rank',
//                                index: 'drag',
//                                title: '拖拽列表'
//                            },
//                            {
//                                icon: 'el-icon-lx-warn',
//                                index: '9',
//                                title: '错误处理',
//                                subs: [
//                                    {
//                                        index: 'permission',
//                                        title: '权限测试'
//                                    },
//                                    {
//                                        index: '404',
//                                        title: '404页面'
//                                    }
//                                ]
//                            },
//                            {
//                                index: '3-2',
//                                title: '三级菜单',
//                                subs: [
//                                    {
//                                        index: 'editor',
//                                        title: '富文本编辑器'
//                                    },
//                                    {
//                                        index: 'markdown',
//                                        title: 'markdown编辑器'
//                                    },
//                                ]
//                            },
//                            {
//                                index: 'upload',
//                                title: '文件上传'
//                            }
//                        ]
//                    },
                ],
                isadmin:function(){
                    if(localStorage.getItem('role') =='admin') {
                        return true
                    }else {
                        return false;
                    }
                }(),
                list:[
                    {
                        "id": 1,
                        "menu_name": "用户管理",
                        "menu_href": "user_manage",
                        "menu_icon": "el-icon-lx-favor",
                        "tree_sort": 110,
                        "tree_level": 2,
                        "is_show": 1,
                        "status": 0,
                        "remarks": "",
                        "parent": null
                    },
                    {
                        "id": 2,
                        "menu_name": "活动管理",
                        "menu_href": "active_manage",
                        "menu_icon": "el-icon-lx-apps",
                        "tree_sort": 200,
                        "tree_level": 1,
                        "is_show": 1,
                        "status": 0,
                        "remarks": "",
                        "parent": null
                    },

                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        async created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            });
            if(!this.isadmin){
                this.list=[
                    {
                        "id": 2,
                        "menu_name": "活动管理",
                        "menu_href": "active_manage",
                        "menu_icon": "el-icon-lx-apps",
                        "tree_sort": 200,
                        "tree_level": 1,
                        "is_show": 1,
                        "status": 0,
                        "remarks": "",
                        "parent": null
                    },
                    ]
            }
           this.items = this.filterArray(this.list); //本地数据
//            this.items =  await this.getdatalist(); // 服务器所有数据
            //   this.items = this.filterArray(JSON.parse(localStorage.getItem('tdms_Menu'))); // 服务器个人数据
            console.log('权限列表');
            console.log( this.items);
//            this.items.push(this.other);

        },
        mounted:function(){
//


        },
        methods:{
            filterArray(data, parent) {
                let vm = this;
                var tree = [];
                var temp;
                let menuNames = ['mypage','404','403'];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].parent == parent) {
                        var obj = data[i];
                        temp = vm.filterArray(data, data[i].id);
                        if (temp.length > 0) {
                            obj.subs = temp;
                        }
                        tree.push(obj);
                    }
                    menuNames.push(data[i]['menu_href']);
                }
                localStorage.setItem('tdmsMyMenu',JSON.stringify(menuNames));
                return tree;
            },
            //获取所有权限
            async getdatalist(){
               let vm =this;
               let list = await vm.$fetch(vm.$path+"users/menu/",{});
               console.log(list);
                if(list.dataInfo.listData){
                    let dalist = []
                    list.dataInfo.listData.map(function(item){
                        if(item.menu_type == 0){
                            dalist.push(item);
                        }
                    })
                   return  vm.filterArray(dalist);
                }else {
                    vm.$message('您还为拥有任何权限！请联系管理员');
                    vm.$router.push('login');
                }
            },

            async getmyroledatalist(){
               let vm =this;
               let list = await vm.$fetch(vm.$path+"users/userMenu/",{});
               console.log(list);
                let menuNames = ['mypage','404','403'];
                if(!list.dataInfo){
                    localStorage.setItem('tdmsMyMenu',JSON.stringify(menuNames));
                    return []
                }
                if(list.dataInfo.listData){
                    let dalist = [];

                    list.dataInfo.listData.map(function(item){
                        if(item.menu_type == 0){
                            dalist.push(item);
                            menuNames.push(item.menu_href);
                        }
                    });
                    localStorage.setItem('tdmsMyMenu',JSON.stringify(menuNames));
                   return  vm.filterArray(dalist);
                }else {
                    vm.$message('您还为拥有任何权限！请联系管理员');
                    vm.$router.push('login');
                }
            },



        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
