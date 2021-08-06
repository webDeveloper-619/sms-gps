(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{122:function(e,t,n){},124:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},241:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(10),i=n.n(a),r=n(9),s=(n(97),n(7)),c=n(8),l=n(11),u=(n(98),n(4)),d=n(81),p=n(52),h=n.n(p);h.a.defaults.baseURL="/api";var f=h.a,b=null;var j,y=function(){return b||((b=new WebSocket("wss://safelocate.io/socket")).onopen=function(e){b.send(JSON.stringify({msg:"request connect",init:!0}))},b)},m=n(22),O=n.n(m),g=n(39),v=function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("what3words called"),e.next=3,f.get("https://api.what3words.com/v3/convert-to-3wa",{params:{key:"VQS6AM2Y",coordinates:t}}).then((function(e){return e.data.words}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=Object(d.createTypes)(["SEND_REQUEST","SEND_LOCATION","SET_CURRENT_GEOLOCATION","GET_REQUEST","APPROVED","ERROR","ERROR_FORMAT","FORMAT_REQUEST_STATE","REQUEST_FAILD","SEND_CONTACT_US"],"SMS"),x="not send",T="sending",N="pending",S="approved",E="faild",C="not send",A="sending",_="done",k="failed",R=function(){return function(e){return navigator.geolocation.getCurrentPosition((function(t){v("".concat(t.coords.latitude,",").concat(t.coords.longitude)).then((function(n){var o={lat:t.coords.latitude,lng:t.coords.longitude,what3words:n};e({type:w.SET_CURRENT_GEOLOCATION,payload:o})}))}))}},P=function(e){return{type:w.APPROVED,payload:e}},I=function(){return{type:w.FORMAT_REQUEST_STATE}},U=function(){return{type:w.SEND_CONTACT_US,payload:C}},L=n(82),D=n(84),M=n(91),q=(n(122),n(1)),Y=D.a.main(j||(j=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n"]))),W=function(){return{styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}]}},F=function(e){e.pos;return Object(q.jsx)("img",{src:"/assets/images/map_marker.svg",alt:"Marker",className:"map-marker"})},G=function(e){var t=e.location,n=e.zoomLevel,a=e.points,i=Object(o.useState)(null),r=Object(l.a)(i,2),c=(r[0],r[1],Object(o.useState)(null)),u=Object(l.a)(c,2),d=(u[0],u[1],{lat:"number"===typeof t.lat?t.lat:parseFloat(t.lat),lng:"number"===typeof t.lng?t.lng:parseFloat(t.lng)});return Object(q.jsx)(Y,{children:Object(q.jsx)("div",{className:"google-map",children:Object(q.jsx)(M.a,{bootstrapURLKeys:{key:"AIzaSyCO34vxnjcT_NlL8oP6BtF-A2E9AqN2u-k"},center:d,zoom:n,options:W,yesIWantToUseGoogleMapApiInternals:!0,children:a.map((function(e,t){var n={lat:"number"===typeof e.lat?e.lat:parseFloat(e.lat),lng:"number"===typeof e.lng?e.lng:parseFloat(e.lng)};if(n.lat&&n.lng)return Object(q.jsx)(F,Object(s.a)({},n),t)}))})})})},Q={position:{},current_geolocation:{},request_state:x,requested_data:{},approved_data:{},error:"",contact_us_state:C},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case w.SEND_REQUEST:return console.log("Request State: ",o),Object(s.a)(Object(s.a)({},e),{},{request_state:o});case w.REQUEST_FAILD:return console.log(o),Object(s.a)(Object(s.a)({},e),{},{request_state:E,error:o});case w.SET_CURRENT_GEOLOCATION:return Object(s.a)(Object(s.a)({},e),{},{current_geolocation:o});case w.SEND_LOCATION:return Object(s.a)(Object(s.a)({},e),{},{request_state:o});case w.GET_REQUEST:return Object(s.a)(Object(s.a)({},e),{},{requested_data:o});case w.APPROVED:return Object(s.a)(Object(s.a)({},e),{},{approved_data:o,request_state:w.APPROVED});case w.FORMAT_REQUEST_STATE:return Object(s.a)(Object(s.a)({},e),{},{request_state:x,error:""});case w.SEND_CONTACT_US:return Object(s.a)(Object(s.a)({},e),{},{contact_us_state:o});default:return e}};function H(e){return e.sms.request_state}function z(e){return e.sms.current_geolocation}function V(e){return e.sms.approved_data}function J(e){return e.sms.error}n(124);var K=function(e){var t=Object(u.b)();Object(o.useEffect)((function(){t(R())}),[]);var n=Object(u.c)((function(e){return z(e)})),a=Object(u.c)((function(e){return V(e)})),i=[],r=Object(c.f)(),s=window.location.search,l=new URLSearchParams(s),d=l.get("id"),p=l.get("lat");"/display"===r.location.pathname&&(i=!d||p?[a]:[n]),console.log(n),console.log(i[0]);var h=i[0]&&i[0].lat?i[0]:n;return Object(q.jsxs)("div",{className:"layout-container",children:[Object(q.jsx)("div",{className:"map-wrapper",children:h&&(null===h||void 0===h?void 0:h.lat)&&Object(q.jsx)(G,{location:h,zoomLevel:14,points:i})}),e.children]})},X=n(43),Z=n(44),$=Object(c.h)((function(e){var t=e.history,n=Object(c.g)();return Object(q.jsx)(X.a,{icon:Z.a,color:"var(--primary-color)",size:"2x",onClick:function(){var e=n.pathname;console.log("path: ",e),"/display"===e||"/send_my_location"===e?t.push("/"):t.goBack()}})})),ee=(n(128),function(e){var t=Object(c.g)();return Object(q.jsxs)("div",{className:"panel",children:[Object(q.jsxs)("div",{className:"logo",children:[Object(q.jsx)(r.b,{to:"/",children:Object(q.jsx)("img",{src:"/assets/images/logo.png",alt:"Logo",srcSet:""})}),Object(q.jsx)("h2",{className:"logo-title",children:"safe locate"}),Object(q.jsx)("label",{className:"logo-description",children:"sms your gps"})]}),Object(q.jsx)("div",{className:"content-wrapper",children:e.children}),"/privacy"!==t.pathname&&Object(q.jsxs)(r.b,{className:"copyright-wrapper",to:"/privacy",children:[Object(q.jsx)("span",{className:"privacy-link",children:"Privacy Policy"}),Object(q.jsx)("span",{children:"COPYRIGHT 2021"})]}),"/"!==t.pathname&&Object(q.jsx)("div",{className:"back-icon",children:Object(q.jsx)($,{})})]})}),te=(n(129),n(86)),ne=n.n(te),oe=function(e){var t=Object(o.useState)(e.value),n=Object(l.a)(t,2),a=n[0],i=n[1],r=Object(o.useState)(""),s=Object(l.a)(r,2);s[0],s[1];return Object(q.jsxs)("label",{className:"input",children:[Object(q.jsx)(ne.a,{mask:e.mask,className:"input__field input-outline",type:e.type?e.type:"text",onClick:function(){e.onClick&&e.onClick()},readOnly:e.readonly||!1,required:e.required||!1,value:a,onFocus:function(e){},onChange:function(t){i(t.target.value),e.onChange&&(console.log("onHandleChange",t.target.value),e.onChange(t.target.value))},placeholder:" "}),Object(q.jsx)("span",{className:"input__label",children:e.placeholder||""})]})},ae=(n(131),function(e){return Object(q.jsxs)("button",{type:e.type?e.type:"button",className:"btn "+(e.fill?"btn-fill":"btn-outline"),onClick:function(){e.onClick&&e.onClick()},disabled:e.loading,children:[e.loading&&Object(q.jsx)(X.a,{icon:Z.b,size:"2x",spin:!0}),!e.loading&&e.children]})});var ie=function(e){var t=Object(u.b)(),n=Object(o.useState)(""),a=Object(l.a)(n,2),i=a[0],r=a[1],s=Object(o.useState)(""),d=Object(l.a)(s,2),p=d[0],h=d[1],j=Object(o.useState)(""),y=Object(l.a)(j,2),m=y[0],O=y[1],g=Object(o.useState)(""),v=Object(l.a)(g,2),x=v[0],S=v[1],C=Object(c.f)(),A=Object(u.c)((function(e){return J(e)})),_=Object(u.c)((function(e){return H(e)}));return Object(o.useEffect)((function(){t(I())}),[]),console.log("_error: ",A),_===N?(e.handleNotification("success","Your request has been sent successfully"),C.push("/pending"),t(I())):_===E&&(console.log("error: ",A),e.handleNotification("error",A),t(I())),Object(q.jsx)(ee,{children:Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(function(e,t,n,o){return function(a){return a({type:w.SEND_REQUEST,payload:T}),f.post("/send_request",{from:e,to:t,name:n,msg:o,socketID:(console.log("socketID: ",b.id),b?b.id:null)}).then((function(e){console.log("result: ",e),e.data.success?a({type:w.SEND_REQUEST,payload:N}):a({type:w.REQUEST_FAILD,payload:"Your number is not available to use Twilio"})}))}}(p,m,i,x))},children:[Object(q.jsx)(oe,{type:"text",placeholder:"YOUR MOBILE NUMBER*",value:p,onChange:h,required:!0,mask:"+6\\1 999 999 999"}),Object(q.jsx)(oe,{type:"text",placeholder:"RECEIVER'S MOBILE NUMBER*",value:m,onChange:O,required:!0,mask:"+6\\1 999 999 999"}),Object(q.jsx)(oe,{type:"text",placeholder:"YOUR NAME(OPTIONAL)",value:i,onChange:r}),Object(q.jsx)(oe,{type:"text",placeholder:"MESSAGE(OPTIONAL)",value:x,onChange:S}),Object(q.jsx)("div",{className:"btn-wrapper",children:Object(q.jsx)(ae,{fill:!0,type:"submit",loading:_===T,children:"SEND SMS GPS REQUEST"})})]})})})},re=(n(132),n(133),function(e){return Object(q.jsx)("div",{className:"info-outline",onClick:function(){e.onClick&&e.onClick()},children:e.children})});var se=function(e){var t=window.location.search,n=new URLSearchParams(t),a=n.get("id"),i=n.get("lat"),r=n.get("lng"),s=n.get("what3words"),c=Object(u.b)(),l=Object(u.c)((function(e){return H(e)})),d=Object(u.c)((function(e){return V(e)})),p=Object(u.c)((function(e){return z(e)})),h={lat:i,lng:r,what3words:s},b=a?p:i||r?h:d;Object(o.useEffect)((function(){c(R()),h.lat&&c(P(h)),a?e.handleNotification("info","Your position has been sent!"):i||r?e.handleNotification("info","You have shared location"):l===S&&e.handleNotification("info","Your request has been approved!")}),[]),a&&b.lat&&c(function(e,t){return function(n){return f.post("/send_location",{pos:e,id:t}).then((function(e){n({type:w.SEND_LOCATION,payload:x})}))}}(b,a));var j=function(){var t=Object(g.a)(O.a.mark((function t(){var n,o,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("contacts"in navigator&&"ContactsManager"in window){t.next=4;break}return e.handleNotification("error","Sorry. Your device is not supported contacts!"),t.abrupt("return");case 4:return n=["name","email","tel","address","icon"],o={multiple:!0},t.prev=6,t.next=9,navigator.contacts.select(n,o);case 9:a=t.sent,y(a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),e.handleNotification("error","Sorry. Unknown error occured");case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(){return t.apply(this,arguments)}}(),y=function(e){};return Object(q.jsx)(ee,{children:Object(q.jsxs)("div",{className:"display-container",children:[Object(q.jsx)(re,{onClick:function(){var t="latitude: ".concat(b.lat,", longitude: ").concat(b.lng);navigator.clipboard.writeText(t),e.handleNotification&&e.handleNotification("success","GPS position copied!","".concat(t))},children:Object(q.jsxs)("div",{className:"info",children:[Object(q.jsx)("span",{className:"info-title",children:"GPS LOCATION - TAP TO COPY"}),Object(q.jsx)("span",{className:"info-detail",children:b.lng}),Object(q.jsx)("span",{className:"info-detail",children:b.lat})]})}),Object(q.jsx)(re,{onClick:function(){var t="".concat(b.what3words);navigator.clipboard.writeText(t),e.handleNotification&&e.handleNotification("success","What3words copied!","".concat(t))},children:Object(q.jsxs)("div",{className:"info",children:[Object(q.jsx)("span",{className:"info-title",children:"WHAT3WORDS LOCATION - TAP TO COPY"}),Object(q.jsx)("span",{className:"info-detail",children:"///"+b.what3words})]})}),Object(q.jsx)(ae,{type:"button",fill:!0,onClick:function(){var e="".concat(b.lat,",").concat(b.lng),t="https://www.google.com.sa/maps/search/".concat(e,"?hl=en");window.open(t,"_blank")},children:"open in google maps"}),Object(q.jsx)(ae,{type:"button",fill:!0,onClick:function(){var e="https://what3words.com/".concat(b.what3words);window.open(e,"_blank")},children:"open in what3words"}),Object(q.jsx)(ae,{type:"button",fill:!0,onClick:j,children:"share location"})]})})};n(134);var ce=function(e){return Object(q.jsx)(ee,{children:Object(q.jsxs)("div",{className:"approval-container",children:[Object(q.jsx)("p",{children:"GPS location pending approval.."}),Object(q.jsx)("img",{src:"/assets/images/logo.svg",alt:"Pending..."}),Object(q.jsx)("p",{children:"THIS SCREEN WILL AUTOMATICALLY UPDATE WHEN YOUR SMS REQUEST IS OPENED AND ACCEPTED"})]})})},le=(n(135),function(e){return Object(u.b)()(R()),Object(q.jsx)(ee,{children:Object(q.jsxs)("div",{className:"wrapper",children:[Object(q.jsx)("div",{className:"title-wrapper",children:Object(q.jsxs)("p",{className:"description",children:["SAFE LOCATE",Object(q.jsx)("br",{}),"NO APP 2 TAP GPS SMS LOCATOR"]})}),Object(q.jsxs)("div",{className:"btn-group",children:[Object(q.jsx)(r.b,{to:"/request",children:Object(q.jsx)(ae,{fill:!0,children:"REQUEST SMS LOCATION"})}),Object(q.jsx)(r.b,{to:"/send_my_location",children:Object(q.jsx)(ae,{fill:!0,children:"SMS MY GPS LOCATION"})}),Object(q.jsx)(r.b,{to:"/about",children:Object(q.jsx)(ae,{fill:!1,children:"ABOUT SAFE LOCATE"})}),Object(q.jsx)(r.b,{to:"/donate",children:Object(q.jsx)(ae,{fill:!1,children:"DONATE"})}),Object(q.jsx)(r.b,{to:"/contact-us",children:Object(q.jsx)(ae,{fill:!1,children:"CONTACT"})})]})]})})});n(136);var ue=function(e){var t=Object(u.b)(),n=Object(o.useState)(""),a=Object(l.a)(n,2),i=a[0],r=a[1],s=Object(o.useState)(""),d=Object(l.a)(s,2),p=d[0],h=d[1],b=Object(o.useState)(""),j=Object(l.a)(b,2),y=j[0],m=j[1],O=Object(c.f)(),g=Object(u.c)((function(e){return H(e)})),v=Object(u.c)((function(e){return J(e)})),x=Object(u.c)((function(e){return z(e)}));return Object(o.useEffect)((function(){t(R())}),[]),g===N?(e.handleNotification("success","Your location infomation has been sent successfully."),O.push("/"),t(I())):g===E&&(e.handleNotification("error",v),t(I())),Object(q.jsx)(ee,{children:Object(q.jsx)("div",{className:"my-container",children:Object(q.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(function(e,t,n,o){return function(a){return a({type:w.SEND_REQUEST,payload:T}),f.post("/send_share_request",{from:e,to:t,name:n,pos:o}).then((function(e){console.log("result: ",e),e.data.success?a({type:w.SEND_REQUEST,payload:N}):a({type:w.REQUEST_FAILD,payload:"Your number is not available to use Twilio"})}))}}(p,y,i,x))},children:[Object(q.jsx)(oe,{type:"text",placeholder:"YOUR MOBILE NUMBER*",mask:"+6\\1 999 999 999",value:p,onChange:h,required:!0}),Object(q.jsx)(oe,{type:"text",placeholder:"RECEIVER'S MOBILE NUMBER*",value:y,onChange:m,required:!0,mask:"+6\\1 999 999 999"}),Object(q.jsx)(oe,{type:"text",placeholder:"YOUR NAME(OPTIONAL)",value:i,onChange:r}),Object(q.jsx)(re,{children:Object(q.jsxs)("div",{className:"info",children:[Object(q.jsx)("span",{className:"info-title",children:"GPS LOCATION"}),Object(q.jsxs)("span",{className:"info-detail",children:["latitude: ",x.lng]}),Object(q.jsxs)("span",{className:"info-detail",children:["longitude: ",x.lat]})]})}),Object(q.jsx)(re,{children:Object(q.jsxs)("div",{className:"info",children:[Object(q.jsx)("span",{className:"info-title",children:"WHAT3WORDS"}),Object(q.jsx)("span",{className:"info-detail",children:"///"+x.what3words})]})}),Object(q.jsx)("div",{className:"btn-wrapper",children:Object(q.jsx)(ae,{fill:!0,type:"submit",loading:g===T,children:"SEND SMS GPS"})})]})})})};n(137);var de=function(e){var t=Object(u.b)(),n=Object(o.useState)(""),a=Object(l.a)(n,2),i=a[0],r=a[1],s=Object(o.useState)(""),d=Object(l.a)(s,2),p=d[0],h=d[1],b=Object(o.useState)(""),j=Object(l.a)(b,2),y=j[0],m=j[1],O=Object(o.useState)(""),g=Object(l.a)(O,2),v=g[0],x=g[1],T=Object(c.f)(),N=Object(u.c)((function(e){return function(e){return e.sms.contact_us_state}(e)}));return Object(o.useEffect)((function(){t(U())}),[]),N===_?(e.handleNotification("success","Your message has been sent successfully"),T.push("/"),t(U())):N===k&&(e.handleNotification("error","Sorry. Unknown error has been occurd"),t(U())),Object(q.jsx)(ee,{children:Object(q.jsxs)("div",{className:"contactus-container",children:[Object(q.jsx)("div",{className:"title-wrapper",children:Object(q.jsx)("p",{className:"description",children:"Say Hello to our team"})}),Object(q.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(function(e,t,n,o){return function(a){return a({type:w.SEND_CONTACT_US,payload:A}),f.post("/send_contact_us",{name:e,email:t,phonenumber:n,msg:o}).then((function(e){console.log("result: ",e),e.data.success?a({type:w.SEND_CONTACT_US,payload:_}):a({type:w.SEND_CONTACT_US,payload:k})}))}}(p,i,y,v))},children:[Object(q.jsx)(oe,{type:"text",placeholder:"YOUR NAME*",value:p,onChange:h,required:!0}),Object(q.jsx)(oe,{type:"email",placeholder:"YOUR EMAIL ADDRESS*",value:i,onChange:r,required:!0}),Object(q.jsx)(oe,{type:"text",placeholder:"YOUR NUMBER(OPTIONAL)",value:y,onChange:m}),Object(q.jsx)(oe,{type:"text",placeholder:"MESSAGE(OPTIONAL)",value:v,onChange:x}),Object(q.jsx)("div",{className:"btn-wrapper",children:Object(q.jsx)(ae,{fill:!0,type:"submit",loading:N===A,children:"SEND MESSAGE"})})]})]})})},pe=(n(138),n(28));var he=function(e){return Object(q.jsx)(ee,{children:Object(q.jsxs)("div",{className:"privacy-container",children:[Object(q.jsx)("h3",{className:"title",children:"Privacy Policy"}),Object(q.jsxs)(pe.Scrollbars,{style:{height:438},children:[Object(q.jsxs)("p",{children:["Your privacy is important to us. It is SAFE LOCATE's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, ",Object(q.jsx)(r.b,{to:"/",children:"https://safelocate.io"}),", and other sites we own and operate."]}),Object(q.jsx)("p",{children:"This policy is effective as of 1 August 2021 and was last updated on 1 August 2021."}),Object(q.jsx)("h4",{children:"Information We Collect"}),Object(q.jsx)("p",{children:"Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services."}),Object(q.jsx)("h4",{children:"Log Data"}),Object(q.jsx)("article",{children:"When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device\u2019s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter. Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons."}),Object(q.jsx)("h4",{children:"Personal Information"}),"We may ask for personal information which may include one or more of the following:",Object(q.jsx)("title",{children:"Name"}),Object(q.jsx)("title",{children:"Phone/mobile number"}),Object(q.jsx)("p",{children:"Legitimate Reasons for Processing Your Personal Information"}),"We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.",Object(q.jsx)("h4",{children:" Collection and Use of Information"}),Object(q.jsx)("article",{children:"We may collect personal information from you when you do any of the following on our website: Use a mobile device or web browser to access our content Contact us via email, social media, or on any similar technologies When you mention us on social media We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes: We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes: to enable you to customise or personalise your experience of our website to contact and communicate with you for analytics, market research, and business development, including to operate and improve our website, associated applications, and associated social media platforms for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources."}),Object(q.jsx)("h4",{children:"Security of Your Personal Information"}),"When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification. Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach. You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services. How Long We Keep Your Personal Information We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you. However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.",Object(q.jsx)("h4",{children:"Children\u2019s Privacy"}),"We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13. Disclosure of Personal Information to Third Parties We may disclose personal information to:",Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:" a parent, subsidiary, or affiliate of our company"}),Object(q.jsx)("li",{children:" third party service providers for the purpose of enabling them to provide their services, for example, IT service providers, data storage, hosting and server providers, advertisers, or analytics platforms"}),Object(q.jsx)("li",{children:" our employees, contractors, and/or related entities"}),Object(q.jsx)("li",{children:"our existing or potential agents or business partners"}),Object(q.jsx)("li",{children:"sponsors or promoters of any competition, sweepstakes, or promotion we run"}),Object(q.jsx)("li",{children:"courts, tribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise, or defend our legal rights third parties, including agents or sub-contractors, who assist us in providing information, products, services, or direct marketing to you third parties to collect and process data"})]}),Object(q.jsxs)("article",{children:[Object(q.jsx)("h4",{children:"International Transfers of Personal Information"}),"The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries:",Object(q.jsxs)("ul",{style:{listStyle:"outside"},children:[Object(q.jsx)("li",{children:" we will perform those transfers in accordance with the requirements of applicable law; and "}),Object(q.jsx)("li",{children:" we will protect the transferred personal information in accordance with this privacy policy."})]}),"Your Rights and Controlling Your Personal Information You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you.",Object(q.jsxs)("ul",{children:[Object(q.jsx)("li",{children:"If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person\u2019s consent to provide the personal information to us."}),Object(q.jsx)("li",{children:" If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity."}),Object(q.jsx)("li",{children:"If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date."}),Object(q.jsx)("li",{children:"If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint."})]})]}),Object(q.jsx)("h4",{children:"Use of Cookies"}),"We use \u201ccookies\u201d to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.",Object(q.jsx)("h4",{children:"Limits of Our Policy"}),"Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.",Object(q.jsx)("h4",{children:"Changes to This Policy"}),"At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy. If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.",Object(q.jsx)("h4",{children:"Contact Us"}),"For any questions or concerns regarding your privacy, you may contact us using the following details:",Object(q.jsxs)("p",{children:["Hugh Campbell",Object(q.jsx)("br",{}),Object(q.jsx)("strong",{children:"Hello@safelocate.io"})]})]})]})})};n(154);var fe=function(e){return Object(q.jsx)(ee,{children:Object(q.jsx)("div",{className:"privacy-container",children:Object(q.jsxs)(pe.Scrollbars,{style:{height:400},children:[Object(q.jsx)("h3",{className:"title",children:"About"}),Object(q.jsxs)("p",{children:[Object(q.jsx)("strong",{children:"SAFE LOCATE"})," is a simple NO APP & 2 TAP way of requesting or sharing a location via SMS. A request link is sent to a user's phone via SMS, the receiver simply taps the link and taps ALLOW GPS on their phone and their location is sent back to the requesting person or party."]}),Object(q.jsxs)("p",{children:[Object(q.jsx)("strong",{children:"SAFE LOCATE"})," was a result of being first on the scene at an accident 2 weeks ago and the man died in my arms. One of the biggest issues was that the emergency services arrived 5-10 minutes late after driving past the location TWICE!"]}),Object(q.jsx)("p",{children:"Initially, SL has been launched for FREE private use when trying to locate a loved on when they have been involved in an incident, when lost or to provide peace of mind. We will then be launching our commercial offering which open up live location requests for emergency services, client and employee tracking for businesses such as insurance, roadside assist, delivery services etc."}),Object(q.jsxs)("p",{children:[Object(q.jsx)("strong",{children:"HUGH CAMPBELL"}),Object(q.jsx)("br",{})," FOUNDER"]})]})})})};n(155);var be=[{path:"/",component:le,exact:!0},{path:"/request",component:ie},{path:"/pending",component:ce},{path:"/send_my_location",component:ue},{path:"/display",component:se},{path:"/contact-us",component:de},{path:"/privacy",component:he},{path:"/about",component:fe},{path:"/donate",component:function(e){return Object(q.jsx)(ee,{children:Object(q.jsxs)("div",{className:"privacy-container",children:[Object(q.jsx)("h3",{className:"title",children:"Donate"}),Object(q.jsx)("p",{children:"Sorry. This is not developed yet"})]})})}},{path:"/"}],je=(n(156),n(24)),ye=(n(160),function(e){var t=be,n=y(),a=Object(c.f)(),i=Object(u.b)();Object(o.useEffect)((function(){return document.title="Safe Locate",n.onmessage=function(e){var t=JSON.parse(e.data);switch(console.log("Received message from server: ",t),t.type){case"UPDATE_POS":i(P(t)),a.push("/display");break;case"SET_SOCKETID":t.id&&(n.id=t.id)}},function(){n.close()}}),[]);var r=Object(c.g)(),l=Object(q.jsx)(K,{children:Object(q.jsx)(c.c,{location:r,children:t.map((function(n,o){return Object(q.jsx)(c.a,{path:n.path,component:function(){return Object(q.jsx)(n.component,Object(s.a)(Object(s.a)({},e),{},{handleNotification:d,routes:t}))},exact:n.exact},o)}))})}),d=function(e,t,n){var o=3e3;switch(e){case"info":je.NotificationManager.info(n,t,o);break;case"success":je.NotificationManager.success(n,t,o);break;case"warning":je.NotificationManager.warning(n,t,o);break;case"error":je.NotificationManager.error(n,t,o)}};return Object(q.jsxs)(q.Fragment,{children:[l,Object(q.jsx)(je.NotificationContainer,{})]})}),me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,244)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),i(e),r(e)}))},Oe=n(23),ge=n(87),ve=n(243);function we(){return Object(Oe.b)({form:ve.a,sms:B})}var xe=function(e){return e},Te=function(){return xe};var Ne=n(90),Se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=Object(Oe.d)(we(),t,Object(Oe.c)(Object(Oe.a)(ge.a),Te()));return n}(null,window.REDUX_DATA||void 0);i.a.render(Object(q.jsx)(u.a,{store:Se,children:Object(q.jsx)(r.a,{children:Object(q.jsx)(Ne.ToastProvider,{children:Object(q.jsx)(ye,{})})})}),document.getElementById("root")),me()},97:function(e,t,n){},98:function(e,t,n){}},[[241,1,2]]]);
//# sourceMappingURL=main.e2aef64b.chunk.js.map