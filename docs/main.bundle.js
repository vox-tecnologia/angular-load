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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<vox-loading-global initialStatus=\"show\"></vox-loading-global>\n<vox-loading-modal></vox-loading-modal>\n<div class=\"container text-center\">\n\n  <div class=\"row\">\n    <h1 class=\"col-12\">\n      <img width=\"150\" alt=\"vox Logo\" src=\"assets/logo-vox.png\">\n    </h1>\n  </div>\n  <div class=\"row\">\n    <h2 class=\"col-12\"> Vox Loading </h2>\n\n    <div class=\"col-12\">\n      <button (click)=\"global()\" class=\"btn btn-warning\">\n        loading global\n      </button>\n      <button (click)=\"modal()\" class=\"btn btn-primary\">\n        loading modal\n      </button>\n      <button (click)=\"local()\" class=\"btn btn-info\">\n        loading local\n      </button>\n      <button (click)=\"campoSucesso()\" class=\"btn btn-success\">\n        loading input success\n      </button>\n      <button (click)=\"campoErro()\" class=\"btn btn-danger\">\n          loading input error\n      </button>\n    </div>\n  </div>\n\n  <vox-loading-local name=\"exemple-a\"></vox-loading-local>\n\n  <div class=\"row mt-3\">\n    <div class=\"col-3 offset-3\">\n      <div class=\"input-group ml-1\">\n        <div class=\"input-group-addon\">input</div>\n        <input type=\"text\" class=\"form-control\">\n      </div>\n      <vox-loading-input name=\"exemple-b\"></vox-loading-input>\n    </div>\n\n    <div class=\"col-3\">\n      <div class=\"input-group ml-1\">\n        <div class=\"input-group-addon\">input</div>\n        <input type=\"text\" class=\"form-control\">\n      </div>\n      <vox-loading-input [name]=\"exempleC\"></vox-loading-input>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vox_loading__ = __webpack_require__("../../../../../src/app/lib/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loadingGlobalService, loadingModalService, loadingInputService, loadingLocalService) {
        var _this = this;
        this.loadingGlobalService = loadingGlobalService;
        this.loadingModalService = loadingModalService;
        this.loadingInputService = loadingInputService;
        this.loadingLocalService = loadingLocalService;
        this.exempleC = 'exemplo-c';
        setTimeout(function () {
            _this.loadingGlobalService.hide();
        }, 1500);
    }
    AppComponent.prototype.global = function () {
        var _this = this;
        this.loadingGlobalService.show();
        setTimeout(function () {
            _this.loadingGlobalService.hide();
        }, 1500);
    };
    AppComponent.prototype.modal = function () {
        var _this = this;
        this.loadingModalService.show({ title: 'optional title', message: 'optional message' });
        setTimeout(function () {
            _this.loadingModalService.hide();
        }, 1500);
    };
    AppComponent.prototype.local = function () {
        var _this = this;
        this.loadingLocalService.show('exemple-a');
        setTimeout(function () {
            _this.loadingLocalService.hide('exemple-a');
        }, 1500);
    };
    AppComponent.prototype.campoSucesso = function () {
        var _this = this;
        this.loadingInputService.show('exemple-b', 'optional text');
        setTimeout(function () {
            _this.loadingInputService.hide('exemple-b', 'success', { success: 'optional success text' });
        }, 1500);
    };
    AppComponent.prototype.campoErro = function () {
        var _this = this;
        this.loadingInputService.show(this.exempleC);
        setTimeout(function () {
            _this.loadingInputService.hide(_this.exempleC, 'error', { error: 'optional error text' });
        }, 1500);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vox-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__vox_loading__["b" /* LoadingGlobalService */],
            __WEBPACK_IMPORTED_MODULE_1__vox_loading__["h" /* LoadingModalService */],
            __WEBPACK_IMPORTED_MODULE_1__vox_loading__["d" /* LoadingInputService */],
            __WEBPACK_IMPORTED_MODULE_1__vox_loading__["f" /* LoadingLocalService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vox_loading__ = __webpack_require__("../../../../../src/app/lib/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__vox_loading__["a" /* LoadingGlobalModule */],
                __WEBPACK_IMPORTED_MODULE_3__vox_loading__["g" /* LoadingModalModule */],
                __WEBPACK_IMPORTED_MODULE_3__vox_loading__["c" /* LoadingInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__vox_loading__["e" /* LoadingLocalModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/lib/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_global_loading_global_module__ = __webpack_require__("../../../../../src/app/lib/loading-global/loading-global.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loading_global_loading_global_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_modal_loading_modal_module__ = __webpack_require__("../../../../../src/app/lib/loading-modal/loading-modal.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__loading_modal_loading_modal_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_input_loading_input_module__ = __webpack_require__("../../../../../src/app/lib/loading-input/loading-input.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__loading_input_loading_input_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_local_loading_local_module__ = __webpack_require__("../../../../../src/app/lib/loading-local/loading-local.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__loading_local_loading_local_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_global_loading_global_service__ = __webpack_require__("../../../../../src/app/lib/loading-global/loading-global.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__loading_global_loading_global_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_modal_loading_modal_service__ = __webpack_require__("../../../../../src/app/lib/loading-modal/loading-modal.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__loading_modal_loading_modal_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_input_loading_input_service__ = __webpack_require__("../../../../../src/app/lib/loading-input/loading-input.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_6__loading_input_loading_input_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loading_local_loading_local_service__ = __webpack_require__("../../../../../src/app/lib/loading-local/loading-local.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__loading_local_loading_local_service__["a"]; });










/***/ }),

/***/ "../../../../../src/app/lib/loading-global/loading-global.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-global{\n  z-index: 1000;\n  position: fixed;\n  top: 35%;\n  right: 45%;\n  color: #FFF;\n}\n\n.blackscreen {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  background-color: rgba(0,0,0,0.5)\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lib/loading-global/loading-global.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!show\">\n  <i class=\"loading-global fa fa-circle-o-notch fa-spin fa-5x fa-fw\"></i>\n  <span class=\"sr-only\">Loading...</span>\n  <div class=\"blackscreen\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lib/loading-global/loading-global.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingGlobalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_global_service__ = __webpack_require__("../../../../../src/app/lib/loading-global/loading-global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingGlobalComponent = /** @class */ (function () {
    function LoadingGlobalComponent(loadingGlobalService) {
        this.loadingGlobalService = loadingGlobalService;
    }
    LoadingGlobalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this.loadingGlobalService.loaderState.subscribe(function (state) { return _this.show = state.show; });
    };
    LoadingGlobalComponent.prototype.ngOnChanges = function () {
        if (!!this.initialStatus && this.initialStatus !== 'show') {
            throw new Error('property "initialStatus" can bem only set to "show"');
        }
        this.show = this.initialStatus === 'show' ? true : false;
    };
    LoadingGlobalComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], LoadingGlobalComponent.prototype, "initialStatus", void 0);
    LoadingGlobalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vox-loading-global',
            template: __webpack_require__("../../../../../src/app/lib/loading-global/loading-global.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lib/loading-global/loading-global.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loading_global_service__["a" /* LoadingGlobalService */]])
    ], LoadingGlobalComponent);
    return LoadingGlobalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-global/loading-global.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingGlobalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_global_component__ = __webpack_require__("../../../../../src/app/lib/loading-global/loading-global.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_global_service__ = __webpack_require__("../../../../../src/app/lib/loading-global/loading-global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingGlobalModule = /** @class */ (function () {
    function LoadingGlobalModule() {
    }
    LoadingGlobalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loading_global_component__["a" /* LoadingGlobalComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__loading_global_component__["a" /* LoadingGlobalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__loading_global_service__["a" /* LoadingGlobalService */]]
        })
    ], LoadingGlobalModule);
    return LoadingGlobalModule;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-global/loading-global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingGlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingGlobalService = /** @class */ (function () {
    function LoadingGlobalService() {
        this._loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.loaderState = this._loaderSubject.asObservable();
    }
    LoadingGlobalService.prototype.show = function () {
        this._loaderSubject.next({ show: true });
    };
    LoadingGlobalService.prototype.hide = function () {
        this._loaderSubject.next({ show: false });
    };
    LoadingGlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoadingGlobalService);
    return LoadingGlobalService;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-input/input-properties.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputProperties; });
var InputProperties = /** @class */ (function () {
    function InputProperties() {
        this._textLoading = 'Carregando';
        this._textSuccess = 'Concluído';
        this._textError = 'Não encontrado';
    }
    Object.defineProperty(InputProperties.prototype, "textLoading", {
        get: function () {
            return this._textLoading;
        },
        set: function (textLoading) {
            this._textLoading = textLoading || this._textLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputProperties.prototype, "textSuccess", {
        get: function () {
            return this._textSuccess;
        },
        set: function (textSuccess) {
            this._textSuccess = textSuccess || this._textSuccess;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputProperties.prototype, "textError", {
        get: function () {
            return this._textError;
        },
        set: function (textError) {
            this._textError = textError || this._textError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputProperties.prototype, "resultError", {
        get: function () {
            return this._resultError;
        },
        set: function (resultError) {
            this._resultError = resultError;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputProperties.prototype, "resultSuccess", {
        get: function () {
            return this._resultSuccess;
        },
        set: function (resultSuccess) {
            this._resultSuccess = resultSuccess;
        },
        enumerable: true,
        configurable: true
    });
    return InputProperties;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-input/loading-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lib/loading-input/loading-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix text-left\">\n  <p [hidden]=\"!show\">\n    <i class=\"text-info fa fa-circle-o-notch fa-spin fa-fw fa-lg\"></i>\n    <span class=\"sr-only\">Loading...</span>\n    {{ properties.textLoading }}\n  </p>\n  <p [hidden]=\"show || !properties.resultSuccess || properties.resultError\">\n    <i class=\"text-success fa fa-check-circle\" aria-hidden=\"true\"></i>\n    {{ properties.textSuccess }}\n  </p>\n  <p [hidden]=\"show || properties.resultSuccess || !properties.resultError\">\n    <i class=\"text-danger fa fa-times-circle\" aria-hidden=\"true\"></i>\n    {{ properties.textError }}\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lib/loading-input/loading-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_input_service__ = __webpack_require__("../../../../../src/app/lib/loading-input/loading-input.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_properties__ = __webpack_require__("../../../../../src/app/lib/loading-input/input-properties.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_enum__ = __webpack_require__("../../../../../src/app/lib/loading-input/status-enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoadingInputComponent = /** @class */ (function () {
    function LoadingInputComponent(loadingInputService) {
        this.loadingInputService = loadingInputService;
        this._properties = new __WEBPACK_IMPORTED_MODULE_2__input_properties__["a" /* InputProperties */]();
    }
    LoadingInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this.loadingInputService.loaderState.subscribe(function (state) {
            _this.show = _this.checaNome(state) ? state.show : _this.show;
            _this._properties.textLoading = state.textMessage;
            if (!_this.show && _this.checaNome(state)) {
                _this.setProperties(state);
                setTimeout(function () {
                    _this._properties.resultError = false;
                    _this._properties.resultSuccess = false;
                }, 3000);
            }
        });
    };
    LoadingInputComponent.prototype.ngOnChanges = function () {
        if (!!this.initialStatus && this.initialStatus !== 'show') {
            throw new Error('property "initialStatus" can bem only set to "show"');
        }
        this.show = this.initialStatus === 'show' ? true : false;
    };
    LoadingInputComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    Object.defineProperty(LoadingInputComponent.prototype, "properties", {
        get: function () {
            return this._properties;
        },
        enumerable: true,
        configurable: true
    });
    LoadingInputComponent.prototype.checaNome = function (state) {
        return this.name === state.name;
    };
    LoadingInputComponent.prototype.setProperties = function (state) {
        if (state.text) {
            this._properties.textSuccess = state.text.success;
            this._properties.textError = state.text.error;
        }
        this._properties.resultError = state.status === __WEBPACK_IMPORTED_MODULE_3__status_enum__["a" /* StatusEnum */].ERROR ? true : false;
        this._properties.resultSuccess = state.status === __WEBPACK_IMPORTED_MODULE_3__status_enum__["a" /* StatusEnum */].SUCCESS ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], LoadingInputComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], LoadingInputComponent.prototype, "initialStatus", void 0);
    LoadingInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vox-loading-input',
            template: __webpack_require__("../../../../../src/app/lib/loading-input/loading-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lib/loading-input/loading-input.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loading_input_service__["a" /* LoadingInputService */]])
    ], LoadingInputComponent);
    return LoadingInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-input/loading-input.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingInputModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_input_component__ = __webpack_require__("../../../../../src/app/lib/loading-input/loading-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_input_service__ = __webpack_require__("../../../../../src/app/lib/loading-input/loading-input.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingInputModule = /** @class */ (function () {
    function LoadingInputModule() {
    }
    LoadingInputModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loading_input_component__["a" /* LoadingInputComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__loading_input_component__["a" /* LoadingInputComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__loading_input_service__["a" /* LoadingInputService */]]
        })
    ], LoadingInputModule);
    return LoadingInputModule;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-input/loading-input.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingInputService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingInputService = /** @class */ (function () {
    function LoadingInputService() {
        this._loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.loaderState = this._loaderSubject.asObservable();
    }
    LoadingInputService.prototype.show = function (element, textMessage) {
        this._loaderSubject.next({ show: true, name: element, textMessage: textMessage });
    };
    LoadingInputService.prototype.hide = function (element, status, text) {
        this._loaderSubject.next({ show: false, name: element, status: status, text: text });
    };
    LoadingInputService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoadingInputService);
    return LoadingInputService;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-input/status-enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusEnum; });
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["ERROR"] = "error";
    StatusEnum["SUCCESS"] = "success";
})(StatusEnum || (StatusEnum = {}));


/***/ }),

/***/ "../../../../../src/app/lib/loading-local/loading-local.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-local {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lib/loading-local/loading-local.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!show\" class=\"p-2 loading-local\">\n    <p class=\"m-0\" [hidden]=\"false\">\n        <i class=\"text-info fa fa-circle-o-notch fa-spin fa-fw fa-3x\"></i>\n        <span class=\"sr-only\">Loading...</span>\n    </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lib/loading-local/loading-local.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingLocalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_local_service__ = __webpack_require__("../../../../../src/app/lib/loading-local/loading-local.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingLocalComponent = /** @class */ (function () {
    function LoadingLocalComponent(loadingLocalService) {
        this.loadingLocalService = loadingLocalService;
    }
    LoadingLocalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this.loadingLocalService.loaderState.subscribe(function (state) { return _this.show = _this.checaNome(state) ? state.show : _this.show; });
    };
    LoadingLocalComponent.prototype.ngOnChanges = function () {
        if (!!this.initialStatus && this.initialStatus !== 'show') {
            throw new Error('property "initialStatus" can bem only set to "show"');
        }
        this.show = this.initialStatus === 'show' ? true : false;
    };
    LoadingLocalComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    LoadingLocalComponent.prototype.checaNome = function (state) {
        return this.name === state.name;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], LoadingLocalComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], LoadingLocalComponent.prototype, "initialStatus", void 0);
    LoadingLocalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vox-loading-local',
            template: __webpack_require__("../../../../../src/app/lib/loading-local/loading-local.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lib/loading-local/loading-local.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loading_local_service__["a" /* LoadingLocalService */]])
    ], LoadingLocalComponent);
    return LoadingLocalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-local/loading-local.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingLocalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_local_service__ = __webpack_require__("../../../../../src/app/lib/loading-local/loading-local.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_local_component__ = __webpack_require__("../../../../../src/app/lib/loading-local/loading-local.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoadingLocalModule = /** @class */ (function () {
    function LoadingLocalModule() {
    }
    LoadingLocalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__loading_local_component__["a" /* LoadingLocalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__loading_local_service__["a" /* LoadingLocalService */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__loading_local_component__["a" /* LoadingLocalComponent */]]
        })
    ], LoadingLocalModule);
    return LoadingLocalModule;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-local/loading-local.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingLocalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingLocalService = /** @class */ (function () {
    function LoadingLocalService() {
        this._loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.loaderState = this._loaderSubject.asObservable();
    }
    LoadingLocalService.prototype.show = function (element) {
        this._loaderSubject.next({ name: element, show: true });
    };
    LoadingLocalService.prototype.hide = function (element) {
        this._loaderSubject.next({ name: element, show: false });
    };
    LoadingLocalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoadingLocalService);
    return LoadingLocalService;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-modal/loading-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-header.title {\n  text-align: center !important;\n}\n.modal-header.title h4 {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lib/loading-modal/loading-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content>\n  <div class=\"modal-header title\">\n    <h4 class=\"modal-title\">{{ title || 'Carregando&hellip;' }}</h4>\n  </div>\n  <div class=\"modal-body text-center\">\n    <i class=\"text-info fa fa-circle-o-notch fa-spin fa-4x fa-fw\"></i>\n  <span class=\"sr-only\">Loading...</span>\n  <p class=\"mt-3 mb-0\">{{ textModal || 'Carregando dados, por favor aguarde&hellip;' }}</p>\n  </div>\n  <div class=\"modal-footer\">\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/lib/loading-modal/loading-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_modal_service__ = __webpack_require__("../../../../../src/app/lib/loading-modal/loading-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingModalComponent = /** @class */ (function () {
    function LoadingModalComponent(loadingModalService, modalService) {
        this.loadingModalService = loadingModalService;
        this.modalService = modalService;
        this._modalOptions = {};
    }
    LoadingModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._subscription = this.loadingModalService.loaderState.subscribe(function (state) {
            if (state.show) {
                _this.setaConteudo(state);
                _this._modalOptions.backdrop = 'static';
                _this._modalOptions.keyboard = false;
                _this._modalRef = _this.modalService.open(_this._content, _this._modalOptions);
                return;
            }
            _this._modalRef.close();
        });
    };
    LoadingModalComponent.prototype.ngOnChanges = function () {
        if (!!this.initialStatus && this.initialStatus !== 'show') {
            throw new Error('property "initialStatus" can bem only set to "show"');
        }
        this.show = this.initialStatus === 'show' ? true : false;
    };
    LoadingModalComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    LoadingModalComponent.prototype.setaConteudo = function (state) {
        if (state.content) {
            this.textModal = state.content.message;
            this.title = state.content.title;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LoadingModalComponent.prototype, "_content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Object)
    ], LoadingModalComponent.prototype, "initialStatus", void 0);
    LoadingModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'vox-loading-modal',
            template: __webpack_require__("../../../../../src/app/lib/loading-modal/loading-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lib/loading-modal/loading-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loading_modal_service__["a" /* LoadingModalService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]])
    ], LoadingModalComponent);
    return LoadingModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-modal/loading-modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_modal_component__ = __webpack_require__("../../../../../src/app/lib/loading-modal/loading-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_modal_service__ = __webpack_require__("../../../../../src/app/lib/loading-modal/loading-modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoadingModalModule = /** @class */ (function () {
    function LoadingModalModule() {
    }
    LoadingModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModalModule */].forRoot()],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__loading_modal_component__["a" /* LoadingModalComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__loading_modal_component__["a" /* LoadingModalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__loading_modal_service__["a" /* LoadingModalService */]]
        })
    ], LoadingModalModule);
    return LoadingModalModule;
}());



/***/ }),

/***/ "../../../../../src/app/lib/loading-modal/loading-modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingModalService = /** @class */ (function () {
    function LoadingModalService() {
        this._loaderSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.loaderState = this._loaderSubject.asObservable();
    }
    LoadingModalService.prototype.show = function (content) {
        this._loaderSubject.next({ show: true, content: content });
    };
    LoadingModalService.prototype.hide = function () {
        this._loaderSubject.next({ show: false });
    };
    LoadingModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoadingModalService);
    return LoadingModalService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
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