(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b8f0b8f"],{"1de7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("label",{attrs:{for:"section"}},[t._v("분류 ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.section,expression:"section"}],attrs:{id:"section",name:"section"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.section=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"신고"}},[t._v("신고")]),n("option",{attrs:{value:"기능"}},[t._v("기능")]),n("option",{attrs:{value:"건의"}},[t._v("건의")]),n("option",{attrs:{value:"기타"}},[t._v("기타")])])]),n("b-input",{attrs:{placeholder:"제목을 입력해 주세요"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),n("b-form-textarea",{attrs:{placeholder:"내용을 입력해 주세요",rows:"3","max-rows":"6"},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}}),n("b-button",{on:{click:function(e){t.updateMode?t.updateContent():t.uploadContent()}}},[t._v("저장")]),n("b-button",{on:{click:t.cancle}},[t._v("취소")])],1)},a=[],o=(n("a9e3"),n("96cf"),n("1da1")),c=n("93b1"),u={name:"Create",data:function(){return{category:"",title:"",context:"",userId:"",createdAt:"",updatedAt:"",updateObject:null,updateMode:this.$route.params.contentId>0,resdata:""}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.$route.params.contentId>0)){e.next=8;break}return e.next=3,Object(c["g"])({contentId:Number(t.$route.params.contentId)});case 3:n=e.sent,r=n.data,t.category=r.category,t.title=r.title,t.context=r.context;case 8:case"end":return e.stop()}}),e)})))()},methods:{uploadContent:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("upload"),n=t.resdata.Content.sort((function(t,e){return e.content_id-t.content_id})),r=n[0].content_id+1,console.log(r),e.next=6,Object(c["addqQuestion"])({contentId:t.contentId,uId:t.userId,category:t.category,title:t.title,context:t.context});case 6:t.$router.push({path:"/qanda/"});case 7:case"end":return e.stop()}}),e)})))()},updateContent:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["i"])({contentId:Number(t.$route.params.contentId),title:t.subject,context:t.context});case 2:t.$router.push({path:"/qanda/"});case 3:case"end":return e.stop()}}),e)})))()},cancle:function(){this.$router.push({path:"/qanda/"})}}},i=u,s=n("2877"),d=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=d.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),o="["+a+"]",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),i=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(u,"")),n}};t.exports={start:i(1),end:i(2),trim:i(3)}},"93b1":function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"i",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return d})),n.d(e,"c",(function(){return s}));var r=n("365c");function a(){return r["a"].get("/getallqnalist")}function o(t){return r["a"].post("/modifyqna",t)}function c(t){return r["a"].get("/findqna/".concat(t.contentId))}function u(t){return r["a"].delete("/deleteqna/".concat(t.contentId))}function i(t){return r["a"].post("/insertanswer",t)}function s(t){return r["a"].delete(t)}function d(t){return r["a"].findAnswer("/findanswer/".concat(t.commentId))}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),a=n("da84"),o=n("94ca"),c=n("6eeb"),u=n("5135"),i=n("c6b6"),s=n("7156"),d=n("c04e"),l=n("d039"),f=n("7c73"),p=n("241c").f,v=n("06cf").f,b=n("9bf2").f,m=n("58a8").trim,g="Number",h=a[g],I=h.prototype,x=i(f(I))==g,w=function(t){var e,n,r,a,o,c,u,i,s=d(t,!1);if("string"==typeof s&&s.length>2)if(s=m(s),e=s.charCodeAt(0),43===e||45===e){if(n=s.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(s.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+s}for(o=s.slice(2),c=o.length,u=0;u<c;u++)if(i=o.charCodeAt(u),i<48||i>a)return NaN;return parseInt(o,r)}return+s};if(o(g,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var N,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(x?l((function(){I.valueOf.call(n)})):i(n)!=g)?s(new h(w(e)),n,_):w(e)},A=r?p(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;A.length>E;E++)u(h,N=A[E])&&!u(_,N)&&b(_,N,v(h,N));_.prototype=I,I.constructor=_,c(a,g,_)}}}]);
//# sourceMappingURL=chunk-5b8f0b8f.7bc4bb88.js.map