(this.webpackJsonpsurvey_project=this.webpackJsonpsurvey_project||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/surveyPic.05bf9d9d.jpg"},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(19),l=a.n(n),o=(a(27),a(1)),c=a(3),i=a(5),m=a(4),d=a(6),u=(a(28),a(9)),g=a(11),v="/user",h="/admin",p="/allSurveys",y="/surveyPage",N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).setUserName=function(e){a.setState({userName:e.target.value})},a.setPassword=function(e){a.setState({password:e.target.value})},a.redirectToUserPage=function(){if(a.state.isLoggedIn)return r.a.createElement(g.a,{to:a.state.path})},a.areInputsBlank=function(){var e=!1;return""===a.state.userName?(document.getElementById("userName").style.border="2px solid red",e=!0):document.getElementById("userName").style.border="none",""===a.state.password?(document.getElementById("password").style.border="2px solid red",e=!0):document.getElementById("password").style.border="none",e},a.login=function(){if(!a.areInputsBlank()){var e=a.findUser(),t="";-1!==e?(t="User"===a.props.users[e].role?v:h,localStorage.setItem("loggedUserIndex",e),a.setState({path:t,isLoggedIn:!0})):alert("User name or password are incorrect")}},a.findUser=function(){for(var e=a.props.users,t=0;t<e.length;t++)if(a.state.userName===e[t].user&&a.state.password===e[t].password)return t;return-1},a.state={userName:"",password:"",path:"",isLoggedIn:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.redirectToUserPage(),r.a.createElement("div",{id:"box",className:"row loginSheet"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"new-display-4"},"Login Page"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("img",{onClick:function(){return e.login()},className:"img-style",title:"Login",src:a(34),alt:""}))),r.a.createElement("div",{className:"row margin-top"},r.a.createElement("div",{className:"col-12"},r.a.createElement("input",{id:"userName",onChange:this.setUserName,className:"inputStyle",type:"text",placeholder:"User Name"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("input",{id:"password",onChange:this.setPassword,className:"inputStyle",type:"password",placeholder:"Password"}))),r.a.createElement("div",{className:"row margin-bottom"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:function(){return e.login()},className:"btn btn-success buttonStyleWidth"},"Login"))))))}}]),t}(s.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).doRedirect=function(){if(a.state.changePage)return r.a.createElement(g.a,{to:a.state.path})},a.changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.goToAvailableCompletedSurveys=function(e){"available"===e?localStorage.setItem("whereToGo","available"):localStorage.setItem("whereToGo","completed"),a.changePathToGo(p)},a.state={loggedUserIndex:localStorage.getItem("loggedUserIndex"),path:"",changePage:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.doRedirect(),r.a.createElement("div",{id:"box",className:"row loginSheet"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{textAlign:"left"},className:"col-6"},r.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.changePathToGo("/")}},"Disconnect")),r.a.createElement("div",{style:{textAlign:"right"},className:"col-6"},r.a.createElement("h1",{className:"header-style style-role"},this.props.users[this.state.loggedUserIndex].role))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"new-display-4"},"Welcome ",this.props.users[this.state.loggedUserIndex].firstName," ",this.props.users[this.state.loggedUserIndex].lastName))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"header-style"},"What would you like to do:"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"sub-header"},"Surveys"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return e.goToAvailableCompletedSurveys("available")}},"Available Surveys"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return e.goToAvailableCompletedSurveys("completed")}},"Completed Surveys"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return e.changePathToGo("/couponPage")}},"Coupons awards"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"sub-header"},"User Info"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{paddingBottom:"10px"},className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return e.changePathToGo("/userInfo")}},"Edit User Info"))))))}}]),t}(s.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).redirectToUserPage=function(){if(a.state.done)return r.a.createElement(g.a,{to:v})},a.setUserName=function(e){a.setState({userName:e.target.value})},a.setFirstName=function(e){a.setState({firstName:e.target.value})},a.setLastName=function(e){a.setState({lastName:e.target.value})},a.setMail=function(e){a.setState({mail:e.target.value})},a.areInputsBlank=function(){var e=!1;return""===a.state.userName?(document.getElementById("userName").style.border="2px solid red",e=!0):document.getElementById("userName").style.border="none",""===a.state.firstName?(document.getElementById("firstName").style.border="2px solid red",e=!0):document.getElementById("firstName").style.border="none",""===a.state.lastName?(document.getElementById("lastName").style.border="2px solid red",e=!0):document.getElementById("lastName").style.border="none",""===a.state.mail?(document.getElementById("mail").style.border="2px solid red",e=!0):document.getElementById("mail").style.border="none",e},a.updateUser=function(){a.areInputsBlank()||(a.props.updateUser(a.state.userName,a.state.firstName,a.state.lastName,a.state.mail),alert("User info changed successfully!"),a.setState({done:!0}))},a.state={userName:a.props.users[window.localStorage.getItem("loggedUserIndex")].user,firstName:a.props.users[window.localStorage.getItem("loggedUserIndex")].firstName,lastName:a.props.users[window.localStorage.getItem("loggedUserIndex")].lastName,mail:a.props.users[window.localStorage.getItem("loggedUserIndex")].mail,loggedUserIndex:window.localStorage.getItem("loggedUserIndex"),done:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.redirectToUserPage(),r.a.createElement("div",{id:"box",className:"row loginSheet"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{textAlign:"left"},className:"col-12"},r.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.setState({done:!0})}},"Go Back"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"new-display-4"},"Edit User Info"))),r.a.createElement("div",{className:"row margin-top"},r.a.createElement("div",{className:"col-12"},r.a.createElement("input",{id:"userName",onChange:this.setUserName,defaultValue:this.state.userName,className:"inputStyle",type:"text",placeholder:"User Name"}))),r.a.createElement("div",{className:"row margin-top"},r.a.createElement("div",{className:"col-12"},r.a.createElement("input",{id:"firstName",onChange:this.setFirstName,defaultValue:this.state.firstName,className:"inputStyle",type:"text",placeholder:"First Name"}))),r.a.createElement("div",{className:"row margin-top"},r.a.createElement("div",{className:"col-12"},r.a.createElement("input",{id:"lastName",onChange:this.setLastName,defaultValue:this.state.lastName,className:"inputStyle",type:"text",placeholder:"Last Name"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("input",{id:"mail",onChange:this.setMail,defaultValue:this.state.mail,className:"inputStyle",type:"text",placeholder:"Mail"}))),r.a.createElement("div",{className:"row margin-bottom"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:function(){return e.updateUser()},className:"btn btn-info buttonStyleWidth"},"Update Your Info"))))))}}]),t}(s.Component),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).loadCategories=function(){return r.a.createElement("select",{id:"category",onChange:function(){return a.searchSurveyByCategory()}},r.a.createElement("option",null,"All Categories"),a.props.categories.map((function(e,t){return r.a.createElement("option",{key:t},e)})))},a.searchSurveyByCategory=function(){var e=document.getElementById("category").value;a.setState({category:e})},a.changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.doRedirect=function(){if(a.state.changePage)return r.a.createElement(g.a,{to:a.state.path})},a.changeHeader=function(){return"available"===localStorage.getItem("whereToGo")?r.a.createElement("h1",{className:"new-display-4"},"Available Surveys"):r.a.createElement("h1",{className:"new-display-4"},"Completed Surveys")},a.showSurvey=function(e){localStorage.setItem("indexOfSurvey",e),a.changePathToGo(y)},a.pushNewLinkToSurveysArr=function(e,t){e.push(r.a.createElement("div",{key:t,className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:function(){return a.showSurvey(t)},className:"link-style"},a.props.surveys[t].name))))},a.loadSurveys=function(e){var t=[];if("available"===localStorage.getItem("whereToGo"))for(var s=0;s<a.props.surveys.length;s++)-1===a.props.findSurveyIdInCompletedArr(a.props.surveys[s].id)&&("All Categories"===e?a.pushNewLinkToSurveysArr(t,s):a.props.surveys[s].category===e&&a.pushNewLinkToSurveysArr(t,s));else for(var r=0;r<a.props.surveys.length;r++)-1!==a.props.findSurveyIdInCompletedArr(a.props.surveys[r].id)&&("All Categories"===e?a.pushNewLinkToSurveysArr(t,r):a.props.surveys[r].category===e&&a.pushNewLinkToSurveysArr(t,r));return t},a.state={category:"All Categories",path:"",changePage:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.doRedirect(),r.a.createElement("div",{id:"box",className:"row loginSheet"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{textAlign:"left"},className:"col-6"},r.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.changePathToGo(v)}},"Go Back")),r.a.createElement("div",{style:{textAlign:"right"},className:"col-6"},this.loadCategories())),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},this.changeHeader())),this.loadSurveys(this.state.category).map((function(e){return e})))))}}]),t}(s.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).addClearGoBackButtons=function(){return"available"===localStorage.getItem("whereToGo")?r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{textAlign:"left"},className:"col-6"},r.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return a.changePathToGo(p)}},"Go Back")),r.a.createElement("div",{style:{textAlign:"right"},className:"col-6"},r.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return a.clearSurvey()}},"Clear Survey"))):r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{textAlign:"left"},className:"col-12"},r.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return a.changePathToGo(p)}},"Go Back")))},a.addSubmitButton=function(){if("available"===localStorage.getItem("whereToGo"))return r.a.createElement("div",{className:"row margin-bottom"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{onClick:function(){return a.submitSurvey()},style:{width:"15%"},className:"btn btn-info"},"Submit")))},a.submitSurvey=function(){for(var e=[],t=!1,s=0;s<a.props.surveys[a.state.indexOfSurvey].questions.length&&!t;s++){for(var r=!1,n=0;n<a.props.surveys[a.state.indexOfSurvey].questions[s].answers.length&&!r;n++)document.getElementById("a"+s+n).checked&&(e.push(n),r=!0);r||(alert("Some of the questions were not filled"),t=!0)}t||(a.props.pushCompletedSurvey(e,a.state.loggedUserIndex,a.state.indexOfSurvey),alert("Thank you for filling the survey!"),a.changePathToGo(p))},a.clearSurvey=function(){for(var e=0;e<a.props.surveys[a.state.indexOfSurvey].questions.length;e++)for(var t=0;t<a.props.surveys[a.state.indexOfSurvey].questions[e].answers.length;t++)document.getElementById("a"+e+t).checked=!1},a.changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.doRedirect=function(){if(a.state.changePage)return r.a.createElement(g.a,{to:a.state.path})},a.addRadioButton=function(e,t){if("completed"===localStorage.getItem("whereToGo")){var s=a.props.findSurveyIdInCompletedArr(a.state.indexOfSurvey);return a.props.users[a.state.loggedUserIndex].completedSurveys[s].resultSurvey[e]===t?r.a.createElement("input",{type:"radio",checked:!0,disabled:!0,name:"a"+e,id:"a"+e+t}):r.a.createElement("input",{type:"radio",disabled:!0,name:"a"+e,id:"a"+e+t})}return r.a.createElement("input",{type:"radio",name:"a"+e,id:"a"+e+t})},a.loadSurvey=function(){for(var e=[],t=0;t<a.props.surveys[a.state.indexOfSurvey].questions.length;t++){for(var s=[],n=0;n<a.props.surveys[a.state.indexOfSurvey].questions[t].answers.length;n++)s.push(r.a.createElement("div",{key:n,className:"row"},r.a.createElement("div",{style:{marginLeft:"480px"},className:"col-12"},r.a.createElement("table",{style:{float:"left"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"padding-table"},a.addRadioButton(t,n))))),r.a.createElement("table",{style:{float:"center"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("h4",{className:"autoBr"},a.props.surveys[a.state.indexOfSurvey].questions[t].answers[n]))))))));e.push(r.a.createElement("div",{key:t},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"sub-header autoBr"},a.props.surveys[a.state.indexOfSurvey].questions[t].question))),s.map((function(e){return e}))))}return e},a.state={indexOfSurvey:Number(localStorage.getItem("indexOfSurvey")),loggedUserIndex:Number(localStorage.getItem("loggedUserIndex")),path:"",changePage:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.doRedirect(),r.a.createElement("div",{id:"boxSurvey",className:"row loginSheet"},r.a.createElement("div",{className:"col-12"},this.addClearGoBackButtons(),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"new-display-4"},this.props.surveys[this.state.indexOfSurvey].name))),this.loadSurvey().map((function(e){return e})),this.addSubmitButton())))}}]),t}(s.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).loadCoupons=function(){for(var e=[],t=function(t){a.props.users[a.state.loggedUserIndex].completedSurveys[t].couponRedeemed?e.push(r.a.createElement("div",{key:t,className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{id:"style-disabled",className:"coupon-style",disabled:!0},"Survey ",a.props.users[a.state.loggedUserIndex].completedSurveys[t].indexOfSurvey+1," Redeemed !")))):e.push(r.a.createElement("div",{key:t,className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"coupon-style",id:"a"+t,onClick:function(){return a.redeemCoupon(t)}},"Redeem Coupon Survey ",a.props.users[a.state.loggedUserIndex].completedSurveys[t].indexOfSurvey+1))))},s=0;s<a.props.users[a.state.loggedUserIndex].completedSurveys.length;s++)t(s);return e},a.redeemCoupon=function(e){a.props.users[a.state.loggedUserIndex].completedSurveys[e].couponRedeemed=!0,document.getElementById("a"+e).disabled=!0,document.getElementById("a"+e).innerHTML="Survey "+(a.props.users[a.state.loggedUserIndex].completedSurveys[e].indexOfSurvey+1)+" redeemed !",document.getElementById("a"+e).style.backgroundColor="#4ca454",document.getElementById("a"+e).style.color="white"},a.changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.doRedirect=function(){if(a.state.changePage)return r.a.createElement(g.a,{to:a.state.path})},a.state={path:"",changePage:!1,loggedUserIndex:localStorage.getItem("loggedUserIndex")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.doRedirect(),r.a.createElement("div",{id:"box",className:"row loginSheet"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{textAlign:"left"},className:"col-12"},r.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.changePathToGo(v)}},"Go Back"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"new-display-4"},"Coupon Awards"))),this.loadCoupons().map((function(e){return e})))))}}]),t}(s.Component),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).doRedirect=function(){if(a.state.changePage)return r.a.createElement(g.a,{to:a.state.path})},a.changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.state={loggedUserIndex:localStorage.getItem("loggedUserIndex"),path:"",changePage:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.doRedirect(),r.a.createElement("div",{id:"box",className:"row loginSheet"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{textAlign:"left"},className:"col-6"},r.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.changePathToGo("/")}},"Disconnect")),r.a.createElement("div",{style:{textAlign:"right"},className:"col-6"},r.a.createElement("h1",{className:"header-style style-role"},this.props.users[this.state.loggedUserIndex].role))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"new-display-4"},"Welcome ",this.props.users[this.state.loggedUserIndex].firstName," ",this.props.users[this.state.loggedUserIndex].lastName))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"header-style"},"What would you like to do:"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"sub-header"},"Surveys"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return 1}},"Create New Survey"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return 2}},"Edit Survey"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return 3}},"Delete Survey"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"sub-header"},"Users"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{paddingBottom:"10px"},className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return 4}},"Edit Users"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h3",{className:"sub-header"},"Categories"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{paddingBottom:"10px"},className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return e.changePathToGo("/newCategory")}},"Add New Category"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{paddingBottom:"10px"},className:"col-12"},r.a.createElement("button",{className:"link-style",onClick:function(){return 6}},"All Categories"))))))}}]),t}(s.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).areInputsBlank=function(){var e=!1;return""===a.state.newCategory?(document.getElementById("categoryName").style.border="2px solid red",e=!0):document.getElementById("categoryName").style.border="none",e},a.addNewCategory=function(){a.areInputsBlank()||(a.props.addNewCategory(a.state.newCategory),alert("New Category added!"),a.changePathToGo(h))},a.setCategoryName=function(e){a.setState({newCategory:e.target.value})},a.doRedirect=function(){if(a.state.changePage)return r.a.createElement(g.a,{to:a.state.path})},a.changePathToGo=function(e){a.setState({path:e,changePage:!0})},a.state={newCategory:"",path:"",changePage:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},this.doRedirect(),r.a.createElement("div",{id:"box",className:"row loginSheet"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{textAlign:"left"},className:"col-12"},r.a.createElement("button",{id:"disc-style",className:"link-style",onClick:function(){return e.changePathToGo(h)}},"Go Back"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"new-display-4"},"Add New Category"))),r.a.createElement("div",{className:"row margin-top"},r.a.createElement("div",{className:"col-12"},r.a.createElement("input",{id:"categoryName",style:{width:"50%"},onChange:this.setCategoryName,className:"inputStyle",type:"text",placeholder:"Category Name"}))),r.a.createElement("div",{className:"row margin-bottom"},r.a.createElement("div",{className:"col-12"},r.a.createElement("button",{style:{width:"50%"},onClick:function(){return e.addNewCategory()},className:"btn btn-info buttonStyleWidth aaa"},"Add New Category"))))))}}]),t}(s.Component),C=(a(35),a(36),a(37),function e(t,a,s,r,n,l){Object(o.a)(this,e),this.completedSurveys=[],this.user=t,this.firstName=a,this.lastName=s,this.password=r,this.mail=n,this.role=l}),k=function e(t,a,s,r){Object(o.a)(this,e),this.questions=[],this.id=t,this.name=a,this.category=s,this.questions=r},O=function e(t,a){Object(o.a)(this,e),this.answers=[],this.question=t,this.answers=a},j=(a(38),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).updateUser=function(e,t,s,r){var n=localStorage.getItem("loggedUserIndex"),l=a.state.users;l[n].user=e,l[n].firstName=t,l[n].lastName=s,l[n].mail=r,a.setState({users:l})},a.pushCompletedSurvey=function(e,t,s){var r=a.state.users;r[t].completedSurveys.push({indexOfSurvey:s,resultSurvey:e,couponRedeemed:!1}),a.setState({users:r})},a.findSurveyIdInCompletedArr=function(e){for(var t=localStorage.getItem("loggedUserIndex"),s=0;s<a.state.users[t].completedSurveys.length;s++)if(a.state.users[t].completedSurveys[s].indexOfSurvey===e)return s;return-1},a.addNewCategory=function(e){var t=a.state.categories;t.push(e),a.setState({categories:t})},a.state={users:[new C("tomer","Tomer","Steiner","1234","aaaa@gmail.com","User"),new C("ram","Ram","Maian","4321","bbbb@walla.com","User"),new C("jon","Jon","Snow","1111","cccc@gmail.com","Admin")],surveys:[new k(0,"bla bla","Bedroom",[new O("are this better?",["one","two","three"]),new O("bb",["four","five","six"]),new O("ccc",["four","five","six"])]),new k(1,"ma ma","Bathroom",[new O("is this good?",["four","five","six"])]),new k(2,"na na","Bedroom",[new O("What is this?",["seven","eight","nine"]),new O("bb",["four","five","six"]),new O("ccc",["four","five","six"])])],categories:["Bedroom","Bathroom"]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(N,Object.assign({},t,{users:e.state.users}))}}),r.a.createElement(g.b,{exact:!0,path:v,render:function(t){return r.a.createElement(E,Object.assign({},t,{users:e.state.users}))}}),r.a.createElement(g.b,{exact:!0,path:"/userInfo",render:function(t){return r.a.createElement(f,Object.assign({},t,{users:e.state.users,updateUser:e.updateUser}))}}),r.a.createElement(g.b,{exact:!0,path:p,render:function(t){return r.a.createElement(b,Object.assign({},t,{users:e.state.users,surveys:e.state.surveys,categories:e.state.categories,findSurveyIdInCompletedArr:e.findSurveyIdInCompletedArr}))}}),r.a.createElement(g.b,{exact:!0,path:y,render:function(t){return r.a.createElement(w,Object.assign({},t,{users:e.state.users,surveys:e.state.surveys,pushCompletedSurvey:e.pushCompletedSurvey,findSurveyIdInCompletedArr:e.findSurveyIdInCompletedArr}))}}),r.a.createElement(g.b,{exact:!0,path:"/couponPage",render:function(t){return r.a.createElement(S,Object.assign({},t,{users:e.state.users}))}}),r.a.createElement(g.b,{exact:!0,path:h,render:function(t){return r.a.createElement(I,Object.assign({},t,{users:e.state.users}))}}),r.a.createElement(g.b,{exact:!0,path:"/newCategory",render:function(t){return r.a.createElement(x,Object.assign({addNewCategory:e.addNewCategory},t))}}))))}}]),t}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.ddcd85c0.chunk.js.map