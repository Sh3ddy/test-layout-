(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{295:function(e,t,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(110).default)("b2e2b9a0",content,!0,{sourceMap:!1})},306:function(e,t,n){"use strict";n(295)},307:function(e,t,n){var o=n(109)(!1);o.push([e.i,'.wrapper[data-v-aa536216]{width:100%;height:100%;display:flex;align-items:center;justify-content:center}.wrapper .file-upload[data-v-aa536216]{height:100px;width:100px;margin-top:10px;border-radius:100px;position:relative;display:flex;justify-content:center;align-items:center;border:4px solid #f8f8f8;overflow:hidden;background-image:linear-gradient(to bottom, #F4E041 50%, #F8F8F8 50%);background-size:100% 200%;transition:all 1s;color:#f4e041;font-size:100px}.wrapper .file-upload input[type=file][data-v-aa536216]{height:100px;width:100px;position:absolute;opacity:0;cursor:pointer}.wrapper .file-upload[data-v-aa536216]:hover{background-position:0 -100%;color:#ffe302}.speaker__subtitle[data-v-aa536216]{display:flex;justify-content:center}.speaker__list[data-v-aa536216]{margin-left:auto;margin-right:auto}.speaker__list-name[data-v-aa536216]{display:flex;justify-content:center}.speaker__list-email[data-v-aa536216]{display:flex;justify-content:center}.speaker__list-phone[data-v-aa536216]{display:flex;justify-content:center}.speaker__list-position[data-v-aa536216]{display:flex;justify-content:center;text-align:center}.speaker__list-file[data-v-aa536216]{border:1px solid #d0cfcf;border-radius:4px;width:100%;max-width:380px;height:50px}.speaker__title[data-v-aa536216]{font-family:"Nunito";font-style:normal;font-weight:400;font-size:40px;line-height:40px;margin-bottom:50px;display:flex;justify-content:center;display:flex;align-items:flex-end;text-align:center;color:#000}.speaker__name-form[data-v-aa536216]{width:100%;max-width:380px;height:50px;padding-left:16px;margin-bottom:50px;background:#f8f8f8;border:1px solid #d0cfcf;border-radius:4px}.speaker__email-form[data-v-aa536216]{width:100%;max-width:380px;height:50px;padding-left:16px;margin-bottom:50px;background:#f8f8f8;border:1px solid #d0cfcf;border-radius:4px}.speaker__phone-form[data-v-aa536216]{width:100%;max-width:380px;height:50px;padding-left:16px;margin-bottom:25px;background:#f8f8f8;border:1px solid #d0cfcf;border-radius:4px}.speaker__position[data-v-aa536216]{margin:20px 0px 40px 0px;display:flex;justify-content:center;text-align:center}.speaker__button[data-v-aa536216]{margin-top:35px;justify-content:center;display:flex}.speaker__button-accept[data-v-aa536216]{width:100px;height:34px;background:#b4b4b4;color:#000;border-radius:80px}',""]),e.exports=o},311:function(e,t,n){"use strict";n.r(t);n(29),n(41),n(31),n(40),n(65),n(32),n(66);var o=n(8),r=n(28),l=(n(47),n(15),n(67));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var d={data:function(){return{form:{name:"Test",email:"test@gmail.com",phone:"+380955388485",position_id:1,photo:null}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)({token:"users/getToken",positions:"users/getPositions"})),methods:{uploadFile:function(){this.form.photo=this.$refs.file.files[0]},selectPosition:function(e){this.form.position_id=e,console.log(this.form.position_id)},submitForm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new FormData).append("position_id",e.form.position_id),n.append("name",e.form.name),n.append("email",e.form.email),n.append("phone",e.form.phone),n.append("photo",e.form.photo),console.log(e.token),t.next=9,fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:n,headers:{Token:e.token}}).then((function(e){return e.json()})).then((function(data){console.log(data),data.success})).catch((function(e){console.log(e)}));case 9:return t.next=11,e.$store.dispatch("users/users");case 11:case"end":return t.stop()}}),t)})))()}},mounted:function(){console.log(this.positions)}},f=d,m=(n(306),n(46)),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"speaker container"},[t("h2",{staticClass:"speaker__title"},[e._v("Working with POST request")]),t("ul",{staticClass:"speaker__list"},[e._m(0),e._m(1),e._m(2),t("h4",{staticClass:"speaker__subtitle"},[e._v("Select your position")]),t("li",{staticClass:"speaker__list-position"},[t("div",{staticClass:"speaker__position-form",attrs:{value:"Frontend developer",name:"Frontend developer"}}),t("ul",{staticClass:"speaker__position-list"},e._l(e.positions,(function(n){return t("li",{key:n.id,on:{click:function(t){return e.selectPosition(n.id)}}},[e._v(e._s(n.name))])})),0)]),t("div",{staticClass:"wrapper"},[t("div",{staticClass:"file-upload"},[t("input",{ref:"file",attrs:{type:"file",name:"Upload your photo"},on:{change:e.uploadFile}}),t("i",{staticClass:"fa fa-arrow-up"})])]),t("div",{staticClass:"speaker__button"},[t("button",{staticClass:"speaker__button-accept",on:{click:function(t){return t.preventDefault(),e.submitForm()}}},[e._v("Sign up")])])])])}),[function(){var e=this._self._c;return e("li",{staticClass:"speaker__list-name"},[e("input",{staticClass:"speaker__name-form",attrs:{id:"name",type:"name",name:"name",placeholder:"Your name"}})])},function(){var e=this._self._c;return e("li",{staticClass:"speaker__list-email"},[e("input",{staticClass:"speaker__email-form",attrs:{id:"email",type:"email",name:"email",placeholder:"Email"}})])},function(){var e=this._self._c;return e("li",{staticClass:"speaker__list-phone"},[e("input",{staticClass:"speaker__phone-form",attrs:{id:"phone",type:"phone",name:"phone",placeholder:"Phone"}})])}],!1,null,"aa536216",null);t.default=component.exports}}]);