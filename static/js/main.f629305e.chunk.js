(this.webpackJsonpcontext=this.webpackJsonpcontext||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),o=n.n(r),i=(n(13),n(1)),l=n(2),s=n(4),h=n(3),m=n(5),u=(n(14),{theme:"light",title:"Light Mode",background:"white",color:"gray"}),b=Object(a.createContext)(u),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=this.context;return c.a.createElement("div",null,c.a.createElement("button",Object.assign({className:"buttonTheme"},e),c.a.createElement("img",{alt:"",src:"dark"===t.theme?"moon.png":"sunny.png"})))}}]),t}(a.Component);g.contextType=b;var d=g,p={theme:"dark",title:"Dark Mode",background:"#333333",color:"white"},f=function(e){return c.a.createElement(d,{onClick:e.changeTheme},"Change Theme")},j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(h.a)(t).call(this,e))).toggleTheme=function(){n.state.theme===u?n.setState({theme:p}):n.setState({theme:u})},n.state={theme:u},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(b.Provider,{value:this.state.theme},c.a.createElement("div",{style:{backgroundColor:this.state.theme.background}},c.a.createElement("h1",{className:"container",style:{color:this.state.theme.color}},this.state.theme.title),c.a.createElement(f,{changeTheme:this.toggleTheme}))),c.a.createElement("p",{className:"subtitle"},"Tap icon to magic"))}}]),t}(c.a.Component);o.a.render(c.a.createElement(j,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f629305e.chunk.js.map