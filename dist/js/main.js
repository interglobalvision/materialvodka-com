/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();__webpack_require__(9);




var _shop=__webpack_require__(1),_shop2=_interopRequireDefault(_shop),_lazysizes=__webpack_require__(2),_lazysizes2=_interopRequireDefault(_lazysizes);__webpack_require__(4);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var






Site=function(){
function a(){_classCallCheck(this,a),
this.mobileThreshold=601,

$(window).resize(this.onResize.bind(this)),

$(document).ready(this.onReady.bind(this));

}return _createClass(a,[{key:'onResize',value:function onResize()

{

}},{key:'onReady',value:function onReady()

{
_lazysizes2.default.init(),

this.$covervidVideo=$('.covervid-video'),

this.initCoverVid();
}},{key:'fixWidows',value:function fixWidows()

{

$('.js-fix-widows').each(function(){
var a=$(this).html();
a=a.replace(/ ([^ ]*)$/,'&nbsp;$1'),
$(this).html(a);
});
}},{key:'initCoverVid',value:function initCoverVid()


{
var a=this;

a.$covervidVideo.length&&
a.$covervidVideo.coverVid(1920,1080);

}}]),a}(),


Material=new Site,
MaterialShop=new _shop2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_shopifyBuy=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"shopify-buy\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),_shopifyBuy2=_interopRequireDefault(_shopifyBuy),_jsCookie=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"js-cookie\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())),_jsCookie2=_interopRequireDefault(_jsCookie);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var




Shop=function(){
function a(){_classCallCheck(this,a),
this.mobileThreshold=601,

$(window).resize(this.onResize.bind(this)),

$(document).ready(this.onReady.bind(this));

}return _createClass(a,[{key:'onResize',value:function onResize()

{
}},{key:'onReady',value:function onReady()

{


if(WP.shopify){var a=
WP.shopify,b=a.domain,c=a.storefrontAccessToken;


this.client=_shopifyBuy2.default.buildClient({
domain:b,
storefrontAccessToken:c}),


this.initCheckout(),

$('.single-product').length&&
this.initSingleProduct(),


$('#cart-container').length&&
this.initCartSection();


}else
console.error('Shopify URL and/or token missing');

}},{key:'initCheckout',value:function initCheckout()




{var a=this;


this.$cartLink=$('#cart-link'),
this.$cartCounter=$('#cart-counter');


var b=_jsCookie2.default.get('shopifyCheckoutId');b?





this.client.checkout.fetch(b).
then(function(b){




a.checkout=b,


a.updateCart(b);

}).catch(function(a){
console.log(a);
}):




this.client.checkout.create().
then(function(b){




a.checkout=b,


_jsCookie2.default.set('shopifyCheckoutId',b.id,{expires:7});
});

}},{key:'initSingleProduct',value:function initSingleProduct()


{
this.productHandle=$('#shopify-handle').attr('data-shopify-handle'),

this.productHandle&&
this.fetchProductMeta(this.productHandle);

}},{key:'initCartSection',value:function initCartSection()

{

this.$itemsContainer=$('#items-container'),
this.$checkoutContainer=$('#checkout-container'),
this.$subtotalContainer=$('subtotal-container'),


this.handleCartQuantity=this.handleCartQuantity.bind(this),
this.handleRemoveItems=this.handleRemoveItems.bind(this);
}},{key:'fetchProductMeta',value:function fetchProductMeta(a)





{var b=this;

this.client.product.fetchByHandle(a).
then(function(a){


b.$price=$('.single-product-price'),
b.$quantitySelect=$('#quantity'),
b.$quantityLabel=$('#quantity-select-label'),
b.$variationSelect=$('#variation-select'),
b.$variationLabel=$('#variation-select-label'),


b.showPrice(a,b.$price),


b.generateSelector(a,b.$variationSelect,b.$variationLabel),


b.handleAddToCart=b.handleAddToCart.bind(b),
$('.add-to-cart').on('click',b.handleAddToCart);

}).
catch(function(a){
console.log(a);
});
}},{key:'updateCart',value:function updateCart(a)





{var b=a.
lineItems,c=a.webUrl,d=a.subtotalPrice;


this.$cartCounter.html(b.length),


$('#cart-container').length&&(
this.clearCartMarkup(),
this.generateCartItemsRow(b),
this.bindCartInputs(b),
this.generateCheckout(c),
this.generateSubtotal(),
this.updateSubtotal(d),

this.$removeItem=$('.remove-item'),
this.bindRemoveItems());

}},{key:'clearCartMarkup',value:function clearCartMarkup()

{
this.$itemsContainer.html(''),
this.$subtotalContainer.html(''),
this.$checkoutContainer.html('');
}},{key:'showPrice',value:function showPrice(a,b)






{

b.html('$ '+a.attrs.variants[0].price);
}},{key:'handleAddToCart',value:function handleAddToCart()

{var a=this,
b=this.getQuantityAndVariant();


this.client.checkout.addLineItems(this.checkout.id,[b]).
then(function(b){



a.updateCart(b);
}).
catch(function(a){
console.log(a);
});
}},{key:'generateCartItemsRow',value:function generateCartItemsRow(a)





{var b=this;
a.length?
a.map(function(a){


var c=a.image?'<img alt="'+a.title+'" src="'+a.image+'" />':'';

b.$itemsContainer.append('\n          <div class="grid-row   ">\n            <div class="grid-item item-s-12 item-m-4 text-align-center">\n              <h1 class="font-uppercase">'+


a.title+'</h1>\n              '+c+'\n            </div>\n            <div class="grid-item item-s-2 item-m-1 text-align-center">\n              <input class="cart-item-quantity text-align-center" type="number" value="'+



a.attrs.quantity.value+'" data-product-id="'+a.id+'" />\n            </div>\n            <div class="grid-item item-s-3 item-m-3 text-align-center">\n              <span class="font-uppercase">'+


a.variant.title+'</span>\n            </div>\n            <div class="grid-item item-s-3 item-m-2 text-align-center">\n              <span class="font-uppercase">$'+


a.variant.price+'</span>\n            </div>\n            <div class="grid-item item-s-3 item-m-2 text-align-center">\n              <a class="remove-item font-uppercase u-pointer" data-product-id="'+


a.id+'" >Remove Item</span>\n            </div>\n          </div>\n        ');



}):

this.$itemsContainer.append('\n        <div class="grid-row">\n          <div class="grid-item item-s-12 text-align-center">\n            <h1>Cart is empty</h1>\n            <p>Please visit our <a href="/shop">Shop</p>\n          </div>\n        </div>\n      ');








}},{key:'generateCheckout',value:function generateCheckout(a)

{
this.$checkoutContainer.append('<a href="'+a+'">Proceed to Checkout</a>');
}},{key:'generateSubtotal',value:function generateSubtotal()

{
this.$subtotalContainer.append('\n      <div class="grid-item item-s-12 text-align-center">\n        <p>Subtotal: $<span id="subtotal"></span></p>\n      </div>\n    ');




}},{key:'updateSubtotal',value:function updateSubtotal(a)

{
$('#subtotal').text(a);
}},{key:'bindCartInputs',value:function bindCartInputs()

{
$('.cart-item-quantity').on('change',this.handleCartQuantity);
}},{key:'handleCartQuantity',value:function handleCartQuantity(a)

{var b=this,
c=a.target.dataset.productId,
d=parseInt(a.target.value);







this.client.checkout.updateLineItems(this.checkout.id,[{id:c,quantity:d}]).
then(function(a){

console.log(a),
b.updateSubtotal(a.subtotalPrice);
});
}},{key:'generateSelector',value:function generateSelector(a,b,c)

{
var d;

a.variants.map(function(a){
var c=a.selectedOptions.map(function(a){return a.value}).join(' - '),
e=a.id;
d=a.selectedOptions[0].name,
b.append('<option value="'+e+'">'+c+'</option>');
}),

c.html(d);
}},{key:'bindRemoveItems',value:function bindRemoveItems()

{
this.$removeItem.on('click',this.handleRemoveItems);
}},{key:'handleRemoveItems',value:function handleRemoveItems(a)

{var b=this,
c=a.target.dataset.productId;

this.client.checkout.removeLineItems(this.checkout.id,[c]).then(function(a){
b.updateCart(a);
});
}},{key:'getQuantityAndVariant',value:function getQuantityAndVariant()


{
var a=this.$variationSelect.val(),
b=parseInt(this.$quantitySelect.val());


return{
variantId:a,
quantity:b};

}}]),a}();exports.default=


Shop;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};(function(a,b){
var c=b(a,a.document);
a.lazySizes=c,
'object'==( false?'undefined':_typeof(module))&&module.exports&&(
module.exports=c);

})(window,function(a,b){
'use strict';

if(b.getElementsByClassName){

var c,d,

e=b.documentElement,

f=a.Date,

g=a.HTMLPictureElement,

h='addEventListener',

j='getAttribute',

i=a[h],

k=a.setTimeout,

l=a.requestAnimationFrame||k,

m=a.requestIdleCallback,

n=/^picture$/i,

o=['load','error','lazyincluded','_lazyloaded'],

p={},

q=Array.prototype.forEach,

r=function(a,b){



return p[b]||(p[b]=new RegExp('(\\s|^)'+b+'(\\s|$)')),p[b].test(a[j]('class')||'')&&p[b];
},

s=function(a,b){
r(a,b)||
a.setAttribute('class',(a[j]('class')||'').trim()+' '+b);

},

t=function(a,b){
var c;(
c=r(a,b))&&
a.setAttribute('class',(a[j]('class')||'').replace(c,' '));

},

u=function(a,b,c){
var d=c?h:'removeEventListener';c&&

u(a,b),

o.forEach(function(c){
a[d](c,b);
});
},

v=function(a,d,e,f,g){
var h=b.createEvent('CustomEvent');










return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h;
},

w=function(b,c){
var e;
!g&&(e=a.picturefill||d.pf)?
e({reevaluate:!0,elements:[b]}):
c&&c.src&&(
b.src=c.src);

},

x=function(a,b){
return(getComputedStyle(a,null)||{})[b];
},

y=function(a,b,c){for(
c=c||a.offsetWidth;

c<d.minSize&&b&&!a._lazysizesWidth;)
c=b.offsetWidth,
b=b.parentNode;


return c;
},

z=function(){
var a,c,
d=[],
e=[],
f=d,

g=function(){
var b=f;for(

f=d.length?e:d,

a=!0,
c=!1;

b.length;)
b.shift()();


a=!1;
},

h=function(d,e){
a&&!e?
d.apply(this,arguments):(

f.push(d),

!c&&(
c=!0,
(b.hidden?k:l)(g)));


};



return h._lsFlush=g,h;
}(),

A=function(a,b){
return b?
function(){
z(a);
}:
function(){
var b=this,
c=arguments;
z(function(){
a.apply(b,c);
});
};

},

B=function(a){
var b,
c=0,

e=d.ricTimeout,
g=function(){
b=!1,
c=f.now(),
a();
},
h=m&&d.ricTimeout?
function(){
m(g,{timeout:e}),

e!==d.ricTimeout&&(
e=d.ricTimeout);

}:
A(function(){
k(g);
},!0);


return function(a){
var d;(

a=!0===a)&&(
e=33),b||(






b=!0,

d=125-(f.now()-c),

0>d&&(
d=0),


a||9>d&&m?
h():

k(h,d));

};
},


C=function(a){
var b,c,
d=99,
e=function(){
b=null,
a();
},
g=function(){
var a=f.now()-c;

a<d?
k(g,d-a):

(m||e)(e);

};

return function(){
c=f.now(),b||(


b=k(g,d));

};
};

(function(){
var b,

c={
lazyClass:'lazyload',
loadedClass:'lazyloaded',
loadingClass:'lazyloading',
preloadClass:'lazypreload',
errorClass:'lazyerror',

autosizesClass:'lazyautosizes',
srcAttr:'data-src',
srcsetAttr:'data-srcset',
sizesAttr:'data-sizes',

minSize:40,
customMedia:{},
init:!0,
expFactor:1.5,
hFac:0.8,
loadMode:2,
loadHidden:!0,
ricTimeout:300};




for(b in d=a.lazySizesConfig||a.lazysizesConfig||{},c)
b in d||(
d[b]=c[b]);



a.lazySizesConfig=d,

k(function(){
d.init&&
F();

});
})();

var D=function(){
var g,l,m,o,p,

y,D,F,G,H,I,

J,K,L,

M=/^img$/i,
N=/^iframe$/i,

O='onscroll'in a&&!/glebot/.test(navigator.userAgent),


P=0,

Q=0,
R=-1,

S=function(a){
Q--,
a&&a.target&&
u(a.target,S),


a&&!(0>Q)&&a.target||(
Q=0);

},

T=function(a,c){
var d,
f=a,
g='hidden'==x(b.body,'visibility')||'hidden'!=x(a,'visibility');for(

F-=c,
I+=c,
G-=c,
H+=c;

g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)
g=0<(x(f,'opacity')||1),

g&&'visible'!=x(f,'overflow')&&(
d=f.getBoundingClientRect(),
g=H>d.left&&
G<d.right&&
I>d.top-1&&
F<d.bottom+1);




return g;
},

U=function(){
var a,f,h,i,k,m,n,p,q,

r=c.elements;

if((o=d.loadMode)&&8>Q&&(a=r.length)){























for(f=0,R++,null==K&&(!('expand'in d)&&(d.expand=500<e.clientHeight&&500<e.clientWidth?500:370),J=d.expand,K=J*d.expFactor),P<K&&1>Q&&2<R&&2<o&&!b.hidden?(P=K,R=0):1<o&&1<R&&6>Q?P=J:P=0;f<a;f++)

if(r[f]&&!r[f]._lazyRace){

if(!O){aa(r[f]);continue}














if((p=r[f][j]('data-expand'))&&(m=1*p)||(m=P),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),!((I=h.bottom)>=n&&
(F=h.top)<=D&&
(H=h.right)>=n*L&&
(G=h.left)<=y&&(
I||H||G||F)&&(
d.loadHidden||'hidden'!=x(r[f],'visibility'))&&(
l&&3>Q&&!p&&(3>o||4>R)||T(r[f],m))))



!k&&l&&!i&&
4>Q&&4>R&&2<o&&(
g[0]||d.preloadAfterLoad)&&(
g[0]||!p&&(I||H||G||F||'auto'!=r[f][j](d.sizesAttr)))&&(
i=g[0]||r[f]);else if(aa(r[f]),k=!0,9<Q)break}



i&&!k&&
aa(i);

}
},

V=B(U),

W=function(a){
s(a.target,d.loadedClass),
t(a.target,d.loadingClass),
u(a.target,Y),
v(a.target,'lazyloaded');
},
X=A(W),
Y=function(a){
X({target:a.target});
},

Z=function(a,b){
try{
a.contentWindow.location.replace(b);
}catch(c){
a.src=b;
}
},

$=function(a){
var b,

c=a[j](d.srcsetAttr);(

b=d.customMedia[a[j]('data-media')||a[j]('media')])&&
a.setAttribute('media',b),c&&



a.setAttribute('srcset',c);

},

_=A(function(a,b,c,e,f){
var g,h,i,l,o,p;

(o=v(a,'lazybeforeunveil',b)).defaultPrevented||(e&&(c?



s(a,d.autosizesClass):

a.setAttribute('sizes',e)),



h=a[j](d.srcsetAttr),
g=a[j](d.srcAttr),f&&(


i=a.parentNode,
l=i&&n.test(i.nodeName||'')),


p=b.firesLoad||'src'in a&&(h||g||l),

o={target:a},p&&(


u(a,S,!0),
clearTimeout(m),
m=k(S,2500),

s(a,d.loadingClass),
u(a,Y,!0)),l&&



q.call(i.getElementsByTagName('source'),$),h?



a.setAttribute('srcset',h):
g&&!l&&(
N.test(a.nodeName)?
Z(a,g):

a.src=g),



f&&(h||l)&&
w(a,{src:g})),



a._lazyRace&&
delete a._lazyRace,

t(a,d.lazyClass),

z(function(){(
!p||a.complete&&1<a.naturalWidth)&&(p?

S(o):

Q--,

W(o));

},!0);
}),

aa=function(a){
var b,

c=M.test(a.nodeName),


e=c&&(a[j](d.sizesAttr)||a[j]('sizes')),
f='auto'==e;

(f||!l)&&c&&(a[j]('src')||a.srcset)&&!a.complete&&!r(a,d.errorClass)&&r(a,d.lazyClass)||(

b=v(a,'lazyunveilread').detail,f&&


E.updateElem(a,!0,a.offsetWidth),


a._lazyRace=!0,
Q++,

_(a,b,f,e,c));
},

ba=function(){
if(!l){
if(999>f.now()-p)

return void k(ba,999);

var a=C(function(){
d.loadMode=3,
V();
});

l=!0,

d.loadMode=3,

V(),

i('scroll',function(){
3==d.loadMode&&(
d.loadMode=2),

a();
},!0)}
};

return{
_:function _(){
p=f.now(),

c.elements=b.getElementsByClassName(d.lazyClass),
g=b.getElementsByClassName(d.lazyClass+' '+d.preloadClass),
L=d.hFac,

i('scroll',V,!0),

i('resize',V,!0),

a.MutationObserver?
new MutationObserver(V).observe(e,{childList:!0,subtree:!0,attributes:!0}):(

e[h]('DOMNodeInserted',V,!0),
e[h]('DOMAttrModified',V,!0),
setInterval(V,999)),


i('hashchange',V,!0),


['focus','mouseover','click','load','transitionend','animationend','webkitAnimationEnd'].forEach(function(a){
b[h](a,V,!0);
}),

/d$|^c/.test(b.readyState)?
ba():(

i('load',ba),
b[h]('DOMContentLoaded',V),
k(ba,2e4)),


c.elements.length?(
U(),
z._lsFlush()):

V();

},
checkElems:V,
unveil:aa};

}(),


E=function(){
var a,

c=A(function(a,b,c,d){
var e,f,g;





if(a._lazysizesWidth=d,d+='px',a.setAttribute('sizes',d),n.test(b.nodeName||''))

for(e=b.getElementsByTagName('source'),f=0,g=e.length;f<g;f++)
e[f].setAttribute('sizes',d);



c.detail.dataAttr||
w(a,c.detail);

}),
e=function(a,b,d){
var e,
f=a.parentNode;f&&(


d=y(a,f,d),
e=v(a,'lazybeforesizes',{width:d,dataAttr:!!b}),

!e.defaultPrevented&&(
d=e.detail.width,

d&&d!==a._lazysizesWidth&&
c(a,f,e,d)));



},













f=C(function updateElementsSizes(){var b,c=a.length;if(c)for(b=0;b<c;b++)e(a[b])});

return{
_:function _(){
a=b.getElementsByClassName(d.autosizesClass),
i('resize',f);
},
checkElems:f,
updateElem:e};

}(),

F=function(){
F.i||(
F.i=!0,
E._(),
D._());

};















return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z},c}
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function(a){



















return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],!a.children&&(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function get(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function get(){return a.i}}),a.webpackPolyfill=1),a;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _coverVid=function(a,b,c){














































function d(){


var d=a.parentNode.offsetHeight,
e=a.parentNode.offsetWidth;










e/b>d/c?(
a.style.height='auto',
a.style.width=e+'px'):(

a.style.height=d+'px',
a.style.width='auto');

}d(),window.addEventListener('resize',function(a,b){var c=null;return function(){var d=this,e=arguments;window.clearTimeout(c),c=window.setTimeout(function(){a.apply(d,e)},b)}}(d,50)),a.style.position='absolute',a.style.top='50%',a.style.left='50%',a.style['-webkit-transform']='translate(-50%, -50%)',a.style['-ms-transform']='translate(-50%, -50%)',a.style.transform='translate(-50%, -50%)',a.parentNode.style.overflow='hidden';var e=a.getAttribute('poster');a.removeAttribute('poster'),a.parentNode.style.backgroundImage='url('+e+')',a.parentNode.style.backgroundSize='cover',a.parentNode.style.backgroundPosition='center center';


var f='undefined'!=typeof a.canPlayType,


g=!1;(
/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(
g=!0),(


!f||g)&&
a&&a.parentNode&&a.parentNode.removeChild(a);

};

window.jQuery&&
jQuery.fn.extend({
coverVid:function coverVid(){

return _coverVid(this[0],arguments[0],arguments[1]),this;
}});

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map