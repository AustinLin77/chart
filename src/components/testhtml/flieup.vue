<template>
    <div class="activeuser" v-loading.fullscreen.lock="loading"
         element-loading-text="请求中">

        <div>
            <div class="handle-box">

                <el-button type="primary" icon="create" class="handle-del mr10" @click="openUpfile">文件上传</el-button>
            </div>
        </div>

        <el-dialog title="上传人员信息" :visible.sync="upVisible" width="400px"  append-to-body>
            <el-form lv-model="left" abel-width="100px">
            <el-form-item label="上传路径" prop="participantType">
                <el-input v-model="fileurl" placeholder="请填写上传路径"></el-input>
            </el-form-item>
                <el-form-item label="活动id" prop="participantType">
                <el-input v-model="fileupdata.activeId" placeholder="请填活动id"></el-input>
            </el-form-item>
            </el-form>
            <el-upload
                class="upload-demo"
                ref="upload"
                :action="fileurl"
                :limit="1"
                :data="fileupdata"
                :on-success="upsuccess"
                :on-error="uperror"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :auto-upload="false">
                <div slot="trigger" class="uptriger">
                    <el-button  size="small" type="primary">选取文件</el-button>
                </div>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                <div slot="tip" class="el-upload__tip">只能上传excel文件，且不超过500kb</div>
            </el-upload>
        </el-dialog>


    </div>
</template>

<script type="text/ecmascript-6">

import ElInput from "../../../node_modules/element-ui/packages/input/src/input.vue";

export default {
    components: {ElInput},
    data() {
    return {
        loading:false,
        fileurl:"http://172.30.128.37:8080/lottery/desk/importDesk",
        fileupdata:{
            activeId :"",
        },
        upVisible:false

    };
  },
  created() {

  },

  methods: {
      //打开文件上传
      openUpfile(){
          this.upVisible = true;
          let vm = this;
          vm.errdata = [];
          vm.fileupdata={
              activeId :"",
          }
      },
      upsuccess(response, file, fileList){
        console.log(response);
        this.loading = false;
          this.$refs.upload.clearFiles();
          this.$message(response.message);
        if(response.statusCode == 0){
            this.upVisible = false;
        }else {
            this.errdata = response.dataInfo.listData;
        }
      },
      uperror(err, file, fileList){
          this.$refs.upload.clearFiles();
      },
      submitUpload() {
          if(!this.fileurl){
              this.$message("请填写上传路径");
              return
          }
          this.loading = true;
          this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
          console.log(file, fileList);
      },
      handlePreview(file) {
          console.log(file);
      },
  }
};
</script>

<style scoped>
.checkRoles {
  padding-left: 20px;
}

.handle-box {
  margin-bottom: 0px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.activeuser {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.uptriger{
    display: inline;
}

</style>
