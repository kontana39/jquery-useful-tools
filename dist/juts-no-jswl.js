!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=3)}([function(e,t){e.exports=$},function(e,t){e.exports=jswl},function(e,t){e.exports=jquery-ui},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(1),o=a.n(i);r.a.fn.incDataAttrCounter=function(e){var t=r()(this);if(t.isDataAttrEmpty(e))t.data(e,1..toString());else{var a=t.data(e);t.data(e,(Number(a)+1).toString())}},r.a.fn.nthParent=function(e){for(var t=r()(this);e-- >=0;)t=t.parent();return t},r.a.fn.cloneWithDataAttrs=function(){return r()(this).clone().off().unbindAllForChildren()},r.a.fn.getDataAttrCounter=function(e){var t=r()(this);if(t.isDataAttrEmpty(e))throw new Error("Counter is with name ",e,"undefined for : ",t," // use $.incDataAttrCounter() at least onse ");return t.data(e)},r.a.fn.isDataAttrEmpty=function(e){var t=r()(this).data(e);return o.a.isEmpty(t)},r.a.fn.isAttrEmpty=function(e){var t=r()(this).attr(e);return void 0===t||!1===t},r.a.fn.unbindAllForChildren=function(){var e=r()(this);return e.find("*").unbind(),e},r.a.fn.removeSmoothly=function(e){var t=r.a.extend({afterRemoveFinishedCallback:function(){},afterRemoveFinishedParams:{}},e);this.stop().animate({height:"0px",width:"0px",opacity:0},600,function(){r()(this).remove(),t.afterRemoveFinishedCallback(t.afterRemoveFinishedParams)})},r.a.fn.scrollMeTo=function(e){r()(this).animate({scrollTop:e.offset().top},600)},r.a.fn.removeSelect2Span=function(){var e=r()(this);return e.next("span.select2-container").remove(),e},r.a.fn.select2GetSpan=function(){return r()(this).next("span.select2-container")},r.a.fn.select2SetError=function(e){var t=r()(this),a=r.a.extend({"border-color":"red","border-style":"solid"},e);t.select2GetSpan().css(a)},r.a.fn.formFirstInput=function(e){var t=r()(this);o.a.isEmpty(e)&&(e="");var a=":input"+e+":first";return t.find("*").filter(a)},r.a.fn.outerHTML=function(){return r()(this)[0].outerHTML},r.a.fn.getAttrFragment=function(e){var t=r()(this),a=r.a.extend({attributeName:"name",fragmentNumber:0},e),n=t.attr(a.attributeName);return o.a.getSquareBracketedFragmentByNumber(n,a.fragmentNumber)},r.a.fn.getNameFragment=function(e){return r()(this).getAttrFragment({attributeName:"name",fragmentNumber:e})};a(2);r.a.fn.scrollToMe=function(e){var t=r()(this);(o.a.isEmpty(e)?r.a.browser.mozilla?r()("html"):r()("body"):"&get-scroll-parent&"===e?t.scrollParent():r()(e)).scrollMeTo(t)},r.a.fn.renewUniqueId=function(){var e=r()(this);return e.removeUniqueId().uniqueId(),e},r.a.fn.renewUniqueIdsForChildren=function(){var e=r()(this);return e.find("*").removeAttr("id").renewUniqueId(),e};var l=c,c=function(){};c._storageData={},c.checkAndAddIfNeed=function(e,t){o.a.isNullOrUndefined(c._storageData[t])&&(c._storageData[t]=[]);var a=!0;return o.a.inArray(e,c._storageData[t])||(c._storageData[t].push(e),a=!1),a},r.a.fn.parentCloser=function(e){var t=r.a.extend({parentLevel:0,parentContainerLevel:1,containerCallback:function(e){}},e),a="";return r()(this).uniqueId(),this.each(function(){a=r()(this).attr("id"),l.checkAndAddIfNeed(a,"parentCloser")||r()("#"+a).__deleteParentByLevelForUnique(t)})},r.a.fn.__deleteParentByLevelForUnique=function(e){var t=r.a.extend({parentLevel:0,parentContainerLevel:1,containerCallback:function(e){}},e);r()(this);this.click(function(){var e=r()(this),a=e.nthParent(t.parentLevel),n=e.nthParent(t.parentContainerLevel);return a.removeSmoothly({afterRemoveFinishedCallback:t.containerCallback,afterRemoveFinishedParams:n}),!1})},r.a.fn.replaceInChildrenAttrsUsingTemplatesFromDataFileds=function(e){var t=r()(this),a=r.a.extend({searchRegexp:/%fileds_group_number_lavel2%/g,newValue:"888",attributeNames:["name","for"],templateDataFieldAdditionalPart:"-template",copyValuesInsteadOtherPlaceholders:!1,checkNameFragmentIsPlaceholderCallback:function(e){return!1}},e);return t.find("*").each(function(){r()(this).replaceInAttrsUsingTemplatesFromDataFileds(a)}),t},r.a.fn.replaceInAttrsUsingTemplatesFromDataFileds=function(e){var t=r()(this),a=r.a.extend({searchRegexp:/%fileds_group_number_lavel2%/g,newValue:"888",attributeNames:["name","for"],templateDataFieldAdditionalPart:"-template",copyValuesInsteadOtherPlaceholders:!1,checkNameFragmentIsPlaceholderCallback:function(e){return!1}},e),n="",i="";return a.attributeNames.forEach(function(e,r,l){if(n=t.attr("data-"+e+a.templateDataFieldAdditionalPart),!o.a.isEmpty(n)){if(i=n.replace(a.searchRegexp,a.newValue),"name"===e&&a.copyValuesInsteadOtherPlaceholders){var c=t.attr(e);o.a.getSquareBracketedFragments(i).forEach(function(e,t,n){if(a.checkNameFragmentIsPlaceholderCallback(e)&&!o.a.isEmpty(c)){var r=o.a.getSquareBracketedFragmentByNumber(c,t);o.a.isEmpty(r)||(i=i.replace(e,r))}})}t.attr(e,i)}}),t},r.a.fn.replaceInAttrs=function(e,t,a){var n=r()(this),i="";return a.forEach(function(a,r,o){i=n.attr(a),n.attr(a,i.replace(e,t))}),n},r.a.fn.fromFiledsGroupAdderFromHiddenTemplate=function(e){var t=r()(this),a=r.a.extend({addSelector:"#add-group",deleteSelector:".delete-group",templateContainerSelector:"#template-container",filedsGroupSelector:".template-selector",replaceGroupNumerRegexp:/%fileds_group_number%/g,parentLevelForDelete:0,filedGroupsCounterInitValue:0,afterAddCallback:function(e){}},e),n=a.addSelector,i=a.deleteSelector,o=t,l=r()(a.templateContainerSelector),c=a.filedsGroupSelector,u=a.replaceGroupNumerRegexp;this.initAddtionalAfterNewFiledsAdding=a.afterAddCallback;var s=a.filedGroupsCounterInitValue,d=this;s+=o.find(c).length,this.initAddProcess=function(){r()(n).off("click"),r()(n).on("click",function(e){return d.addNewFiledsGroup(),d.initDeleteProcess(),d.initAddtionalAfterNewFiledsAdding(),!1})},this.initDeleteProcess=function(){r()(i).on("click",function(){var e=r()(this).nthParent(a.parentLevelForDelete);return d.removeFiledsGroup(e),!1})},this.removeFiledsGroup=function(e){e.stop().animate({height:"0px",width:"0px",opacity:0},600,function(){r()(this).remove()})},this.addNewFiledsGroup=function(){var e=r()(l.html().replace(u,s));return e.find("*").removeAttr("id"),e.appendTo(o).show("slow"),s++,!1},d.initAddProcess(),d.initDeleteProcess()},r.a.fn.parentInParentContainerDublicator=function(e){r()(this);var t=r.a.extend({thisSelector:"",containerParentLevel:1,parentLevel:0,replaceRegexp:/%fields_group_number_2%/g,afterCloneCallback:function(e){},attributesToReplaceFromTemplate:["name","for","class"],templateDataFieldAdditionalPart:"-template",copyValuesInsteadOtherPlaceholders:!1,checkNameFragmentIsPlaceholderCallback:function(e){return o.a.checkForSubstring(e,"%")},containerCallback:function(e){}},e);r()(this).uniqueId();var a="";return this.each(function(){a=r()(this).attr("id"),l.checkAndAddIfNeed(a,"parentInParentContainerDublicator")||r()("#"+a).__relativeParentInParentContainerDublicatorForUnique(t)})},r.a.fn.__relativeParentInParentContainerDublicatorForUnique=function(e){r()(this);var t=r.a.extend({thisSelector:"",containerParentLevel:1,parentLevel:0,replaceRegexp:/%fields_group_number_2%/g,afterCloneCallback:function(e){},attributesToReplaceFromTemplate:["name","for","class"],templateDataFieldAdditionalPart:"-template",copyValuesInsteadOtherPlaceholders:!1,checkNameFragmentIsPlaceholderCallback:function(e){return!1},containerCallback:function(e){}},e),a=t.thisSelector,n=r()(this),i=n.nthParent(t.containerParentLevel),o=n.nthParent(t.parentLevel);i.incDataAttrCounter(t.thisSelector),this.click(function(){var e=o.cloneWithDataAttrs();return e.hide(),e.find("*").removeAttr("id"),e.replaceInChildrenAttrsUsingTemplatesFromDataFileds({searchRegexp:t.replaceRegexp,newValue:i.getDataAttrCounter(t.thisSelector),attributeNames:t.attributesToReplaceFromTemplate,templateDataFieldAdditionalPart:t.templateDataFieldAdditionalPart,copyValuesInsteadOtherPlaceholders:t.copyValuesInsteadOtherPlaceholders,checkNameFragmentIsPlaceholderCallback:t.checkNameFragmentIsPlaceholderCallback}),e.find("input").val(""),i.append(e),t.afterCloneCallback(e),t.containerCallback(i),e.show("slow"),e.find(a).parentInParentContainerDublicator(t),!1})}}]);