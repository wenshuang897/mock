<template>
    <div>
       <el-table :data="arrs">
           <el-table-column prop="id" label="id">
           </el-table-column>
           <el-table-column prop="name" label="姓名">
           </el-table-column>
           <el-table-column prop="text" label="文本">
           </el-table-column>
           <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
       </el-table>
       <!--  增加按钮-->
       <el-button type="primary" class="addbtn" @click="addfn(1)">增加用户</el-button>
       <span>{{this.$store.state.count}}</span>
    <!-- 弹窗 -->
       <el-dialog :title="i===1?'添加用户':'编辑'" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
             <el-form-item label="文本" :label-width="formLabelWidth">
            <el-input v-model="form.text" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="fnsure">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script>
import instance from "../../api/index"
export default {
    name:"HomeIndex",
    data(){
        return{
            arrs:null,
            // title:'',
            debounceedit:null, //新业务防抖封装
            debouncedelete:null,
            dialogFormVisible:false,//弹窗的侠士不显示
            form:{
                name:"zhangsan",
                text:'客户',
                id:"0"
            },
            formLabelWidth:"120px",
            i:0   //区分是不是添加业务还是修改业务
        }
    },
    created(){
        this.getHomeIndex()
        // this.handleDelete()
    },
    methods:{
        // 添加业务
        addfn(i){
            console.log(i)
            this.i = i
            this.form.name = '',
            this.form.text = ''
            this.dialogFormVisible = !this.dialogFormVisible
        },
        fnsure(){
            this.dialogFormVisible = false
            if(this.i === 1) return this.handleAdd()  //添加业务
            this.editHomeIndex()  //修改业务
        },
        async handleAdd(){
            //  添加业务
            let name = this.form .name
            let text = this.form.text
            let {data} = await instance.post("/homeindex",{name,text})
            console.log(data)
            this.getHomeIndex()
        },
        // 编辑
       handleEdit(a,b){
        // 用户行为
           console.log(a,b)
           this.i = 0
           this.dialogFormVisible = !this.dialogFormVisible
           this.form.name = b.name;
           this.form.text = b.text
           this.form.id = b.id
       },
        handleDelete(a,b){
             //    用户行为
            console.log(a,b)
           
            this.$confirm("宁去顶删除该额条信息吗","提示",{
                confirmButtonText:"确定",
                cancelButtonText:"取消",
                type:"warning",
            }).then(()=>{
                // 确定可回调函数
                console.log("删除了")
                this.deleteHomeIndex(a)
               
            }).catch(()=>{
                console.log("你取消了")
            })

        },
        async getHomeIndex(){
            let {data} = await instance.get("/homeindex") 
            console.log(data)
            this.arrs = data
        },
        // 删除业务
        async deleteHomeIndex(index){
            let {data} = await instance.delete("/homeindex/"+index)
            console.log(data)
             this.getHomeIndex()
        },
        // 编辑业务
        async editHomeIndex(){
             let id = this.form.id
            let name = this.form.name
            let text = this.form.text
            let {data} = await instance.put("/homeindex/edit/"+id,{name,text})
            console.log(data)
            this.getHomeIndex()
        }
    }
}
</script>
<style scoped>
.addbtn{
    float: right;
    margin-right: 30px;
    margin-top: 40px;
}
</style>