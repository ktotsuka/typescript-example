(this["webpackJsonpproduct-list"]=this["webpackJsonpproduct-list"]||[]).push([[0],{79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var i=n(5),c=n(0),s=n.n(c),a=n(11),o=n.n(a),l=(n(79),n(31)),r=n(19),d=n(20),h=n(16),j=n(28),u=n(27),b=(n(80),n(137)),p=n(116),O=n(140),m=n(119),v=(n(81),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).onItemClicked=i.onItemClicked.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"item-view-card",children:Object(i.jsxs)(p.a,{onClick:this.onItemClicked,children:[Object(i.jsx)(O.a,{title:this.props.name,subheader:this.props.type}),Object(i.jsx)(m.a,{className:"card-media-image",image:this.props.image})]})})}},{key:"onItemClicked",value:function(){this.props.onItemClicked(this.props.id)}}]),n}(s.a.Component)),x=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleItemClicked=i.handleItemClicked.bind(Object(h.a)(i)),i}return Object(d.a)(n,[{key:"handleItemClicked",value:function(e){console.log("handleItemClick : ".concat(e)),this.props.handleItemClicked(e)}},{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return Object(i.jsx)(v,Object(l.a)(Object(l.a)({},t),{},{onItemClicked:e.handleItemClicked}),t.id)}));return Object(i.jsx)(b.a,{display:"flex",flexWrap:"wrap",children:t})}}]),n}(s.a.Component),f=n(120),g=n(139),C=n(121),k=n(122),w=n(123),y=n(62),I=n(125),S=n(126),D=n(127),N=n(128),A=n(129),E=n(130),L=n(131),F=n(134),T=n(132),B=n(124),P=(n(85),s.a.forwardRef((function(e,t){return Object(i.jsx)(f.a,Object(l.a)({direction:"left",ref:t},e))}))),U=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleClose=i.handleClose.bind(Object(h.a)(i)),i.onChange=i.onChange.bind(Object(h.a)(i)),i.onSubmit=i.onSubmit.bind(Object(h.a)(i)),i.state={noSwitches:70},i}return Object(d.a)(n,[{key:"render",value:function(){var e,t,n,c,s,a,o,l,r,d,h,j,u,b;return Object(i.jsx)("div",{className:"full-screen-details-dialogue",children:Object(i.jsxs)(g.a,{fullScreen:!0,open:this.props.open,TransitionComponent:P,children:[Object(i.jsx)(C.a,{children:Object(i.jsx)(k.a,{children:Object(i.jsx)(w.a,{edge:"start",color:"inherit",onClick:this.handleClose,"aria-label":"close",children:Object(i.jsx)(B.a,{})})})}),Object(i.jsx)("div",{className:"details-paper-padding-top",children:Object(i.jsx)(y.a,{className:"details-paper-body",children:Object(i.jsxs)(I.a,{container:!0,spacing:5,children:[Object(i.jsx)(I.a,{item:!0,children:Object(i.jsx)("img",{className:"large-image",src:null===(e=this.props.product)||void 0===e?void 0:e.image})}),Object(i.jsxs)(I.a,{item:!0,xs:!0,container:!0,direction:"column",justify:"flex-start","align-items":"stretch",children:[Object(i.jsx)(I.a,{item:!0,children:Object(i.jsx)("h1",{children:null===(t=this.props.product)||void 0===t?void 0:t.name})}),Object(i.jsx)(I.a,{item:!0,children:Object(i.jsx)("h2",{children:null===(n=this.props.product)||void 0===n?void 0:n.type})}),Object(i.jsx)(I.a,{item:!0,children:Object(i.jsx)("p",{children:null===(c=this.props.product)||void 0===c?void 0:c.longDescription})}),Object(i.jsx)(I.a,{item:!0,children:Object(i.jsx)(S.a,{component:y.a,children:Object(i.jsxs)(D.a,{"aria-label":"simple table",children:[Object(i.jsx)(N.a,{children:Object(i.jsxs)(A.a,{children:[Object(i.jsx)(E.a,{children:"Specifiations"}),Object(i.jsx)(E.a,{align:"right",children:"\xa0"})]})}),Object(i.jsxs)(L.a,{children:[Object(i.jsxs)(A.a,{children:[Object(i.jsx)(E.a,{children:"Actuation Force"}),Object(i.jsxs)(E.a,{children:[null===(s=this.props.product)||void 0===s||null===(a=s.specs)||void 0===a?void 0:a.actuationForce," g"]})]}),Object(i.jsxs)(A.a,{children:[Object(i.jsx)(E.a,{children:"Actuation Point"}),Object(i.jsxs)(E.a,{children:[null===(o=this.props.product)||void 0===o||null===(l=o.specs)||void 0===l?void 0:l.actuationPoint," mm"]})]}),Object(i.jsxs)(A.a,{children:[Object(i.jsx)(E.a,{children:"Bottom Out"}),Object(i.jsxs)(E.a,{children:[null===(r=this.props.product)||void 0===r||null===(d=r.specs)||void 0===d?void 0:d.bottomOut," g"]})]}),Object(i.jsxs)(A.a,{children:[Object(i.jsx)(E.a,{children:"Bottom Out Travel"}),Object(i.jsxs)(E.a,{children:[null===(h=this.props.product)||void 0===h||null===(j=h.specs)||void 0===j?void 0:j.bottomOutTravel," mm"]})]}),Object(i.jsxs)(A.a,{children:[Object(i.jsx)(E.a,{children:"Price"}),Object(i.jsxs)(E.a,{children:["$ ",null===(u=this.props.product)||void 0===u||null===(b=u.specs)||void 0===b?void 0:b.price]})]})]})]})})}),Object(i.jsx)(I.a,{item:!0,children:"\xa0"}),Object(i.jsx)(I.a,{item:!0,children:Object(i.jsx)("h3",{children:"Order Now :"})}),Object(i.jsxs)("form",{noValidate:!0,autoComplete:"off",onSubmit:this.onSubmit,children:[Object(i.jsx)(I.a,{item:!0,children:Object(i.jsx)(F.a,{type:"number",name:"noSwitches",id:"standard-basic",label:"No of switches",onChange:this.onChange,value:this.state.noSwitches})}),Object(i.jsx)(I.a,{item:!0,children:"\xa0"}),Object(i.jsx)(I.a,{item:!0,children:Object(i.jsx)(T.a,{type:"submit",variant:"contained",color:"primary",children:"Add to Cart"})})]})]})]})})})]})})}},{key:"handleClose",value:function(){console.log("Details: handleClose()"),this.props.handleClose()}},{key:"onChange",value:function(e){this.setState({noSwitches:parseInt(e.target.value)}),console.log("onChange : ".concat(e.target.name," : ").concat(e.target.value))}},{key:"onSubmit",value:function(e){var t;(console.log("submit ; ".concat(this.state.noSwitches)),e.preventDefault(),this.props.product)&&W.broadcast("add-user-cart-item",{username:this.props.username,productId:null===(t=this.props.product)||void 0===t?void 0:t.id,amount:this.state.noSwitches})}}]),n}(s.a.Component),V=function(){function e(){Object(r.a)(this,e),this.items=[]}return Object(d.a)(e,[{key:"handleItemClicked",value:function(e){}}]),e}(),J=n(136),M=n(133),R=n(61),W=window.microEventBus,$=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).showDetailView=i.showDetailView.bind(Object(h.a)(i)),i.handleClose=i.handleClose.bind(Object(h.a)(i)),i.state={showDetails:!1,product:null,collectionInstance:new V,username:""},i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.processUserLoginEvent=this.processUserLoginEvent.bind(this),W.on("user-logged-in").subscribe(this.processUserLoginEvent),J.a.getJSON("http://127.0.0.1:3000/products").subscribe((function(t){var n=new V;n.items=t,e.setState({showDetails:!1,product:null,collectionInstance:n})}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[this.state.collectionInstance.items.length<1?Object(i.jsx)("div",{className:"App-header",children:Object(i.jsx)(M.a,{})}):"",Object(i.jsx)(x,Object(l.a)(Object(l.a)({},this.state.collectionInstance),{},{handleItemClicked:this.showDetailView})),Object(i.jsx)(U,{open:this.state.showDetails,product:this.state.product,handleClose:this.handleClose,username:this.state.username})]})}},{key:"showDetailView",value:function(e){console.log("App.handleClick() called");var t=R.a(this.state.collectionInstance.items,(function(t){return t.id===e}));t&&this.setState({showDetails:!0,product:t,username:this.state.username})}},{key:"handleClose",value:function(){console.log("App : handleClose()"),this.setState({showDetails:!1,product:null})}},{key:"processUserLoginEvent",value:function(e){console.log("RCT : App.processUserLoginEvent : ".concat(e)),e&&this.setState({username:e})}}]),n}(s.a.Component),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)($,{})}),document.getElementById("root")),q()}},[[86,1,2]]]);
//# sourceMappingURL=main.f4a103d4.chunk.js.map