(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas id=\"snake\" width=\"800\" height=\"600\" snake>HTML 5 не поддерживется</canvas>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'snake';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_directives_snake_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/snake.directive */ "./src/shared/directives/snake.directive.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _shared_directives_snake_directive__WEBPACK_IMPORTED_MODULE_5__["SnakeDirective"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/shared/classes/fruit.class.ts":
/*!*******************************************!*\
  !*** ./src/shared/classes/fruit.class.ts ***!
  \*******************************************/
/*! exports provided: Fruit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fruit", function() { return Fruit; });
class Fruit {
    constructor(_width, _height, _failCheck) {
        this._width = _width;
        this._height = _height;
        this._failCheck = _failCheck;
        this.FRUIT_SIZE = 25;
    }
    get fruitSize() {
        return this.FRUIT_SIZE;
    }
    get fruitXPosition() {
        return this._currentFruitXPosition;
    }
    get fruitYPosition() {
        return this._currentFruitYPosition;
    }
    generateFruit() {
        this._currentFruitXPosition = this.generateCoordinate(this._width);
        this._currentFruitYPosition = this.generateCoordinate(this._height);
        if (this._failCheck(this._currentFruitXPosition, this._currentFruitYPosition))
            this.generateFruit();
    }
    generateCoordinate(value) {
        return Math.round((value / this.FRUIT_SIZE - 1) * Math.random()) * this.FRUIT_SIZE;
    }
}


/***/ }),

/***/ "./src/shared/classes/game.class.ts":
/*!******************************************!*\
  !*** ./src/shared/classes/game.class.ts ***!
  \******************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class Game {
    constructor() {
        this.gameStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initilize();
    }
    start() {
        this._gameProcessTimer = setInterval(this.eventEmit.bind(this), this._delay);
    }
    stop() {
        clearInterval(this._gameProcessTimer);
    }
    initilize() {
        this._delay = 1000 / 5;
    }
    eventEmit() {
        this.gameStep.emit({});
    }
}
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Game.prototype, "gameStep", void 0);


/***/ }),

/***/ "./src/shared/classes/stake.class.ts":
/*!*******************************************!*\
  !*** ./src/shared/classes/stake.class.ts ***!
  \*******************************************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
class Snake {
    constructor(_width, _height) {
        this._width = _width;
        this._height = _height;
        this.SNAKE_SIZE = 25;
        this.initilize();
    }
    get snakeSize() {
        return this.SNAKE_SIZE;
    }
    get snakeXPosition() {
        return this._currentSnakeXPosition;
    }
    get snakeYPosition() {
        return this._currentSnakeYPosition;
    }
    get snakeXPositions() {
        return this._snakeXpositions;
    }
    get snakeYPositions() {
        return this._snakeYpositions;
    }
    set motionVectorX(value) {
        this._motionVectorX = value;
    }
    set motionVectorY(value) {
        this._motionVectorY = value;
    }
    updateSnakePosition() {
        this._currentSnakeXPosition = this.updateCoordinate(this._currentSnakeXPosition, 0, this._width, this._motionVectorX);
        this._currentSnakeYPosition = this.updateCoordinate(this._currentSnakeYPosition, 0, this._height, this._motionVectorY);
    }
    checkCollision() {
        return this.check(this._currentSnakeXPosition, this._currentSnakeYPosition);
    }
    failCheck(x, y) {
        return this.check(x, y);
    }
    check(x, y) {
        if (this._snakeXpositions.indexOf(x) !== -1 && this._snakeYpositions.indexOf(y) !== -1) {
            return true;
        }
        return false;
    }
    snakeStape() {
        this._snakeXpositions.unshift(this._currentSnakeXPosition);
        this._snakeYpositions.unshift(this._currentSnakeYPosition);
    }
    snakeNoResize() {
        this._snakeXpositions.pop();
        this._snakeYpositions.pop();
    }
    resetSnake() {
        this.setDefaultValues();
    }
    updateCoordinate(currentValue, minValue, maxValue, vector) {
        currentValue += this.SNAKE_SIZE * vector;
        if (currentValue > maxValue) {
            currentValue = 0;
        }
        else if (currentValue < minValue) {
            currentValue = maxValue - this.SNAKE_SIZE;
        }
        return currentValue;
    }
    initilize() {
        this.setDefaultValues();
    }
    setDefaultValues() {
        this._motionVectorX = 0;
        this._motionVectorY = 0;
        this._currentSnakeXPosition = this._width / 2 - this.SNAKE_SIZE;
        this._currentSnakeYPosition = this._height / 2 - this.SNAKE_SIZE;
        this._snakeXpositions = [];
        this._snakeYpositions = [];
    }
}
/*
var snake = document.getElementById("snake"), //id convas
  ctx = snake.getContext("2d"),
  xS = snake.width, yS = snake.height, // Берем из convas значение ширины и высоты
  qS = 25, //Размер элемента змейки
  xZ = xS / 2 - qS, yZ = yS / 2 - qS, //Координаты позиции змейки, со стартовой позицией
  vK, xK = 0, yK = 0, //Направление (вектор) движения змейки
  xZarr = [], yZarr = [], //Массивы координат змейки
  xF, yF, //Координаты позиции фрукта
  rS = 0; //Счетчик, т.е. число съеденных фруктов

fruit(); //Вызываем функцию для расчета случайной стартовой позиции фрукта

//Функция случайного выбора координат для фрукта
function fruit() {
  xF = Math.round((xS / qS - 1) * Math.random()) * qS;
  yF = Math.round((yS / qS - 1) * Math.random()) * qS;
  for (var i = 0; i <= (rS); i++) if (xZarr[i] == xF && yZarr[i] == yF) fruit(); //Повторный рандом при наложении на змейку
};

//Функция обнуления змейки при столкновении с хвостом
function feil() {
  ctx.fillStyle = "White"; //Вспышка при столкновении
  ctx.fillRect(0, 0, xS, yS);
  xZarr.length = 1; //Стираем X-массив змейки до 1 элемента
  yZarr.length = 1; //Стираем Y-массив змейки до 1 элемента
  rS = 0; //Обнуляем счетчик
};

//Отслеживаем нажатие клавиш в потоке событий
onkeydown = function (event) {
  event.preventDefault(); //Отменяются исполнения браузером событий event, что-бы не срабатывал скролл(прокрутка) страниц, при нажатии стрелок
  switch (event.keyCode) {
    case 38: case 87: if (vK != 1) { xK = 0; yK = -1; vK = 1 }; break; //Вверх
    case 39: case 68: if (vK != 2) { xK = 1; yK = 0; vK = 2 }; break; //Вправо
    case 40: case 83: if (vK != 1) { xK = 0; yK = 1; vK = 1 }; break; //Вниз
    case 37: case 65: if (vK != 2) { xK = -1; yK = 0; vK = 2 }; break; //Влево
  }
};

//Функция отрисовки кадра через интервал времени
setInterval(function () {

  //Фон и размер игрового поля
  ctx.fillStyle = "SpringGreen";
  ctx.fillRect(0, 0, xS, yS);

  //Тень
  ctx.shadowBlur = 10;
  ctx.shadowColor = "MidnightBlue";

  //Цвет и позиция фрукта
  ctx.beginPath();
  ctx.arc(xF + qS / 2, yF + qS / 2, qS / 1.6, qS / 1.6, Math.PI * 2, true); //Разметка оружности
  ctx.fillStyle = "Red"; //Цвет круга
  ctx.fill();
  ctx.strokeStyle = "Lime"; //Цвет линии окружности
  ctx.stroke();

  //Рассчитываем координату при движении и телепортируем при выходе за края
  xZ = xZ + xK * qS;
  if (xZ >= xS) xZ = 0;
  if (xZ < 0) xZ = xS - qS;
  yZ = yZ + yK * qS;
  if (yZ >= yS) yZ = 0;
  if (yZ < 0) yZ = yS - qS;

  //Проверка на столкновение
  for (var i = 0; i <= (rS); i++) if (xZarr[i] == xZ && yZarr[i] == yZ) feil();

  //Заменяем координаты в начальных элементах массива
  xZarr.unshift(xZ);
  yZarr.unshift(yZ);

  //Цвет и цикл вывода массива элементов змейки с отрисовкой
  ctx.fillStyle = "Blue";
  for (var i = 0; i <= (rS); i++) ctx.fillRect(xZarr[i] + 1, yZarr[i] + 1, qS - 2, qS - 2); //Отрисовка массива змейки

  //Кушаем фрукт, при совпадении координат головы змеи и фрукта - выводим новый фрукт и счетчик +1
  if (xF == xZ && yF == yZ) {
    fruit();
    rS++;
  } else { //Иначе - стираем хвост, т.е. змейка перемещается без прироста
    xZarr.pop();
    yZarr.pop();
  }

  //Выводим счетчик съеденных фруктов
  ctx.fillStyle = "Black"; //Цвет шрифта счетчика
  ctx.font = "bold 13pt Arial"; //Стиль, размер и шрифт
  ctx.textBaseline = "middle"; //Расположение по вертикали
  ctx.textAlign = "center"; //Расположение по горизонтали
  ctx.fillText(rS + 1, xF + qS / 2, yF + qS / 2); //Расположение счетчика (привязка к фрукту)

}, 1000 / 15); //Пауза (кадров в секунду)
*/


/***/ }),

/***/ "./src/shared/directives/snake.directive.ts":
/*!**************************************************!*\
  !*** ./src/shared/directives/snake.directive.ts ***!
  \**************************************************/
/*! exports provided: SnakeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeDirective", function() { return SnakeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _classes_stake_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/stake.class */ "./src/shared/classes/stake.class.ts");
/* harmony import */ var _classes_game_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/game.class */ "./src/shared/classes/game.class.ts");
/* harmony import */ var _classes_fruit_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/fruit.class */ "./src/shared/classes/fruit.class.ts");





let SnakeDirective = class SnakeDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this._canvas = this._elementRef.nativeElement;
        this._context = this._canvas.getContext('2d');
        this._width = this._canvas.width;
        this._height = this._canvas.height;
    }
    onKeyPress(event) {
        this.keyPressListener(event);
    }
    ngOnInit() {
        this._score = 0;
        this._snake = new _classes_stake_class__WEBPACK_IMPORTED_MODULE_2__["Snake"](this._width, this._height);
        this._game = new _classes_game_class__WEBPACK_IMPORTED_MODULE_3__["Game"]();
        this._fruit = new _classes_fruit_class__WEBPACK_IMPORTED_MODULE_4__["Fruit"](this._width, this._height, this._snake.failCheck.bind(this._snake));
        this._game.gameStep.subscribe((eventObject) => this.updateElement(eventObject));
        this.startGame();
    }
    keyPressListener(event) {
        event.preventDefault();
        console.log(event);
        switch (event.keyCode) {
            case 38:
            case 87:
                if (this._block != 1 && !this._keyBlock) {
                    this._snake.motionVectorX = 0;
                    this._snake.motionVectorY = -1;
                    this._block = 1;
                    this._keyBlock = true;
                }
                ;
                break;
            case 39:
            case 68:
                if (this._block != 2 && !this._keyBlock) {
                    this._snake.motionVectorX = 1;
                    this._snake.motionVectorY = 0;
                    this._block = 2;
                    this._keyBlock = true;
                }
                ;
                break;
            case 40:
            case 83:
                if (this._block != 1 && !this._keyBlock) {
                    this._snake.motionVectorX = 0;
                    this._snake.motionVectorY = 1;
                    this._block = 1;
                    this._keyBlock = true;
                }
                ;
                break;
            case 37:
            case 65:
                if (this._block != 2 && !this._keyBlock) {
                    this._snake.motionVectorX = -1;
                    this._snake.motionVectorY = 0;
                    this._block = 2;
                    this._keyBlock = true;
                }
                ;
                break;
        }
    }
    startGame() {
        this._fruit.generateFruit();
        this._game.start();
    }
    updateElement(eventObject) {
        this._keyBlock = false;
        this.updateFill();
        this.generateFruit();
        this._snake.updateSnakePosition();
        if (this._snake.checkCollision()) {
            this.gameFail();
            this.startGame();
            return;
        }
        else {
            this._snake.snakeStape();
        }
        this.snakeFill();
        if (this._snake.snakeXPosition === this._fruit.fruitXPosition && this._snake.snakeYPosition === this._fruit.fruitYPosition) {
            this.scoreUp();
        }
        else {
            this._snake.snakeNoResize();
        }
    }
    scoreUp() {
        this._score++;
        this.updateFill();
        this._fruit.generateFruit();
        this.generateFruit();
        this.snakeFill();
    }
    updateFill() {
        this._context.fillStyle = 'SpringGreen';
        this._context.fillRect(0, 0, this._width, this._height);
        this._context.shadowBlur = 2;
        this._context.shadowColor = 'MidnightBlue';
    }
    generateFruit() {
        let fruitSize = this._fruit.fruitSize, fruitXPosition = this._fruit.fruitXPosition, fruitYPosition = this._fruit.fruitYPosition;
        this._context.beginPath();
        this._context.arc(fruitXPosition + fruitSize / 2, fruitYPosition + fruitSize / 2, fruitSize / 1.6, fruitSize / 1.6, Math.PI * 2, true);
        this._context.fillStyle = 'Red';
        this._context.fill();
        this._context.strokeStyle = 'Lime';
        this._context.stroke();
        this.updateScore();
    }
    snakeFill() {
        let snakeSize = this._snake.snakeSize, snakeXPositions = this._snake.snakeXPositions, snakeYPositions = this._snake.snakeYPositions;
        this._context.fillStyle = 'Blue';
        for (let index = 0; index <= snakeXPositions.length; index++) {
            this._context.fillRect(snakeXPositions[index] + 1, snakeYPositions[index] + 1, snakeSize - 2, snakeSize - 2);
        }
    }
    gameFail() {
        this._game.stop();
        this._score = 0;
        this._snake.resetSnake();
        this._context.fillStyle = 'White';
        this.updateFill();
    }
    updateScore() {
        let fruitSize = this._fruit.fruitSize, fruitXPosition = this._fruit.fruitXPosition, fruitYPosition = this._fruit.fruitYPosition;
        this._context.fillStyle = 'Black';
        this._context.font = 'bold 13pt Arial';
        this._context.textBaseline = 'middle';
        this._context.textAlign = 'center';
        this._context.fillText(`${this._score + 1}`, fruitXPosition + fruitSize / 2, fruitYPosition + fruitSize / 2);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SnakeDirective.prototype, "onKeyPress", null);
SnakeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[snake]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], SnakeDirective);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\eveks\Desktop\snake\snake\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map