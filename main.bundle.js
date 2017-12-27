webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_utils/string-utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringUtils; });
/**
 * Author: Tran Xuan Khanh
 *      Email: xuankhanhyb@gmail.com
 * Created: 12/27/2017
 */
var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.indexOf = function (str, subStr) {
        var start = new Date().getMilliseconds();
        var positions = [];
        for (var i = 0; i < str.length; i++) {
            var index = 0;
            while ((i + index) < str.length && str.charAt(i + index) === subStr.charAt(index)) {
                if (index === subStr.length - 1) {
                    positions.push(i + 1);
                    break;
                }
                index++;
            }
        }
        console.log(new Date().getMilliseconds() - start);
        return positions;
    };
    StringUtils.indexOfIgnoreCase = function (str, subStr) {
        return StringUtils.indexOf(str.toLowerCase(), subStr.toLowerCase());
    };
    StringUtils.indexOf2 = function (str, subStr) {
        var start = new Date().getMilliseconds();
        var positions = [];
        var subIndex = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) === subStr.charAt(subIndex)) {
                subIndex++;
            }
            else {
                subIndex = 0;
            }
            if (subIndex === subStr.length) {
                positions.push(i - subIndex + 2);
                subIndex = 0;
            }
        }
        console.log(new Date().getMilliseconds() - start);
        return positions;
    };
    StringUtils.indexOfIgnoreCase2 = function (str, subStr) {
        return StringUtils.indexOf2(str.toLowerCase(), subStr.toLowerCase());
    };
    return StringUtils;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  box-sizing: border-box;\r\n  font-family: Arial;\r\n}\r\n.page-wrap{\r\n  width: 100%;\r\n}\r\n.container{\r\n  width: 70%;\r\n  margin: auto;\r\n  margin-top: 100px;\r\n}\r\n.form-wrap{\r\n  width: 100%;\r\n  padding: 20px;\r\n  overflow: hidden;\r\n}\r\n.form-group{\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\ntextarea {\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\ninput {\r\n  width: 100%;\r\n  padding: 10px;\r\n}\r\nbutton{\r\n  float: right;\r\n  border: none;\r\n  padding: 10px 20px;\r\n  cursor: pointer;\r\n}\r\n.result-wrap{\r\n  width: 100%;\r\n  padding: 20px;\r\n  overflow: hidden;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap\">\r\n  <div class=\"container\">\r\n    <div class=\"form-wrap\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <textarea [(ngModel)]=\"text\" placeholder=\"Text...\" name=\"text\" rows=\"5\"></textarea>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input [(ngModel)]=\"subText\" placeholder=\"SubText...\" name=\"subText\"/>\r\n        </div>\r\n        <div class=\"form-button\">\r\n          <button (click)=\"check()\">Check</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"result-wrap\">\r\n      <span>Ouput: {{results && results.length > 0 ? results : 'no-matches'}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_string_utils__ = __webpack_require__("../../../../../src/app/_utils/string-utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.results = [];
    }
    AppComponent.prototype.check = function () {
        if (this.text && this.subText) {
            this.results = __WEBPACK_IMPORTED_MODULE_1__utils_string_utils__["a" /* StringUtils */].indexOfIgnoreCase2(this.text, this.subText);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map