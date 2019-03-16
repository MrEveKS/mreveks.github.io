(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-carusel {\r\n  width: 100%;\r\n}\r\n\r\n.contact-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 4rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.image-sale-container {\r\n  position: relative;\r\n  overflow: hidden;\r\n  height: 180px;\r\n}\r\n\r\n.image-carusel,\r\n.img-sale {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\n.telephone {\r\n  max-width: 250px;\r\n}\r\n\r\n.space {\r\n  width: 100%;\r\n  height: 3rem;\r\n}\r\n\r\n.sale {\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.footer {\r\n  min-height: 300px;\r\n  background-color: grey;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtY2FydXNlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW1hZ2Utc2FsZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1jYXJ1c2VsLFxyXG4uaW1nLXNhbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi50ZWxlcGhvbmUge1xyXG4gIG1heC13aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5zcGFjZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG4uc2FsZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Планета гриль</a>\r\n  <ul class=\"d-none d-md-block navbar-nav mr-auto\">\r\n    <li class=\"nav-item active\">\r\n      <a class=\"nav-link\" href=\"#\">г. Барнаул, ул. Крупской, 97а<span class=\"sr-only\">(current)</span></a>\r\n    </li>\r\n  </ul>\r\n  <form class=\"telephone form-inline my-2 my-lg-0\">\r\n    <div class=\"h3\">8-800-200-0600</div>\r\n    <div class=\"h6\">У нас есть доставка</div>\r\n  </form>\r\n</nav>\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light sticky-top\">\r\n  <!--<a class=\"navbar-brand\" href=\"#\">Планета гриль</a>-->\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Домой<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Ссылка</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Ссылка</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Ссылка</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <div id=\"carouselExampleCaptions\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"\"></li>\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\" class=\"active\"></li>\r\n      <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\" class=\"\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-item\">\r\n        <div style=\"height:400px;\" class=\"w-100\">\r\n          <img class=\"bd-placeholder-img bd-placeholder-img-lg d-block image-carusel\" src=\"./assets/files/gril_1.jpg\">\r\n        </div>\r\n        <div class=\"carousel-caption\">\r\n          <h5>Первое описание</h5>\r\n          <p>Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item active\">\r\n        <div style=\"height:400px;\" class=\"w-100\">\r\n          <img class=\"bd-placeholder-img bd-placeholder-img-lg d-block image-carusel\" src=\"./assets/files/gril_2.jpg\">\r\n        </div>\r\n        <div class=\"carousel-caption\">\r\n          <h5>Второе описание</h5>\r\n          <p>Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <div style=\"height:400px;\" class=\"w-100\">\r\n          <img class=\"bd-placeholder-img bd-placeholder-img-lg d-block image-carusel\" src=\"./assets/files/gril_3.jpg\">\r\n        </div>\r\n        <div class=\"carousel-caption\">\r\n          <h5>Третье описание</h5>\r\n          <p>Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid space\">\r\n  <div class=\"contact-container\">\r\n    <div class=\"h2\">Текст</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_4.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_5.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_6.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_7.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_8.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_9.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_10.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_11.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_12.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_13.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4 sale\">\r\n      <div class=\"card\">\r\n        <div class=\"image-sale-container\">\r\n          <img src=\"./assets/files/gril_14.jpg\" class=\"img-sale card-img-top\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Название карточки</h5>\r\n          <p class=\"card-text\">Тут какой-то текст</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid space\">\r\n  <div class=\"contact-container\">\r\n    <div class=\"h2\">8-800-200-0600</div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container-fluid footer\">\r\n  <div class=\"row text-white\" style=\"width:100%;text-align:center;\">\r\n    <span>Тут какая-то инфа, ссылки в вк и тп</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'planeta-gril';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eveks\Desktop\planeta_gril\planeta-gril\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map