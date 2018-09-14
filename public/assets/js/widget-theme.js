!function(e){function n(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var o={};n.m=e,n.c=o,n.d=function(e,o,t){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=13)}({13:function(e,n,o){e.exports=o(14)},14:function(e,n,o){var t,r,l={};t=o(15),Object.keys(t).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.warn("[vue-loader] app/components/widget-theme.vue: named exports in *.vue files are ignored."),r=o(16),e.exports=t||{},e.exports.__esModule&&(e.exports=e.exports.default);var a="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;r&&(a.template=r),a.computed||(a.computed={}),Object.keys(l).forEach(function(e){var n=l[e];a.computed[e]=function(){return n}})},15:function(e,n,o){"use strict";e.exports={section:{label:"Theme",priority:90},props:["widget","config"]},window.Widgets.components.theme=e.exports},16:function(e,n){e.exports='\n\n<div class="uk-form-horizontal">\n\n    <div class="uk-form-row">\n        <span class="uk-form-label">{{ \'Title\' | trans }}</span>\n        <div class="uk-form-controls uk-form-controls-text">\n            <label><input type="checkbox" v-model="widget.theme.title_hide"> {{ \'Hide Title\' | trans }}</label>\n        </div>\n    </div>\n\n    <div class="uk-form-row">\n        <label for="form-theme-title-size" class="uk-form-label">{{ \'Title Size\' | trans }}</label>\n        <div class="uk-form-controls">\n            <select id="form-theme-title-size" class="uk-form-width-large" v-model="widget.theme.title_size">\n                <option value="uk-panel-title">{{ \'Default\' | trans }}</option>\n                <option value="uk-h1 uk-margin-top-remove">{{ \'H1\' | trans }}</option>\n                <option value="uk-h2 uk-margin-top-remove">{{ \'H2\' | trans }}</option>\n                <option value="uk-h3 uk-margin-top-remove">{{ \'H3\' | trans }}</option>\n                <option value="uk-h4 uk-margin-top-remove">{{ \'H4\' | trans }}</option>\n                <option value="uk-heading-large uk-margin-top-remove">Extra Large</option>\n            </select>\n        </div>\n    </div>\n\n    <div class="uk-form-row">\n        <span class="uk-form-label">{{ \'Alignment\' | trans }}</span>\n        <div class="uk-form-controls uk-form-controls-text">\n            <label><input type="checkbox" v-model="widget.theme.alignment"> {{ \'Center the title and content.\' | trans }}</label>\n        </div>\n    </div>\n\n    <div class="uk-form-row">\n        <label for="form-theme-badge" class="uk-form-label">{{ \'HTML Class\' | trans }}</label>\n        <div class="uk-form-controls">\n            <input id="form-theme-badge" class="uk-form-width-large" type="text" v-model="widget.theme.html_class">\n        </div>\n    </div>\n\n    <div class="uk-form-row">\n        <label for="form-theme-panel" class="uk-form-label">{{ \'Panel Style\' | trans }}</label>\n        <div class="uk-form-controls">\n            <select id="form-theme-panel" class="uk-form-width-large" v-model="widget.theme.panel">\n                <option value="">{{ \'None\' | trans }}</option>\n                <option value="uk-panel-box">{{ \'Box\' | trans }}</option>\n                <option value="uk-panel-box uk-panel-box-primary">{{ \'Box Primary\' | trans }}</option>\n                <option value="uk-panel-box uk-panel-box-secondary">{{ \'Box Secondary\' | trans }}</option>\n                <option value="uk-panel-header">{{ \'Header\' | trans }}</option>\n            </select>\n        </div>\n    </div>\n\n</div>\n\n'}});