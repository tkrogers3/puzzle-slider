(this["webpackJsonppuzzle-slider"]=this["webpackJsonppuzzle-slider"]||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},21:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(14),l=n.n(i),o=(n(21),n(12)),s=n.n(o),c=n(15),u=n(6),p=n(7),h=n(8),m=n(9),d=n(10),f=n(29),b=n(28),v=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={position:-1},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.setState({position:this.props.tileObj.currentPos})}},{key:"handleClick",value:function(e){e.preventDefault(),this.props.tileSwap(this.state.position)}},{key:"render",value:function(){return r.a.createElement(b.a,{xs:"3",className:"border makeBigger tile",key:this.props.i,id:this.props.item,onClick:this.handleClick},this.props.tileObj.currentPos)}}]),n}(r.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={tiles:[]},a.tileSwap=a.tileSwap.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"tileSwap",value:function(e){var t=parseInt(e/4),n=e%4,a=this.state.tiles.findIndex((function(e){return 15===e.currentPos})),r=parseInt(a/4),i=a%4;console.log(a);var l=!1;if((t===r&&1===Math.abs(i-n)||i===n&&1===Math.abs(r-t))&&(l=!0),console.log(l),l){var o=this.state.tiles;o[a].type="regular",o[e].type="blank";var s=o[a].currentPos;o[a].currentPos=o[e].currentPos,o[e].currentPos=s,console.log(o),this.setState({tiles:o})}}},{key:"buildBoard",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t,n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],16,n=0;n<16;n++)a={id:n,currentPos:n,winPos:n,type:"regular",text:n},t.push(a);return"regular"===t[t.length-1].type&&(t[t.length-1].type="blank",t[t.length-1].text=""),e.next=6,this.setState({tiles:t});case 6:console.log(this.state.tiles);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.buildBoard()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(b.a,{xs:{offset:1,size:10},className:" title p-4 "},"Puzzle Slider")),r.a.createElement(f.a,{className:"m-2"},this.state.tiles.map((function(t,n){return r.a.createElement(v,{key:n,tileSwap:e.tileSwap,i:n,tileObj:t})}))))}}]),n}(a.Component),g=(n(25),n(26),n(30)),y=n(31),j=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{size:"lg",id:"button",className:"button"},"Shuffle"))}}]),n}(a.Component);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,null,r.a.createElement(k,null)),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0dc867c4.chunk.js.map