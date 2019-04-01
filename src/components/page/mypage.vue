<template>
    <div class="content">
        <div class="container">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="组织架构">
                    <el-input v-model="formInline.user" placeholder="审批人" @change="changeinput"></el-input>
                </el-form-item>
                <el-form-item label="一级部门">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开始月份">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="结束月份">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card shadow="hover">
                        <div id="echarts-person" :style="{width: '100%', height: '300px',margin:'0 auto'}"></div>
                        <div>
                            <table border="1" cellspacing="0">
                                <thead style="background-color: #b3d8ff;text-align: center">
                                 <td>月份</td>
                                 <td v-for="i in qualificationdata.alx">{{i}}</td>
                                </thead>
                                <tbody style="text-align: right;">
                                  <tr>
                                      <td class="centercell">总人数</td>
                                      <td v-for="item in persondata.allperson">{{item}}</td>
                                  </tr>
                                  <tr>
                                      <td class="centercell">职员人数</td>
                                      <td v-for="item in persondata.zhiperson">{{item}}</td>
                                  </tr>
                                  <tr>
                                      <td class="centercell">普工人数</td>
                                      <td v-for="item in persondata.puperson">{{item}}</td>
                                  </tr>
                                  <tr>
                                      <td class="centercell">派遣工人数</td>
                                      <td v-for="item in persondata.paiperson">{{item}}</td>
                                  </tr>
                                </tbody>
                                <tfoot style="background-color: #cf9236">
                                    <tr>
                                        <td class="centercell">派遣工占比</td>
                                        <td class="centercell" v-for="item in persondata.pairal">{{item}}%</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="12"><div class="grid-content bg-purple">
                    <el-card shadow="hover">
                        <div id="echarts-qualification" :style="{width: '100%', height: '300px',margin:'0 auto'}"></div>
                        <div>
                            <table border="1" cellspacing="0">
                                <thead style="background-color: #b3d8ff;text-align: center">
                                <td>月份</td>
                                <td v-for="i in qualificationdata.alx">{{i}}</td>
                                </thead>
                                <tbody style="text-align: right;">
                                <tr>
                                    <td class="centercell">博士</td>
                                    <td v-for="item in qualificationdata.boshi">{{item}}</td>
                                </tr>
                                <tr>
                                    <td class="centercell">硕士</td>
                                    <td v-for="item in qualificationdata.shuoshi">{{item}}</td>
                                </tr>
                                <tr>
                                    <td class="centercell">本科</td>
                                    <td v-for="item in qualificationdata.benke">{{item}}</td>
                                </tr>
                                <tr>
                                    <td class="centercell">大专</td>
                                    <td v-for="item in qualificationdata.dazhuan">{{item}}</td>
                                </tr>
                                <tr>
                                    <td class="centercell">大专以下</td>
                                    <td v-for="item in qualificationdata.dazhuanlow">{{item}}</td>
                                </tr>
                                </tbody>
                                <tfoot style="background-color: #cf9236">

                                <tr>
                                    <td class="centercell">总计</td>
                                    <td class="centercell" v-for="item in qualificationdata.all">{{item}}</td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>
                    </el-card>
                </div></el-col>

            </el-row>
        </div>
    </div>

</template>

<script>
    import bus from '../common/bus'
    export default {
        name: 'dashboard',
        data() {
            return {
                echatperson:null,
                echatqualification:null,
                screenWidth:"",
                formInline: {
                    user: '',
                    region: ''
                },
                persondata:{
                    alx:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    allperson:[1000, 990, 1100, 1132, 1250, 1320,1000, 990, 1100, 1132, 1250, 1320],
                    puperson:[658,751,354,954,351,681,285,762,875,654,685,682],
                    zhiperson:[342,345,367,356,387,352,387,389,190,414,421,375],
                    paiperson:[0,0,100,50,25,57,33,55,79,51,84,75],
                    pairal:[0,0,16,11,3,0,1,5,4,11,5,6]
                },
                qualificationdata:{
                    alx:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    boshi:[2,3,8,8,4,1,4,1,4,14,4,6],
                    shuoshi:[36,34,38,48,34,21,44,41,34,14,44,26],
                    benke:[66,77,55,56,56,55,66,56,66,76,56,32],
                    dazhuan:[36,45,23,34,34,34,44,23,34,43,43,33],
                    dazhuanlow:[236,245,223,234,234,234,244,223,234,243,243,233],
                    all:[536,545,523,534,534,534,544,523,534,543,543,533],
                }
            }
        },
        watch: {
            screenWidth (val) {
                if (!this.timer) {
                    this.screenWidth = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        // that.screenWidth = that.$store.state.canvasWidth
                        console.log(that.screenWidth)
                        if(that.echatperson){
                            that.echatperson.resize();
                            that.echatqualification.resize()
                        }
                        that.timer = false
                    }, 400)
                }
            }
        },
        computed: {

        },
        created(){

        },
        mounted() {
            const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                })()};
          this.personinit();
          this.qualificationinit(this.qualificationdata);
        },

        methods: {
            changeinput(){
                 bus.$emit("messcount",this.formInline.user)
            },
            onSubmit() {
                console.log('submit!');
            },
            //人员图表加载
            personinit(){
                var personbox = document.getElementById('echarts-person');
                this.echatperson = this.echarts.init(personbox);
                var option = {
                    backgroundColor: '#F5F5F5',
                    title: {
                        text: '人员规模与类型分布',
                        left: 'center',
                        top: 5,
                    },
                    grid:{
                        left:60,
                        bottom:30,
                        right:15
                    },
                    tooltip: {},
                    legend: {
                         top:28,
                         right:5
                    },
                    xAxis: {
                        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
                    },
                    yAxis: {},

                    series: [
                         {
                                name:'总人数',
                                type:'bar',
                                barWidth:25,
                                itemStyle: {
                                     color:'#4695ed',
                                     shadowColor: '#aaa',
                                     shadowOffsetX:2,
                                     shadowOffsetY:2,
                                     shadowBlur: 10
                                 },
                                data:[1000, 990, 1100, 1132, 1250, 1320,1000, 990, 1100, 1132, 1250, 1320 ]
                            },
                            {
                                name:'职员',
                                type:'line',
                                itemStyle: {
                                    color:'#dc143c',
                                },
                                data:[342,345,367,356,387,352,387,389,190,414,421,375]
                            },
                           {
                                name:'普工',
                               itemStyle: {
                                   color:'#32aa32',
                               },
                                type:'line',
                                data:[658,751,354,954,351,681,285,762,875,654,685,682]
                            },
                            {
                                name:'派遣工',
                                type:'line',
                                itemStyle: {
                                    color:'#7400a3',
                                },
                                data:[0,0,100,50,25,57,33,55,79,51,84,75]
                            }
                    ],


                };
                this.echatperson.setOption(option);

            },
            qualificationinit(data){
                var qualificationbox = document.getElementById('echarts-qualification');
                this.echatqualification = this.echarts.init(qualificationbox);
                var option = {
                    backgroundColor: '#F5F5F5',
                    title: {
                        text: '职员学历分布',
                        left: 'center',
                        top: 5,
                    },
                    grid:{
                        left:60,
                        bottom:50,
                        right:15
                    },
                    tooltip: {},
                    legend: {
                         bottom:5,
                         left:"center"
                    },
                    xAxis: {
                        data: data.alx,
                    },
                    yAxis: {},
                    series: [
                         {
                                name:'博士',
                                type:'bar',
                                data:data.boshi
                            },
                            {
                                name:'硕士',
                                type:'bar',
                                data:data.shuoshi
                            },
                           {
                                name:'本科',
                                type:'bar',
                                data:data.benke
                            },
                            {
                                name:'大专',
                                type:'bar',
                                data:data.dazhuan
                            }, {
                                name:'大专以下',
                                type:'bar',
                                data:data.dazhuanlow
                            },{
                                name:'大专以下（线性）',
                                type:'line',
                                data:data.dazhuanlow
                            }
                    ],
                };
                this.echatqualification.setOption(option);

            },
        }
    }

</script>


<style scoped>
      table{
          width: 100%;
          border: solid 1px #eee;
          background-color: #f5f5f5;
          font-size: 12px;
          line-height: 25px;
      }
    .centercell{
        text-align: center;
    }
    tbody td{
        padding-right: 5px;
    }

</style>
