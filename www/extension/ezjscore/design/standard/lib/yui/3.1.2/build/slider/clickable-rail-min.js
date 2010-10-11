/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.1.2
build: 56
*/
YUI.add("clickable-rail",function(B){function A(){this._initClickableRail();}B.ClickableRail=B.mix(A,{prototype:{_initClickableRail:function(){this._evtGuid=this._evtGuid||(B.guid()+"|");this.publish("railMouseDown",{defaultFn:this._defRailMouseDownFn});this.after("render",this._bindClickableRail);this.on("destroy",this._unbindClickableRail);},_bindClickableRail:function(){this._dd.addHandle(this.rail);this.rail.on(this._evtGuid+"mousedown",this._onRailMouseDown,this);},_unbindClickableRail:function(){if(this.get("rendered")){var C=this.get("contentBox"),D=C.one("."+this.getClassName("rail"));D.detach(this.evtGuid+"*");}},_onRailMouseDown:function(C){if(this.get("clickableRail")&&!this.get("disabled")){this.fire("railMouseDown",{ev:C});}},_defRailMouseDownFn:function(I){I=I.ev;var C=this._resolveThumb(I),F=this._key.xyIndex,G=parseFloat(this.get("length"),10),E,D,H;if(C){E=C.get("dragNode");D=parseFloat(E.getStyle(this._key.dim),10);H=this._getThumbDestination(I,E);H=H[F]-this.rail.getXY()[F];H=Math.min(Math.max(H,0),(G-D));this._uiMoveThumb(H);C._handleMouseDownEvent(I);}},_resolveThumb:function(D){var E=this._dd.get("primaryButtonOnly"),C=!E||D.button<=1;return(C)?this._dd:null;},_getThumbDestination:function(F,E){var D=E.get("offsetWidth"),C=E.get("offsetHeight");return[(F.pageX-Math.round((D/2))),(F.pageY-Math.round((C/2)))];}},ATTRS:{clickableRail:{value:true,validator:B.Lang.isBoolean}}},true);},"3.1.2",{requires:["slider-base"]});
