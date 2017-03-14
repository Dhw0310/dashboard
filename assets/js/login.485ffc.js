webpackJsonpwedn([9,20],{243:function(e,t,s){s(326);var r=s(83)(s(283),s(361),"data-v-7e5789fe",null);e.exports=r.exports},283:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"login",data:function(){return{error:"",message:"",model:{username:"",password:""},rules:{username:[{required:!0,message:"请输入用户名"},{min:2,max:16,message:"长度在 2 到 16 个字符"}],password:[{required:!0,message:"请输入密码"},{min:6,max:16,message:"长度在 6 到 16 个字符"}]}}},methods:{submit:function(){var e=this;this.error="",this.$refs["login-form"].validate(function(t){if(!t)return!1;e.$store.dispatch("createToken",{username:e.model.username,password:e.model.password}).then(function(t){e.$router.replace({path:e.$route.query.redirect||"/"})}).catch(function(t){if(e.error="错误",t.data&&t.data.error)switch(t.status){case 401:e.message="用户名或密码错误！";break;case 500:e.message="服务器内部异常，请稍后再试！";break;default:e.message="出现异常，请稍后再试！"}else e.message=t.message})})}}}},317:function(e,t,s){t=e.exports=s(228)(!0),t.push([e.i,".el-form-item[data-v-7e5789fe]{margin-bottom:30px}.el-button[data-v-7e5789fe]{width:100%}","",{version:3,sources:["/Users/zce/Local/wedn/dashboard/app/views/login.vue"],names:[],mappings:"AACA,+BACE,kBAAmB,CACpB,AACD,4BACE,UAAY,CACb",file:"login.vue",sourcesContent:["\n.el-form-item[data-v-7e5789fe] {\n  margin-bottom: 30px\n}\n.el-button[data-v-7e5789fe] {\n  width: 100%;\n}\n"],sourceRoot:""}])},326:function(e,t,s){var r=s(317);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s(229)("2472b6f1",r,!0)},361:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrapper"},[s("section",{staticClass:"login"},[s("header",{staticClass:"login-header"},[e._m(0),e._v(" "),s("el-alert",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticClass:"alert",attrs:{title:e.error,description:e.message,type:"warning","show-icon":""}})],1),e._v(" "),s("el-form",{ref:"login-form",staticClass:"login-form",attrs:{model:e.model,rules:e.rules,"auto-complete":"off","label-position":"top"}},[s("h2",{staticClass:"heading"},[e._v("登录")]),e._v(" "),s("el-form-item",{attrs:{label:"用户名",prop:"username"}},[s("el-input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.model.username,callback:function(t){e.model.username=t},expression:"model.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.model.password,callback:function(t){e.model.password=t},expression:"model.password"}})],1),e._v(" "),s("el-button",{attrs:{type:"primary","native-type":"submit"},on:{click:function(t){t.preventDefault(),e.submit(t)}}},[e._v("提交")])],1),e._v(" "),e._m(1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",{staticClass:"brand"},[s("a",{attrs:{href:"#",tabindex:"-1"}},[e._v("WEDN.NET")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{staticClass:"login-footer"},[e._v("\n      ← 返回到 "),s("a",{attrs:{href:"/"}},[e._v("WEDN.NET")])])}]}}});
//# sourceMappingURL=login.485ffc.js.map