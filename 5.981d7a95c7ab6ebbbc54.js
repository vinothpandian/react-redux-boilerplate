(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{279:function(e,t,n){e.exports=n.p+"832a5b05145e97faefbda1a95244cfd7.png"},459:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(2),o=n.n(i),c=n(215),l=n(153),u=n(18),s=n.n(u),m=n(185),p=n(359),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={text:""},n.handleChange=n.handleChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),f(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({text:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.changeName(this.state.text)}},{key:"render",value:function(){return r.a.createElement(p.b,{item:!0,xs:!0},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(p.b,{spacing:16,container:!0,alignItems:"center",justify:"center"},r.a.createElement(p.b,{item:!0,xs:!0},r.a.createElement(p.c,{autoFocus:!0,id:"with-placeholder",label:"Your name",placeholder:"Your name",value:this.state.text,onChange:this.handleChange,fullWidth:!0})),r.a.createElement(p.b,{item:!0,xs:!0},r.a.createElement(p.a,{onClick:this.handleSubmit,variant:"raised",color:"primary"},"Change")),r.a.createElement(p.b,{item:!0,xs:!0},r.a.createElement(p.a,{onClick:this.props.randomName,variant:"raised",color:"secondary"},"Random")))))}}]),t}();h.propTypes={changeName:o.a.func.isRequired,randomName:o.a.func.isRequired};var d=h,b=n(131),g=n.n(b),y=n(146),E=n.n(y),v=n(145),w=n.n(v),N=n(180),x=n.n(N),C=n(279),j=function(e){var t=e.name;return r.a.createElement(s.a,{item:!0,xs:!0,md:8,lg:6},r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(x.a,{src:C,component:"img",title:"Welcome"}),r.a.createElement(w.a,{title:"Welcome "+t+"..."}))))};j.propTypes={name:o.a.string.isRequired};var O=j,k=function(e){return r.a.createElement("div",{style:{padding:"1rem"}},r.a.createElement(s.a,{container:!0,spacing:24,direction:"column",alignItems:"center",justify:"center"},r.a.createElement(O,{name:e.name}),r.a.createElement(d,{changeName:e.switchName,randomName:e.getNameAsync})))};k.propTypes={name:o.a.string.isRequired,switchName:o.a.func.isRequired,getNameAsync:o.a.func.isRequired},t.default=Object(c.b)(function(e){return{name:e.message.name}},function(e){return Object(l.bindActionCreators)({switchName:m.d,getNameAsync:m.c},e)})(k)}}]);