(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangjia/add-or-update"],{"09e4":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var s=e[a](u),o=s.value}catch(c){return void t(c)}s.done?n(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("5957"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{ruleForm:{shangjiazhanghao:"",mima:"",shangjiaxingming:"",xingbie:"",shouji:"",shenfenzheng:"",youxiang:"",touxiang:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{shangjiazhanghao:!1,mima:!1,shangjiaxingming:!1,xingbie:!1,shouji:!1,shenfenzheng:!1,youxiang:!1,touxiang:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var n=u(i.default.mark((function n(t){var r,a,u,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.getStorageSync("nowTable"),n.next=3,this.$api.session(r);case 3:if(a=n.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){n.next=14;break}return this.ruleForm.id=t.id,n.next=12,this.$api.info("shangjia",this.ruleForm.id);case 12:a=n.sent,this.ruleForm=a.data;case 14:if(!t.cross){n.next=53;break}u=e.getStorageSync("crossObj"),n.t0=i.default.keys(u);case 17:if((n.t1=n.t0()).done){n.next=53;break}if(s=n.t1.value,"shangjiazhanghao"!=s){n.next=23;break}return this.ruleForm.shangjiazhanghao=u[s],this.ro.shangjiazhanghao=!0,n.abrupt("continue",17);case 23:if("mima"!=s){n.next=27;break}return this.ruleForm.mima=u[s],this.ro.mima=!0,n.abrupt("continue",17);case 27:if("shangjiaxingming"!=s){n.next=31;break}return this.ruleForm.shangjiaxingming=u[s],this.ro.shangjiaxingming=!0,n.abrupt("continue",17);case 31:if("xingbie"!=s){n.next=35;break}return this.ruleForm.xingbie=u[s],this.ro.xingbie=!0,n.abrupt("continue",17);case 35:if("shouji"!=s){n.next=39;break}return this.ruleForm.shouji=u[s],this.ro.shouji=!0,n.abrupt("continue",17);case 39:if("shenfenzheng"!=s){n.next=43;break}return this.ruleForm.shenfenzheng=u[s],this.ro.shenfenzheng=!0,n.abrupt("continue",17);case 43:if("youxiang"!=s){n.next=47;break}return this.ruleForm.youxiang=u[s],this.ro.youxiang=!0,n.abrupt("continue",17);case 47:if("touxiang"!=s){n.next=51;break}return this.ruleForm.touxiang=u[s],this.ro.touxiang=!0,n.abrupt("continue",17);case 51:n.next=17;break;case 53:this.styleChange();case 54:case"end":return n.stop()}}),n,this)})));function t(e){return n.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.shangjiazhanghao){e.next=3;break}return this.$utils.msg("商家账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.shouji||this.$validate.isMobile(this.ruleForm.shouji)){e.next=9;break}return this.$utils.msg("手机应输入手机格式"),e.abrupt("return");case 9:if(!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){e.next=12;break}return this.$utils.msg("身份证应输入身份证格式"),e.abrupt("return");case 12:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){e.next=15;break}return this.$utils.msg("邮箱应输入邮件格式"),e.abrupt("return");case 15:if(!this.ruleForm.id){e.next=20;break}return e.next=18,this.$api.update("shangjia",this.ruleForm);case 18:e.next=22;break;case 20:return e.next=22,this.$api.add("shangjia",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},1931:function(e,n,t){"use strict";var i=t("63b8"),r=t.n(i);r.a},"47cd":function(e,n,t){"use strict";t.r(n);var i=t("f2de"),r=t("eb00");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("1931");var u,s=t("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"05f46d8c",null,!1,i["a"],u);n["default"]=o.exports},"63b8":function(e,n,t){},"8acc":function(e,n,t){"use strict";(function(e){t("631b"),t("921b");i(t("66fd"));var n=i(t("47cd"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},eb00:function(e,n,t){"use strict";t.r(n);var i=t("09e4"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},f2de:function(e,n,t){"use strict";var i,r=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}))}},[["8acc","common/runtime","common/vendor"]]]);