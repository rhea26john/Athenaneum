(function(t){function e(e){for(var r,i,n=e[0],l=e[1],c=e[2],d=0,p=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],r=!0,n=1;n<o.length;n++){var l=o[n];0!==s[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0423":function(t,e,o){"use strict";o("c8ce")},"0eb5":function(t,e,o){},2225:function(t,e,o){"use strict";o("2fdf")},"2fdf":function(t,e,o){},"44b5":function(t,e,o){"use strict";o("969a")},4761:function(t,e,o){"use strict";o("0eb5")},"56d7":function(t,e,o){"use strict";o.r(e);var r=o("2b0e"),s=(o("0fae"),o("5c96")),a=o.n(s),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],l={name:"App",components:{},created(){window.requestURL="https://55w982c487.yicp.fun"}},c=l,u=(o("0423"),o("2877")),d=Object(u["a"])(c,i,n,!1,null,null,null),p=d.exports,g=o("8c4f"),m=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"home"}},[e("div",{attrs:{id:"header"}},[e("div",[e("el-image",{staticClass:"logo-image",attrs:{src:t.url,fit:t.fill}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"})])])],1),e("div",{attrs:{id:"navigator"}},[e("el-dropdown",{staticClass:"nav-item"},[e("span",{staticClass:"el-dropdown-link"},[t._v(" Categories"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[t._v("Category1")]),e("el-dropdown-item",[t._v("Category2")]),e("el-dropdown-item",[t._v("Category3")]),e("el-dropdown-item",[t._v("Category4")]),e("el-dropdown-item",[t._v("Category5")])],1)],1),e("el-button",{staticClass:"nav-item",attrs:{type:"text"}},[t._v("Recommendations")]),e("el-button",{staticClass:"nav-item",attrs:{type:"text"}},[t._v("Rankings")])],1),e("div",[e("el-input",{staticClass:"input-with-select",attrs:{placeholder:"Please enter the content"},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}},[e("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.searchBooks},slot:"append"})],1)],1),e("div",[t.isLoggedIn?t._e():e("el-button",{on:{click:t.goToLogin}},[t._v("Log in")]),t.isLoggedIn?e("el-button",{on:{click:t.logOut}},[t._v("Log out")]):e("el-button",{on:{click:t.goToSignUp}},[t._v("Sign up")])],1)]),e("div",{attrs:{id:"main"}},[e("div",{staticClass:"content-wrapper"},[e("div",{attrs:{id:"booklist"}},[e("div",[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.bookdata}},[e("el-table-column",{attrs:{prop:"title",label:"Title",width:"200"},scopedSlots:t._u([{key:"default",fn:function(o){return[e("div",{on:{click:function(e){return t.bookDetail(o.row.id)}}},[e("a",{attrs:{href:"javascript:;"}},[t._v(t._s(o.row.title))])])]}}])}),e("el-table-column",{attrs:{prop:"author",label:"Author",width:"150"}}),e("el-table-column",{attrs:{prop:"published_date",label:"Published Date",width:"150"}}),e("el-table-column",{attrs:{prop:"description",label:"Description",width:"350"}}),e("el-table-column",{attrs:{prop:"content",label:"Content",width:"350"}})],1)],1)])]),e("div",[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:100}})],1)]),t._m(0)])},f=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footer-text"},[t._v(" Powered by "),e("span",{staticClass:"footer-highlight"},[t._v("Internet Technology Group")]),t._v(" of "),e("span",{staticClass:"footer-highlight"},[t._v("University of Glasgow")])])])])}],h=(o("14d9"),o("cee4")),v={data(){return{input1:"",url:o("7ac9"),bookdata:[],fill:"fill"}},computed:{isLoggedIn:function(){return"true"==localStorage.getItem("isLoggedIn")}},methods:{bookDetail(t){this.$router.push({path:"/bookDetail/"+t})},logOut(){h["a"].get(window.requestURL+"/logout/").then(t=>{"success"==t.data.status?(localStorage.setItem("isLoggedIn",!1),this.$router.push("/")):window.alert("Logout failed.")}).catch(t=>{console.error("An error occurred:",t)})},goToLogin(){this.$router.push({name:"Login"})},goToSignUp(){this.$router.push({name:"SignUp"})},fetchBooks(){h["a"].get(window.requestURL+"/book/list/").then(t=>{this.bookdata=t.data.books}).catch(t=>{console.error("An error occurred:",t)})},searchBooks(){h["a"].get(window.requestURL+"/book/search/",{params:{query:this.input1}}).then(t=>{this.bookdata=t.data.books}).catch(t=>{console.error("An error occurred:",t)})}},created(){this.fetchBooks()}},b=v,w=(o("ecda"),Object(u["a"])(b,m,f,!1,null,null,null)),_=w.exports,k=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"login"}},[e("div",{staticClass:"form-container"},[e("div",{staticClass:"form-title"},[t._v("Login")]),e("el-form",{ref:"loginForm",attrs:{model:t.loginForm,rules:t.rules,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"Username",prop:"username"}},[e("el-input",{attrs:{"auto-complete":"off"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),e("el-form-item",{attrs:{label:"Password",prop:"password"}},[e("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}})],1),e("div",{staticClass:"button-container"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("Login")]),e("el-button",{on:{click:t.resetForm}},[t._v("Reset")])],1)],1)],1),t._m(0)])},y=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footer-text"},[t._v(" Powered by "),e("span",{staticClass:"footer-highlight"},[t._v("Internet Technology Group")]),t._v(" of "),e("span",{staticClass:"footer-highlight"},[t._v("University of Glasgow")])])])])}],C={data(){return{loginForm:{username:"",password:""},rules:{username:[{required:!0,message:"Please enter your username",trigger:"blur"}],password:[{required:!0,message:"Please enter your password",trigger:"blur"}]}}},methods:{submitForm(){this.$refs.loginForm.validate(t=>{if(!t)return!1;h["a"].post(window.requestURL+"/accounts/login/",this.loginForm).then(t=>{"success"==t.data.status?(localStorage.setItem("isLoggedIn",!0),this.$router.push({path:"/"})):window.alert("Incorrect username or password.")}).catch(t=>{console.error("An error occurred:",t)})})},resetForm(){this.$refs.loginForm.resetFields()}}},F=C,x=(o("44b5"),Object(u["a"])(F,k,y,!1,null,null,null)),L=x.exports,P=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"home"}},[e("div",{attrs:{id:"header"}},[e("div",[e("el-image",{staticClass:"logo-image",attrs:{src:t.url,fit:t.fill}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"})])])],1),e("div",{attrs:{id:"navigator"}},[e("el-dropdown",{staticClass:"nav-item"},[e("span",{staticClass:"el-dropdown-link"},[t._v(" Categories"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[t._v("Category1")]),e("el-dropdown-item",[t._v("Category2")]),e("el-dropdown-item",[t._v("Category3")]),e("el-dropdown-item",[t._v("Category4")]),e("el-dropdown-item",[t._v("Category5")])],1)],1),e("el-button",{staticClass:"nav-item",attrs:{type:"text"}},[t._v("Recommendations")]),e("el-button",{staticClass:"nav-item",attrs:{type:"text"}},[t._v("Rankings")])],1),e("div",[t.isLoggedIn?t._e():e("el-button",{on:{click:t.goToLogin}},[t._v("Log in")]),t.isLoggedIn?e("el-button",{on:{click:t.logOut}},[t._v("Log out")]):e("el-button",{on:{click:t.goToSignUp}},[t._v("Sign up")])],1)]),e("div",{attrs:{id:"main"}},[e("div",{staticClass:"content-wrapper"},[e("el-image",{staticClass:"book-image",attrs:{src:t.imageUrl,fit:t.fill}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("i",{staticClass:"el-icon-picture-outline"})])]),e("div",{staticClass:"bookContent",staticStyle:{display:"flex","align-items":"center"},attrs:{id:"bookName"}},[e("div",{staticClass:"label",staticStyle:{flex:"1"}},[t._v("Title:")]),e("el-input",{attrs:{type:"textarea",rows:2,readonly:""},model:{value:t.bookName,callback:function(e){t.bookName=e},expression:"bookName"}})],1),e("div",{staticClass:"bookContent",attrs:{id:"authorName"}},[e("div",{staticClass:"label"},[t._v("Author:")]),e("el-input",{attrs:{type:"textarea",rows:2,readonly:""},model:{value:t.authorName,callback:function(e){t.authorName=e},expression:"authorName"}})],1),e("div",{staticClass:"bookContent",attrs:{id:"content"}},[e("div",{staticClass:"label"},[t._v("Content:")]),e("el-input",{attrs:{type:"textarea",rows:15,readonly:""},model:{value:t.bookContent,callback:function(e){t.bookContent=e},expression:"bookContent"}})],1)],1)]),t._m(0)])},U=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footer-text"},[t._v(" Powered by "),e("span",{staticClass:"footer-highlight"},[t._v("Internet Technology Group")]),t._v(" of "),e("span",{staticClass:"footer-highlight"},[t._v("University of Glasgow")])])])])}],I={data(){return{bookName:"",authorName:"",bookContent:"",url:o("7ac9"),bookdata:[],fill:"fill",imageUrl:""}},computed:{isLoggedIn:function(){return"true"==localStorage.getItem("isLoggedIn")}},methods:{fetchBookById(){window.vue=this,h["a"].get(window.requestURL+"/book/reading/"+this.$route.params.id).then(t=>{var e=t.data.book[0].fields;this.bookName=e.title,this.authorName=e.author,this.bookContent=e.content,this.imageUrl=window.url+"/static/pic/"+e.title+".jpg"}).catch(t=>{console.error("An error occurred:",t)})},logOut(){h["a"].get(window.requestURL+"/logout/").then(t=>{"success"==t.data.status?(localStorage.setItem("isLoggedIn",!1),this.$router.push("/")):window.alert("Logout failed.")}).catch(t=>{console.error("An error occurred:",t)})},goToLogin(){this.$router.push({name:"Login"})},goToSignUp(){this.$router.push({name:"SignUp"})},fetchBooks(){h["a"].get(window.requestURL+"/book/list/").then(t=>{this.bookdata=t.data.books}).catch(t=>{console.error("An error occurred:",t)})},searchBooks(){h["a"].get(window.requestURL+"/book/search/",{params:{query:this.input1}}).then(t=>{this.bookdata=t.data.books}).catch(t=>{console.error("An error occurred:",t)})}},mounted(){this.fetchBookById()}},S=I,$=(o("2225"),Object(u["a"])(S,P,U,!1,null,null,null)),O=$.exports,R=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"register"}},[e("div",{staticClass:"form-container"},[e("div",{staticClass:"form-title"},[t._v("Register")]),e("el-form",{ref:"registerForm",attrs:{model:t.registerForm,rules:t.rules,"label-width":"100px"}},[e("el-form-item",{attrs:{label:"Username",prop:"username"}},[e("el-input",{attrs:{"auto-complete":"off"},model:{value:t.registerForm.username,callback:function(e){t.$set(t.registerForm,"username",e)},expression:"registerForm.username"}})],1),e("el-form-item",{attrs:{label:"Email",prop:"email"}},[e("el-input",{attrs:{"auto-complete":"off"},model:{value:t.registerForm.email,callback:function(e){t.$set(t.registerForm,"email",e)},expression:"registerForm.email"}})],1),e("el-form-item",{attrs:{label:"Password",prop:"password1"}},[e("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:t.registerForm.password1,callback:function(e){t.$set(t.registerForm,"password1",e)},expression:"registerForm.password1"}})],1),e("el-form-item",{attrs:{label:"Confirm Password",prop:"password2"}},[e("el-input",{attrs:{id:"last",type:"password","auto-complete":"off"},model:{value:t.registerForm.password2,callback:function(e){t.$set(t.registerForm,"password2",e)},expression:"registerForm.password2"}})],1),e("div",{staticClass:"button-container"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("Register")]),e("el-button",{on:{click:t.resetForm}},[t._v("Reset")])],1)],1)],1),t._m(0)])},q=[function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer-container"},[e("div",{staticClass:"footer-text"},[t._v(" Powered by "),e("span",{staticClass:"footer-highlight"},[t._v("Internet Technology Group")]),t._v(" of "),e("span",{staticClass:"footer-highlight"},[t._v("University of Glasgow")])])])])}],T=(o("d9e2"),{data(){return{registerForm:{username:"",email:"",password1:"",password2:""},rules:{username:[{required:!0,message:"Please enter your username",trigger:"blur"}],email:[{required:!0,message:"Please enter your email",trigger:"blur"},{type:"email",message:"Please enter a valid email address",trigger:["blur","change"]}],password1:[{required:!0,message:"Please enter your password",trigger:"blur"},{min:6,message:"Password length should be at least 6 characters",trigger:"blur"}],password21:[{required:!0,message:"Please confirm your password",trigger:"blur"},{validator:this.validateConfirmPassword,trigger:"blur"}]}}},methods:{validateConfirmPassword(t,e,o){e!==this.registerForm.password1?o(new Error("The two passwords do not match")):o()},submitForm(){this.$refs.registerForm.validate(t=>{if(!t)return!1;h["a"].post(window.requestURL+"/register/",this.registerForm).then(t=>{"success"==t.data.status?(window.alert("Register success. Please login."),this.$router.push("/login")):window.alert("Register failed.")}).catch(t=>{console.error("An error occurred:",t)})})},resetForm(){this.$refs.registerForm.resetFields()}}}),j=T,A=(o("4761"),Object(u["a"])(j,R,q,!1,null,null,null)),B=A.exports;r["default"].use(g["a"]);const N=[{path:"/",name:"BookList",component:_},{path:"/login",name:"Login",component:L},{path:"/signUp",name:"SignUp",component:B},{path:"/bookDetail/:id",name:"BookDetail",component:O}],G=new g["a"]({mode:"history",base:"/static/",routes:N});var D=G;r["default"].use(a.a),new r["default"]({router:D,render:t=>t(p)}).$mount("#app")},"7ac9":function(t,e,o){t.exports=o.p+"img/book-logo2.7b4d862b.png"},"969a":function(t,e,o){},c8ce:function(t,e,o){},dad9:function(t,e,o){},ecda:function(t,e,o){"use strict";o("dad9")}});
//# sourceMappingURL=app.2fd9dccd.js.map