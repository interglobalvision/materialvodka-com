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
var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();__webpack_require__(1);




var _shop=__webpack_require__(2),_shop2=_interopRequireDefault(_shop),_ajaxy=__webpack_require__(16),_ajaxy2=_interopRequireDefault(_ajaxy),_lazysizes=__webpack_require__(6),_lazysizes2=_interopRequireDefault(_lazysizes);__webpack_require__(8);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var







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
MaterialShop=new _shop2.default,
MaterialAjaxy=new _ajaxy2.default;

/***/ }),
/* 1 */
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_shopifyBuy=__webpack_require__(3),_shopifyBuy2=_interopRequireDefault(_shopifyBuy),_jsCookie=__webpack_require__(4),_jsCookie2=_interopRequireDefault(_jsCookie);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var




Shop=function(){
function a(){_classCallCheck(this,a),
this.mobileThreshold=601,

$(window).
resize(this.onResize.bind(this)).
on('ajaxSuccess',this.onReady.bind(this)),

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

























var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},

_typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){
return"undefined"==typeof e?"undefined":_typeof2(e);
}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":_typeof2(e);
},











classCallCheck$1=function(e,d){
if(!(e instanceof d))
throw new TypeError("Cannot call a class as a function");

},

createClass$1=function(){
function e(e,d){
for(var a,t=0;t<d.length;t++)a=
d[t],
a.enumerable=a.enumerable||!1,
a.configurable=!0,
"value"in a&&(a.writable=!0),
Object.defineProperty(e,a.key,a);

}

return function(d,a,t){


return a&&e(d.prototype,a),t&&e(d,t),d;
};
}(),









inherits$1=function(e,d){
if("function"!=typeof d&&null!==d)
throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof d?"undefined":_typeof2(d)));


e.prototype=Object.create(d&&d.prototype,{
constructor:{
value:e,
enumerable:!1,
writable:!0,
configurable:!0}}),d&&(


Object.setPrototypeOf?Object.setPrototypeOf(e,d):e.__proto__=d);
},











possibleConstructorReturn$1=function(e,d){
if(!e)
throw new ReferenceError("this hasn't been initialised - super() hasn't been called");


return d&&("object"===("undefined"==typeof d?"undefined":_typeof2(d))||"function"==typeof d)?d:e;
};

























function join(){
for(var e=arguments.length,d=Array(e),a=0;a<e;a++)
d[a]=arguments[a];


return d.join(" ");
}

function isObject(e){
return!!e&&"[object Object]"===Object.prototype.toString.call(e.valueOf());
}

function deepFreezeCopyExcept(e,d){return(
e(d)?d:

isObject(d)?
Object.freeze(Object.keys(d).reduce(function(a,t){


return a[t]=deepFreezeCopyExcept(e,d[t]),a;
},{})):
Array.isArray(d)?
Object.freeze(d.map(function(d){
return deepFreezeCopyExcept(e,d);
})):d);



}

function schemaForType(e,d){
var a=e.types[d];

if(a)
return a;


throw new Error("No type of "+d+" found in schema");
}

var classCallCheck=function(e,d){
if(!(e instanceof d))
throw new TypeError("Cannot call a class as a function");

},

createClass=function(){
function e(e,d){
for(var a,t=0;t<d.length;t++)a=
d[t],
a.enumerable=a.enumerable||!1,
a.configurable=!0,
"value"in a&&(a.writable=!0),
Object.defineProperty(e,a.key,a);

}

return function(d,a,t){


return a&&e(d.prototype,a),t&&e(d,t),d;
};
}(),

_extends=Object.assign||function(e){
for(var d,a=1;a<arguments.length;a++)


for(var t in d=arguments[a],d)
Object.prototype.hasOwnProperty.call(d,t)&&(
e[t]=d[t]);




return e;
},

inherits=function(e,d){
if("function"!=typeof d&&null!==d)
throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof d?"undefined":_typeof(d)));


e.prototype=Object.create(d&&d.prototype,{
constructor:{
value:e,
enumerable:!1,
writable:!0,
configurable:!0}}),d&&(


Object.setPrototypeOf?Object.setPrototypeOf(e,d):e.__proto__=d);
},

possibleConstructorReturn=function(e,d){
if(!e)
throw new ReferenceError("this hasn't been initialised - super() hasn't been called");


return d&&("object"===("undefined"==typeof d?"undefined":_typeof(d))||"function"==typeof d)?d:e;
},

slicedToArray=function(){
function e(e,d){
var


a,t=[],n=!0,r=!1;

try{
for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(
t.push(i.value),!(

d&&t.length===d));n=!0);

}catch(e){
r=!0,
a=e;
}finally{
try{
!n&&o["return"]&&o["return"]();
}finally{
if(r)throw a;
}
}

return t;
}

return function(d,a){
if(Array.isArray(d))
return d;
if(Symbol.iterator in Object(d))
return e(d,a);

throw new TypeError("Invalid attempt to destructure non-iterable instance");

};
}(),

toConsumableArray=function(e){
if(Array.isArray(e)){
for(var d=0,a=Array(e.length);d<e.length;d++)
a[d]=e[d];
return a;
}
return Array.from(e);

},

VariableDefinition=function(){









function e(d,a,t){
classCallCheck(this,e),

this.name=d,
this.type=a,
this.defaultValue=t,
Object.freeze(this);
}



























return createClass(e,[{key:"toInputValueString",value:function(){return"$"+this.name}},{key:"toString",value:function(){var e=this.defaultValue?" = "+formatInputValue(this.defaultValue):"";return"$"+this.name+":"+this.type+e}}]),e;
}();

function isVariable(e){
return VariableDefinition.prototype.isPrototypeOf(e);
}

function variable(e,d,a){
return new VariableDefinition(e,d,a);
}

var Enum=function(){







function e(d){
classCallCheck(this,e),

this.key=d;
}


















return createClass(e,[{key:"toString",value:function(){return this.key}},{key:"valueOf",value:function(){return this.key.valueOf()}}]),e;
}(),

enumFunction=function(e){
return new Enum(e);
},

Scalar=function(){
function e(d){
classCallCheck(this,e),

this.value=d;
}

















return createClass(e,[{key:"toString",value:function(){return this.value.toString()}},{key:"valueOf",value:function(){return this.value.valueOf()}},{key:"unwrapped",get:function(){return this.value}}]),e;
}();

function formatInputValue(e){return(
VariableDefinition.prototype.isPrototypeOf(e)?
e.toInputValueString():
Enum.prototype.isPrototypeOf(e)?e+"":

Scalar.prototype.isPrototypeOf(e)?
JSON.stringify(e.valueOf()):
Array.isArray(e)?
"["+join.apply(void 0,toConsumableArray(e.map(formatInputValue)))+"]":
isObject(e)?
formatObject(e,"{","}"):

JSON.stringify(e));

}

function formatObject(e){
var d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:"",
a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:"",

t=Object.keys(e).map(function(d){
return d+": "+formatInputValue(e[d]);
});

return""+d+join.apply(void 0,toConsumableArray(t))+a;
}

function formatArgs(e){return(
Object.keys(e).length?



" ("+formatObject(e)+")":"");
}


var noop=function(){},

Profiler={
trackTypeDependency:noop,
trackFieldDependency:noop},


trackTypeDependency=Profiler.trackTypeDependency,
trackFieldDependency=Profiler.trackFieldDependency;

function parseFieldCreationArgs(e){
var d=noop,
a={},
t=null;

if(!(2===e.length))











1===e.length&&(



SelectionSet.prototype.isPrototypeOf(e[0])?
t=e[0]:
"function"==typeof e[0]?
d=e[0]:

a=e[0]);else if("function"==typeof e[1]){var n=slicedToArray(e,2);a=n[0],d=n[1]}else{var r=slicedToArray(e,2);a=r[0],t=r[1]}



return{options:a,selectionSet:t,callback:d};
}

var emptyArgs=Object.freeze({}),

Field=function(){












function e(d,a,t){
classCallCheck(this,e),

this.name=d,
this.alias=a.alias||null,
this.responseKey=this.alias||this.name,
this.args=a.args?deepFreezeCopyExcept(isVariable,a.args):emptyArgs,
this.selectionSet=t,
Object.freeze(this);
}















return createClass(e,[{key:"toString",value:function(){var e=this.alias?this.alias+": ":"";return""+e+this.name+formatArgs(this.args)+this.selectionSet}}]),e;
}(),


Spread=function e(){
classCallCheck(this,e);
},

InlineFragment=function(e){









function d(e,a){
classCallCheck(this,d);

var t=possibleConstructorReturn(this,(d.__proto__||Object.getPrototypeOf(d)).call(this));




return t.typeName=e,t.selectionSet=a,Object.freeze(t),t;
}













return inherits(d,e),createClass(d,[{key:"toString",value:function(){return"... on "+this.typeName+this.selectionSet}}]),d;
}(Spread),

FragmentSpread=function(e){








function d(e){
classCallCheck(this,d);

var a=possibleConstructorReturn(this,(d.__proto__||Object.getPrototypeOf(d)).call(this));




return a.name=e.name,a.selectionSet=e.selectionSet,Object.freeze(a),a;
}



















return inherits(d,e),createClass(d,[{key:"toString",value:function(){return"..."+this.name}},{key:"toDefinition",value:function(){return new FragmentDefinition(this.name,this.selectionSet.typeSchema.name,this.selectionSet)}}]),d;
}(Spread),

FragmentDefinition=function(){








function e(d,a,t){
classCallCheck(this,e),

this.name=d,
this.typeName=a,
this.selectionSet=t,
this.spread=new FragmentSpread(this),
Object.freeze(this);
}













return createClass(e,[{key:"toString",value:function(){return"fragment "+this.name+" on "+this.typeName+" "+this.selectionSet}}]),e;
}();

function selectionsHaveIdField(e){
return e.some(function(e){
if(Field.prototype.isPrototypeOf(e))
return"id"===e.name;return(
Spread.prototype.isPrototypeOf(e)&&e.selectionSet.typeSchema.implementsNode&&
selectionsHaveIdField(e.selectionSet.selections));



});
}

function selectionsHaveTypenameField(e){
return e.some(function(e){
if(Field.prototype.isPrototypeOf(e))
return"__typename"===e.name;return(
Spread.prototype.isPrototypeOf(e)&&e.selectionSet.typeSchema.implementsNode&&
selectionsHaveTypenameField(e.selectionSet.selections));



});
}

function indexSelectionsByResponseKey(e){
function d(e,d,a){
Array.isArray(e[d])?
e[d].push(a):

e[d]=[a];

}
var a=e.reduce(function(e,a){
if(a.responseKey)
d(e,a.responseKey,a);else
{
var t=Object.keys(a.selectionSet.selectionsByResponseKey);

t.forEach(function(t){
d(e,t,a);
});
}

return e;
},{});





return Object.keys(a).forEach(function(e){Object.freeze(a[e])}),Object.freeze(a);
}





var SelectionSet=function(){









function e(d,a,t){
classCallCheck(this,e),


this.typeSchema="string"==typeof a?schemaForType(d,a):a,




trackTypeDependency(this.typeSchema.name),

this.typeBundle=d,
this.selections=[],t&&


t(new SelectionSetBuilder(this.typeBundle,this.typeSchema,this.selections)),(


this.typeSchema.implementsNode||"Node"===this.typeSchema.name)&&
!selectionsHaveIdField(this.selections)&&
this.selections.unshift(new Field("id",{},new e(d,"ID"))),



"INTERFACE"!==this.typeSchema.kind||
selectionsHaveTypenameField(this.selections)||
this.selections.unshift(new Field("__typename",{},new e(d,"String"))),



this.selectionsByResponseKey=indexSelectionsByResponseKey(this.selections),
Object.freeze(this.selections),
Object.freeze(this);
}

















return createClass(e,[{key:"toString",value:function(){return"SCALAR"===this.typeSchema.kind||"ENUM"===this.typeSchema.kind?"":" { "+join(this.selections)+" }"}}]),e;
}(),

SelectionSetBuilder=function(){








function e(d,a,t){
classCallCheck(this,e),

this.typeBundle=d,
this.typeSchema=a,
this.selections=t;
}
















































































































































































































return createClass(e,[{key:"hasSelectionWithResponseKey",value:function(e){return this.selections.some(function(d){return d.responseKey===e})}},{key:"add",value:function(e){var d;if("[object String]"===Object.prototype.toString.call(e)){trackFieldDependency(this.typeSchema.name,e);for(var a=arguments.length,t=Array(1<a?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];d=this.field.apply(this,[e].concat(t))}else Field.prototype.isPrototypeOf(e)&&trackFieldDependency(this.typeSchema.name,e.name),d=e;if(d.responseKey&&this.hasSelectionWithResponseKey(d.responseKey))throw new Error("The field name or alias '"+d.responseKey+"' has already been added.");this.selections.push(d)}},{key:"field",value:function(e){for(var d=arguments.length,a=Array(1<d?d-1:0),t=1;t<d;t++)a[t-1]=arguments[t];var n=parseFieldCreationArgs(a),r=n.options,i=n.callback,o=n.selectionSet;if(!o){if(!this.typeSchema.fieldBaseTypes[e])throw new Error("No field of name \""+e+"\" found on type \""+this.typeSchema.name+"\" in schema");var s=schemaForType(this.typeBundle,this.typeSchema.fieldBaseTypes[e]);o=new SelectionSet(this.typeBundle,s,i)}return new Field(e,r,o)}},{key:"inlineFragmentOn",value:function(e){var d,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:noop;return d=SelectionSet.prototype.isPrototypeOf(a)?a:new SelectionSet(this.typeBundle,schemaForType(this.typeBundle,e),a),new InlineFragment(e,d)}},{key:"addField",value:function(e){for(var d=arguments.length,a=Array(1<d?d-1:0),t=1;t<d;t++)a[t-1]=arguments[t];this.add.apply(this,[e].concat(a))}},{key:"addConnection",value:function(e){for(var d=arguments.length,a=Array(1<d?d-1:0),t=1;t<d;t++)a[t-1]=arguments[t];var n=parseFieldCreationArgs(a),r=n.options,i=n.callback,o=n.selectionSet;this.add(e,r,function(e){e.add("pageInfo",{},function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",{},function(e){e.add("cursor"),e.addField("node",{},o||i)})})}},{key:"addInlineFragmentOn",value:function(e){var d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:noop;this.add(this.inlineFragmentOn(e,d))}},{key:"addFragment",value:function(e){this.add(e)}}]),e;
}();

function parseArgs(e){
var d,
a,
t;

if(3===e.length){
var n=slicedToArray(e,3);

d=n[0],
a=n[1],
t=n[2];
}else 2===e.length?(
"[object String]"===Object.prototype.toString.call(e[0])?(
d=e[0],
a=null):
Array.isArray(e[0])&&(
a=e[0],
d=null),


t=e[1]):(

t=e[0],
d=null);


return{name:d,variables:a,selectionSetCallback:t};
}

var VariableDefinitions=function(){
function e(d){
classCallCheck(this,e),

this.variableDefinitions=d?[].concat(toConsumableArray(d)):[],
Object.freeze(this.variableDefinitions),
Object.freeze(this);
}











return createClass(e,[{key:"toString",value:function(){return 0===this.variableDefinitions.length?"":" ("+join(this.variableDefinitions)+") "}}]),e;
}(),






Operation=function(){




function e(d,a){
classCallCheck(this,e);

for(var t=arguments.length,n=Array(2<t?t-2:0),r=2;r<t;r++)
n[r-2]=arguments[r];


var i=parseArgs(n),
o=i.name,
s=i.variables,
l=i.selectionSetCallback;

this.typeBundle=d,
this.name=o,
this.variableDefinitions=new VariableDefinitions(s),
this.operationType=a,
"query"===a?(
this.selectionSet=new SelectionSet(d,d.queryType,l),
this.typeSchema=schemaForType(d,d.queryType)):(

this.selectionSet=new SelectionSet(d,d.mutationType,l),
this.typeSchema=schemaForType(d,d.mutationType)),

Object.freeze(this);
}
























return createClass(e,[{key:"toString",value:function(){var e=this.name?" "+this.name:"";return""+this.operationType+e+this.variableDefinitions+this.selectionSet}},{key:"isAnonymous",get:function(){return!this.name}}]),e;
}(),






Query=function(e){












function d(e){
var a;

classCallCheck(this,d);

for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)
n[r-1]=arguments[r];


return possibleConstructorReturn(this,(a=d.__proto__||Object.getPrototypeOf(d)).call.apply(a,[this,e,"query"].concat(n)));
}

return inherits(d,e),d;
}(Operation),






Mutation=function(e){












function d(e){
var a;

classCallCheck(this,d);

for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)
n[r-1]=arguments[r];


return possibleConstructorReturn(this,(a=d.__proto__||Object.getPrototypeOf(d)).call.apply(a,[this,e,"mutation"].concat(n)));
}

return inherits(d,e),d;
}(Operation);

function isAnonymous(e){
return e.isAnonymous;
}

function hasAnonymousOperations(e){
return e.some(isAnonymous);
}

function hasDuplicateOperationNames(e){
var d=e.map(function(e){
return e.name;
});

return d.reduce(function(e,a,t){
return e||d.indexOf(a)!==t;
},!1);
}

function extractOperation(e,d){
for(var a=arguments.length,t=Array(2<a?a-2:0),n=2;n<a;n++)
t[n-2]=arguments[n];return(


Operation.prototype.isPrototypeOf(t[0])?
t[0]:


"query"===d?
new(Function.prototype.bind.apply(Query,[null].concat([e],t))):

new(Function.prototype.bind.apply(Mutation,[null].concat([e],t))));

}

function isInvalidOperationCombination(e){return(
1!==e.length&&(



hasAnonymousOperations(e)||hasDuplicateOperationNames(e)));
}

function fragmentNameIsNotUnique(e,d){
return e.some(function(e){
return e.name===d;
});
}

var Document=function(){






function e(d){
classCallCheck(this,e),

this.typeBundle=d,
this.definitions=[];
}























































































































































return createClass(e,[{key:"toString",value:function(){return join(this.definitions)}},{key:"addOperation",value:function(e){for(var d=arguments.length,a=Array(1<d?d-1:0),t=1;t<d;t++)a[t-1]=arguments[t];var n=extractOperation.apply(void 0,[this.typeBundle,e].concat(a));if(isInvalidOperationCombination(this.operations.concat(n)))throw new Error("All operations must be uniquely named on a multi-operation document");this.definitions.push(n)}},{key:"addQuery",value:function(){for(var e=arguments.length,d=Array(e),a=0;a<e;a++)d[a]=arguments[a];this.addOperation.apply(this,["query"].concat(d))}},{key:"addMutation",value:function(){for(var e=arguments.length,d=Array(e),a=0;a<e;a++)d[a]=arguments[a];this.addOperation.apply(this,["mutation"].concat(d))}},{key:"defineFragment",value:function(e,d,a){if(fragmentNameIsNotUnique(this.fragmentDefinitions,e))throw new Error("All fragments must be uniquely named on a multi-fragment document");var t=new SelectionSet(this.typeBundle,d,a),n=new FragmentDefinition(e,d,t);return this.definitions.push(n),n.spread}},{key:"operations",get:function(){return this.definitions.filter(function(e){return Operation.prototype.isPrototypeOf(e)})}},{key:"fragmentDefinitions",get:function(){return this.definitions.filter(function(e){return FragmentDefinition.prototype.isPrototypeOf(e)})}}]),e;
}(),







GraphModel=




function e(d){
var a=this;

classCallCheck(this,e),

Object.defineProperty(this,"attrs",{value:d,enumerable:!1}),

Object.keys(this.attrs).filter(function(e){
return!(e in a);
}).forEach(function(e){
var t;t=

null===d[e]?
{
enumerable:!0,
get:function(){
return null;
}}:


{
enumerable:!0,
get:function(){
return this.attrs[e].valueOf();
}},


Object.defineProperty(a,e,t);
});
},





ClassRegistry=function(){
function e(){
classCallCheck(this,e),

this.classStore={};
}







































return createClass(e,[{key:"registerClassForType",value:function(e,d){this.classStore[d]=e}},{key:"unregisterClassForType",value:function(e){delete this.classStore[e]}},{key:"classForType",value:function(e){return this.classStore[e]||GraphModel}}]),e;
}();

function isValue(e){
return"[object Null]"!==Object.prototype.toString.call(e)&&"[object Undefined]"!==Object.prototype.toString.call(e);
}

function isNodeContext(e){
return e.selection.selectionSet.typeSchema.implementsNode;
}

function isConnection(e){
return e.selection.selectionSet.typeSchema.name.endsWith("Connection");
}

function nearestNode(e){return(
null==e?
null:
isNodeContext(e)?e:


nearestNode(e.parent));

}

function contextsFromRoot(e){return(
e.parent?
contextsFromRoot(e.parent).concat(e):

[e]);

}

function contextsFromNearestNode(e){return(
e.selection.selectionSet.typeSchema.implementsNode?
[e]:

contextsFromNearestNode(e.parent).concat(e));

}

function initializeDocumentAndVars(e,d){
var a=d[d.length-1],
t=a.selection.args.first,
n=Object.keys(a.selection.args).filter(function(e){
return isVariable(a.selection.args[e]);
}).map(function(e){
return a.selection.args[e];
}),

r=n.find(function(e){
return"first"===e.name;
});r||(


r=variable("first","Int",t),
n.push(r));


var i=new Document(e.selection.selectionSet.typeBundle);

return[i,n,r];
}

function addNextFieldTo(e,d,a,t){

var n=d.shift();



if(a.push(n.selection.responseKey),d.length)
e.add(n.selection.name,{alias:n.selection.alias,args:n.selection.args},function(e){
addNextFieldTo(e,d,a,t);
});else
{
var





r,i=n.selection.selectionSet.selections.find(function(e){return"edges"===e.name}),o=i.selectionSet.selections.find(function(e){return"node"===e.name});r=

isVariable(n.selection.args.first)?
n.selection.args.first:

variable("first","Int",n.selection.args.first);


var s={
alias:n.selection.alias,
args:Object.assign({},n.selection.args,{after:t,first:r})};


e.addConnection(n.selection.name,s,o.selectionSet);
}
}

function collectFragments(e){
return e.reduce(function(e,d){






return FragmentSpread.prototype.isPrototypeOf(d)&&e.push(d.toDefinition()),e.push.apply(e,toConsumableArray(collectFragments(d.selectionSet.selections))),e;
},[]);
}

function nextPageQueryAndPath(e,d){
var a=nearestNode(e);return a?


function(){
var t,

n=[],
r=a.selection.selectionSet.typeSchema,
i=a.responseData.id,
o=contextsFromNearestNode(e),

s=initializeDocumentAndVars(e,o),
l=slicedToArray(s,2),
c=l[0],
p=l[1];

c.addQuery(p,function(e){
n.push("node"),
e.add("node",{args:{id:i}},function(e){
e.addInlineFragmentOn(r.name,function(e){
addNextFieldTo(e,o.slice(1),n,d);
});
});
});

var u=collectFragments(c.operations[0].selectionSet.selections);



return(t=c.definitions).unshift.apply(t,toConsumableArray(u)),[c,n];
}:

function(){
var a,

t=[],
n=contextsFromRoot(e),

r=initializeDocumentAndVars(e,n),
i=slicedToArray(r,2),
o=i[0],
s=i[1];

o.addQuery(s,function(e){
addNextFieldTo(e,n.slice(1),t,d);
});

var l=collectFragments(o.operations[0].selectionSet.selections);



return(a=o.definitions).unshift.apply(a,toConsumableArray(l)),[o,t];
};

}

function hasNextPage$1(e,d){return(
d===e.edges[e.edges.length-1]?



e.pageInfo.hasNextPage:new Scalar(!0));
}

function hasPreviousPage(e,d){return(
d===e.edges[0]?



e.pageInfo.hasPreviousPage:new Scalar(!0));
}

function transformConnections(e){
return function(d,a){
if(isConnection(d)){
if(!(a.pageInfo&&a.pageInfo.hasOwnProperty("hasNextPage")&&a.pageInfo.hasOwnProperty("hasPreviousPage")))
throw new Error("Connections must include the selections \"pageInfo { hasNextPage, hasPreviousPage }\".");


return a.edges.map(function(t){
return Object.assign(t.node,{
nextPageQueryAndPath:nextPageQueryAndPath(d,t.cursor),
hasNextPage:hasNextPage$1(a,t),
hasPreviousPage:hasPreviousPage(a,t),
variableValues:e});

});
}
return a;

};
}


var DecodingContext=function(){
function e(d,a){
var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;
classCallCheck(this,e),

this.selection=d,
this.responseData=a,
this.parent=t,
Object.freeze(this);
}
































return createClass(e,[{key:"contextForObjectProperty",value:function(d){var a,t=this.selection.selectionSet.selectionsByResponseKey[d],n=t&&t[0];if(a=Spread.prototype.isPrototypeOf(n)?new e(n,this.responseData,this.parent):new e(n,this.responseData[d],this),!n)throw new Error("Unexpected response key \""+d+"\", not found in selection set: "+this.selection.selectionSet);return Field.prototype.isPrototypeOf(n)?a:a.contextForObjectProperty(d)}},{key:"contextForArrayItem",value:function(d){return new e(this.selection,d,this.parent)}}]),e;
}();

function decodeArrayItems(e,d){
return e.responseData.map(function(a){
return decodeContext(e.contextForArrayItem(a),d);
});
}

function decodeObjectValues(e,d){
return Object.keys(e.responseData).reduce(function(a,t){


return a[t]=decodeContext(e.contextForObjectProperty(t),d),a;
},{});
}

function runTransformers(e,d,a){
return e.reduce(function(e,a){
return a(d,e);
},a);
}

function decodeContext(e,d){
var a=e.responseData;







return Array.isArray(a)?a=decodeArrayItems(e,d):isObject(a)&&(a=decodeObjectValues(e,d)),runTransformers(d,e,a);
}

function generateRefetchQueries(e,d){










return isValue(d)&&isNodeContext(e)&&(d.refetchQuery=function(){return new Query(e.selection.selectionSet.typeBundle,function(d){d.add("node",{args:{id:e.responseData.id}},function(d){d.addInlineFragmentOn(e.selection.selectionSet.typeSchema.name,e.selection.selectionSet)})})}),d;
}

function transformPojosToClassesWithRegistry(e){
return function(d,a){
if(isObject(a)){
var t=e.classForType(d.selection.selectionSet.typeSchema.name);

return new t(a);
}
return a;

};
}

function transformScalars(e,d){
if(isValue(d)){
if("SCALAR"===e.selection.selectionSet.typeSchema.kind)
return new Scalar(d);
if("ENUM"===e.selection.selectionSet.typeSchema.kind)
return new Enum(d);

}

return d;
}

function recordTypeInformation(e,d){








return isValue(d)&&(d.__typename?d.type=schemaForType(e.selection.selectionSet.typeBundle,d.__typename):d.type=e.selection.selectionSet.typeSchema),d;
}

function defaultTransformers(e){
var d=e.classRegistry,
a=d===void 0?new ClassRegistry:d,
t=e.variableValues;

return[transformScalars,generateRefetchQueries,transformConnections(t),recordTypeInformation,transformPojosToClassesWithRegistry(a)];
}











function decode(e,d){
var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},

t=a.transformers||defaultTransformers(a),
n=new DecodingContext(e,d);

return decodeContext(n,t);
}

function httpFetcher(e){
var d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};

return function(a){
return fetch(e,_extends({
body:JSON.stringify(a),
method:"POST",
mode:"cors"},d,
{
headers:_extends({
"Content-Type":"application/json",
Accept:"application/json"},
d.headers)})).
then(function(e){
return e.json();
});
};
}

function hasNextPage(e){
return e&&e.length&&e[e.length-1].hasNextPage;
}





var Client$2=function(){








function e(d,a){
var t=a.url,
n=a.fetcherOptions,
r=a.fetcher,
i=a.registry,
o=void 0===i?new ClassRegistry:i;





if(classCallCheck(this,e),this.typeBundle=d,this.classRegistry=o,t&&r)
throw new Error("Arguments not supported: supply either `url` and optional `fetcherOptions` OR use a `fetcher` function for further customization.");


if(t)
this.fetcher=httpFetcher(t,n);else
if(r){
if(n)
throw new Error("Arguments not supported: when specifying your own `fetcher`, set options through it and not with `fetcherOptions`");


this.fetcher=r;
}else
throw new Error("Invalid arguments: one of `url` or `fetcher` is needed.");

}































































































































































































































































































return createClass(e,[{key:"document",value:function(){return new Document(this.typeBundle)}},{key:"query",value:function(){for(var e=arguments.length,d=Array(e),a=0;a<e;a++)d[a]=arguments[a];return new(Function.prototype.bind.apply(Query,[null].concat([this.typeBundle],d)))}},{key:"mutation",value:function(){for(var e=arguments.length,d=Array(e),a=0;a<e;a++)d[a]=arguments[a];return new(Function.prototype.bind.apply(Mutation,[null].concat([this.typeBundle],d)))}},{key:"send",value:function(e){var d,a=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;d=Function.prototype.isPrototypeOf(e)?e(this):e;var r={query:d.toString()};t&&(r.variables=t),Object.assign(r,n);var i;if(Operation.prototype.isPrototypeOf(d))i=d;else{var o=d;if(1===o.operations.length)i=o.operations[0];else if(n.operationName)i=o.operations.find(function(e){return e.name===n.operationName});else throw new Error("\n          A document must contain exactly one operation, or an operationName\n          must be specified. Example:\n\n            client.send(document, null, {operationName: 'myFancyQuery'});\n        ")}return this.fetcher(r).then(function(e){return e.data&&(e.model=decode(i,e.data,{classRegistry:a.classRegistry,variableValues:t})),e})}},{key:"fetchNextPage",value:function(e,d){var a=Array.isArray(e)?e[e.length-1]:e;var t,n=a.nextPageQueryAndPath(),r=slicedToArray(n,2),i=r[0],o=r[1];return(a.variableValues||d)&&(t=Object.assign({},a.variableValues,d)),this.send(i,t).then(function(e){return e.model=o.reduce(function(e,d){return e[d]},e.model),e})}},{key:"fetchAllPages",value:function(e,d){var a=this,t=d.pageSize;return hasNextPage(e)?this.fetchNextPage(e,{first:t}).then(function(d){var n=d.model,r=e.concat(n);return a.fetchAllPages(r,{pageSize:t})}):Promise.resolve(e)}},{key:"refetch",value:function(e){if(!e)throw new Error("'client#refetch' must be called with a non-null instance of a Node.");else if(!e.type.implementsNode)throw new Error("'client#refetch' must be called with a type that implements Node. Received "+e.type.name+".");return this.send(e.refetchQuery()).then(function(e){var d=e.model;return d.node})}},{key:"variable",value:function(e,d,a){return variable(e,d,a)}},{key:"enum",value:function(e){return enumFunction(e)}}]),e;
}(),





Config=function(){









































function e(d){
var a=this;

classCallCheck$1(this,e),

Object.keys(this.deprecatedProperties).forEach(function(e){
d.hasOwnProperty(e)&&(



console.warn("[ShopifyBuy] Config property "+e+" is deprecated as of v1.0, please use "+a.deprecatedProperties[e]+" instead."),
d[a.deprecatedProperties[e]]=d[e]);
}),

this.requiredProperties.forEach(function(e){
if(d.hasOwnProperty(e))
a[e]=d[e];else

throw new Error("new Config() requires the option '"+e+"'");

});
}

return createClass$1(e,[{key:"requiredProperties",get:function(){return["storefrontAccessToken","domain"]}},{key:"deprecatedProperties",get:function(){return{accessToken:"storefrontAccessToken",apiKey:"storefrontAccessToken"}}}]),e;
}(),

Resource=function e(d){
classCallCheck$1(this,e),

this.graphQLClient=d;
},

defaultErrors=[{message:"an unknown error has occured."}];

function defaultResolver(e){
var d=e.split(".");

return function(e){
var a=e.model,
t=e.errors;

return new Promise(function(e,n){
try{
var r=d.reduce(function(e,d){
return e[d];
},a);

e(r);
}catch(e){t?

n(t):

n(defaultErrors);

}
});
};
}

function fetchResourcesForProducts(e,d){
var a=[].concat(e);

return Promise.all(a.reduce(function(e,a){









return e.push(d.fetchAllPages(a.images,{pageSize:250}).then(function(e){a.attrs.images=e})),e.push(d.fetchAllPages(a.variants,{pageSize:250}).then(function(e){a.attrs.variants=e})),e;
},[]));
}

function paginateProductConnectionsAndResolve(e){
return function(d){
return fetchResourcesForProducts(d,e).then(function(){
return d;
});
};
}

function paginateCollectionsProductConnectionsAndResolve(e){
return function(d){
var a=[].concat(d);

return Promise.all(a.reduce(function(d,a){
return d.concat(fetchResourcesForProducts(a.products,e));
},[])).then(function(){
return d;
});
};
}




var productHelpers={
















variantForOptions:function(e,d){
return e.variants.find(function(e){
return e.selectedOptions.every(function(e){
return d[e.name]===e.value.valueOf();
});
});
}};


function query(e){
var d=e.document(),
a={},
t={};

















































































return t.__defaultOperation__={},t.__defaultOperation__.id=e.variable("id","ID!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.ProductFragment=d.defineFragment("ProductFragment","Product",function(e){e.add("id"),e.add("createdAt"),e.add("updatedAt"),e.add("descriptionHtml"),e.add("description"),e.add("handle"),e.add("productType"),e.add("title"),e.add("vendor"),e.add("tags"),e.add("publishedAt"),e.add("onlineStoreUrl"),e.add("options",function(e){e.add("name"),e.add("values")}),e.add("images",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("src"),e.add("altText")})})}),e.add("variants",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.id],function(e){e.add("node",{args:{id:t.__defaultOperation__.id}},function(e){e.addFragment(a.ProductFragment)})}),d;
}

function query$1(e){
var d=e.document(),
a={},
t={};

















































































return t.__defaultOperation__={},t.__defaultOperation__.ids=e.variable("ids","[ID!]!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.ProductFragment=d.defineFragment("ProductFragment","Product",function(e){e.add("id"),e.add("createdAt"),e.add("updatedAt"),e.add("descriptionHtml"),e.add("description"),e.add("handle"),e.add("productType"),e.add("title"),e.add("vendor"),e.add("tags"),e.add("publishedAt"),e.add("onlineStoreUrl"),e.add("options",function(e){e.add("name"),e.add("values")}),e.add("images",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("src"),e.add("altText")})})}),e.add("variants",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.ids],function(e){e.add("nodes",{args:{ids:t.__defaultOperation__.ids}},function(e){e.addFragment(a.ProductFragment)})}),d;
}

function query$2(e){
var d=e.document(),
a={},
t={};


































































































return t.__defaultOperation__={},t.__defaultOperation__.first=e.variable("first","Int!"),t.__defaultOperation__.query=e.variable("query","String"),t.__defaultOperation__.sortKey=e.variable("sortKey","ProductSortKeys"),t.__defaultOperation__.reverse=e.variable("reverse","Boolean"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.ProductFragment=d.defineFragment("ProductFragment","Product",function(e){e.add("id"),e.add("createdAt"),e.add("updatedAt"),e.add("descriptionHtml"),e.add("description"),e.add("handle"),e.add("productType"),e.add("title"),e.add("vendor"),e.add("tags"),e.add("publishedAt"),e.add("onlineStoreUrl"),e.add("options",function(e){e.add("name"),e.add("values")}),e.add("images",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("src"),e.add("altText")})})}),e.add("variants",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.first,t.__defaultOperation__.query,t.__defaultOperation__.sortKey,t.__defaultOperation__.reverse],function(e){e.add("shop",function(e){e.add("products",{args:{first:t.__defaultOperation__.first,query:t.__defaultOperation__.query,sortKey:t.__defaultOperation__.sortKey,reverse:t.__defaultOperation__.reverse}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.ProductFragment)})})})})}),d;
}

function query$3(e){
var d=e.document(),
a={},
t={};



















































































return t.__defaultOperation__={},t.__defaultOperation__.handle=e.variable("handle","String!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.ProductFragment=d.defineFragment("ProductFragment","Product",function(e){e.add("id"),e.add("createdAt"),e.add("updatedAt"),e.add("descriptionHtml"),e.add("description"),e.add("handle"),e.add("productType"),e.add("title"),e.add("vendor"),e.add("tags"),e.add("publishedAt"),e.add("onlineStoreUrl"),e.add("options",function(e){e.add("name"),e.add("values")}),e.add("images",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("src"),e.add("altText")})})}),e.add("variants",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.handle],function(e){e.add("shop",function(e){e.add("productByHandle",{args:{handle:t.__defaultOperation__.handle}},function(e){e.addFragment(a.ProductFragment)})})}),d;
}







var ProductResource=function(e){


function d(){

return classCallCheck$1(this,d),possibleConstructorReturn$1(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments));
}






















































































































return inherits$1(d,e),createClass$1(d,[{key:"fetchAll",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:20;return this.graphQLClient.send(query$2,{first:e}).then(defaultResolver("shop.products")).then(paginateProductConnectionsAndResolve(this.graphQLClient))}},{key:"fetch",value:function(e){return this.graphQLClient.send(query,{id:e}).then(defaultResolver("node")).then(paginateProductConnectionsAndResolve(this.graphQLClient))}},{key:"fetchMultiple",value:function(e){return this.graphQLClient.send(query$1,{ids:e}).then(defaultResolver("nodes")).then(paginateProductConnectionsAndResolve(this.graphQLClient))}},{key:"fetchByHandle",value:function(e){return this.graphQLClient.send(query$3,{handle:e}).then(defaultResolver("shop.productByHandle")).then(paginateProductConnectionsAndResolve(this.graphQLClient))}},{key:"fetchQuery",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=e.first,a=void 0===d?20:d,t=e.sortKey,n=void 0===t?"ID":t,r=e.query,i=e.reverse;return this.graphQLClient.send(query$2,{first:a,sortKey:n,query:r,reverse:i}).then(defaultResolver("shop.products")).then(paginateProductConnectionsAndResolve(this.graphQLClient))}},{key:"helpers",get:function(){return productHelpers}}]),d;
}(Resource);

function query$4(e){
var d=e.document(),
a={},
t={};
























return t.__defaultOperation__={},t.__defaultOperation__.id=e.variable("id","ID!"),a.CollectionFragment=d.defineFragment("CollectionFragment","Collection",function(e){e.add("id"),e.add("handle"),e.add("description"),e.add("descriptionHtml"),e.add("updatedAt"),e.add("title"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")})}),d.addQuery([t.__defaultOperation__.id],function(e){e.add("node",{args:{id:t.__defaultOperation__.id}},function(e){e.addFragment(a.CollectionFragment)})}),d;
}

function query$5(e){
var d=e.document(),
a={},
t={};

















































































































return t.__defaultOperation__={},t.__defaultOperation__.id=e.variable("id","ID!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.ProductFragment=d.defineFragment("ProductFragment","Product",function(e){e.add("id"),e.add("createdAt"),e.add("updatedAt"),e.add("descriptionHtml"),e.add("description"),e.add("handle"),e.add("productType"),e.add("title"),e.add("vendor"),e.add("tags"),e.add("publishedAt"),e.add("onlineStoreUrl"),e.add("options",function(e){e.add("name"),e.add("values")}),e.add("images",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("src"),e.add("altText")})})}),e.add("variants",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.VariantFragment)})})})}),a.CollectionFragment=d.defineFragment("CollectionFragment","Collection",function(e){e.add("id"),e.add("handle"),e.add("description"),e.add("descriptionHtml"),e.add("updatedAt"),e.add("title"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")})}),a.CollectionsProductsFragment=d.defineFragment("CollectionsProductsFragment","Collection",function(e){e.add("products",{args:{first:20}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.ProductFragment)})})})}),d.addQuery([t.__defaultOperation__.id],function(e){e.add("node",{args:{id:t.__defaultOperation__.id}},function(e){e.addFragment(a.CollectionFragment),e.addFragment(a.CollectionsProductsFragment)})}),d;
}

function query$6(e){
var d=e.document(),
a={},
t={};









































return t.__defaultOperation__={},t.__defaultOperation__.first=e.variable("first","Int!"),t.__defaultOperation__.query=e.variable("query","String"),t.__defaultOperation__.sortKey=e.variable("sortKey","CollectionSortKeys"),t.__defaultOperation__.reverse=e.variable("reverse","Boolean"),a.CollectionFragment=d.defineFragment("CollectionFragment","Collection",function(e){e.add("id"),e.add("handle"),e.add("description"),e.add("descriptionHtml"),e.add("updatedAt"),e.add("title"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")})}),d.addQuery([t.__defaultOperation__.first,t.__defaultOperation__.query,t.__defaultOperation__.sortKey,t.__defaultOperation__.reverse],function(e){e.add("shop",function(e){e.add("collections",{args:{first:t.__defaultOperation__.first,query:t.__defaultOperation__.query,sortKey:t.__defaultOperation__.sortKey,reverse:t.__defaultOperation__.reverse}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.CollectionFragment)})})})})}),d;
}

function query$7(e){
var d=e.document(),
a={},
t={};
































































































































return t.__defaultOperation__={},t.__defaultOperation__.first=e.variable("first","Int!"),t.__defaultOperation__.query=e.variable("query","String"),t.__defaultOperation__.sortKey=e.variable("sortKey","CollectionSortKeys"),t.__defaultOperation__.reverse=e.variable("reverse","Boolean"),t.__defaultOperation__.productsFirst=e.variable("productsFirst","Int!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.CollectionFragment=d.defineFragment("CollectionFragment","Collection",function(e){e.add("id"),e.add("handle"),e.add("description"),e.add("descriptionHtml"),e.add("updatedAt"),e.add("title"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")})}),a.ProductFragment=d.defineFragment("ProductFragment","Product",function(e){e.add("id"),e.add("createdAt"),e.add("updatedAt"),e.add("descriptionHtml"),e.add("description"),e.add("handle"),e.add("productType"),e.add("title"),e.add("vendor"),e.add("tags"),e.add("publishedAt"),e.add("onlineStoreUrl"),e.add("options",function(e){e.add("name"),e.add("values")}),e.add("images",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("src"),e.add("altText")})})}),e.add("variants",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.VariantFragment)})})})}),d.addQuery([t.__defaultOperation__.first,t.__defaultOperation__.query,t.__defaultOperation__.sortKey,t.__defaultOperation__.reverse,t.__defaultOperation__.productsFirst],function(e){e.add("shop",function(e){e.add("collections",{args:{first:t.__defaultOperation__.first,query:t.__defaultOperation__.query,sortKey:t.__defaultOperation__.sortKey,reverse:t.__defaultOperation__.reverse}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.CollectionFragment),e.add("products",{args:{first:t.__defaultOperation__.productsFirst}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.ProductFragment)})})})})})})})}),d;
}

function query$8(e){
var d=e.document(),
a={},
t={};



















































































































return t.__defaultOperation__={},t.__defaultOperation__.handle=e.variable("handle","String!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.ProductFragment=d.defineFragment("ProductFragment","Product",function(e){e.add("id"),e.add("createdAt"),e.add("updatedAt"),e.add("descriptionHtml"),e.add("description"),e.add("handle"),e.add("productType"),e.add("title"),e.add("vendor"),e.add("tags"),e.add("publishedAt"),e.add("onlineStoreUrl"),e.add("options",function(e){e.add("name"),e.add("values")}),e.add("images",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("src"),e.add("altText")})})}),e.add("variants",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.VariantFragment)})})})}),a.CollectionFragment=d.defineFragment("CollectionFragment","Collection",function(e){e.add("id"),e.add("handle"),e.add("description"),e.add("descriptionHtml"),e.add("updatedAt"),e.add("title"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")})}),a.CollectionsProductsFragment=d.defineFragment("CollectionsProductsFragment","Collection",function(e){e.add("products",{args:{first:20}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.addFragment(a.ProductFragment)})})})}),d.addQuery([t.__defaultOperation__.handle],function(e){e.add("shop",function(e){e.add("collectionByHandle",{args:{handle:t.__defaultOperation__.handle}},function(e){e.addFragment(a.CollectionFragment),e.addFragment(a.CollectionsProductsFragment)})})}),d;
}







var CollectionResource=function(e){


function d(){

return classCallCheck$1(this,d),possibleConstructorReturn$1(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments));
}








































































































































return inherits$1(d,e),createClass$1(d,[{key:"fetchAll",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:20;return this.graphQLClient.send(query$6,{first:e}).then(defaultResolver("shop.collections"))}},{key:"fetchAllWithProducts",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=e.first,a=void 0===d?20:d,t=e.productsFirst,n=void 0===t?20:t;return this.graphQLClient.send(query$7,{first:a,productsFirst:n}).then(defaultResolver("shop.collections")).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient))}},{key:"fetch",value:function(e){return this.graphQLClient.send(query$4,{id:e}).then(defaultResolver("node"))}},{key:"fetchWithProducts",value:function(e){return this.graphQLClient.send(query$5,{id:e}).then(defaultResolver("node")).then(paginateCollectionsProductConnectionsAndResolve(this.graphQLClient))}},{key:"fetchByHandle",value:function(e){return this.graphQLClient.send(query$8,{handle:e}).then(defaultResolver("shop.collectionByHandle"))}},{key:"fetchQuery",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=e.first,a=void 0===d?20:d,t=e.sortKey,n=void 0===t?"ID":t,r=e.query,i=e.reverse;return this.graphQLClient.send(query$6,{first:a,sortKey:n,query:r,reverse:i}).then(defaultResolver("shop.collections"))}}]),d;
}(Resource);

function query$9(e){
var d=e.document();













return d.addQuery(function(e){e.add("shop",function(e){e.add("currencyCode"),e.add("description"),e.add("moneyFormat"),e.add("name"),e.add("primaryDomain",function(e){e.add("host"),e.add("sslEnabled"),e.add("url")})})}),d;
}

function query$10(e){
var d=e.document(),
a={};



















return a.PolicyFragment=d.defineFragment("PolicyFragment","ShopPolicy",function(e){e.add("id"),e.add("title"),e.add("url"),e.add("body")}),d.addQuery(function(e){e.add("shop",function(e){e.add("privacyPolicy",function(e){e.addFragment(a.PolicyFragment)}),e.add("termsOfService",function(e){e.addFragment(a.PolicyFragment)}),e.add("refundPolicy",function(e){e.addFragment(a.PolicyFragment)})})}),d;
}







var ShopResource=function(e){


function d(){

return classCallCheck$1(this,d),possibleConstructorReturn$1(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments));
}





































return inherits$1(d,e),createClass$1(d,[{key:"fetchInfo",value:function(){return this.graphQLClient.send(query$9).then(defaultResolver("shop"))}},{key:"fetchPolicies",value:function(){return this.graphQLClient.send(query$10).then(defaultResolver("shop"))}}]),d;
}(Resource);

function handleCheckoutMutation(e,d){
return function(a){
var t=a.data,
n=a.errors,
r=a.model,

i=t[e],
o=r[e];return(

i&&i.checkout?
d.fetchAllPages(o.checkout.lineItems,{pageSize:250}).then(function(e){




return o.checkout.attrs.lineItems=e,o.checkout.errors=n,o.checkout.userErrors=o.userErrors,o.checkout;
}):


n&&n.length?
Promise.reject(new Error(JSON.stringify(n))):


i&&i.userErrors&&i.userErrors.length?
Promise.reject(new Error(JSON.stringify(i.userErrors))):


Promise.reject(new Error("The "+e+" mutation failed due to an unknown error.")));
};
}

function query$11(e){
var d=e.document(),
a={},
t={};




















































































































































return t.__defaultOperation__={},t.__defaultOperation__.id=e.variable("id","ID!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.VariantWithProductFragment=d.defineFragment("VariantWithProductFragment","ProductVariant",function(e){e.addFragment(a.VariantFragment),e.add("product",function(e){e.add("id")})}),a.MailingAddressFragment=d.defineFragment("MailingAddressFragment","MailingAddress",function(e){e.add("id"),e.add("address1"),e.add("address2"),e.add("city"),e.add("company"),e.add("country"),e.add("firstName"),e.add("formatted"),e.add("lastName"),e.add("latitude"),e.add("longitude"),e.add("phone"),e.add("province"),e.add("zip"),e.add("name"),e.add("countryCode"),e.add("provinceCode")}),a.CheckoutFragment=d.defineFragment("CheckoutFragment","Checkout",function(e){e.add("id"),e.add("ready"),e.add("requiresShipping"),e.add("note"),e.add("paymentDue"),e.add("webUrl"),e.add("orderStatusUrl"),e.add("taxExempt"),e.add("taxesIncluded"),e.add("currencyCode"),e.add("totalTax"),e.add("subtotalPrice"),e.add("totalPrice"),e.add("completedAt"),e.add("createdAt"),e.add("updatedAt"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("shippingLine",function(e){e.add("handle"),e.add("price"),e.add("title")}),e.add("customAttributes",function(e){e.add("key"),e.add("value")}),e.add("order",function(e){e.add("id"),e.add("processedAt"),e.add("orderNumber"),e.add("subtotalPrice"),e.add("totalShippingPrice"),e.add("totalTax"),e.add("totalPrice"),e.add("currencyCode"),e.add("totalRefunded"),e.add("customerUrl"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),d.addQuery([t.__defaultOperation__.id],function(e){e.add("node",{args:{id:t.__defaultOperation__.id}},function(e){e.addFragment(a.CheckoutFragment)})}),d;
}

function query$12(e){
var d=e.document(),
a={},
t={};





























































































































































return t.__defaultOperation__={},t.__defaultOperation__.input=e.variable("input","CheckoutCreateInput!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.VariantWithProductFragment=d.defineFragment("VariantWithProductFragment","ProductVariant",function(e){e.addFragment(a.VariantFragment),e.add("product",function(e){e.add("id")})}),a.UserErrorFragment=d.defineFragment("UserErrorFragment","UserError",function(e){e.add("field"),e.add("message")}),a.MailingAddressFragment=d.defineFragment("MailingAddressFragment","MailingAddress",function(e){e.add("id"),e.add("address1"),e.add("address2"),e.add("city"),e.add("company"),e.add("country"),e.add("firstName"),e.add("formatted"),e.add("lastName"),e.add("latitude"),e.add("longitude"),e.add("phone"),e.add("province"),e.add("zip"),e.add("name"),e.add("countryCode"),e.add("provinceCode")}),a.CheckoutFragment=d.defineFragment("CheckoutFragment","Checkout",function(e){e.add("id"),e.add("ready"),e.add("requiresShipping"),e.add("note"),e.add("paymentDue"),e.add("webUrl"),e.add("orderStatusUrl"),e.add("taxExempt"),e.add("taxesIncluded"),e.add("currencyCode"),e.add("totalTax"),e.add("subtotalPrice"),e.add("totalPrice"),e.add("completedAt"),e.add("createdAt"),e.add("updatedAt"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("shippingLine",function(e){e.add("handle"),e.add("price"),e.add("title")}),e.add("customAttributes",function(e){e.add("key"),e.add("value")}),e.add("order",function(e){e.add("id"),e.add("processedAt"),e.add("orderNumber"),e.add("subtotalPrice"),e.add("totalShippingPrice"),e.add("totalTax"),e.add("totalPrice"),e.add("currencyCode"),e.add("totalRefunded"),e.add("customerUrl"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),d.addMutation([t.__defaultOperation__.input],function(e){e.add("checkoutCreate",{args:{input:t.__defaultOperation__.input}},function(e){e.add("userErrors",function(e){e.addFragment(a.UserErrorFragment)}),e.add("checkout",function(e){e.addFragment(a.CheckoutFragment)})})}),d;
}

function query$13(e){
var d=e.document(),
a={},
t={};































































































































































return t.__defaultOperation__={},t.__defaultOperation__.checkoutId=e.variable("checkoutId","ID!"),t.__defaultOperation__.lineItems=e.variable("lineItems","[CheckoutLineItemInput!]!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.VariantWithProductFragment=d.defineFragment("VariantWithProductFragment","ProductVariant",function(e){e.addFragment(a.VariantFragment),e.add("product",function(e){e.add("id")})}),a.UserErrorFragment=d.defineFragment("UserErrorFragment","UserError",function(e){e.add("field"),e.add("message")}),a.MailingAddressFragment=d.defineFragment("MailingAddressFragment","MailingAddress",function(e){e.add("id"),e.add("address1"),e.add("address2"),e.add("city"),e.add("company"),e.add("country"),e.add("firstName"),e.add("formatted"),e.add("lastName"),e.add("latitude"),e.add("longitude"),e.add("phone"),e.add("province"),e.add("zip"),e.add("name"),e.add("countryCode"),e.add("provinceCode")}),a.CheckoutFragment=d.defineFragment("CheckoutFragment","Checkout",function(e){e.add("id"),e.add("ready"),e.add("requiresShipping"),e.add("note"),e.add("paymentDue"),e.add("webUrl"),e.add("orderStatusUrl"),e.add("taxExempt"),e.add("taxesIncluded"),e.add("currencyCode"),e.add("totalTax"),e.add("subtotalPrice"),e.add("totalPrice"),e.add("completedAt"),e.add("createdAt"),e.add("updatedAt"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("shippingLine",function(e){e.add("handle"),e.add("price"),e.add("title")}),e.add("customAttributes",function(e){e.add("key"),e.add("value")}),e.add("order",function(e){e.add("id"),e.add("processedAt"),e.add("orderNumber"),e.add("subtotalPrice"),e.add("totalShippingPrice"),e.add("totalTax"),e.add("totalPrice"),e.add("currencyCode"),e.add("totalRefunded"),e.add("customerUrl"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),d.addMutation([t.__defaultOperation__.checkoutId,t.__defaultOperation__.lineItems],function(e){e.add("checkoutLineItemsAdd",{args:{checkoutId:t.__defaultOperation__.checkoutId,lineItems:t.__defaultOperation__.lineItems}},function(e){e.add("userErrors",function(e){e.addFragment(a.UserErrorFragment)}),e.add("checkout",function(e){e.addFragment(a.CheckoutFragment)})})}),d;
}

function query$14(e){
var d=e.document(),
a={},
t={};































































































































































return t.__defaultOperation__={},t.__defaultOperation__.checkoutId=e.variable("checkoutId","ID!"),t.__defaultOperation__.lineItemIds=e.variable("lineItemIds","[ID!]!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.VariantWithProductFragment=d.defineFragment("VariantWithProductFragment","ProductVariant",function(e){e.addFragment(a.VariantFragment),e.add("product",function(e){e.add("id")})}),a.UserErrorFragment=d.defineFragment("UserErrorFragment","UserError",function(e){e.add("field"),e.add("message")}),a.MailingAddressFragment=d.defineFragment("MailingAddressFragment","MailingAddress",function(e){e.add("id"),e.add("address1"),e.add("address2"),e.add("city"),e.add("company"),e.add("country"),e.add("firstName"),e.add("formatted"),e.add("lastName"),e.add("latitude"),e.add("longitude"),e.add("phone"),e.add("province"),e.add("zip"),e.add("name"),e.add("countryCode"),e.add("provinceCode")}),a.CheckoutFragment=d.defineFragment("CheckoutFragment","Checkout",function(e){e.add("id"),e.add("ready"),e.add("requiresShipping"),e.add("note"),e.add("paymentDue"),e.add("webUrl"),e.add("orderStatusUrl"),e.add("taxExempt"),e.add("taxesIncluded"),e.add("currencyCode"),e.add("totalTax"),e.add("subtotalPrice"),e.add("totalPrice"),e.add("completedAt"),e.add("createdAt"),e.add("updatedAt"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("shippingLine",function(e){e.add("handle"),e.add("price"),e.add("title")}),e.add("customAttributes",function(e){e.add("key"),e.add("value")}),e.add("order",function(e){e.add("id"),e.add("processedAt"),e.add("orderNumber"),e.add("subtotalPrice"),e.add("totalShippingPrice"),e.add("totalTax"),e.add("totalPrice"),e.add("currencyCode"),e.add("totalRefunded"),e.add("customerUrl"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),d.addMutation([t.__defaultOperation__.checkoutId,t.__defaultOperation__.lineItemIds],function(e){e.add("checkoutLineItemsRemove",{args:{checkoutId:t.__defaultOperation__.checkoutId,lineItemIds:t.__defaultOperation__.lineItemIds}},function(e){e.add("userErrors",function(e){e.addFragment(a.UserErrorFragment)}),e.add("checkout",function(e){e.addFragment(a.CheckoutFragment)})})}),d;
}

function query$15(e){
var d=e.document(),
a={},
t={};































































































































































return t.__defaultOperation__={},t.__defaultOperation__.checkoutId=e.variable("checkoutId","ID!"),t.__defaultOperation__.lineItems=e.variable("lineItems","[CheckoutLineItemUpdateInput!]!"),a.VariantFragment=d.defineFragment("VariantFragment","ProductVariant",function(e){e.add("id"),e.add("title"),e.add("price"),e.add("weight"),e.add("available"),e.add("sku"),e.add("compareAtPrice"),e.add("image",function(e){e.add("id"),e.add("src"),e.add("altText")}),e.add("selectedOptions",function(e){e.add("name"),e.add("value")})}),a.VariantWithProductFragment=d.defineFragment("VariantWithProductFragment","ProductVariant",function(e){e.addFragment(a.VariantFragment),e.add("product",function(e){e.add("id")})}),a.UserErrorFragment=d.defineFragment("UserErrorFragment","UserError",function(e){e.add("field"),e.add("message")}),a.MailingAddressFragment=d.defineFragment("MailingAddressFragment","MailingAddress",function(e){e.add("id"),e.add("address1"),e.add("address2"),e.add("city"),e.add("company"),e.add("country"),e.add("firstName"),e.add("formatted"),e.add("lastName"),e.add("latitude"),e.add("longitude"),e.add("phone"),e.add("province"),e.add("zip"),e.add("name"),e.add("countryCode"),e.add("provinceCode")}),a.CheckoutFragment=d.defineFragment("CheckoutFragment","Checkout",function(e){e.add("id"),e.add("ready"),e.add("requiresShipping"),e.add("note"),e.add("paymentDue"),e.add("webUrl"),e.add("orderStatusUrl"),e.add("taxExempt"),e.add("taxesIncluded"),e.add("currencyCode"),e.add("totalTax"),e.add("subtotalPrice"),e.add("totalPrice"),e.add("completedAt"),e.add("createdAt"),e.add("updatedAt"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("shippingLine",function(e){e.add("handle"),e.add("price"),e.add("title")}),e.add("customAttributes",function(e){e.add("key"),e.add("value")}),e.add("order",function(e){e.add("id"),e.add("processedAt"),e.add("orderNumber"),e.add("subtotalPrice"),e.add("totalShippingPrice"),e.add("totalTax"),e.add("totalPrice"),e.add("currencyCode"),e.add("totalRefunded"),e.add("customerUrl"),e.add("shippingAddress",function(e){e.addFragment(a.MailingAddressFragment)}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),e.add("lineItems",{args:{first:250}},function(e){e.add("pageInfo",function(e){e.add("hasNextPage"),e.add("hasPreviousPage")}),e.add("edges",function(e){e.add("cursor"),e.add("node",function(e){e.add("id"),e.add("title"),e.add("variant",function(e){e.addFragment(a.VariantWithProductFragment)}),e.add("quantity"),e.add("customAttributes",function(e){e.add("key"),e.add("value")})})})})}),d.addMutation([t.__defaultOperation__.checkoutId,t.__defaultOperation__.lineItems],function(e){e.add("checkoutLineItemsUpdate",{args:{checkoutId:t.__defaultOperation__.checkoutId,lineItems:t.__defaultOperation__.lineItems}},function(e){e.add("userErrors",function(e){e.addFragment(a.UserErrorFragment)}),e.add("checkout",function(e){e.addFragment(a.CheckoutFragment)})})}),d;
}







var CheckoutResource=function(e){


function d(){

return classCallCheck$1(this,d),possibleConstructorReturn$1(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments));
}



































































































































return inherits$1(d,e),createClass$1(d,[{key:"fetch",value:function(e){var d=this;return this.graphQLClient.send(query$11,{id:e}).then(defaultResolver("node")).then(function(e){return d.graphQLClient.fetchAllPages(e.lineItems,{pageSize:250}).then(function(d){return e.attrs.lineItems=d,e})})}},{key:"create",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return this.graphQLClient.send(query$12,{input:e}).then(handleCheckoutMutation("checkoutCreate",this.graphQLClient))}},{key:"addLineItems",value:function(e,d){return this.graphQLClient.send(query$13,{checkoutId:e,lineItems:d}).then(handleCheckoutMutation("checkoutLineItemsAdd",this.graphQLClient))}},{key:"removeLineItems",value:function(e,d){return this.graphQLClient.send(query$14,{checkoutId:e,lineItemIds:d}).then(handleCheckoutMutation("checkoutLineItemsRemove",this.graphQLClient))}},{key:"updateLineItems",value:function(e,d){return this.graphQLClient.send(query$15,{checkoutId:e,lineItems:d}).then(handleCheckoutMutation("checkoutLineItemsUpdate",this.graphQLClient))}}]),d;
}(Resource),




imageHelpers={
















imageForSize:function(e,d){
var a=d.maxWidth,
t=d.maxHeight,

n=e.src.split("?"),
r=n[0],
i=n[1]?"?"+n[1]:"",


o=r.split("."),


s=o.length-2;



return o[s]=o[s]+"_"+a+"x"+t,""+o.join(".")+i;
}},







ImageResource=function(e){


function d(){

return classCallCheck$1(this,d),possibleConstructorReturn$1(this,(d.__proto__||Object.getPrototypeOf(d)).apply(this,arguments));
}







return inherits$1(d,e),createClass$1(d,[{key:"helpers",get:function(){return imageHelpers}}]),d;
}(Resource),

version="1.4.0",

QueryRoot={name:"QueryRoot",kind:"OBJECT",fieldBaseTypes:{node:"Node",nodes:"Node",shop:"Shop"},implementsNode:!1},










Node={name:"Node",kind:"INTERFACE",fieldBaseTypes:{},possibleTypes:["AppliedGiftCard","Article","Blog","Checkout","CheckoutLineItem","Collection","Comment","MailingAddress","Order","Payment","Product","ProductOption","ProductVariant","ShopPolicy"]},






ID={name:"ID",kind:"SCALAR"},




String$1={name:"String",kind:"SCALAR"},




Boolean$1={name:"Boolean",kind:"SCALAR"},




DateTime={name:"DateTime",kind:"SCALAR"},




MailingAddress={name:"MailingAddress",kind:"OBJECT",fieldBaseTypes:{address1:"String",address2:"String",city:"String",company:"String",country:"String",countryCode:"String",firstName:"String",formatted:"String",id:"ID",lastName:"String",latitude:"Float",longitude:"Float",name:"String",phone:"String",province:"String",provinceCode:"String",zip:"String"},implementsNode:!0},
























Float={name:"Float",kind:"SCALAR"},




PageInfo={name:"PageInfo",kind:"OBJECT",fieldBaseTypes:{hasNextPage:"Boolean",hasPreviousPage:"Boolean"},implementsNode:!1},









Int={name:"Int",kind:"SCALAR"},




Order={name:"Order",kind:"OBJECT",fieldBaseTypes:{currencyCode:"CurrencyCode",customerUrl:"URL",id:"ID",lineItems:"OrderLineItemConnection",orderNumber:"Int",processedAt:"DateTime",shippingAddress:"MailingAddress",subtotalPrice:"Money",totalPrice:"Money",totalRefunded:"Money",totalShippingPrice:"Money",totalTax:"Money"},implementsNode:!0},



















Money={name:"Money",kind:"SCALAR"},




CurrencyCode={name:"CurrencyCode",kind:"ENUM"},




URL={name:"URL",kind:"SCALAR"},




OrderLineItemConnection={name:"OrderLineItemConnection",kind:"OBJECT",fieldBaseTypes:{edges:"OrderLineItemEdge",pageInfo:"PageInfo"},implementsNode:!1},









OrderLineItemEdge={name:"OrderLineItemEdge",kind:"OBJECT",fieldBaseTypes:{cursor:"String",node:"OrderLineItem"},implementsNode:!1},









OrderLineItem={name:"OrderLineItem",kind:"OBJECT",fieldBaseTypes:{customAttributes:"Attribute",quantity:"Int",title:"String",variant:"ProductVariant"},implementsNode:!1},











ProductVariant={name:"ProductVariant",kind:"OBJECT",fieldBaseTypes:{available:"Boolean",compareAtPrice:"Money",id:"ID",image:"Image",price:"Money",product:"Product",selectedOptions:"SelectedOption",sku:"String",title:"String",weight:"Float"},implementsNode:!0},

















Image={name:"Image",kind:"OBJECT",fieldBaseTypes:{altText:"String",id:"ID",src:"URL"},implementsNode:!1},










SelectedOption={name:"SelectedOption",kind:"OBJECT",fieldBaseTypes:{name:"String",value:"String"},implementsNode:!1},









Product={name:"Product",kind:"OBJECT",fieldBaseTypes:{createdAt:"DateTime",description:"String",descriptionHtml:"HTML",handle:"String",id:"ID",images:"ImageConnection",onlineStoreUrl:"URL",options:"ProductOption",productType:"String",publishedAt:"DateTime",tags:"String",title:"String",updatedAt:"DateTime",variants:"ProductVariantConnection",vendor:"String"},implementsNode:!0},






















CollectionConnection={name:"CollectionConnection",kind:"OBJECT",fieldBaseTypes:{edges:"CollectionEdge",pageInfo:"PageInfo"},implementsNode:!1},









CollectionEdge={name:"CollectionEdge",kind:"OBJECT",fieldBaseTypes:{cursor:"String",node:"Collection"},implementsNode:!1},









Collection={name:"Collection",kind:"OBJECT",fieldBaseTypes:{description:"String",descriptionHtml:"HTML",handle:"String",id:"ID",image:"Image",products:"ProductConnection",title:"String",updatedAt:"DateTime"},implementsNode:!0},















HTML={name:"HTML",kind:"SCALAR"},




ProductConnection={name:"ProductConnection",kind:"OBJECT",fieldBaseTypes:{edges:"ProductEdge",pageInfo:"PageInfo"},implementsNode:!1},









ProductEdge={name:"ProductEdge",kind:"OBJECT",fieldBaseTypes:{cursor:"String",node:"Product"},implementsNode:!1},









ImageConnection={name:"ImageConnection",kind:"OBJECT",fieldBaseTypes:{edges:"ImageEdge",pageInfo:"PageInfo"},implementsNode:!1},









ImageEdge={name:"ImageEdge",kind:"OBJECT",fieldBaseTypes:{cursor:"String",node:"Image"},implementsNode:!1},









ProductOption={name:"ProductOption",kind:"OBJECT",fieldBaseTypes:{name:"String",values:"String"},implementsNode:!0},









ProductVariantConnection={name:"ProductVariantConnection",kind:"OBJECT",fieldBaseTypes:{edges:"ProductVariantEdge",pageInfo:"PageInfo"},implementsNode:!1},









ProductVariantEdge={name:"ProductVariantEdge",kind:"OBJECT",fieldBaseTypes:{cursor:"String",node:"ProductVariant"},implementsNode:!1},









Attribute={name:"Attribute",kind:"OBJECT",fieldBaseTypes:{key:"String",value:"String"},implementsNode:!1},









Shop={name:"Shop",kind:"OBJECT",fieldBaseTypes:{collectionByHandle:"Collection",collections:"CollectionConnection",currencyCode:"CurrencyCode",description:"String",moneyFormat:"String",name:"String",primaryDomain:"Domain",privacyPolicy:"ShopPolicy",productByHandle:"Product",products:"ProductConnection",refundPolicy:"ShopPolicy",termsOfService:"ShopPolicy"},implementsNode:!1},



















Domain={name:"Domain",kind:"OBJECT",fieldBaseTypes:{host:"String",sslEnabled:"Boolean",url:"URL"},implementsNode:!1},










ShopPolicy={name:"ShopPolicy",kind:"OBJECT",fieldBaseTypes:{body:"String",id:"ID",title:"String",url:"URL"},implementsNode:!0},











Mutation$1={name:"Mutation",kind:"OBJECT",fieldBaseTypes:{checkoutCreate:"CheckoutCreatePayload",checkoutLineItemsAdd:"CheckoutLineItemsAddPayload",checkoutLineItemsRemove:"CheckoutLineItemsRemovePayload",checkoutLineItemsUpdate:"CheckoutLineItemsUpdatePayload"},implementsNode:!1,relayInputObjectBaseTypes:{checkoutAttributesUpdate:"CheckoutAttributesUpdateInput",checkoutCreate:"CheckoutCreateInput",customerAccessTokenCreate:"CustomerAccessTokenCreateInput",customerActivate:"CustomerActivateInput",customerCreate:"CustomerCreateInput",customerReset:"CustomerResetInput"}},



















UserError={name:"UserError",kind:"OBJECT",fieldBaseTypes:{field:"String",message:"String"},implementsNode:!1},









Checkout={name:"Checkout",kind:"OBJECT",fieldBaseTypes:{completedAt:"DateTime",createdAt:"DateTime",currencyCode:"CurrencyCode",customAttributes:"Attribute",id:"ID",lineItems:"CheckoutLineItemConnection",note:"String",order:"Order",orderStatusUrl:"URL",paymentDue:"Money",ready:"Boolean",requiresShipping:"Boolean",shippingAddress:"MailingAddress",shippingLine:"ShippingRate",subtotalPrice:"Money",taxExempt:"Boolean",taxesIncluded:"Boolean",totalPrice:"Money",totalTax:"Money",updatedAt:"DateTime",webUrl:"URL"},implementsNode:!0},




























CheckoutLineItemConnection={name:"CheckoutLineItemConnection",kind:"OBJECT",fieldBaseTypes:{edges:"CheckoutLineItemEdge",pageInfo:"PageInfo"},implementsNode:!1},









CheckoutLineItemEdge={name:"CheckoutLineItemEdge",kind:"OBJECT",fieldBaseTypes:{cursor:"String",node:"CheckoutLineItem"},implementsNode:!1},









CheckoutLineItem={name:"CheckoutLineItem",kind:"OBJECT",fieldBaseTypes:{customAttributes:"Attribute",id:"ID",quantity:"Int",title:"String",variant:"ProductVariant"},implementsNode:!0},












ShippingRate={name:"ShippingRate",kind:"OBJECT",fieldBaseTypes:{handle:"String",price:"Money",title:"String"},implementsNode:!1},










CheckoutCreatePayload={name:"CheckoutCreatePayload",kind:"OBJECT",fieldBaseTypes:{checkout:"Checkout",userErrors:"UserError"},implementsNode:!1},









CheckoutLineItemsAddPayload={name:"CheckoutLineItemsAddPayload",kind:"OBJECT",fieldBaseTypes:{checkout:"Checkout",userErrors:"UserError"},implementsNode:!1},









CheckoutLineItemsRemovePayload={name:"CheckoutLineItemsRemovePayload",kind:"OBJECT",fieldBaseTypes:{checkout:"Checkout",userErrors:"UserError"},implementsNode:!1},









CheckoutLineItemsUpdatePayload={name:"CheckoutLineItemsUpdatePayload",kind:"OBJECT",fieldBaseTypes:{checkout:"Checkout",userErrors:"UserError"},implementsNode:!1},









Types={
types:{}};

Types.types.QueryRoot=QueryRoot,
Types.types.Node=Node,
Types.types.ID=ID,
Types.types.String=String$1,
Types.types.Boolean=Boolean$1,
Types.types.DateTime=DateTime,
Types.types.MailingAddress=MailingAddress,
Types.types.Float=Float,
Types.types.PageInfo=PageInfo,
Types.types.Int=Int,
Types.types.Order=Order,
Types.types.Money=Money,
Types.types.CurrencyCode=CurrencyCode,
Types.types.URL=URL,
Types.types.OrderLineItemConnection=OrderLineItemConnection,
Types.types.OrderLineItemEdge=OrderLineItemEdge,
Types.types.OrderLineItem=OrderLineItem,
Types.types.ProductVariant=ProductVariant,
Types.types.Image=Image,
Types.types.SelectedOption=SelectedOption,
Types.types.Product=Product,
Types.types.CollectionConnection=CollectionConnection,
Types.types.CollectionEdge=CollectionEdge,
Types.types.Collection=Collection,
Types.types.HTML=HTML,
Types.types.ProductConnection=ProductConnection,
Types.types.ProductEdge=ProductEdge,
Types.types.ImageConnection=ImageConnection,
Types.types.ImageEdge=ImageEdge,
Types.types.ProductOption=ProductOption,
Types.types.ProductVariantConnection=ProductVariantConnection,
Types.types.ProductVariantEdge=ProductVariantEdge,
Types.types.Attribute=Attribute,
Types.types.Shop=Shop,
Types.types.Domain=Domain,
Types.types.ShopPolicy=ShopPolicy,
Types.types.Mutation=Mutation$1,
Types.types.UserError=UserError,
Types.types.Checkout=Checkout,
Types.types.CheckoutLineItemConnection=CheckoutLineItemConnection,
Types.types.CheckoutLineItemEdge=CheckoutLineItemEdge,
Types.types.CheckoutLineItem=CheckoutLineItem,
Types.types.ShippingRate=ShippingRate,
Types.types.CheckoutCreatePayload=CheckoutCreatePayload,
Types.types.CheckoutLineItemsAddPayload=CheckoutLineItemsAddPayload,
Types.types.CheckoutLineItemsRemovePayload=CheckoutLineItemsRemovePayload,
Types.types.CheckoutLineItemsUpdatePayload=CheckoutLineItemsUpdatePayload,
Types.queryType="QueryRoot",
Types.mutationType="Mutation",
Types.subscriptionType=null;

function recursivelyFreezeObject(e){







return Object.getOwnPropertyNames(e).forEach(function(d){var a=e[d];a&&"object"===("undefined"==typeof a?"undefined":_typeof(a))&&recursivelyFreezeObject(a)}),Object.freeze(e),e;
}

var types=recursivelyFreezeObject(Types),













Client=function(){























function e(d){
var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Client$2,
t=arguments[2];
classCallCheck$1(this,e);

var n="https://"+d.domain+"/api/graphql",

r={
"X-SDK-Variant":"javascript",
"X-SDK-Version":version,
"X-Shopify-Storefront-Access-Token":d.storefrontAccessToken};t?(



r["Content-Type"]="application/json",
r.Accept="application/json",

this.graphQLClient=new a(types,{
fetcher:function(e){
return t(n,{
body:JSON.stringify(e),
method:"POST",
mode:"cors",
headers:r}).
then(function(e){
return e.json();
});
}})):


this.graphQLClient=new a(types,{
url:n,
fetcherOptions:{headers:r}}),



this.product=new ProductResource(this.graphQLClient),
this.collection=new CollectionResource(this.graphQLClient),
this.shop=new ShopResource(this.graphQLClient),
this.checkout=new CheckoutResource(this.graphQLClient),
this.image=new ImageResource(this.graphQLClient);
}




















return createClass$1(e,null,[{key:"buildClient",value:function(d,a){var t=new Config(d),n=new e(t,Client$2,a);return n.config=t,n}}]),createClass$1(e,[{key:"fetchNextPage",value:function(e){return this.graphQLClient.fetchNextPage(e)}}]),e;
}();

module.exports=Client;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a};






(function(a){
var b=!1;








if('function'=="function"&&__webpack_require__(5)&&(!(__WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),b=!0),'object'===( false?'undefined':_typeof(exports))&&(module.exports=a(),b=!0),!b){
var c=window.Cookies,
d=window.Cookies=a();
d.noConflict=function(){

return window.Cookies=c,d;
};
}
})(function(){
function a(){


for(var a=0,b={};a<arguments.length;a++){
var c=arguments[a];
for(var d in c)
b[d]=c[d];

}
return b;
}

function b(c){
function d(b,e,f){
var g;
if('undefined'!=typeof document){





if(1<arguments.length){




if(f=a({path:'/'},d.defaults,f),'number'==typeof f.expires){
var h=new Date;
h.setMilliseconds(h.getMilliseconds()+864e+5*f.expires),
f.expires=h;
}


f.expires=f.expires?f.expires.toUTCString():'';

try{
g=JSON.stringify(e),
/^[\{\[]/.test(g)&&(
e=g);

}catch(a){}e=

c.write?



c.write(e,b):encodeURIComponent(e+'').replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),


b=encodeURIComponent(b+''),
b=b.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),
b=b.replace(/[\(\)]/g,escape);

var j='';

for(var k in f)
f[k]&&(


j+='; '+k,
!0!==f[k])&&(


j+='='+f[k]);

return document.cookie=b+'='+e+j;
}b||(




g={});









for(var l=document.cookie?document.cookie.split('; '):[],m=/(%[0-9A-Z]{2})+/g,n=0;n<l.length;n++){
var i=l[n].split('='),
o=i.slice(1).join('=');

this.json||'"'!==o.charAt(0)||(
o=o.slice(1,-1));


try{
var p=i[0].replace(m,decodeURIComponent);




if(o=c.read?c.read(o,p):c(o,p)||o.replace(m,decodeURIComponent),this.json)
try{
o=JSON.parse(o);
}catch(a){}


if(b===p){
g=o;
break;
}b||(


g[p]=o);

}catch(a){}
}

return g}
}




















return d.set=d,d.get=function(a){return d.call(d,a)},d.getJSON=function(){return d.apply({json:!0},[].slice.call(arguments))},d.defaults={},d.remove=function(b,c){d(b,'',a(c,{expires:-1}))},d.withConverter=b,d;
}

return b(function(){});
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 6 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports=function(a){



















return a.webpackPolyfill||(a.deprecate=function(){},a.paths=[],!a.children&&(a.children=[]),Object.defineProperty(a,"loaded",{enumerable:!0,get:function get(){return a.l}}),Object.defineProperty(a,"id",{enumerable:!0,get:function get(){return a.i}}),a.webpackPolyfill=1),a;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var


Ajaxy=function(){
function a(){_classCallCheck(this,a),


this.firstLoad=!0,


this.ajaxBefore=this.ajaxBefore.bind(this),
this.ajaxSuccess=this.ajaxSuccess.bind(this),
this.ajaxAfter=this.ajaxAfter.bind(this),
this.ajaxErrorHandler=this.ajaxErrorHandler.bind(this),
this.handlePopState=this.handlePopState.bind(this),


this.bindLinks(),


this.ajaxSuccessEvent=new Event('ajaxSuccess'),

$(window).bind('popstate',this.handlePopState);

}return _createClass(a,[{key:'handlePopState',value:function handlePopState()

{
this.firstLoad||
this.load(document.location.origin+document.location.pathname,!1);

}},{key:'bindLinks',value:function bindLinks()

{
var a='http://'+top.location.host.toString();

this.$ajaxyLinks=$('a[href^=\''+a+'\'], a[href^=\'/\'], a[href^=\'./\'], a[href^=\'../\'], a[href^=\'#\']').not('#wpadminbar a, .not-ajax'),


this.$ajaxyLinks.click(this.handleLinkClick.bind(this));
}},{key:'handleLinkClick',value:function handleLinkClick(a)

{


if(!a.isDefaultPrevented()&&!a.metaKey&&!a.ctrlKey){
a.preventDefault();

var b=a.currentTarget.href;

this.load(b);
}



}},{key:'reset',value:function reset()

{


this.$ajaxyLinks.unbind('click'),


this.bindLinks();
}},{key:'load',value:function load(a)






{var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0;

this.firstLoad=!1,b&&



history.pushState(null,null,a),


$.ajax(a,{
dataType:'html',
beforeSend:this.ajaxBefore,
error:this.ajaxErrorHandler,
success:this.ajaxSuccess,
complete:this.ajaxAfter});

}},{key:'ajaxBefore',value:function ajaxBefore()

{

$('body').addClass('loading'),
$('body, html').animate({
scrollTop:0},
300);
}},{key:'ajaxAfter',value:function ajaxAfter()

{

$('body').removeClass('loading'),

this.reset();

}},{key:'ajaxErrorHandler',value:function ajaxErrorHandler(a,b)

{
console.log(b),
console.log(a);
}},{key:'ajaxSuccess',value:function ajaxSuccess(a)

{

var b=document.createElement('html');

b.innerHTML=a;


var c=$('body',b).attr('class'),
d=$('#main-content',b),
e=$('title',b).text();


document.title=e,
$('#main-content').html(d.html()),
$('body').removeAttr('class').addClass(c+' loading'),


WP.isAdmin&&
$('#wpadminbar').html($('#wpadminbar',b)),



window.dispatchEvent(this.ajaxSuccessEvent);

}}]),a}();exports.default=


Ajaxy;

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map