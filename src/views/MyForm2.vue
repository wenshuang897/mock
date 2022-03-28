 <template>
    <div>
        <el-form :model="form" :rules="rules">
            <el-form-item prop="name">
                <!--用户名的输入  -->
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <!-- 密码框的输入 -->
            <el-form-item prop="pw">
                <el-input v-model="form.pw"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name:"MyForm2",
    data(){
        // 自定义正则校验
        let myfn = function(rule,value,callback){
            console.log(rule,value)
            let rg = /\w{2,6}/
            console.log()
            if(!rg.test(value)){
                 return callback(new Error("信息不对"))
            }
           
        }
        return{
            form:{
                name:"hjjhk",
                pw:"123456"
            },
            rules:{
              name:[{validator:myfn,trigger:"blur"}],
              pw:[]
            }
        }
        // validator跟message patten 二选一
        // trigger 什么时候触发正则校验  值是事件名
      
    }
}
</script>


