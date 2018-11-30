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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "/* test */\r\n.map-container {\r\n  width: 100%;\r\n  height: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWO0VBQ0UsWUFBWTtFQUNaLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogdGVzdCAqL1xyXG4ubWFwLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n\r\n  <div class=\"map-container\" appGoogleMap></div>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'google-map-angular-test-project';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _google_map_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-map.directive */ "./src/app/google-map.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _google_map_directive__WEBPACK_IMPORTED_MODULE_5__["GoogleMapDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigService = /** @class */ (function () {
    function ConfigService(_http, _location) {
        this._http = _http;
        this._location = _location;
    }
    ConfigService.prototype.load = function (configFile) {
        return this._http.get(this._location.prepareExternalUrl(configFile)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { console.log(res); return res; }));
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/google-map.directive.ts":
/*!*****************************************!*\
  !*** ./src/app/google-map.directive.ts ***!
  \*****************************************/
/*! exports provided: GoogleMapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapDirective", function() { return GoogleMapDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.service */ "./src/app/script.service.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _shared_classes_dom_element_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/classes/dom-element.classes */ "./src/shared/classes/dom-element.classes.ts");
/// <reference types="@types/googlemaps" />
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleMapDirective = /** @class */ (function () {
    function GoogleMapDirective(elRef, _scriptService, _configService) {
        this.elRef = elRef;
        this._scriptService = _scriptService;
        this._configService = _configService;
        this._configFile = '/assets/map.config.json';
        this._element = elRef.nativeElement;
        this._markers = [];
    }
    GoogleMapDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._input = new _shared_classes_dom_element_classes__WEBPACK_IMPORTED_MODULE_3__["DomElement"]('input');
        this._labelButton = new _shared_classes_dom_element_classes__WEBPACK_IMPORTED_MODULE_3__["DomElement"]('div', {
            attrs: [['title', 'Поставить метку']],
            styles: [['z-index', '1'], ['padding', '10px'], ['background-color', 'green']]
        });
        this._labelButton.addChild(new _shared_classes_dom_element_classes__WEBPACK_IMPORTED_MODULE_3__["DomElement"]('i', {
            classes: ['fa', 'fa-map-marker'],
            attrs: [['aria-hidden', 'true']]
        }).element);
        this._lineButton = new _shared_classes_dom_element_classes__WEBPACK_IMPORTED_MODULE_3__["DomElement"]('div', {
            attrs: [['title', 'Выделить участок']],
            styles: [['z-index', '1'], ['padding', '10px'], ['background-color', 'green']]
        });
        this._lineButton.addChild(new _shared_classes_dom_element_classes__WEBPACK_IMPORTED_MODULE_3__["DomElement"]('i', {
            classes: ['fa', 'fa-arrows-h'],
            attrs: [['aria-hidden', 'true']]
        }).element);
        this._filterButton = new _shared_classes_dom_element_classes__WEBPACK_IMPORTED_MODULE_3__["DomElement"]('div', {
            attrs: [['title', 'Фильтр']],
            styles: [['z-index', '1'], ['padding', '10px'], ['background-color', 'green']]
        });
        this._filterButton.addChild(new _shared_classes_dom_element_classes__WEBPACK_IMPORTED_MODULE_3__["DomElement"]('i', {
            classes: ['fa', 'fa-filter'],
            attrs: [['aria-hidden', 'true']]
        }).element);
        this._configService.load(this._configFile).subscribe(function (resolve) {
            var mapConfig = resolve.json();
            _this.loadMapScript(mapConfig.api.uri);
        });
    };
    GoogleMapDirective.prototype.loadMapScript = function (uri) {
        var _this = this;
        this._scriptService.load(uri).subscribe(function () {
            _this.initialMap();
            _this.initialSearchBox();
            _this._map.controls[google.maps.ControlPosition.LEFT_CENTER].push(_this._labelButton.element);
            _this._map.controls[google.maps.ControlPosition.LEFT_CENTER].push(_this._lineButton.element);
            _this._map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(_this._filterButton.element);
            _this.initialEvents();
        }, function (reject) {
            console.log(reject);
        });
    };
    GoogleMapDirective.prototype.initialMap = function () {
        var options = {
            zoom: 13,
            center: {
                lat: 53.348053,
                lng: 83.779875
            },
            mapTypeControl: true,
            mapTypeControlOptions: {
                mapTypeIds: [
                    google.maps.MapTypeId.ROADMAP,
                    google.maps.MapTypeId.SATELLITE,
                    google.maps.MapTypeId.HYBRID,
                    google.maps.MapTypeId.TERRAIN
                ],
                style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                position: google.maps.ControlPosition.LEFT_TOP
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            },
            scaleControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this._map = new google.maps.Map(this._element, options);
    };
    GoogleMapDirective.prototype.initialSearchBox = function () {
        this._searchBox = new google.maps.places.SearchBox(this._input.element);
        this._map.controls[google.maps.ControlPosition.TOP_LEFT].push(this._input.element);
    };
    GoogleMapDirective.prototype.initialEvents = function () {
        var _this = this;
        this._map.addListener('bounds_changed', function () {
            _this._searchBox.setBounds(_this._map.getBounds());
        });
        this._map.addListener('click', function (e) {
            _this.placeMarkerAndPanTo(e.latLng);
        });
        this._searchBox.addListener('places_changed', function () {
            var places = _this._searchBox.getPlaces();
            _this._map.setCenter(places[0].geometry.location);
        });
        this._labelButton.addEvent('click', function () { return console.log('_labelButton'); });
        this._lineButton.addEvent('click', function () { return console.log('_lineButton'); });
        this._filterButton.addEvent('click', function () { return console.log('_filterButton'); });
        this._input.addEvent('input', function (event) { return console.log(event.target.value); });
    };
    GoogleMapDirective.prototype.placeMarkerAndPanTo = function (latLng) {
        var marker = new google.maps.Marker({
            icon: {
                // github icon >_<
                path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",
                fillColor: '#999',
                fillOpacity: 1,
                strokeColor: '#000',
                strokeWeight: 2,
                scale: 1,
            },
            position: latLng,
            map: this._map
        });
        this._markers.push(marker);
        var options = {
            imagePath: 'assets/images/m'
        };
        new MarkerClusterer(this._map, this._markers, options);
    };
    GoogleMapDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appGoogleMap]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _script_service__WEBPACK_IMPORTED_MODULE_1__["ScriptService"],
            _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]])
    ], GoogleMapDirective);
    return GoogleMapDirective;
}());



/***/ }),

/***/ "./src/app/script.service.ts":
/*!***********************************!*\
  !*** ./src/app/script.service.ts ***!
  \***********************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScriptService = /** @class */ (function () {
    function ScriptService() {
    }
    ScriptService.prototype.load = function (uri) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.loadScript(uri));
    };
    ScriptService.prototype.loadScript = function (uri) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = uri;
            script.onload = function () { return resolve({
                loaded: true,
                status: 'ok'
            }); };
            script.onerror = function (error) { return reject({
                loaded: false,
                status: 'error'
            }); };
            document.body.appendChild(script);
            document.body.removeChild(script);
        });
    };
    ScriptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ScriptService);
    return ScriptService;
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

/***/ "./src/shared/classes/dom-element.classes.ts":
/*!***************************************************!*\
  !*** ./src/shared/classes/dom-element.classes.ts ***!
  \***************************************************/
/*! exports provided: DomElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomElement", function() { return DomElement; });
var DomElement = /** @class */ (function () {
    function DomElement(_name, _params) {
        this._name = _name;
        this._params = _params;
        this.elementName = this._name;
        this._element = Helper.ElementFactory(this._name, this._params);
    }
    Object.defineProperty(DomElement.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
    DomElement.prototype.addClass = function () {
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        var _a;
        (_a = this._element.classList).add.apply(_a, classNames);
    };
    DomElement.prototype.addStyles = function () {
        var _this = this;
        var styles = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            styles[_i] = arguments[_i];
        }
        styles.forEach(function (attr) { return _this._element.style[attr[0]] = attr[1]; });
    };
    DomElement.prototype.addAttributes = function () {
        var _this = this;
        var attrs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attrs[_i] = arguments[_i];
        }
        attrs.forEach(function (attr) { return _this._element[attr[0]] = attr[1]; });
    };
    DomElement.prototype.addId = function (id) {
        this._element.id = id;
    };
    DomElement.prototype.addText = function (innerText) {
        this._element.innerText = innerText;
    };
    DomElement.prototype.addChild = function (child) {
        this._element.appendChild(child);
    };
    DomElement.prototype.addEvent = function (eventName, event) {
        this._element.addEventListener(eventName, event);
    };
    return DomElement;
}());

var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.ElementFactory = function (elementName, params) {
        var child = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            child[_i - 2] = arguments[_i];
        }
        var _a;
        var element = (document.createElement(elementName));
        if (params) {
            if (params.id) {
                element.id = params.id;
            }
            if (params.attrs) {
                params.attrs.forEach(function (attr) { return element[attr[0]] = attr[1]; });
            }
            if (params.styles) {
                params.styles.forEach(function (attr) { return element.style[attr[0]] = attr[1]; });
            }
            if (params.classes) {
                (_a = element.classList).add.apply(_a, params.classes);
            }
            if (params.innerText) {
                element.innerText = params.innerText;
            }
            if (child) {
                for (var index = 0; index < child.length; index++) {
                    element.appendChild(child[index]);
                }
            }
        }
        return element;
    };
    return Helper;
}());


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eveks\Documents\Visual Studio 2017\Projects\google-map-angular-test-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map