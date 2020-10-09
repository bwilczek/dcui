(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(t,e,n){t.exports=n(54)},29:function(t,e,n){},31:function(t,e,n){},54:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(23),i=n.n(c),o=(n(29),n(10)),s=n.n(o),l=n(3),u=n(12),p=n(4),m=n(5),h=n(6),v=n(7),d=(n(31),n(32),function(t){Object(v.a)(n,t);var e=Object(h.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"loading"},"Loading...")}}]),n}(r.a.Component)),f=n(13),E=n.n(f),b=function(t){Object(v.a)(n,t);var e=Object(h.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("tr",{"data-service":this.props.data.service},r.a.createElement("td",null,this.props.data.service),r.a.createElement("td",null,this.props.data.image),r.a.createElement("td",null,this.props.data.container_name),r.a.createElement("td",null,this.props.data.status),r.a.createElement("td",null,r.a.createElement(E.a,{name:"play",title:"Start",onClick:this.props.containerAction.bind(this,"start",this.props.data.service)}),r.a.createElement(E.a,{name:"stop",title:"Stop",onClick:this.props.containerAction.bind(this,"stop",this.props.data.service)})))}}]),n}(r.a.Component),g=n(57),j=n(56),k=function(t){Object(v.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).state={selectedEnvironment:"__all"},a}return Object(m.a)(n,[{key:"render",value:function(){var t=this,e=function(e){return"__all"===t.state.selectedEnvironment||t.props.environments[t.state.selectedEnvironment].includes(e.service)},n=function(e){e.persist(),t.setState((function(t){return Object(l.a)({},t,{selectedEnvironment:e.target.getAttribute("data-environment")})}))},a=[r.a.createElement(g.a,{key:"__all","data-environment":"__all",variant:"light",onClick:function(e){return t.setState((function(t){return Object(l.a)({},t,{selectedEnvironment:"__all"})}))}},"ALL")];for(var c in this.props.environments)a.push(r.a.createElement(g.a,{key:c,"data-environment":c,variant:"light",onClick:n},c));return r.a.createElement("div",null,r.a.createElement(j.a,null,a),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Service"),r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Container"),r.a.createElement("th",null,"Status"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,this.props.services.filter(e).map((function(e){return r.a.createElement(b,{key:e.service,data:e,containerAction:t.props.containerAction})})))),r.a.createElement(j.a,null,r.a.createElement(g.a,{onClick:function(n){console.log("Starting:",t.props.services.filter(e).map((function(t){return t.service})))}},"Start services"),r.a.createElement(g.a,{onClick:function(n){console.log("Stopping:",t.props.services.filter(e).map((function(t){return t.service})))}},"Stop services")))}}]),n}(r.a.Component),O=n(36),y=function(t){Object(v.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(p.a)(this,n),(a=e.call(this,t)).state={loading:!0,status:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.fetchStatus()}},{key:"fetchStatus",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.setState((function(t){return Object(l.a)({},t,{loading:!0})})),t.next=4,O.get("/api/status");case 4:e=t.sent,this.setState((function(t){return Object(l.a)({},t,{loading:!1,status:e.data})})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),this.setState((function(t){return Object(l.a)({},t,{loading:!1})})),console.error(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"containerAction",value:function(){var t=Object(u.a)(s.a.mark((function t(e,n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.setState((function(t){return Object(l.a)({},t,{loading:!0})})),t.next=4,O.post("/api/container/".concat(n,"/").concat(e));case 4:this.fetchStatus(),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),this.setState((function(t){return Object(l.a)({},t,{loading:!1})})),console.error(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("link",{href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet"}),this.state.loading?r.a.createElement(d,null):r.a.createElement(k,{services:this.state.status.services,environments:this.state.status.environments,containerAction:this.containerAction.bind(this)}))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.67e4fd1d.chunk.js.map