/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("widget-anim",function(C){var P="boundingBox",O="host",S="node",L="opacity",R="",K="visible",Q="destroy",N="hidden",B="rendered",M="start",F="end",I="duration",D="animShow",J="animHide",A="_uiSetVisible",G="animShowChange",H="animHideChange";function E(T){E.superclass.constructor.apply(this,arguments);}E.NS="anim";E.NAME="pluginWidgetAnim";E.ANIMATIONS={fadeIn:function(){var V=this.get(O),T=V.get(P),U=new C.Anim({node:T,to:{opacity:1},duration:this.get(I)});if(!V.get(K)){T.setStyle(L,0);}U.on(Q,function(){this.get(S).setStyle(L,(C.UA.ie)?1:R);});return U;},fadeOut:function(){return new C.Anim({node:this.get(O).get(P),to:{opacity:0},duration:this.get(I)});}};E.ATTRS={duration:{value:0.2},animShow:{valueFn:E.ANIMATIONS.fadeIn},animHide:{valueFn:E.ANIMATIONS.fadeOut}};C.extend(E,C.Plugin.Base,{initializer:function(T){this._bindAnimShow();this._bindAnimHide();this.after(G,this._bindAnimShow);this.after(H,this._bindAnimHide);this.beforeHostMethod(A,this._uiAnimSetVisible);},destructor:function(){this.get(D).destroy();this.get(J).destroy();},_uiAnimSetVisible:function(T){if(this.get(O).get(B)){if(T){this.get(J).stop();this.get(D).run();}else{this.get(D).stop();this.get(J).run();}return new C.Do.Prevent();}},_uiSetVisible:function(U){var T=this.get(O),V=T.getClassName(N);T.get(P).toggleClass(V,!U);},_bindAnimShow:function(){this.get(D).on(M,C.bind(function(){this._uiSetVisible(true);},this));},_bindAnimHide:function(){this.get(J).after(F,C.bind(function(){this._uiSetVisible(false);},this));}});C.namespace("Plugin").WidgetAnim=E;},"3.1.2",{requires:["plugin","anim-base"]});
