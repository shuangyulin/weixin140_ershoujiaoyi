(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gouwuche/add-or-update"],{"1c87":function(n,e,t){},"497d":function(n,e,t){"use strict";var i={"w-picker":function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"5957"))}},a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}))},"66db":function(n,e,t){"use strict";t.r(e);var i=t("497d"),a=t("cafe");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("7842");var u,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"fdae2b20",null,!1,i["a"],u);e["default"]=s.exports},7842:function(n,e,t){"use strict";var i=t("1c87"),a=t.n(i);a.a},"7d28":function(n,e,t){"use strict";(function(n){t("631b"),t("921b");i(t("66fd"));var e=i(t("66db"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"94aa":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,a,r,u){try{var o=n[r](u),s=o.value}catch(c){return void t(c)}o.done?e(s):Promise.resolve(s).then(i,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var u=n.apply(e,t);function o(n){r(u,i,a,o,s,"next",n)}function s(n){r(u,i,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("5957"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{dingdanbianhao:this.getUUID(),shangjiazhanghao:"",shangpinbianhao:"",shangpinmingcheng:"",shangpinleixing:"",xiadanshijian:"",kucun:"",jiage:"",zongjine:"",zhanghao:"",yonghuxingming:"",tupian:"",ispay:"",userid:""},user:{},ro:{dingdanbianhao:!1,shangjiazhanghao:!1,shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleixing:!1,xiadanshijian:!1,kucun:!1,jiage:!1,zongjine:!1,zhanghao:!1,yonghuxingming:!1,tupian:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{zongjine:{get:function(){return 1*this.ruleForm.kucun*this.ruleForm.jiage}}},onLoad:function(){var e=u(i.default.mark((function e(t){var a,r,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(r=e.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=15;break}return this.ruleForm.id=t.id,e.next=13,this.$api.info("gouwuche",this.ruleForm.id);case 13:r=e.sent,this.ruleForm=r.data;case 15:if(!t.cross){e.next=76;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 18:if((e.t1=e.t0()).done){e.next=74;break}if(o=e.t1.value,"dingdanbianhao"!=o){e.next=24;break}return this.ruleForm.dingdanbianhao=u[o],this.ro.dingdanbianhao=!0,e.abrupt("continue",18);case 24:if("shangjiazhanghao"!=o){e.next=28;break}return this.ruleForm.shangjiazhanghao=u[o],this.ro.shangjiazhanghao=!0,e.abrupt("continue",18);case 28:if("shangpinbianhao"!=o){e.next=32;break}return this.ruleForm.shangpinbianhao=u[o],this.ro.shangpinbianhao=!0,e.abrupt("continue",18);case 32:if("shangpinmingcheng"!=o){e.next=36;break}return this.ruleForm.shangpinmingcheng=u[o],this.ro.shangpinmingcheng=!0,e.abrupt("continue",18);case 36:if("shangpinleixing"!=o){e.next=40;break}return this.ruleForm.shangpinleixing=u[o],this.ro.shangpinleixing=!0,e.abrupt("continue",18);case 40:if("xiadanshijian"!=o){e.next=44;break}return this.ruleForm.xiadanshijian=u[o],this.ro.xiadanshijian=!0,e.abrupt("continue",18);case 44:if("kucun"!=o){e.next=48;break}return this.ruleForm.kucun=u[o],this.ro.kucun=!0,e.abrupt("continue",18);case 48:if("jiage"!=o){e.next=52;break}return this.ruleForm.jiage=u[o],this.ro.jiage=!0,e.abrupt("continue",18);case 52:if("zongjine"!=o){e.next=56;break}return this.ruleForm.zongjine=u[o],this.ro.zongjine=!0,e.abrupt("continue",18);case 56:if("zhanghao"!=o){e.next=60;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,e.abrupt("continue",18);case 60:if("yonghuxingming"!=o){e.next=64;break}return this.ruleForm.yonghuxingming=u[o],this.ro.yonghuxingming=!0,e.abrupt("continue",18);case 64:if("tupian"!=o){e.next=68;break}return this.ruleForm.tupian=u[o],this.ro.tupian=!0,e.abrupt("continue",18);case 68:if("userid"!=o){e.next=72;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",18);case 72:e.next=18;break;case 74:this.ruleForm.kucun=0,this.ro.kucun=!1;case 76:this.styleChange();case 77:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xiadanshijianConfirm:function(n){console.log(n),this.ruleForm.xiadanshijian=n.result,this.$forceUpdate()},tupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){var t,a;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zongjine=this.zongjine,t=n.getStorageSync("crossObj"),a=n.getStorageSync("crossTable"),t.kucun=t.kucun-this.ruleForm.kucun,!(t.kucun<0)){e.next=7;break}return this.$utils.msg("库存数量不足"),e.abrupt("return");case 7:return e.next=9,this.$api.update("".concat(a),t);case 9:if(!this.ruleForm.kucun||this.$validate.isIntNumer(this.ruleForm.kucun)){e.next=12;break}return this.$utils.msg("库存应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.jiage||this.$validate.isIntNumer(this.ruleForm.jiage)){e.next=15;break}return this.$utils.msg("价格应输入整数"),e.abrupt("return");case 15:if(!this.ruleForm.id){e.next=20;break}return e.next=18,this.$api.update("gouwuche",this.ruleForm);case 18:e.next=22;break;case 20:return e.next=22,this.$api.add("gouwuche",this.ruleForm);case 22:this.$utils.msgBack("提交成功");case 23:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},cafe:function(n,e,t){"use strict";t.r(e);var i=t("94aa"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a}},[["7d28","common/runtime","common/vendor"]]]);