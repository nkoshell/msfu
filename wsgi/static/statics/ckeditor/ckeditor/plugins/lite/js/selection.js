﻿(function(){var f;f=function(e){this._selection=null;this.env=e;this._initializeRangeLibrary();this._getSelection()};f.prototype={_getSelection:function(){this._selection?this._selection.refresh():this._selection=this.env.frame?rangy.getIframeSelection(this.env.frame):rangy.getSelection();return this._selection},createRange:function(){return rangy.createRange(this.env.document)},getRangeAt:function(e){this._selection.refresh();try{return this._selection.getRangeAt(e)}catch(f){return this._selection=
null,this._getSelection().getRangeAt(0)}},addRange:function(e){this._selection||(this._selection=this._getSelection());this._selection.setSingleRange(e);this._selection.ranges=[e]},_initializeRangeLibrary:function(){var e=this;rangy.init();rangy.config.checkSelectionRanges=!1;var f=function(a,c,b,d){if(0===b)throw Error("InvalidArgumentException: units cannot be 0");switch(c){case ice.dom.CHARACTER_UNIT:0<b?a.moveCharRight(d,b):a.moveCharLeft(d,-1*b)}};rangy.rangePrototype.moveStart=function(a,c){f(this,
a,c,!0)};rangy.rangePrototype.moveEnd=function(a,c){f(this,a,c,!1)};rangy.rangePrototype.setRange=function(a,c,b){a?this.setStart(c,b):this.setEnd(c,b)};rangy.rangePrototype.moveCharLeft=function(a,c){var b,d;a?(b=this.startContainer,d=this.startOffset):(b=this.endContainer,d=this.endOffset);if(b.nodeType===ice.dom.ELEMENT_NODE)if(b.hasChildNodes()){b=b.childNodes[d];for(b=this.getPreviousTextNode(b);b&&b.nodeType==ice.dom.TEXT_NODE&&""===b.nodeValue;)b=this.getPreviousTextNode(b);d=b.data.length-
c}else d=-1*c;else d-=c;if(0>d)for(;0>d;){b=this.getPreviousTextNode(b,[]);if(!b)return;b.nodeType!==ice.dom.ELEMENT_NODE&&(d+=b.data.length)}this.setRange(a,b,d)};rangy.rangePrototype.moveCharRight=function(a,c){var b,d;a?(b=this.startContainer,d=this.startOffset):(b=this.endContainer,d=this.endOffset);b.nodeType===ice.dom.ELEMENT_NODE?(b=b.childNodes[d],b.nodeType!==ice.dom.TEXT_NODE&&(b=this.getNextTextNode(b)),d=c):d+=c;var e=d-b.data.length;if(0<e){for(d=[];0<e;){b=this.getNextContainer(b,d);
if(!b)return;if(b.nodeType!==ice.dom.ELEMENT_NODE)if(b.data.length>=e)break;else 0<b.data.length&&(e-=b.data.length)}d=e}this.setRange(a,b,d)};rangy.rangePrototype.getNextContainer=function(a,c){if(!a)return null;for(;a.nextSibling;)if(a=a.nextSibling,a.nodeType!==ice.dom.TEXT_NODE){var b=this.getFirstSelectableChild(a);if(null!==b)return b}else if(!0===this.isSelectable(a))return a;for(;a&&!a.nextSibling;)a=a.parentNode;if(!a)return null;a=a.nextSibling;if(!0===this.isSelectable(a))return a;c&&!0===
ice.dom.isBlockElement(a)&&c.push(a);b=this.getFirstSelectableChild(a);return null!==b?b:this.getNextContainer(a,c)};rangy.rangePrototype.getPreviousContainer=function(a,c){if(!a)return null;for(;a.previousSibling;)if(a=a.previousSibling,a.nodeType!==ice.dom.TEXT_NODE){if(!0===ice.dom.isStubElement(a))return a;var b=this.getLastSelectableChild(a);if(null!==b)return b}else if(!0===this.isSelectable(a))return a;for(;a&&!a.previousSibling;)a=a.parentNode;if(!a)return null;a=a.previousSibling;if(!0===
this.isSelectable(a))return a;c&&!0===ice.dom.isBlockElement(a)&&c.push(a);b=this.getLastSelectableChild(a);return null!==b?b:this.getPreviousContainer(a,c)};rangy.rangePrototype.getNextTextNode=function(a){if(a.nodeType===ice.dom.ELEMENT_NODE&&0!==a.childNodes.length)return this.getFirstSelectableChild(a);a=this.getNextContainer(a);return a.nodeType===ice.dom.TEXT_NODE?a:this.getNextTextNode(a)};rangy.rangePrototype.getPreviousTextNode=function(a,c){a=this.getPreviousContainer(a,c);return a.nodeType===
ice.dom.TEXT_NODE?a:this.getPreviousTextNode(a,c)};rangy.rangePrototype.getFirstSelectableChild=function(a){if(a)if(a.nodeType!==ice.dom.TEXT_NODE)for(a=a.firstChild;a;){if(!0===this.isSelectable(a))return a;if(a.firstChild){var c=this.getFirstSelectableChild(a);if(null!==c)return c}a=a.nextSibling}else return a;return null};rangy.rangePrototype.getLastSelectableChild=function(a){if(a)if(a.nodeType!==ice.dom.TEXT_NODE)for(a=a.lastChild;a;){if(!0===this.isSelectable(a))return a;if(a.lastChild){var c=
this.getLastSelectableChild(a);if(null!==c)return c}a=a.previousSibling}else return a;return null};rangy.rangePrototype.isSelectable=function(a){return a&&a.nodeType===ice.dom.TEXT_NODE&&0!==a.data.length?!0:!1};rangy.rangePrototype.getHTMLContents=function(a){a||(a=this.cloneContents());var c=e.env.document.createElement("div");c.appendChild(a.cloneNode(!0));return c.innerHTML};rangy.rangePrototype.getHTMLContentsObj=function(){return this.cloneContents()}}};this.Selection=f}).call(this.ice);