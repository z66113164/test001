webpackJsonp([1],{"0WLW":function(t,e){},DFMt:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Qr9p"),s=i.n(n),o={props:["id","value","width","height","uploadImgUrl","disabled","menus","mapKey","menuFixed","pasteFilter","codeDefaultLang","hideLinkImg","uploadParams","uploadHeaders","isRealtime","disabledMenus"],data:function(){return{styleObject:{width:"600px",height:"400px"},editor:null}},methods:{initSize:function(){this.width&&(this.styleObject.width=this.width+"px"),this.height&&(this.styleObject.height=this.height+"px")},createEditor:function(){var t=this;document.getElementById(this.id)?(this.editor=new s.a(this.id),this.editor.config.uploadImgUrl=this.uploadImgUrl,this.editor.config.uploadImgFns.onload=function(e,i){var n=t.editor.uploadImgOriginalName||"";t.$emit("load",n,e)},this.editor.config.uploadImgFns.ontimeout=function(e){t.$emit("timeout")},this.editor.config.uploadImgFns.onerror=function(e){t.$emit("error")},this.editor.config.uploadImgFileName="file",this.editor.config.pasteFilter=!1,void 0!=this.mapKey&&(this.editor.config.mapAk=this.mapKey),void 0!=this.menus&&this.menus instanceof Array&&this.menus.length?this.editor.config.menus=this.filterMenu(this.menus):this.disabledMenus?this.editor.config.menus=this.filterDisabledMenu(wangEditor.config.menus,this.disabledMenus):this.editor.config.menus=this.filterMenu(wangEditor.config.menus),void 0!=this.menuFixed&&(this.editor.config.menuFixed=this.menuFixed),void 0!=this.pasteFilter&&(this.editor.config.pasteFilter=this.pasteFilter),void 0!=this.codeDefaultLang&&(this.editor.config.codeDefaultLang=this.codeDefaultLang),void 0!=this.hideLinkImg&&(this.editor.config.hideLinkImg=this.hideLinkImg),void 0!=this.uploadParams&&this.uploadParams instanceof Object&&(this.editor.config.uploadParams=this.uploadParams),void 0!=this.uploadHeaders&&this.uploadHeaders instanceof Object&&(this.editor.config.uploadHeaders=this.uploadHeaders),this.editor.create(),this.value&&this.setHtml(this.value),this.disabled&&this.disable(),this.listenChange()):setTimeout(function(){t.createEditor(t.id)},100)},filterMenu:function(t){if(t instanceof Array)return t.map(function(t,e){return"source"===t?null:t})},filterDisabledMenu:function(t,e){var i=t.join(",");return e.forEach(function(t){i=i.replace(t,"").replace(",,",",")}),i.length&&","==i[0]&&i.substr(1,i.length),i.split(",")},insertImg:function(t){this.editor.command(null,"insertHtml","<img src="+t+' style="max-width:100%;"/>')},getHtml:function(){return this.editor.$txt.html()},getText:function(){return this.editor.$txt.text()},setHtml:function(t){this.editor.$txt.html(t)},appendHtml:function(t){this.editor.$txt.append(t)},clear:function(){this.editor.clear()},enable:function(){this.editor.enable()},disable:function(){this.editor.disable()},destroy:function(){this.editor.destroy()},undestroy:function(){this.editor.undestroy()},listenChange:function(){var t=this;this.editor.onchange=function(){t.$emit("change");var e="";t.getText()||(e=t.getHtml()),!1!==t.isRealtime&&t.$emit("input",e)}}},created:function(){this.initSize(),this.createEditor()}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.styleObject},[e("div",{style:this.styleObject,attrs:{id:this.id}})])},staticRenderFns:[]},d=i("VU/8")(o,r,!1,null,null,null);e.default=d.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s=i("i70d"),o={components:{vuewangeditor:i.n(s).a},data:function(){return{content:"\n<div>\n<h1>商品介绍</h1>\n</div>"}},methods:{getContent:function(){this.$refs.editor.getHtml()},setContent:function(){this.$refs.editor.setHtml('<img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"/>')}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("vuewangeditor",{ref:"editor",staticStyle:{height:"300"},attrs:{id:"editor"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.getContent}},[t._v("获取")]),t._v(" "),i("el-button",{attrs:{type:"success"},on:{click:t.setContent}},[t._v("设置")])],1)},staticRenderFns:[]};var d={components:{Bar:i("VU/8")(o,r,!1,function(t){i("rD91")},null,null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("首页")]),this._v(" "),e("Bar")],1)},staticRenderFns:[]};var u={components:{Home:i("VU/8")(d,a,!1,function(t){i("Wy/0")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Home")],1)},staticRenderFns:[]};var c=i("VU/8")(u,l,!1,function(t){i("0WLW")},null,null).exports,h=i("zL8q"),f=i.n(h);n.default.config.productionTip=!1,n.default.use(f.a),new n.default({el:"#app",components:{App:c},template:"<App/>"})},S4Hh:function(t,e){},"Wy/0":function(t,e){},rD91:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ae4592e703275c4a724c.js.map