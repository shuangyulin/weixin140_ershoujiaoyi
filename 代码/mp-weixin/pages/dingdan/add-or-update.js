(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdan/add-or-update"],{"07ef":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,t,a,r,u){try{var s=n[r](u),o=s.value}catch(h){return void i(h)}s.done?e(o):Promise.resolve(o).then(t,a)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,a){var u=n.apply(e,i);function s(n){r(u,t,a,s,o,"next",n)}function o(n){r(u,t,a,s,o,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("5957"))}.bind(null,i)).catch(i.oe)},o={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),zhanghao:"",yonghuxingming:"",lianxifangshi:"",shouhuodizhi:"",shangjiazhanghao:"",shangpinbianhao:"",shangpinmingcheng:"",shangpinleixing:"",kucun:"",jiage:"",zongjine:"",xiadanshijian:"",tupian:"",sfsh:"",shhf:"",ispay:"",userid:""},user:{},ro:{dingdanbianhao:!1,zhanghao:!1,yonghuxingming:!1,lianxifangshi:!1,shouhuodizhi:!1,shangjiazhanghao:!1,shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleixing:!1,kucun:!1,jiage:!1,zongjine:!1,xiadanshijian:!1,tupian:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:s},computed:{zongjine:{get:function(){return 1*this.ruleForm.kucun*this.ruleForm.jiage}}},onLoad:function(){var e=u(t.default.mark((function e(i){var a,r,u,s;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(r=e.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ruleForm.lianxifangshi=this.user.lianxifangshi,this.ruleForm.userid=n.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!i.id){e.next=16;break}return this.ruleForm.id=i.id,e.next=14,this.$api.info("dingdan",this.ruleForm.id);case 14:r=e.sent,this.ruleForm=r.data;case 16:if(!i.cross){e.next=85;break}u=n.getStorageSync("crossObj"),e.t0=t.default.keys(u);case 19:if((e.t1=e.t0()).done){e.next=83;break}if(s=e.t1.value,"dingdanbianhao"!=s){e.next=25;break}return this.ruleForm.dingdanbianhao=u[s],this.ro.dingdanbianhao=!0,e.abrupt("continue",19);case 25:if("zhanghao"!=s){e.next=29;break}return this.ruleForm.zhanghao=u[s],this.ro.zhanghao=!0,e.abrupt("continue",19);case 29:if("yonghuxingming"!=s){e.next=33;break}return this.ruleForm.yonghuxingming=u[s],this.ro.yonghuxingming=!0,e.abrupt("continue",19);case 33:if("lianxifangshi"!=s){e.next=37;break}return this.ruleForm.lianxifangshi=u[s],this.ro.lianxifangshi=!0,e.abrupt("continue",19);case 37:if("shouhuodizhi"!=s){e.next=41;break}return this.ruleForm.shouhuodizhi=u[s],this.ro.shouhuodizhi=!0,e.abrupt("continue",19);case 41:if("shangjiazhanghao"!=s){e.next=45;break}return this.ruleForm.shangjiazhanghao=u[s],this.ro.shangjiazhanghao=!0,e.abrupt("continue",19);case 45:if("shangpinbianhao"!=s){e.next=49;break}return this.ruleForm.shangpinbianhao=u[s],this.ro.shangpinbianhao=!0,e.abrupt("continue",19);case 49:if("shangpinmingcheng"!=s){e.next=53;break}return this.ruleForm.shangpinmingcheng=u[s],this.ro.shangpinmingcheng=!0,e.abrupt("continue",19);case 53:if("shangpinleixing"!=s){e.next=57;break}return this.ruleForm.shangpinleixing=u[s],this.ro.shangpinleixing=!0,e.abrupt("continue",19);case 57:if("kucun"!=s){e.next=61;break}return this.ruleForm.kucun=u[s],this.ro.kucun=!0,e.abrupt("continue",19);case 61:if("jiage"!=s){e.next=65;break}return this.ruleForm.jiage=u[s],this.ro.jiage=!0,e.abrupt("continue",19);case 65:if("zongjine"!=s){e.next=69;break}return this.ruleForm.zongjine=u[s],this.ro.zongjine=!0,e.abrupt("continue",19);case 69:if("xiadanshijian"!=s){e.next=73;break}return this.ruleForm.xiadanshijian=u[s],this.ro.xiadanshijian=!0,e.abrupt("continue",19);case 73:if("tupian"!=s){e.next=77;break}return this.ruleForm.tupian=u[s],this.ro.tupian=!0,e.abrupt("continue",19);case 77:if("userid"!=s){e.next=81;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,e.abrupt("continue",19);case 81:e.next=19;break;case 83:this.ruleForm.kucun=0,this.ro.kucun=!1;case 85:this.styleChange();case 86:case"end":return e.stop()}}),e,this)})));function i(n){return e.apply(this,arguments)}return i}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xiadanshijianConfirm:function(n){console.log(n),this.ruleForm.xiadanshijian=n.result,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(t.default.mark((function e(){var i,a;return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zongjine=this.zongjine,i=n.getStorageSync("crossObj"),a=n.getStorageSync("crossTable"),i.kucun=i.kucun-this.ruleForm.kucun,!(i.kucun<0)){e.next=7;break}return this.$utils.msg("库存数量不足"),e.abrupt("return");case 7:return e.next=9,this.$api.update("".concat(a),i);case 9:if(this.ruleForm.shouhuodizhi){e.next=12;break}return this.$utils.msg("收货地址不能为空"),e.abrupt("return");case 12:if(!this.ruleForm.kucun||this.$validate.isIntNumer(this.ruleForm.kucun)){e.next=15;break}return this.$utils.msg("库存应输入整数"),e.abrupt("return");case 15:if(this.ruleForm.jiage){e.next=18;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 18:if(!this.ruleForm.jiage||this.$validate.isIntNumer(this.ruleForm.jiage)){e.next=21;break}return this.$utils.msg("价格应输入整数"),e.abrupt("return");case 21:if(!this.ruleForm.id){e.next=26;break}return e.next=24,this.$api.update("dingdan",this.ruleForm);case 24:e.next=28;break;case 26:return e.next=28,this.$api.add("dingdan",this.ruleForm);case 28:this.$utils.msgBack("提交成功");case 29:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,i("543d")["default"])},"0d03":function(n,e,i){"use strict";var t=i("a23b"),a=i.n(t);a.a},"68a3":function(n,e,i){"use strict";var t={"w-picker":function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"5957"))}},a=function(){var n=this,e=n.$createElement;n._self._c},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return t}))},"74fa":function(n,e,i){"use strict";i.r(e);var t=i("68a3"),a=i("a19b");for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);i("0d03");var u,s=i("f0c5"),o=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"68f72b34",null,!1,t["a"],u);e["default"]=o.exports},"8c54":function(n,e,i){"use strict";(function(n){i("631b"),i("921b");t(i("66fd"));var e=t(i("74fa"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},a19b:function(n,e,i){"use strict";i.r(e);var t=i("07ef"),a=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e["default"]=a.a},a23b:function(n,e,i){}},[["8c54","common/runtime","common/vendor"]]]);