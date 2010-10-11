/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("base-base",function(B){var I=B.Object,K=B.Lang,J=".",G="destroy",R="init",Q="initialized",H="destroyed",D="initializer",N="bubbleTargets",E="_bubbleTargets",C=Object.prototype.constructor,M="deep",S="shallow",P="destructor",A=B.Attribute;function F(){A.call(this);var L=B.Plugin&&B.Plugin.Host;if(this._initPlugins&&L){L.call(this);}if(this._lazyAddAttrs!==false){this._lazyAddAttrs=true;}this.name=this.constructor.NAME;this._eventPrefix=this.constructor.EVENT_PREFIX||this.constructor.NAME;this.init.apply(this,arguments);}F._ATTR_CFG=A._ATTR_CFG.concat("cloneDefaultValue");F.NAME="base";F.ATTRS={initialized:{readOnly:true,value:false},destroyed:{readOnly:true,value:false}};F.prototype={init:function(L){this._yuievt.config.prefix=this._eventPrefix;this.publish(R,{queuable:false,fireOnce:true,defaultTargetOnly:true,defaultFn:this._defInitFn});this._preInitEventCfg(L);this.fire(R,{cfg:L});return this;},_preInitEventCfg:function(O){if(O){if(O.on){this.on(O.on);}if(O.after){this.after(O.after);}}var T,L,V,U=(O&&N in O);if(U||E in this){V=U?(O&&O.bubbleTargets):this._bubbleTargets;if(K.isArray(V)){for(T=0,L=V.length;T<L;T++){this.addTarget(V[T]);}}else{if(V){this.addTarget(V);}}}},destroy:function(){this.publish(G,{queuable:false,fireOnce:true,defaultTargetOnly:true,defaultFn:this._defDestroyFn});this.fire(G);this.detachAll();return this;},_defInitFn:function(L){this._initHierarchy(L.cfg);if(this._initPlugins){this._initPlugins(L.cfg);}this._set(Q,true);},_defDestroyFn:function(L){this._destroyHierarchy();if(this._destroyPlugins){this._destroyPlugins();}this._set(H,true);},_getClasses:function(){if(!this._classes){this._initHierarchyData();}return this._classes;},_getAttrCfgs:function(){if(!this._attrs){this._initHierarchyData();}return this._attrs;},_filterAttrCfgs:function(V,O){var T=null,L,U=V.ATTRS;if(U){for(L in U){if(U.hasOwnProperty(L)&&O[L]){T=T||{};T[L]=O[L];delete O[L];}}}return T;},_initHierarchyData:function(){var T=this.constructor,O=[],L=[];while(T){O[O.length]=T;if(T.ATTRS){L[L.length]=T.ATTRS;}T=T.superclass?T.superclass.constructor:null;}this._classes=O;this._attrs=this._aggregateAttrs(L);},_aggregateAttrs:function(Y){var V,Z,U,L,a,O,X,T=F._ATTR_CFG,W={};if(Y){for(O=Y.length-1;O>=0;--O){Z=Y[O];for(V in Z){if(Z.hasOwnProperty(V)){U=B.mix({},Z[V],true,T);L=U.value;X=U.cloneDefaultValue;if(L){if((X===undefined&&(C===L.constructor||K.isArray(L)))||X===M||X===true){U.value=B.clone(L);}else{if(X===S){U.value=B.merge(L);}}}a=null;if(V.indexOf(J)!==-1){a=V.split(J);V=a.shift();}if(a&&W[V]&&W[V].value){I.setValue(W[V].value,a,L);}else{if(!a){if(!W[V]){W[V]=U;}else{B.mix(W[V],U,true,T);}}}}}}}return W;},_initHierarchy:function(W){var T=this._lazyAddAttrs,X,Y,Z,U,O,V=this._getClasses(),L=this._getAttrCfgs();for(Z=V.length-1;Z>=0;Z--){X=V[Z];Y=X.prototype;if(X._yuibuild&&X._yuibuild.exts){for(U=0,O=X._yuibuild.exts.length;U<O;U++){X._yuibuild.exts[U].apply(this,arguments);}}this.addAttrs(this._filterAttrCfgs(X,L),W,T);if(Y.hasOwnProperty(D)){Y.initializer.apply(this,arguments);}}},_destroyHierarchy:function(){var V,O,U,L,T=this._getClasses();for(U=0,L=T.length;U<L;U++){V=T[U];O=V.prototype;if(O.hasOwnProperty(P)){O.destructor.apply(this,arguments);}}},toString:function(){return this.constructor.NAME+"["+B.stamp(this)+"]";}};B.mix(F,A,false,null,1);F.prototype.constructor=F;B.Base=F;},"3.1.2",{requires:["attribute-base"]});
