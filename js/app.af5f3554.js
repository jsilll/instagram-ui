(function(t){function e(e){for(var i,s,n=e[0],l=e[1],c=e[2],m=0,p=[];m<n.length;m++)s=n[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},r={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/instagram-ui/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),r=a.n(i);r.a},"1f0a":function(t,e,a){},"34c8":function(t,e,a){"use strict";var i=a("66e1"),r=a.n(i);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Base"),a("v-main",[a("router-view")],1)],1)},o=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{staticClass:"black--text",attrs:{flat:"",app:"","clipped-right":"",color:"grey lighten-5",height:"96"}},[t.drawer?t._e():i("div",{staticClass:"d-flex align-center"},[i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),i("div",{staticClass:"d-flex align-center"},[i("v-text-field",{staticClass:"ml-10",attrs:{clreable:"",solo:"",flat:"","hide-details":"",label:"Search","prepend-inner-icon":"mdi-magnify","append-icon":"mdi-microphone-outline",type:"text","background-color":"grey lighten-3"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),i("v-spacer"),i("v-btn",{staticClass:"glowButton mx-7 text-none",attrs:{color:"primary"}},[i("span",[i("v-icon",{attrs:{size:"25",left:""}},[t._v("mdi-plus")]),t._v("Add photo ")],1)]),t.drawer?t._e():i("span",[t._l(t.navlinks,(function(e){return i("span",{key:e.title},[i("v-btn",{attrs:{icon:"",color:e.toggled?"primary":"grey"},on:{click:function(a){return a.preventDefault(),t.NavClicked(e.title)}}},[i("v-icon",[t._v(t._s(e.icons[e.toggled]))]),e.notifications?i("v-badge",{staticClass:"primary--text",attrs:{dot:"",overlap:"","offset-y":"-8","offset-x":"2",value:"2",color:"primary"}}):t._e()],1)],1)})),i("v-avatar",{staticClass:"instagram",attrs:{flat:"",size:"38"}},[i("v-avatar",{attrs:{size:"35",color:"grey lighten-4"}},[i("v-avatar",{attrs:{size:"32"}},[i("v-img",{attrs:{src:a("b716")}})],1)],1)],1)],2)],1),i("v-navigation-drawer",{attrs:{width:"450",flat:"",color:"grey lighten-4",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-layout",{staticClass:"pa-4 pl-16",attrs:{"text-center":""}},[i("v-icon",{staticClass:"black--text pl-16",attrs:{large:""}},[t._v("mdi-instagram")]),i("v-flex",{staticClass:"mt-2 ml-2",attrs:{"align-self-center":""}},[i("v-img",{attrs:{width:"110",src:a("56fd")}})],1)],1),i("v-divider"),i("v-layout",{staticClass:"mt-5 mb-5"},[i("v-flex",{attrs:{"text-center":""}},[i("v-layout",[i("v-flex",[i("v-avatar",{staticClass:"instagram",attrs:{flat:"",size:"145"}},[i("v-avatar",{attrs:{size:"139",color:"grey lighten-4"}},[i("v-avatar",{attrs:{size:"120"}},[i("v-img",{attrs:{src:a("b716")}})],1)],1)],1)],1)],1),i("div",{staticClass:"mt-4 title"},[t._v(" Marques Brownlee "),i("v-icon",{attrs:{small:"",color:"blue"}},[t._v("mdi-check-decagram")])],1),i("p",{staticClass:"text-body-1 grey--text text-center"},[t._v("@mkbhd")]),i("div",{staticClass:"mt-21 subtitle-2 grey--text"},[t._v("New York, NY")]),i("div",{staticClass:"mt-5"}),i("v-layout",{attrs:{"justify-space-between":""}},[i("v-flex",[i("div",{staticClass:"text-subtitle-1 font-weight-medium text-center"},[t._v("1,506")]),i("v-btn",{staticClass:"text-body-1 grey--text text-center text-capitalize",attrs:{depressed:""}},[t._v("Posts")])],1),i("v-divider",{attrs:{vertical:""}}),i("v-flex",[i("div",{staticClass:"text-subtitle-1 font-weight-medium text-center"},[t._v("2,7m")]),i("v-btn",{staticClass:"text-body-1 grey--text text-center text-capitalize",attrs:{depressed:""}},[t._v("Followers")])],1),i("v-divider",{attrs:{vertical:""}}),i("v-flex",[i("div",{staticClass:"text-subtitle-1 font-weight-medium text-center"},[t._v("388")]),i("v-btn",{staticClass:"text-body-1 grey--text text-center text-capitalize",attrs:{depressed:""}},[t._v("Following")])],1)],1)],1)],1),i("v-divider"),i("v-list",{staticClass:"mx-5 mt-5",attrs:{nav:"",color:"grey lighten-3"}},[i("v-list-item-group",{attrs:{color:"red",mandatory:"","active-class":"primary--text text--accent-2"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[t._l(t.links,(function(e){return i("v-list-item",{key:e.title,attrs:{link:"",router:"",to:e.route}},[i("v-list-item-icon",[i("v-icon",[t._v(t._s(e.icon))]),e.notifications?i("v-badge",{staticClass:"primary--text",attrs:{overlap:"","offset-y":"11","offset-x":"9",value:"2",content:e.notifications,color:"primary"}}):t._e()],1),i("v-list-item-content",[i("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),i("v-divider",{staticClass:"mt-2"}),i("v-list-item",{staticClass:"mt-2",attrs:{link:"",router:"",to:t.logout}},[i("v-list-item-icon",[i("v-icon",[t._v("mdi-logout-variant")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)],1)],1)},n=[],l=(a("d81d"),{data:function(){return{drawer:"true",message:"",links:[{icon:"mdi-home-outline",title:"Feed",route:"feed",state:"grey",notifications:0},{icon:"mdi-compass-outline",title:"Explore",route:"explore",state:"grey",notifications:0},{icon:"mdi-pound",title:"Trending Tags",route:"trendingtags",state:"grey",notifications:0},{icon:"mdi-trending-up",title:"Top Posts",route:"topposts",state:"grey",notifications:0},{icon:"mdi-account-outline",title:"People",route:"people",state:"grey",notifications:0},{icon:"mdi-bell-outline",title:"Notifications",route:"notifications",state:"grey",notifications:2},{icon:"mdi-email-outline",title:"Messages",route:"messages",state:"grey",notifications:5},{icon:"mdi-poll",title:"Stats",route:"stats",state:"grey",notifications:0},{icon:"mdi-cog-outline",title:"Settings",route:"settings",state:"grey",notifications:0}],navlinks:[{icons:["mdi-home-outline","mdi-home"],title:"feed",notifications:0,toggled:0},{icons:["mdi-compass-outline","mdi-compass"],title:"explore",notifications:0,toggled:0},{icons:["mdi-email-outline","mdi-email"],title:"direct",notifications:5,toggled:0},{icons:["mdi-bell-outline","mdi-bell"],title:"interactions",notifications:2,toggled:0}]}},methods:{NavClicked:function(t){this.navlinks.map((function(e){e.title==t?e.toggled=(e.toggled+1)%2:e.toggled=0}))}}}),c=l,u=(a("a819"),a("2877")),m=a("6544"),p=a.n(m),d=a("40dc"),f=a("5bc1"),v=a("8212"),h=a("4ca6"),g=a("8336"),b=a("ce7e"),x=a("0e8f"),y=a("132d"),_=a("adda"),w=a("a722"),k=a("8860"),j=a("da13"),C=a("5d23"),E=a("1baa"),O=a("34c3"),q=a("f774"),V=a("2fa4"),B=a("8654"),M=Object(u["a"])(c,s,n,!1,null,"7342cf82",null),D=M.exports;p()(M,{VAppBar:d["a"],VAppBarNavIcon:f["a"],VAvatar:v["a"],VBadge:h["a"],VBtn:g["a"],VDivider:b["a"],VFlex:x["a"],VIcon:y["a"],VImg:_["a"],VLayout:w["a"],VList:k["a"],VListItem:j["a"],VListItemContent:C["a"],VListItemGroup:E["a"],VListItemIcon:O["a"],VListItemTitle:C["b"],VNavigationDrawer:q["a"],VSpacer:V["a"],VTextField:B["a"]});var S={name:"App",components:{Base:D},data:function(){return{}}},J=S,$=(a("034f"),a("7496")),H=a("f6c4"),Q=Object(u["a"])(J,r,o,!1,null,null,null),W=Q.exports;p()(Q,{VApp:$["a"],VMain:H["a"]});var T=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"px-10"},[a("FeedStories"),a("v-divider"),a("FeedSection")],1)},L=[],z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-8"},[a("v-layout",[a("v-flex",{attrs:{"text-left":""}},[a("span",{staticClass:"text-h3 font-weight-medium"},[t._v("Stories")])])],1),a("div",{staticClass:"ma-8"},[a("v-layout",{attrs:{"justify-start":""}},t._l(t.active_stories,(function(t){return a("div",{key:t.username,staticClass:"px-2"},[a("v-avatar",{staticClass:"instagram",attrs:{flat:"",size:"104"}},[a("v-avatar",{attrs:{size:"100",color:"grey lighten-4"}},[a("v-avatar",{attrs:{size:"90"}},[a("v-img",{attrs:{src:t.img}})],1)],1)],1)],1)})),0)],1)],1)},I=[],P={data:function(){return{active_stories:[{username:"mkbhd1",img:"https://images.unsplash.com/photo-1578078911787-368f3ec8545f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},{username:"mkbhd2",img:"https://images.unsplash.com/photo-1593440497401-b87d3bb3fb8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80"},{username:"mkbhd3",img:"https://images.unsplash.com/photo-1597871761588-97ebfda1eb5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},{username:"mkbhd4",img:"https://images.unsplash.com/photo-1597842530112-a7f3f20dfe59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80"},{username:"mkbhd5",img:"https://images.unsplash.com/photo-1587464196619-4bb33b420536?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},{username:"mkbhd6",img:"https://images.unsplash.com/photo-1597740800878-b1c97d500a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"},{username:"mkbhd6",img:"https://images.unsplash.com/photo-1597677012542-ef144cff4a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1348&q=80"},{username:"mkbhd6",img:"https://images.unsplash.com/photo-1597654398667-5b4286f9b257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=904&q=80"},{username:"mkbhd6",img:"https://images.unsplash.com/photo-1581117995351-7a52e7add255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80"},{username:"mkbhd6",img:"https://images.unsplash.com/photo-1517780631024-63b520216d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{username:"mkbhd6",img:"https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"}]}}},N=P,A=Object(u["a"])(N,z,I,!1,null,"9cc6259c",null),Y=A.exports;p()(A,{VAvatar:v["a"],VFlex:x["a"],VImg:_["a"],VLayout:w["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-8"},[a("v-layout",[a("v-flex",{attrs:{"text-left":""}},[a("span",{staticClass:"text-h3 font-weight-medium"},[t._v("Feed")])])],1),a("v-layout",[a("v-flex",{attrs:{"text-right":""}},[a("v-btn",{staticClass:"mr-1",attrs:{icon:"",color:this.layout?"grey":"primary"},on:{click:function(e){return e.preventDefault(),t.FeedClicked(0)}}},[a("v-icon",[t._v("mdi-menu")])],1),a("v-btn",{attrs:{icon:"",color:this.layout?"primary":"grey"},on:{click:function(e){return e.preventDefault(),t.FeedClicked(1)}}},[a("v-icon",[t._v(t._s(this.layout?"mdi-view-dashboard":"mdi-view-dashboard-outline"))])],1)],1)],1),a("v-layout",{staticClass:"mt-2",attrs:{wrap:"","justify-space-around":""}},t._l(t.feedImages,(function(t,e){return a("v-card",{key:e,staticClass:"my-4",attrs:{hover:"","max-width":"300",color:"red"}},[a("v-img",{attrs:{"max-width":"300",src:t,"lazy-src":t}})],1)})),1),t._l(t.feedImages,(function(t,e){return a("v-row",{key:e,staticClass:"mt-2"},[a("v-layout",{attrs:{"align-start":"","justify-center":""}},[a("v-card",{attrs:{height:"auto",width:"40%",color:"blue"}},[a("v-img",{attrs:{height:"auto",width:"100%",src:t,"lazy-src":t}})],1)],1)],1)}))],2)},R=[],K={data:function(){return{layout:1,feedImages:[{src:"https://images.unsplash.com/photo-1597905040800-0a8cea5a147f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",id:0},{src:"https://images.unsplash.com/photo-1597931618445-e2a39f00bb34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",id:1},{src:"https://images.unsplash.com/photo-1597873402677-d4a095792d2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",id:2},{src:"https://images.unsplash.com/photo-1595024713863-d2b8b504bfc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",id:3},{src:"https://images.unsplash.com/photo-1595389494847-2b78a7680d8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",id:4},{src:"https://images.unsplash.com/photo-1596686661820-2cda2d71c3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",id:5},{src:"https://images.unsplash.com/photo-1562674111-fa6a64c1b345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",id:6},{src:"https://images.unsplash.com/photo-1572731013456-5ed911024bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",id:7},{src:"https://images.unsplash.com/photo-1571219800443-4f06faaa6a7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",id:8},{src:"https://images.unsplash.com/photo-1588017104438-d559ef18ebbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",id:9}]}},methods:{FeedClicked:function(t){this.layout=t}}},U=K,X=a("b0af"),Z=a("0fd9"),tt=Object(u["a"])(U,G,R,!1,null,"18c10031",null),et=tt.exports;p()(tt,{VBtn:g["a"],VCard:X["a"],VFlex:x["a"],VIcon:y["a"],VImg:_["a"],VLayout:w["a"],VRow:Z["a"]});var at={components:{FeedStories:Y,FeedSection:et},props:{source:String},data:function(){return{images:[{id:0,src:a("ca29"),liked:!1,caption:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptas repellat id saepe sunt laboriosam voluptatum doloremque sequi at, fugit quisquam iure corporis, in repellendus tempora a. Totam, molestias quia?"},{id:1,src:a("ca29"),liked:!1,caption:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptas repellat id saepe sunt laboriosam voluptatum doloremque sequi at, fugit quisquam iure corporis, in repellendus tempora a. Totam, molestias quia?"},{id:2,src:a("ca29"),liked:!1,caption:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptas repellat id saepe sunt laboriosam voluptatum doloremque sequi at, fugit quisquam iure corporis, in repellendus tempora a. Totam, molestias quia?"},{id:3,src:a("ca29"),liked:!1,caption:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates voluptas repellat id saepe sunt laboriosam voluptatum doloremque sequi at, fugit quisquam iure corporis, in repellendus tempora a. Totam, molestias quia?"}]}}},it=at,rt=(a("34c8"),a("a523")),ot=Object(u["a"])(it,F,L,!1,null,null,null),st=ot.exports;p()(ot,{VContainer:rt["a"],VDivider:b["a"]});var nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Explore")])])}],ct={props:{source:String},data:function(){return{}}},ut=ct,mt=Object(u["a"])(ut,nt,lt,!1,null,null,null),pt=mt.exports,dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Messages")])])}],vt={props:{source:String},data:function(){return{}}},ht=vt,gt=Object(u["a"])(ht,dt,ft,!1,null,null,null),bt=gt.exports,xt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Notifications")])])}],_t={props:{source:String},data:function(){return{}}},wt=_t,kt=Object(u["a"])(wt,xt,yt,!1,null,null,null),jt=kt.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("People")])])}],Ot={props:{source:String},data:function(){return{}}},qt=Ot,Vt=Object(u["a"])(qt,Ct,Et,!1,null,null,null),Bt=Vt.exports,Mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Settings")])])}],St={props:{source:String},data:function(){return{}}},Jt=St,$t=Object(u["a"])(Jt,Mt,Dt,!1,null,null,null),Ht=$t.exports,Qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Wt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Stats")])])}],Tt={props:{source:String},data:function(){return{}}},Ft=Tt,Lt=Object(u["a"])(Ft,Qt,Wt,!1,null,null,null),zt=Lt.exports,It=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("TopPosts")])])}],Nt={props:{source:String},data:function(){return{}}},At=Nt,Yt=Object(u["a"])(At,It,Pt,!1,null,null,null),Gt=Yt.exports,Rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Kt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("TrendingTags")])])}],Ut={props:{source:String},data:function(){return{}}},Xt=Ut,Zt=Object(u["a"])(Xt,Rt,Kt,!1,null,null,null),te=Zt.exports,ee=a("c100");i["a"].use(T["a"]);var ae=[{path:"/",name:"Feed",component:st},{path:"/feed",name:"Feed",component:st},{path:"/explore",name:"Explore",component:pt},{path:"/notifications",name:"Notifications",component:jt},{path:"/people",name:"People",component:Bt},{path:"/settings",name:"Settings",component:Ht},{path:"/stats",name:"Stats",component:zt},{path:"/topposts",name:"TopPosts",component:Gt},{path:"/trendingtags",name:"TrendingTags",component:te},{path:"/messages",name:"Messages",component:bt},{path:"/logout",name:"Logout",component:ee["default"]}],ie=new T["a"]({routes:ae}),re=ie,oe=a("f309");i["a"].use(oe["a"]);var se=new oe["a"]({theme:{themes:{light:{primary:"#E1306C"},dark:{primary:"#E1306C"}}}}),ne=se;i["a"].config.productionTip=!1,new i["a"]({router:re,vuetify:ne,theme:{primary:"#e1306c"},render:function(t){return t(W)}}).$mount("#app")},"56fd":function(t,e,a){t.exports=a.p+"img/instagram-logo.b1f9fc21.png"},"5ea7":function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Logout")])},r=[]},"66e1":function(t,e,a){},"6b79":function(t,e,a){"use strict";var i=a("e322"),r=a.n(i);e["default"]=r.a},"85ec":function(t,e,a){},a819:function(t,e,a){"use strict";var i=a("1f0a"),r=a.n(i);r.a},b716:function(t,e,a){t.exports=a.p+"img/mkbhd.eeb1c704.png"},c100:function(t,e,a){"use strict";var i=a("5ea7"),r=a("6b79"),o=a("2877"),s=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},ca29:function(t,e,a){t.exports=a.p+"img/feed1.65a3eeb4.png"},e322:function(t,e){}});
//# sourceMappingURL=app.af5f3554.js.map