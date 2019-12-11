(this.webpackJsonpsurvey_project=this.webpackJsonpsurvey_project||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(19),o=a.n(n),l=(a(27),a(1)),c=a(3),i=a(5),u=a(4),m=a(6),d=(a(28),a(10)),v=a(11),p="/user",g="/admin",h="/allSurveys",y="/surveyPage",f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).setUserName=function(e){a.setState({userName:e.target.value})},a.setPassword=function(e){a.setState({password:e.target.value})},a.redirectToUserPage=function(){if(a.state.isLoggedIn)return s.a.createElement(v.a,{to:a.state.path})},a.areInputsBlank=function(){var e=!1;return""===a.state.userName?(document.getElementById("userName").style.border="2px solid red",e=!0):document.getElementById("userName").style.border="none",""===a.state.password?(document.getElementById("password").style.border="2px solid red",e=!0):document.getElementById("password").style.border="none",e},a.login=function(){if(!a.areInputsBlank()){var e=a.findUser(),t="";-1!==e?(t="User"===a.props.users[e].role?p:g,localStorage.setItem("loggedUserIndex",e),a.setState({path:t,isLoggedIn:!0})):alert("User name or password are incorrect")}},a.findUser=function(){for(var e=a.props.users,t=0;t<e.length;t++)if(a.state.userName===e[t].user&&a.state.password===e[t].password)return t;return-1},a.state={userName:"",password:"",path:"",isLoggedIn:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},this.redirectToUserPage(),s.a.createElement("div",{id:"box",className:"row loginSheet"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h1",{className:"new-display-4"},"Login Page"))),s.a.createElement("div",{className:"row margin-top"},s.a.createElement("div",{className:"col-12"},s.a.createElement("input",{id:"userName",onChange:this.setUserName,className:"inputStyle",type:"text",placeholder:"User Name"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("input",{id:"password",onChange:this.setPassword,className:"inputStyle",type:"password",placeholder:"Password"}))),s.a.createElement("div",{className:"row margin-bottom"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:function(){return e.login()},className:"btn btn-success buttonStyleWidth"},"Login"))))))}}]),t}(r.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.goToAvailableCompletedSurveys=function(e){"available"===e?localStorage.setItem("whereToGo","available"):localStorage.setItem("whereToGo","completed"),a.changePathToGo(h)},a.doRedirect=function(){if(a.state.changePage)return s.a.createElement(v.a,{to:a.state.path})},a.state={loggedUserIndex:localStorage.getItem("loggedUserIndex"),path:"",changePage:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},this.doRedirect(),s.a.createElement("div",{id:"box",className:"row loginSheet"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{style:{textAlign:"left"},className:"col-6"},s.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.changePathToGo("/")}},"Disconnect")),s.a.createElement("div",{style:{textAlign:"right"},className:"col-6"},s.a.createElement("h1",{className:"header-style style-role"},this.props.users[this.state.loggedUserIndex].role))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h1",{className:"new-display-4"},"Welcome ",this.props.users[this.state.loggedUserIndex].user))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h1",{className:"header-style"},"What would you like to do:"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h3",{className:"sub-header"},"Surveys"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{className:"link-style",onClick:function(){return e.goToAvailableCompletedSurveys("available")}},"Available Surveys"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{className:"link-style",onClick:function(){return e.goToAvailableCompletedSurveys("completed")}},"Completed Surveys"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{className:"link-style",onClick:function(){return e.changePathToGo("/couponPage")}},"Coupons awards"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h3",{className:"sub-header"},"User Info"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{style:{paddingBottom:"10px"},className:"col-12"},s.a.createElement("button",{className:"link-style",onClick:function(){return e.changePathToGo("/userInfo")}},"Edit User Info"))))))}}]),t}(r.Component),b=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).redirectToUserPage=function(){if(a.state.done)return s.a.createElement(v.a,{to:p})},a.setUserName=function(e){a.setState({userName:e.target.value})},a.setMail=function(e){a.setState({mail:e.target.value})},a.setDefaultInputs=function(){a.setState({userName:a.props.users[a.state.loggedUserIndex].user,mail:a.props.users[a.state.loggedUserIndex].mail})},a.updateUser=function(){""===a.state.userName||""===a.state.mail?alert("User name or mail are blank"):(a.props.updateUser(a.state.userName,a.state.mail),a.setState({done:!0}))},a.state={userName:a.props.users[window.localStorage.getItem("loggedUserIndex")].user,mail:a.props.users[window.localStorage.getItem("loggedUserIndex")].mail,loggedUserIndex:window.localStorage.getItem("loggedUserIndex"),done:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},this.redirectToUserPage(),s.a.createElement("div",{id:"box",className:"row loginSheet"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{style:{textAlign:"left"},className:"col-12"},s.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.setState({done:!0})}},"Go Back"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h1",{className:"new-display-4"},"Edit User Info"))),s.a.createElement("div",{className:"row margin-top"},s.a.createElement("div",{className:"col-12"},s.a.createElement("input",{onChange:this.setUserName,defaultValue:this.props.users[this.state.loggedUserIndex].user,className:"inputStyle",type:"text",placeholder:"User Name"}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("input",{onChange:this.setMail,defaultValue:this.props.users[this.state.loggedUserIndex].mail,className:"inputStyle",type:"text",placeholder:"Mail"}))),s.a.createElement("div",{className:"row margin-bottom"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:function(){return e.updateUser()},className:"btn btn-primary buttonStyleWidth"},"Update Your Info"))))))}}]),t}(r.Component),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).loadCategories=function(){return s.a.createElement("select",{id:"category",onChange:function(){return a.searchSurveyByCategory()}},s.a.createElement("option",null,"All Categories"),a.props.categories.map((function(e,t){return s.a.createElement("option",{key:t},e)})))},a.searchSurveyByCategory=function(){var e=document.getElementById("category").value;a.setState({category:e})},a.changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.doRedirect=function(){if(a.state.changePage)return s.a.createElement(v.a,{to:a.state.path})},a.changeHeader=function(){return"available"===localStorage.getItem("whereToGo")?s.a.createElement("h1",{className:"new-display-4"},"Available Surveys"):s.a.createElement("h1",{className:"new-display-4"},"Completed Surveys")},a.showSurvey=function(e){localStorage.setItem("indexOfSurvey",e),a.changePathToGo(y)},a.pushNewLinkToSurveysArr=function(e,t){e.push(s.a.createElement("div",{key:t,className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:function(){return a.showSurvey(t)},className:"link-style"},a.props.surveys[t].name))))},a.loadSurveys=function(e){var t=[];if("available"===localStorage.getItem("whereToGo"))for(var r=0;r<a.props.surveys.length;r++)-1===a.props.findSurveyIdInCompletedArr(a.props.surveys[r].id)&&("All Categories"===e?a.pushNewLinkToSurveysArr(t,r):a.props.surveys[r].category===e&&a.pushNewLinkToSurveysArr(t,r));else for(var s=0;s<a.props.surveys.length;s++)-1!==a.props.findSurveyIdInCompletedArr(a.props.surveys[s].id)&&("All Categories"===e?a.pushNewLinkToSurveysArr(t,s):a.props.surveys[s].category===e&&a.pushNewLinkToSurveysArr(t,s));return t},a.state={category:"All Categories",path:"",changePage:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},this.doRedirect(),s.a.createElement("div",{id:"box",className:"row loginSheet"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{style:{textAlign:"left"},className:"col-6"},s.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.changePathToGo(p)}},"Go Back")),s.a.createElement("div",{style:{textAlign:"right"},className:"col-6"},this.loadCategories())),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},this.changeHeader())),this.loadSurveys(this.state.category).map((function(e){return e})))))}}]),t}(r.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).addClearSurveyButton=function(){if("available"===localStorage.getItem("whereToGo"))return s.a.createElement("div",{style:{textAlign:"right"},className:"col-6"},s.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return a.clearSurvey()}},"Clear Survey"))},a.addSubmitButton=function(){if("available"===localStorage.getItem("whereToGo"))return s.a.createElement("div",{className:"row margin-bottom"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{onClick:function(){return a.submitSurvey()},style:{width:"15%"},className:"btn btn-info"},"Submit")))},a.submitSurvey=function(){for(var e=[],t=!1,r=0;r<a.props.surveys[a.state.indexOfSurvey].questions.length&&!t;r++){for(var s=!1,n=0;n<a.props.surveys[a.state.indexOfSurvey].questions[r].answers.length&&!s;n++)document.getElementById("a"+r+n).checked&&(e.push(n),s=!0);s||(alert("Some of the questions were not filled"),t=!0)}t||(a.props.pushCompletedSurvey(e,a.state.loggedUserIndex,a.state.indexOfSurvey),alert("Thank you for filling the survey!"),a.changePathToGo(h))},a.clearSurvey=function(){for(var e=0;e<a.props.surveys[a.state.indexOfSurvey].questions.length;e++)for(var t=0;t<a.props.surveys[a.state.indexOfSurvey].questions[e].answers.length;t++)document.getElementById("a"+e+t).checked=!1},a.changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.doRedirect=function(){if(a.state.changePage)return s.a.createElement(v.a,{to:a.state.path})},a.addRadioButton=function(e,t){if("completed"===localStorage.getItem("whereToGo")){var r=a.props.findSurveyIdInCompletedArr(a.state.indexOfSurvey);return a.props.users[a.state.loggedUserIndex].completedSurveys[r].resultSurvey[e]===t?s.a.createElement("input",{type:"radio",checked:!0,disabled:!0,name:"a"+e,id:"a"+e+t}):s.a.createElement("input",{type:"radio",disabled:!0,name:"a"+e,id:"a"+e+t})}return s.a.createElement("input",{type:"radio",name:"a"+e,id:"a"+e+t})},a.loadSurvey=function(){for(var e=[],t=0;t<a.props.surveys[a.state.indexOfSurvey].questions.length;t++){for(var r=[],n=0;n<a.props.surveys[a.state.indexOfSurvey].questions[t].answers.length;n++)r.push(s.a.createElement("div",{key:n,className:"row"},s.a.createElement("div",{style:{marginLeft:"480px"},className:"col-12"},s.a.createElement("table",{style:{float:"left"}},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"padding-table"},a.addRadioButton(t,n))))),s.a.createElement("table",{style:{float:"center"}},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,s.a.createElement("h4",{className:"autoBr"},a.props.surveys[a.state.indexOfSurvey].questions[t].answers[n]))))))));e.push(s.a.createElement("div",{key:t},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h3",{className:"sub-header autoBr"},a.props.surveys[a.state.indexOfSurvey].questions[t].question))),r.map((function(e){return e}))))}return e},a.state={indexOfSurvey:Number(localStorage.getItem("indexOfSurvey")),loggedUserIndex:Number(localStorage.getItem("loggedUserIndex")),path:"",changePage:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},this.doRedirect(),s.a.createElement("div",{id:"boxSurvey",className:"row loginSheet"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{style:{textAlign:"left"},className:"col-6"},s.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.changePathToGo(h)}},"Go Back")),this.addClearSurveyButton()),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h1",{className:"new-display-4"},this.props.surveys[this.state.indexOfSurvey].name))),this.loadSurvey().map((function(e){return e})),this.addSubmitButton())))}}]),t}(r.Component),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).loadCoupons=function(){for(var e=[],t=function(t){a.props.users[a.state.loggedUserIndex].completedSurveys[t].couponRedeemed?e.push(s.a.createElement("div",{key:t,className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{id:"style-disabled",className:"coupon-style",disabled:!0},"Survey ",a.props.users[a.state.loggedUserIndex].completedSurveys[t].indexOfSurvey+1," Redeemed !")))):e.push(s.a.createElement("div",{key:t,className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("button",{className:"coupon-style",id:"a"+t,onClick:function(){return a.redeemCoupon(t)}},"Redeem Coupon Survey ",a.props.users[a.state.loggedUserIndex].completedSurveys[t].indexOfSurvey+1))))},r=0;r<a.props.users[a.state.loggedUserIndex].completedSurveys.length;r++)t(r);return e},a.redeemCoupon=function(e){a.props.users[a.state.loggedUserIndex].completedSurveys[e].couponRedeemed=!0,document.getElementById("a"+e).disabled=!0,document.getElementById("a"+e).innerHTML="Survey "+(a.props.users[a.state.loggedUserIndex].completedSurveys[e].indexOfSurvey+1)+" redeemed !",document.getElementById("a"+e).style.backgroundColor="#4ca454",document.getElementById("a"+e).style.color="white"},a.changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.doRedirect=function(){if(a.state.changePage)return s.a.createElement(v.a,{to:a.state.path})},a.state={path:"",changePage:!1,loggedUserIndex:localStorage.getItem("loggedUserIndex")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},this.doRedirect(),s.a.createElement("div",{id:"box",className:"row loginSheet"},s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{style:{textAlign:"left"},className:"col-12"},s.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.changePathToGo(p)}},"Go Back"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h1",{className:"new-display-4"},"Coupon Awards"))),this.loadCoupons().map((function(e){return e})))))}}]),t}(r.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"aaa")}}]),t}(r.Component),x=(a(34),a(35),a(36),function e(t,a,r,s){Object(l.a)(this,e),this.completedSurveys=[],this.user=t,this.password=a,this.mail=r,this.role=s}),O=function e(t,a,r,s){Object(l.a)(this,e),this.questions=[],this.id=t,this.name=a,this.category=r,this.questions=s},C=function e(t,a){Object(l.a)(this,e),this.answers=[],this.question=t,this.answers=a},k=(a(37),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).updateUser=function(e,t){var r=localStorage.getItem("loggedUserIndex"),s=a.state.users;s[r].user=e,s[r].mail=t,a.setState({users:s})},a.pushCompletedSurvey=function(e,t,r){var s=a.state.users;s[t].completedSurveys.push({indexOfSurvey:r,resultSurvey:e,couponRedeemed:!1}),a.setState({users:s})},a.findSurveyIdInCompletedArr=function(e){for(var t=localStorage.getItem("loggedUserIndex"),r=0;r<a.state.users[t].completedSurveys.length;r++)if(a.state.users[t].completedSurveys[r].indexOfSurvey===e)return r;return-1},a.state={users:[new x("tomer","1234","aaaa@gmail.com","User"),new x("ram","4321","bbbb@walla.com","User"),new x("jon","1111","cccc@gmail.com","Admin")],surveys:[new O(0,"bla bla","Bedroom",[new C("are this better?",["one","two","three"]),new C("bb",["four","five","six"]),new C("ccc",["four","five","six"])]),new O(1,"ma ma","Bathroom",[new C("is this good?",["four","five","six"])]),new O(2,"na na","Bedroom",[new C("What is this?",["seven","eight","nine"]),new C("bb",["four","five","six"]),new C("ccc",["four","five","six"])])],categories:["Bedroom","Bathroom"]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(d.a,null,s.a.createElement("div",null,s.a.createElement(v.b,{exact:!0,path:"/",render:function(t){return s.a.createElement(f,Object.assign({},t,{users:e.state.users}))}}),s.a.createElement(v.b,{exact:!0,path:p,render:function(t){return s.a.createElement(E,Object.assign({},t,{users:e.state.users}))}}),s.a.createElement(v.b,{exact:!0,path:"/userInfo",render:function(t){return s.a.createElement(b,Object.assign({},t,{users:e.state.users,updateUser:e.updateUser}))}}),s.a.createElement(v.b,{exact:!0,path:h,render:function(t){return s.a.createElement(N,Object.assign({},t,{users:e.state.users,surveys:e.state.surveys,categories:e.state.categories,findSurveyIdInCompletedArr:e.findSurveyIdInCompletedArr}))}}),s.a.createElement(v.b,{exact:!0,path:y,render:function(t){return s.a.createElement(S,Object.assign({},t,{users:e.state.users,surveys:e.state.surveys,pushCompletedSurvey:e.pushCompletedSurvey,findSurveyIdInCompletedArr:e.findSurveyIdInCompletedArr}))}}),s.a.createElement(v.b,{exact:!0,path:"/couponPage",render:function(t){return s.a.createElement(w,Object.assign({},t,{users:e.state.users}))}}),s.a.createElement(v.b,{exact:!0,path:g,render:function(t){return s.a.createElement(I,Object.assign({},t,{users:e.state.users}))}}))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.0ca04d6d.chunk.js.map