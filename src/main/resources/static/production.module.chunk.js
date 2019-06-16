webpackJsonp(["production.module"],{

/***/ "./src/app/common/service/echar-watermark.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartWatermarkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EchartWatermarkService = /** @class */ (function () {
    function EchartWatermarkService() {
    }
    EchartWatermarkService.prototype.getWaterMark12 = function (deviceType, waterMark) {
        var waterMarkObject;
        switch (deviceType) {
            case 'phone':
                break;
            case 'pad':
                break;
            case 'monitor':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '0%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '0%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '0%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                ];
                break;
            case 'tv':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '0%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '0%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '0%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                ];
                break;
        }
        return waterMarkObject;
    };
    EchartWatermarkService.prototype.getWaterMark9 = function (deviceType, waterMark) {
        var waterMarkObject;
        switch (deviceType) {
            case 'phone':
                break;
            case 'pad':
                break;
            case 'monitor':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '5%',
                        top: '0%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '0%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '0%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '5%',
                        top: '30%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '30%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '30%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '5%',
                        top: '60%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '60%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '60%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                ];
                break;
            case 'tv':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '5%',
                        top: '0%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '0%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '0%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '5%',
                        top: '30%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '30%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '30%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '5%',
                        top: '60%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '60%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '60%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                ];
                break;
        }
        return waterMarkObject;
    };
    EchartWatermarkService.prototype.getWaterMark8 = function (deviceType, waterMark) {
        var waterMarkObject;
        switch (deviceType) {
            case 'phone':
                break;
            case 'pad':
                break;
            case 'monitor':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '5%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '5%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                ];
                break;
            case 'tv':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '5%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '5%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '40%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                ];
                break;
        }
        return waterMarkObject;
    };
    EchartWatermarkService.prototype.getWaterMark6 = function (deviceType, waterMark) {
        var waterMarkObject;
        switch (deviceType) {
            case 'phone':
                break;
            case 'pad':
                break;
            case 'monitor':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '10%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '10%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                ];
                break;
            case 'tv':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '10%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '10%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '50%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                ];
                break;
        }
        return waterMarkObject;
    };
    EchartWatermarkService.prototype.getWaterMark4 = function (deviceType, waterMark) {
        var waterMarkObject;
        switch (deviceType) {
            case 'phone':
                break;
            case 'pad':
                break;
            case 'monitor':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '0%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '0%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '0%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 20px Microsoft YaHei'
                        }
                    },
                ];
                break;
            case 'tv':
                waterMarkObject = [
                    {
                        type: 'text',
                        left: '0%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '-10%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '0%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '25%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '0%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '25%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '50%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                    {
                        type: 'text',
                        left: '75%',
                        top: '65%',
                        z: 0,
                        cursor: 'default',
                        rotation: Math.PI * 0.125,
                        style: {
                            fill: 'rgba(188, 188, 188, 0.7)',
                            text: waterMark,
                            font: 'bold 25px Microsoft YaHei'
                        }
                    },
                ];
                break;
        }
        return waterMarkObject;
    };
    EchartWatermarkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EchartWatermarkService);
    return EchartWatermarkService;
}());



/***/ }),

/***/ "./src/app/common/service/routerInterceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouterInterceptorService = /** @class */ (function () {
    function RouterInterceptorService(http, route) {
        this.http = http;
        this.route = route;
        this.getUrlList();
    }
    RouterInterceptorService.prototype.getUrlList = function () {
        var _this = this;
        var options = {
            params: {
                userName: localStorage.getItem('currentUserName'),
            }
        };
        this.http.get('/menu/select/url', options).subscribe(function (res) {
            _this.RouterLinks = res;
        }, function (error) { console.log(error); });
    };
    RouterInterceptorService.prototype.canActivate = function () {
        console.log('-----------' + this.route.routeConfig.path);
        return true;
    };
    RouterInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]])
    ], RouterInterceptorService);
    return RouterInterceptorService;
}());



/***/ }),

/***/ "./src/app/production/common/model/scrapentity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrapEntity; });
var ScrapEntity = /** @class */ (function () {
    function ScrapEntity() {
    }
    return ScrapEntity;
}());



/***/ }),

/***/ "./src/app/production/common/production-chart-option.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionChartOptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_echar_watermark_service__ = __webpack_require__("./src/app/common/service/echar-watermark.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductionChartOptionService = /** @class */ (function () {
    function ProductionChartOptionService(waterMarkService) {
        this.waterMarkService = waterMarkService;
    }
    ProductionChartOptionService.prototype.getOptionInputOutput = function (title, respText, waterMark, deviceType) {
        var waterMarkObject = this.waterMarkService.getWaterMark9(deviceType, waterMark);
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '65%', left: '30%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '67%', left: '26%', top: '3%' };
                waterMarkFontSize = 'bold 25px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                subtext: '     ' + respText.today,
                align: 'left',
                left: '0%',
                top: '1%',
                itemGap: 25,
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
                subtextStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: eval('(' + respText.legend + ')'),
                type: 'scroll',
                textStyle: {
                    fontSize: 10,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Movement',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            // 水印增加
            graphic: waterMarkObject
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOptionInputOutputFlexible = function (title, respText, waterMarkObject, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '65%', left: '30%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '67%', left: '26%', top: '3%' };
                waterMarkFontSize = 'bold 25px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                subtext: '     ' + respText.today,
                align: 'left',
                left: '0%',
                top: '1%',
                itemGap: 25,
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
                subtextStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: eval('(' + respText.legend + ')'),
                type: 'scroll',
                textStyle: {
                    fontSize: 10,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Movement',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            // 水印增加
            graphic: waterMarkObject
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOptionDummy = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                subtext: '     ' + respText.todaydate,
                align: 'left',
                left: '0%',
                top: '1%',
                itemGap: 25,
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
                subtextStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3);'
                        + 'font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + value[2] + '：'
                        + '</div>'
                        + obj.seriesName + ' : ' + value[1] + '<br>';
                }
            },
            legend: {
                data: eval('(' + respText.legend + ')'),
                type: 'scroll',
                textStyle: {
                    fontSize: 10,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Dummt Qty',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            /*                             if (value > 999 || value < -999) {
                                                            const i = value / 1000;
                                                            return i + 'K';
                                                        } else {
                                                            return value;
                                                        } */
                            return value;
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            // 水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOption_Yield = function (respText, title) {
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    left: '0%',
                    top: '1%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: '220%',
                    },
                },
                {
                    text: '过货量:',
                    left: '2%',
                    align: 'left',
                    bottom: '3%',
                }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName !== '过货量') {
                        if (obj.seriesType === 'bar') {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3);'
                                + 'font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + obj.seriesName + ' 不良数量：' + value[4] + '<br>';
                        }
                        if (obj.seriesType === 'line') {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3);'
                                + 'font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + value[3] + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>';
                        }
                    }
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: '45%',
                top: '2.5%',
                width: '50%',
                selected: {
                    '亮点A': false,
                    '多亮点A': false,
                }
            },
            xAxis: [
                {
                    type: 'category',
                    gridIndex: 0,
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: 5,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: 4,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '120%',
                        margin: '15',
                    }
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    data: eval('(' + respText.xdata + ')'),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Defect',
                    nameTextStyle: {
                        fontSize: '120%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: '120%',
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: 5,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: 4,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Yield',
                    scale: true,
                    min: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;
                        // 最大值和最小值相同时，坐标轴最小值为value最小值减2
                        if (rangeplus === 0) {
                            rangeplus = 2;
                        }
                        var a = Math.floor(value.min - rangeplus);
                        if (a < 5) {
                            return 0;
                        }
                        else {
                            return a;
                        }
                    },
                    max: function (value) {
                        var range = value.max - value.min;
                        var rangeplus = range / 5;
                        // 最大值和最小值相同时，坐标轴最大值为value最大值加2
                        if (rangeplus === 0) {
                            rangeplus = 2;
                        }
                        var a = Math.ceil(value.max + rangeplus);
                        if (a > 100) {
                            return 100;
                        }
                        else {
                            return a;
                        }
                    },
                    nameTextStyle: {
                        fontSize: '120%',
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: '120%',
                        margin: '15',
                    },
                    axisLine: {
                        lineStyle: {
                            width: 5,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: 4,
                        }
                    },
                    splitLine: {
                        show: false
                    },
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            grid: [{
                    x: '7%',
                    x2: '7%',
                    y: '12%',
                    height: '70%'
                }, {
                    x: '7%',
                    x2: '7%',
                    y2: '4%',
                    height: '4%'
                }],
            series: eval('(' + respText.series + ')'),
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOption_ActPlan = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        var symbolSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%' };
                legend = { width: '71%', left: '35%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '90%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 7;
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                break;
        }
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    subtext: '     ' + respText.lastUpdatetime,
                    left: '0%',
                    top: '1%',
                    itemGap: 25,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                    subtextStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                        color: 'rgb(0,0,0)',
                    },
                }, {
                    text: respText.actplanRatio,
                    right: '18%',
                    align: 'right',
                    top: '7%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                        color: 'rgb(0,0,0)',
                    },
                }],
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: ['DAILY PLAN', 'DAILY ACT', 'CUM PLAN', 'CUM ACT'],
                selected: {
                    'All': false,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Daily',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Cum',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine: {
                        show: false
                    },
                }
            ],
            grid: grid,
            series: [
                {
                    name: 'DAILY PLAN',
                    type: 'bar',
                    stack: '1',
                    data: eval('(' + respText.data_dailyplan + ')'),
                },
                {
                    name: 'DAILY ACT',
                    type: 'bar',
                    stack: '2',
                    data: eval('(' + respText.data_dailyact + ')'),
                },
                {
                    name: 'CUM PLAN',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumplan + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
                {
                    name: 'CUM ACT',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumact + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
            ],
            // 水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOption_Rt = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        var symbolSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%' };
                legend = { width: '71%', left: '35%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '90%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 7;
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                break;
        }
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    subtext: '     ' + respText.lastUpdatetime,
                    left: '0%',
                    top: '1%',
                    itemGap: 25,
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                    subtextStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                        color: 'rgb(0,0,0)',
                    },
                }, {
                    text: respText.actplanRatio,
                    right: '18%',
                    align: 'right',
                    top: '7%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                        color: 'rgb(0,0,0)',
                    },
                }],
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: ['Stock In Cum', 'Rt Cum', 'Stock In Daily', 'Rt Daily'],
                selected: {
                    'All': false,
                },
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Daily',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Cum',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine: {
                        show: false
                    },
                }
            ],
            grid: grid,
            series: [
                {
                    name: 'Stock In Daily',
                    type: 'bar',
                    stack: '1',
                    barWidth: '70%',
                    data: eval('(' + respText.data_dailyplan + ')'),
                },
                {
                    name: 'Rt Daily',
                    type: 'bar',
                    stack: '1',
                    barWidth: '70%',
                    data: eval('(' + respText.data_dailyact + ')'),
                },
                {
                    name: 'Stock In Cum',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumplan + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
                {
                    name: 'Rt Cum',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.data_cumact + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                },
            ],
            // 水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOption_WIPMove = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        var symbolSize;
        var seriesFontSize;
        var axisLabelFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '50%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%', y2: '22%' };
                legend = { width: '71%', left: '50%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                symbolSize = 6;
                seriesFontSize = 9;
                axisLabelFontSize = 9;
                break;
            case 'tv':
                fontSize = '110%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%', y2: '22%' };
                legend = { width: '71%', left: '40%', top: '2%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                symbolSize = 10;
                seriesFontSize = 11;
                axisLabelFontSize = 10;
                break;
        }
        var option = {
            title: {
                text: title,
                subtext: '     ' + respText.today + '    WIP总量：' + respText.wiptotal,
                align: 'left',
                left: '0%',
                top: '1%',
                itemGap: 25,
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
                subtextStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            legend: {
                data: ['WIP', 'MOVEMENT', 'MOVEMENT_OK'],
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 315,
                        color: 'rgb(66,66,66)',
                        fontSize: axisLabelFontSize,
                    },
                    // 坐标轴颜色调整为灰色，宽度调宽
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'WIP',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Movement',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine: {
                        show: false
                    },
                },
            ],
            dataZoom: [{
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    handleSize: 15,
                    height: 8,
                    left: 30,
                    right: 40,
                    bottom: 30,
                    handleColor: '#ddd',
                    handleStyle: {
                        borderColor: '#cacaca',
                        borderWidth: '0.5',
                        shadowBlur: 2,
                        background: '#ddd',
                        shadowColor: '#ddd',
                    },
                    /*                     fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                            //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                                            //给第一个设置0，第四个设置1，就是垂直渐变
                                            offset: 0,
                                            color: '#1eb5e5'
                                        }, {
                                            offset: 1,
                                            color: '#5ccbb1'
                                        }]), */
                    backgroundColor: '#ddd',
                    showDataShadow: false,
                    showDetail: false,
                    handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                    filterMode: 'filter',
                },
                // 下面这个属性是里面拖到
                {
                    type: 'inside',
                    show: true,
                    xAxisIndex: [0],
                    start: 1,
                    end: 100
                }
            ],
            grid: grid,
            series: [
                {
                    name: 'WIP',
                    type: 'bar',
                    data: eval('(' + respText.wipdata + ')'),
                    label: {
                        normal: {
                            show: true,
                            fontSize: seriesFontSize
                        }
                    },
                    barWidth: '50%',
                }, {
                    name: 'MOVEMENT',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.movedata + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                    label: {
                        normal: {
                            show: true,
                            fontSize: seriesFontSize
                        }
                    }
                },
                {
                    name: 'MOVEMENT_OK',
                    type: 'line',
                    yAxisIndex: 1,
                    data: eval('(' + respText.okmovedata + ')'),
                    symbol: 'circle',
                    symbolSize: symbolSize,
                    label: {
                        normal: {
                            show: true,
                            position: 'bottom',
                            fontSize: seriesFontSize
                        }
                    }
                },
            ],
            // 水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOption_WIPMoveByLine = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '36%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '200%', sub: '110%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '8%', y: '20%', y2: '22%' };
                legend = { width: '71%', left: '50%', top: '3%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '19%', y2: '22%' };
                legend = { width: '50%', left: '46%', top: '3%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '110%';
                titleFontSize = { main: '200%', sub: '120%' };
                axisWidth = 4;
                grid = { x: '7%', x2: '7%', y: '14%', y2: '22%' };
                legend = { width: '55%', left: '40%', top: '2%' };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                subtext: '     ' + respText.today + '    WIP总量：' + respText.wiptotal,
                align: 'left',
                left: '0%',
                top: '1%',
                itemGap: 25,
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
                subtextStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} : {c}'
            },
            // toolbox: {
            // feature: {
            // dataView: {show: true, readOnly: true},
            // }
            // },
            legend: {
                data: eval('(' + respText.legendData + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                // 图例排布
                width: legend.width,
            },
            xAxis: [
                {
                    type: 'category',
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLabel: {
                        interval: 0,
                        rotate: 315,
                        color: 'rgb(66,66,66)',
                    },
                    // 坐标轴颜色调整为灰色，宽度调宽
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'WIP',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    name: 'Movement',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: '120%',
                        margin: '15',
                        formatter: function (value) {
                            if (value > 999 || value < -999) {
                                var i = value / 1000;
                                return i + 'K';
                            }
                            else {
                                return value;
                            }
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    // 坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                    splitLine: {
                        show: false
                    },
                },
            ],
            dataZoom: [{
                    type: 'slider',
                    show: true,
                    xAxisIndex: [0],
                    handleSize: 20,
                    height: 8,
                    left: 30,
                    right: 40,
                    bottom: 30,
                    handleColor: '#ddd',
                    handleStyle: {
                        borderColor: '#cacaca',
                        borderWidth: '1',
                        shadowBlur: 2,
                        background: '#ddd',
                        shadowColor: '#ddd',
                    },
                    /*                     fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                            //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变
                                            //给第一个设置0，第四个设置1，就是垂直渐变
                                            offset: 0,
                                            color: '#1eb5e5'
                                        }, {
                                            offset: 1,
                                            color: '#5ccbb1'
                                        }]), */
                    backgroundColor: '#ddd',
                    showDataShadow: false,
                    showDetail: false,
                    handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                    filterMode: 'filter',
                },
                // 下面这个属性是里面拖到
                {
                    type: 'inside',
                    show: true,
                    xAxisIndex: [0],
                    start: 1,
                    end: 100
                }
            ],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            // 水印增加
            graphic: [
                {
                    type: 'text',
                    left: '5%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '50%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOption_eacCutproduction = function (title, respText, waterMark, deviceType) {
        var schema = [
            { name: 'date', index: 0, text: '日' },
            { name: 'FPY', index: 1, text: 'FPY' },
            { name: '良品', index: 2, text: '良品' },
            { name: '产出', index: 3, text: '产出' },
        ];
        var fontSize;
        var axisWidth;
        var symbolSize;
        var visualMap;
        var titleFontsize;
        var waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '100%';
                axisWidth = 2;
                symbolSize = [10, 20];
                visualMap = { height: 0, width: 0 };
                break;
            case 'pad':
                fontSize = '100%';
                axisWidth = 2;
                symbolSize = [10, 50];
                visualMap = { height: 100, width: 20 };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontsize = '180%';
                axisWidth = 2;
                symbolSize = [10, 70];
                visualMap = { height: 100, width: 25 };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontsize = '220%';
                axisWidth = 4;
                symbolSize = [10, 100];
                visualMap = { height: 120, width: 30 };
                waterMarkFontSize = 'bold 30px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                align: 'left',
                left: '0%',
                top: '1%',
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontsize,
                },
            },
            color: ['#1a778d',
                '#ff9933',
                '#1d18eb',
                '#db7108',
                '#7CCD7C',
                '#0aa28e',
                '#FFB90F',
                '#B03060',
                '#556B2F',
                '#BFBFBF',
                '#EE7942',
                '#dc9de6',
                '#1ef1d5',
                '#b210ce',
                '#b3133e'],
            legend: {
                type: 'scroll',
                left: '25%',
                top: '2.5%',
                // 图例排布
                width: '71%',
                data: eval('(' + respText.legenddata + ')'),
            },
            grid: {
                x: '7%',
                x2: '7%',
                y: '14%',
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3);'
                        + ' font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + obj.seriesName + ' ' + value[4] + '：'
                        + '</div>'
                        + schema[1].text + '：' + value[1] + '%' + '<br>'
                        + schema[2].text + '：' + value[2] + '<br>'
                        + schema[3].text + '：' + value[3] + '<br>';
                }
            },
            xAxis: {
                name: '日期',
                type: 'category',
                data: eval('(' + respText.xdata + ')'),
                nameTextStyle: {
                    fontSize: fontSize,
                    fontFamily: '微软雅黑',
                    color: 'rgb(66,66,66)',
                },
                axisLine: {
                    lineStyle: {
                        width: axisWidth,
                        color: 'rgb(168,168,168)'
                    },
                    axisLabel: {
                        show: true,
                    },
                },
                // 坐标轴刻度加粗
                axisTick: {
                    length: 8,
                    lineStyle: {
                        width: axisWidth,
                    }
                },
                axisLabel: {
                    color: 'rgb(66,66,66)',
                    fontSize: fontSize,
                    margin: '15',
                },
            },
            yAxis: {
                type: 'value',
                name: 'FPY',
                // nameGap: 20,
                scale: true,
                min: function (value) {
                    var range = value.max - value.min;
                    var rangeplus = range / 5;
                    var a = Math.floor(value.min - rangeplus);
                    if (a < 5) {
                        return 0;
                    }
                    else {
                        return a;
                    }
                },
                max: function (value) {
                    var range = value.max - value.min;
                    var rangeplus = range / 5;
                    var a = Math.ceil(value.max + rangeplus);
                    if (a > 100) {
                        return 100;
                    }
                    else {
                        return a;
                    }
                },
                nameTextStyle: {
                    fontSize: fontSize,
                    fontFamily: '微软雅黑',
                    color: 'rgb(66,66,66)',
                },
                axisLabel: {
                    formatter: '{value}%',
                    color: 'rgb(66,66,66)',
                    fontSize: fontSize,
                    margin: '15',
                },
                axisLine: {
                    lineStyle: {
                        width: axisWidth,
                        color: 'rgb(168,168,168)'
                    },
                    axisLabel: {
                        show: true,
                    },
                },
                // 坐标轴刻度加粗
                axisTick: {
                    length: 6,
                    lineStyle: {
                        width: axisWidth,
                    }
                },
                splitLine: {
                    show: true,
                },
                splitNumber: 4,
            },
            visualMap: [
                {
                    left: 'right',
                    top: '8%',
                    dimension: 3,
                    min: eval('(' + respText.min + ')'),
                    max: eval('(' + respText.max + ')'),
                    itemWidth: visualMap.width,
                    itemHeight: visualMap.height,
                    calculable: true,
                    precision: 0.1,
                    text: ['圆形大小：产量'],
                    textGap: 30,
                    inRange: {
                        symbolSize: symbolSize
                    },
                    outOfRange: {
                        symbolSize: [10, 70],
                        color: ['rgba(255,255,255,.2)']
                    },
                    controller: {
                        inRange: {
                            color: ['#919191']
                        },
                        outOfRange: {
                            color: ['#d0d0d0']
                        }
                    }
                },
            ],
            series: eval('(' + respText.series + ')'),
            graphic: [
                {
                    type: 'text',
                    left: '10%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
                {
                    type: 'text',
                    left: '47%',
                    top: '35%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOPtion_DayScrapBrtChart = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontsize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '180%', sub: '100%' };
                axisWidth = 2;
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '80%';
                titleFontSize = { main: '140%', sub: '90%' };
                axisWidth = 2;
                grid = [{
                        x: '8%',
                        x2: '7%',
                        y: '18%',
                        height: '71%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '0%',
                        height: '4%'
                    }];
                legend = { width: '55%', left: '40%', top: '2%' };
                waterMarkFontsize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '105%';
                titleFontSize = { main: '180%', sub: '110%' };
                axisWidth = 4;
                grid = [{
                        x: '8%',
                        x2: '7%',
                        y: '16%',
                        height: '72%'
                    }, {
                        x: '7%',
                        x2: '7%',
                        y2: '1%',
                        height: '3%'
                    }];
                legend = { width: '57%', left: '35%', top: '2%' };
                waterMarkFontsize = 'bold 25px Microsoft YaHei';
                break;
        }
        var option = {
            title: [{
                    text: title,
                    align: 'left',
                    left: '0%',
                    top: '1%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.main,
                    },
                },
                {
                    text: '数量:',
                    left: '0%',
                    align: 'left',
                    bottom: '0%',
                    textStyle: {
                        fontFamily: '微软雅黑',
                        fontSize: titleFontSize.sub,
                    },
                }],
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    if (obj.seriesName != "过货量") {
                        if (obj.seriesType == "bar") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + obj.name + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + obj.seriesName + ' Scrap数量：' + value[4] + '<br>';
                        }
                        if (obj.seriesType == "line") {
                            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                + obj.name + '：'
                                + '</div>'
                                + obj.seriesName + '：' + value[1] + '%' + '<br>'
                                + obj.seriesName + ' 等级数量：' + value[4] + '<br>';
                        }
                    }
                    /*else{
                      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                        + '过货量：' + value[2] + '<br>'
                    }*/
                }
            },
            legend: {
                data: eval('(' + respText.legenddata + ')'),
                type: 'scroll',
                left: legend.left,
                top: legend.top,
                width: '35%',
            },
            xAxis: [
                {
                    type: 'category',
                    gridIndex: 0,
                    data: eval('(' + respText.xdata + ')'),
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 8,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    axisLabel: {
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '10',
                    }
                }, {
                    type: 'category',
                    gridIndex: 1,
                    show: false,
                    data: eval('(' + respText.xdata + ')'),
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    gridIndex: 0,
                    name: 'Scrap Ratio',
                    nameTextStyle: {
                        fontSize: fontSize,
                        fontFamily: '微软雅黑',
                        color: 'rgb(66,66,66)',
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgb(66,66,66)',
                        fontSize: fontSize,
                        margin: '5',
                    },
                    axisLine: {
                        lineStyle: {
                            width: axisWidth,
                            color: 'rgb(168,168,168)'
                        },
                        axisLabel: {
                            show: true,
                        },
                    },
                    //坐标轴刻度加粗
                    axisTick: {
                        length: 6,
                        lineStyle: {
                            width: axisWidth,
                        }
                    },
                    splitNumber: 4,
                },
                {
                    type: 'value',
                    gridIndex: 0,
                    show: false,
                }, {
                    type: 'value',
                    gridIndex: 1,
                    show: false,
                }
            ],
            color: ["#6423AA",
                "#FA4B32",
                "#8DACC1",
                "#61A0A8",
                "#B8C306",
                "#D48265",
                "#91C7AE",
                "#749F83",
                "#CA8622",
                "#2F9BC1",
                "#BDA29A",
                "#6E7074",
                "#546570",
                "#C4CCD3",
                "#005766",
                "#008B8B",
                "#00CDCD",
                "#00FF7F",
                "#228B22",
                "#2E8B57",
                "#4876FF",
                "#6CA6CD",
                "#698B22",
                "#6CA6CD",
                "#8B1A1A",
                "#7F3569",
                "#8B3626",
                "#8B4500",
                "#E9F16F",
                "#8B4789",
                "#8B5A2B",
                "#8B6508",
                "#8B7355",
                "#8CFFA1",
                "#B895D8",
                "#310D52",
                "#B0E2FF",
                "#8E8E19",
                "#0E123E",
                "#731941",
                "#CC9DBE",
                "#090831",
                "#9050C1",
                "#886838",
                "#6B4814",
                "#375A9A",
                "#32B323",
                "#1E92C7",
                "#C71E5C",
                "#AF1F5E"],
            grid: grid,
            series: eval('(' + respText.series + ')'),
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '8%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontsize
                    }
                }
            ],
        };
        return option;
    };
    ProductionChartOptionService.prototype.getOPtion_DetailScrapPieChart = function (title, respText, waterMark, deviceType) {
        var fontSize;
        var axisWidth;
        var grid;
        var titleFontSize;
        var legend;
        var waterMarkFontSize;
        switch (deviceType) {
            case 'phone':
                fontSize = '60%';
                titleFontSize = { main: '140%', sub: '80%' };
                axisWidth = 2;
                grid = { x: '10%', x2: '7%', y: '20%' };
                legend = { width: '71%', left: '26%', top: '1%' };
                break;
            case 'pad':
                fontSize = '100%';
                titleFontSize = { main: '160%', sub: '100%' };
                axisWidth = 2;
                grid = { x: '7%', x2: '7%', y: '14%' };
                legend = { width: '71%', left: '35%', top: '7%' };
                break;
            case 'monitor':
                fontSize = '90%';
                titleFontSize = { main: '140%', sub: '100%' };
                axisWidth = 3;
                grid = {
                    x: '10%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 20px Microsoft YaHei';
                break;
            case 'tv':
                fontSize = '120%';
                titleFontSize = { main: '150%', sub: '120%' };
                axisWidth = 4;
                grid = {
                    x: '7%',
                    x2: '7%',
                    y: '12%',
                    height: '75%'
                };
                legend = { width: '71%', left: '26%', top: '1%' };
                waterMarkFontSize = 'bold 25px Microsoft YaHei';
                break;
        }
        var option = {
            title: {
                text: title,
                subtext: eval('(' + respText.subTitle + ')'),
                itemGap: 25,
                top: '2%',
                left: '5%',
                textStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.main,
                },
                subtextStyle: {
                    fontFamily: '微软雅黑',
                    fontSize: titleFontSize.sub,
                    color: 'rgb(0,0,0)',
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                top: 'bottom',
                data: eval('(' + respText.legendData + ')'),
                selectedMode: false,
                type: 'scroll',
            },
            series: [
                {
                    name: 'Scrap百分数',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '55%'],
                    // roseType: 'angle',
                    startAngle: 0,
                    data: eval('(' + respText.series + ')'),
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        normal: {
                            formatter: ' {d}% ',
                        }
                    },
                }
            ],
            //水印增加
            graphic: [
                {
                    type: 'text',
                    left: '8%',
                    top: '20%',
                    z: 0,
                    cursor: 'default',
                    rotation: Math.PI * 0.125,
                    style: {
                        fill: 'rgb(188,188,188)',
                        text: waterMark,
                        font: waterMarkFontSize
                    }
                },
            ],
        };
        return option;
    };
    ProductionChartOptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_echar_watermark_service__["a" /* EchartWatermarkService */]])
    ], ProductionChartOptionService);
    return ProductionChartOptionService;
}());



/***/ }),

/***/ "./src/app/production/pro-bp/pro-bp.component.css":
/***/ (function(module, exports) {

module.exports = ".tabSetting {\r\n    position: fixed;\r\n    right: 2%;\r\n    top: 9%;\r\n}\r\n#tabMove{\r\n    position: fixed;\r\n    right: 5%;\r\n    top: 9.5%\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n\r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n\r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-tabSetting{\r\n        position: fixed;\r\n        right: 2%;\r\n        top: 11%;\r\n    }\r\n    .lg-tabMove{\r\n        position: fixed;\r\n        right: 5%;\r\n        top: 12%\r\n    }\r\n\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-tabSetting{\r\n        position: fixed;\r\n        right: 2%;\r\n        top: 8.5%;\r\n    }\r\n    .xl-tabMove{\r\n        position: fixed;\r\n        right: 5%;\r\n        top: 9.5%\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/production/pro-bp/pro-bp.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n<p-tabView (onChange)=\"onTabChange($event)\" [activeIndex]=\"index\">\n    <p-tabPanel header=\"投入产出\" leftIcon=\"pi pi-calendar\" *ngIf=\"display[0]\">\n        <app-inout #Child_InputOutput [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-inout>\n    </p-tabPanel>\n    <p-tabPanel header=\"计划实绩\" leftIcon=\"pi pi-inbox\" *ngIf=\"display[1]\">\n        <app-actplan #Child_ActPlan [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-actplan>\n    </p-tabPanel>\n    <p-tabPanel header=\"WIP/Movement\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[2]\">\n        <app-wipmovement #Child_WipMove [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-wipmovement>\n    </p-tabPanel>\n    <p-tabPanel header=\"Scrap\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[3]\">\n        <app-scrap #Child_Scrap [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-scrap>\n    </p-tabPanel>\n    <p-tabPanel header=\"Dummy\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[4]\">\n        <app-dummy #Child_Dummy [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-dummy>\n    </p-tabPanel>\n</p-tabView>\n<!-- <button type=\"button\" pButton icon=\"fa fa-search\" (click)=\"watermarkChange()\" class=\"xl-tabSetting lg-tabSetting\"></button> -->"

/***/ }),

/***/ "./src/app/production/pro-bp/pro-bp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProBpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pro_mdl_inout_inout_component__ = __webpack_require__("./src/app/production/pro-mdl/inout/inout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pro_mdl_actplan_actplan_component__ = __webpack_require__("./src/app/production/pro-mdl/actplan/actplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pro_mdl_wipmovement_wipmovement_component__ = __webpack_require__("./src/app/production/pro-mdl/wipmovement/wipmovement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pro_mdl_scrap_scrap_component__ = __webpack_require__("./src/app/production/pro-mdl/scrap/scrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pro_mdl_dummy_dummy_component__ = __webpack_require__("./src/app/production/pro-mdl/dummy/dummy.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProBpComponent = /** @class */ (function () {
    function ProBpComponent(httpService, location, stringMethod, breadcrumbService, tService, EchartService) {
        this.httpService = httpService;
        this.location = location;
        this.stringMethod = stringMethod;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.EchartService = EchartService;
        this.index = 0;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.shopName = 'BP';
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'Production' },
            { label: 'BP' },
        ]);
        this.tService.setItems('Production-BP');
    }
    ProBpComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true, true];
        var locationUrl = '';
        for (var i in this.location) {
            if (i === 'location') {
                locationUrl = this.location[i].href;
                break;
            }
        }
        localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));
    };
    ProBpComponent.prototype.onTabChange = function (event) {
        switch (event.index) {
            case 0:
                this.Child_InputOutput.task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_Scrap.clear_Timer();
                this.Child_Dummy.clear_Timer();
                break;
            case 1:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_Scrap.clear_Timer();
                this.Child_Dummy.clear_Timer();
                break;
            case 2:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.task_ProductionWIPMove();
                this.Child_Scrap.clear_Timer();
                this.Child_Dummy.clear_Timer();
                break;
            case 3:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_Scrap.start_Timer();
                this.Child_Dummy.clear_Timer();
                break;
            case 4:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_Scrap.start_Timer();
                this.Child_Dummy.start_Timer();
                break;
        }
    };
    ProBpComponent.prototype.showMessage = function (severity, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: summary, detail: detail });
    };
    ProBpComponent.prototype.watermarkChange = function () {
        this.Child_InputOutput.waterMarkChange();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Child_InputOutput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__pro_mdl_inout_inout_component__["a" /* InoutComponent */])
    ], ProBpComponent.prototype, "Child_InputOutput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Child_ActPlan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__pro_mdl_actplan_actplan_component__["a" /* ActplanComponent */])
    ], ProBpComponent.prototype, "Child_ActPlan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Child_WipMove'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__pro_mdl_wipmovement_wipmovement_component__["a" /* WipmovementComponent */])
    ], ProBpComponent.prototype, "Child_WipMove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Child_Scrap'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__pro_mdl_scrap_scrap_component__["a" /* ScrapComponent */])
    ], ProBpComponent.prototype, "Child_Scrap", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Child_Dummy'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__pro_mdl_dummy_dummy_component__["a" /* DummyComponent */])
    ], ProBpComponent.prototype, "Child_Dummy", void 0);
    ProBpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-pro-bp',
            template: __webpack_require__("./src/app/production/pro-bp/pro-bp.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-bp/pro-bp.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common__["PlatformLocation"],
            __WEBPACK_IMPORTED_MODULE_9_app_common_service_stringMethod_service__["a" /* StringMethodService */],
            __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_0_core_layout_retab_service_tab_service__["a" /* TabService */], __WEBPACK_IMPORTED_MODULE_3__common_production_chart_option_service__["a" /* ProductionChartOptionService */]])
    ], ProBpComponent);
    return ProBpComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-dailyreport/pro-dailyreport.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/production/pro-dailyreport/pro-dailyreport.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dailyreport [deviceType]='deviceType'></app-dailyreport>"

/***/ }),

/***/ "./src/app/production/pro-dailyreport/pro-dailyreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProDailyreportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProDailyreportComponent = /** @class */ (function () {
    function ProDailyreportComponent(breadcrumbService, tService) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.deviceType = localStorage.getItem('deviceType');
        this.breadcrumbService.setItems([
            { label: '产量指标' },
            { label: 'Daily Report' },
        ]);
        this.tService.setItems('产量指标 Daily Report');
    }
    ProDailyreportComponent.prototype.ngOnInit = function () {
        //this.initGridValue();
    };
    ProDailyreportComponent.prototype.initGridValue = function () {
        this.gridValues = [
            {
                header: {
                    backgroundColor: '#607D8B',
                    items: [
                        [
                            { header: 'Shop', rowspan: 2 },
                            { header: 'ProductCategory', rowspan: 2 },
                            { header: 'In/Out', rowspan: 2 },
                            { header: 'Plan', colspan: 3 },
                            { header: 'Act', colspan: 2 },
                            { header: 'Balance', colspan: 2 },
                            { header: '达成率', rowspan: 2 },
                            { header: 'Scrap', colspan: 2 },
                            { header: 'Cum Yield', rowspan: 2 }
                        ],
                        [
                            { header: 'Month' },
                            { header: 'Cum' },
                            { header: 'Daily' },
                            { header: 'Cum' },
                            { header: 'Daily' },
                            { header: 'Cum' },
                            { header: 'Daily' },
                            { header: 'Cum' },
                            { header: 'Daily' }
                        ],
                    ]
                },
                values: {
                    items: [
                        [
                            { value: 'BP', rowspan: 10 },
                            { value: 'Sum', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '6.47FHD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '6.39QHD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '5.99QHD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '5.1HD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'EAC', rowspan: 10 },
                            { value: 'Sum', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '6.47FHD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '6.39QHD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '5.99QHD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '5.1HD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'BP', rowspan: 10 },
                            { value: 'Sum', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '6.47FHD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '6.39QHD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '5.99QHD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: '5.1HD', rowspan: 2 },
                            { value: 'IN' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                        [
                            { value: 'Out' },
                            { value: '15,540' },
                            { value: '9,716' },
                            { value: '560' },
                            { value: '9.576' },
                            { value: '588' },
                            { value: '-140', color: 'red' },
                            { value: '28' },
                            { value: '61.6%' },
                            { value: '29' },
                            { value: '4' },
                            { value: '0.0%' }
                        ],
                    ]
                }
            },
        ];
        console.log(typeof (this.gridValues.values.items));
    };
    ProDailyreportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pro-dailyreport',
            template: __webpack_require__("./src/app/production/pro-dailyreport/pro-dailyreport.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-dailyreport/pro-dailyreport.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], ProDailyreportComponent);
    return ProDailyreportComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-eac/pro-eac.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n<p-tabView (onChange)=\"onTabChange($event)\" (onClose)=onTabClose($event)>\n  <p-tabPanel header=\"投入产出\" leftIcon=\"pi pi-calendar\" *ngIf=\"display[0]\" [selected]=\"selectTab[0]\">\n    <div class=\"ui-g\">\n      <div id=\"eacproductionInOutChart\" echarts [options]=\"productionInOutChartOption\" class=\"ui-g-12 chartArea-12 xl-chartArea-12 lg-chartArea-12 md-chartArea-12 sm-chartArea-12\"></div>\n    </div>\n  </p-tabPanel>\n  <p-tabPanel header=\"计划实绩\" leftIcon=\"pi pi-inbox\" *ngIf=\"display[1]\" [selected]=\"selectTab[1]\">\n    <div class=\"ui-g\">\n      <div id=\"eacproductionActPlanChart\" echarts [options]=\"productionActPlanChartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n      <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n          <div class=\"xl-title lg-title\"><strong>投入产出</strong></div>\n          <ul class=\"optionul\">\n            <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton name=\"inOutType\" value=\"IN\" label=\"工厂投入\" [(ngModel)]=\"inOutType\" inputId=\"preopt1\" (click)=\"drawproductionActPlanChart()\"></p-radioButton>\n            </li>\n            <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton name=\"inOutType\" value=\"OUT\" label=\"工厂产出\" [(ngModel)]=\"inOutType\" inputId=\"preopt2\"\n                (click)=\"drawproductionActPlanChart()\"></p-radioButton>\n            </li>\n          </ul>\n        </div>\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n          <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n          <ul class=\"optionul\">\n            <li *ngFor=\"let item of actPlanProductCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton name=\"EACactPlanProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedactPlanProductCategory\"\n                inputId=\"EACactPlanProductCategory+{{item}}\" (click)=\"drawproductionActPlanChart()\"></p-radioButton>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </p-tabPanel>\n  <p-tabPanel header=\"WIP/Movement\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[2]\" [selected]=\"selectTab[2]\">\n    <div class=\"ui-g\">\n      <div id=\"eacproductionWIPMoveChart\" echarts [options]=\"productionWIPMoveChartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n      <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n          <div class=\"xl-title lg-title\"><strong>产品阶段</strong></div>\n          <ul class=\"optionul\">\n            <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton name=\"EACWIPMoveProductionType\" value=\"Production\" label=\"正式量产\" [(ngModel)]=\"selectedWIPMoveProductionType\"\n                inputId=\"WIPMoveProductionType1\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\n            </li>\n            <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton name=\"EACWIPMoveProductionType\" value=\"Develop\" label=\"客户送样\" [(ngModel)]=\"selectedWIPMoveProductionType\"\n                inputId=\"WIPMoveProductionType2\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\n            </li>\n            <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton name=\"EACWIPMoveProductionType\" value=\"Engineer\" label=\"工程验证\" [(ngModel)]=\"selectedWIPMoveProductionType\"\n                inputId=\"WIPMoveProductionType3\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\n            </li>\n            <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton name=\"EACWIPMoveProductionType\" value=\"PV\" label=\"PV\" [(ngModel)]=\"selectedWIPMoveProductionType\"\n                inputId=\"WIPMoveProductionType4\" (click)=\"WIPMoveProductionTypeClicked()\" (selected)=\"true\"></p-radioButton>\n            </li>\n          </ul>\n        </div>\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n          <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n          <ul class=\"optionul\">\n            <li *ngFor=\"let item of wipMoveProductCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton name=\"EACwipMoveProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedWIPMoveProductionCategory\"\n                inputId=\"EACwipMoveProductCategory+{{item}}\" (click)=\"drawproductionWipMoveChart()\"></p-radioButton>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </p-tabPanel>\n  <p-tabPanel header=\"Cut Line别\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[3]\" [selected]=\"selectTab[3]\">\n    <div class=\"ui-g\">\n      <div id=\"eacproductionCutLineChart\" echarts [options]=\"productionCutLineOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n      <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n          <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n            <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n            <ul class=\"optionul\">\n              <li *ngFor=\"let item of cutLineDifferCategory;index as i\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n                <p-radioButton name=\"eaccutLineDifferCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedCutLineProductionCategory\"\n                  inputId=\"cutLineDifferCategory+{{item}\" (click)=\"drawproductionLineDifferenceChart()\"></p-radioButton>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </p-tabPanel>\n  <p-tabPanel header=\"RT\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\">\n      <app-rt #Child_RT [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-rt>\n  </p-tabPanel>\n</p-tabView>"

/***/ }),

/***/ "./src/app/production/pro-eac/pro-eac.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProEacComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_common_service_echart_service__ = __webpack_require__("./src/app/common/service/echart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pro_mdl_rt_rt_component__ = __webpack_require__("./src/app/production/pro-mdl/rt/rt.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProEacComponent = /** @class */ (function () {
    function ProEacComponent(echartService, stringMethod, location, httpService, echart, breadcrumbService, tService) {
        this.echartService = echartService;
        this.stringMethod = stringMethod;
        this.location = location;
        this.httpService = httpService;
        this.echart = echart;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.actPlanParam = new __WEBPACK_IMPORTED_MODULE_4__common_model_yieldParam__["a" /* YieldParam */]();
        this.inOutParam = new __WEBPACK_IMPORTED_MODULE_4__common_model_yieldParam__["a" /* YieldParam */]();
        this.shopName = 'EAC';
        this.msgs = [];
        this.inOutType = 'IN';
        this.productionType = 'Production';
        this.selectedactPlanProductCategory = 'ALL';
        this.wipMoveParam = new __WEBPACK_IMPORTED_MODULE_4__common_model_yieldParam__["a" /* YieldParam */]();
        this.selectedWIPMoveProductionType = 'Production';
        this.selectedWIPMoveProductionCategory = 'ALL';
        this.cutLineParam = new __WEBPACK_IMPORTED_MODULE_4__common_model_yieldParam__["a" /* YieldParam */]();
        this.selectedCutLineProductionCategory = '6.39QHD';
        this.breadcrumbService.setItems([
            { label: '产量指标' },
            { label: 'EAC' },
        ]);
        this.tService.setItems('产量指标 EAC');
    }
    ProEacComponent.prototype.ngOnInit = function () {
        var locationUrl = '';
        for (var i in this.location) {
            if (i === 'location') {
                locationUrl = this.location[i].href;
                break;
            }
        }
        localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));
        this.deviceType = localStorage.getItem('deviceType');
        console.log(this.deviceType);
        this.display = [true, true, true, true];
        this.selectTab = [true, false, false, false];
        this.items = [
            { header: '投入产出', optionName: 'productionInOutChartOption' },
            { header: '计划实绩', optionName: 'productionActPlanChartOption' },
            { header: 'WIP/Move', optionName: 'productionWIPMoveChartOption' },
            { header: 'Cut/Line别', optionName: 'productionCutLineOption' }
        ];
        this.drawproductionInOutChart();
        this.getproductionActPlanProductCategory();
        this.drawproductionActPlanChart();
        this.getproductionWipMoveProductCategory();
        this.drawproductionWipMoveChart();
        this.getproductionCutLineProductCategory();
        this.drawproductionLineDifferenceChart();
    };
    ProEacComponent.prototype.ngOnDestroy = function () {
        this.clear_task_ProductionActPlan();
        this.clear_task_ProductionInputOutput();
        this.clear_task_ProductionLineDifference();
        this.clear_task_ProductionWIPMove();
    };
    ProEacComponent.prototype.tabChartInit = function () {
    };
    ProEacComponent.prototype.onTabChange = function (event) {
        switch (event.index) {
            case 0:
                this.task_ProductionInputOutput();
                this.clear_task_ProductionActPlan();
                this.clear_task_ProductionLineDifference();
                this.clear_task_ProductionWIPMove();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 1:
                //this.showMessage('success', 'success message', event.index);
                this.task_ProductionActPlan();
                this.clear_task_ProductionInputOutput();
                this.clear_task_ProductionLineDifference();
                this.clear_task_ProductionWIPMove();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 2:
                //this.showMessage('success', 'success message', event.index);
                this.task_ProductionWIPMove();
                this.clear_task_ProductionActPlan();
                this.clear_task_ProductionInputOutput();
                this.clear_task_ProductionLineDifference();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 3:
                //this.showMessage('success', 'success message', event.index);
                this.task_ProductionLineDifference();
                this.clear_task_ProductionActPlan();
                this.clear_task_ProductionInputOutput();
                this.clear_task_ProductionWIPMove();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 4:
                //this.showMessage('success', 'success message', event.index);
                this.task_ProductionLineDifference();
                this.clear_task_ProductionActPlan();
                this.clear_task_ProductionInputOutput();
                this.clear_task_ProductionWIPMove();
                this.Child_RT.task_ProductionActPlan();
                break;
        }
    };
    ProEacComponent.prototype.onTabClose = function (event) {
        switch (event.index) {
            case 0:
                this.showMessage('success', 'close info', event.index);
                this.clear_task_ProductionInputOutput();
                break;
            case 1:
                this.clear_task_ProductionActPlan();
                break;
            case 2:
                this.clear_task_ProductionWIPMove();
                break;
            case 3:
                this.clear_task_ProductionLineDifference();
                break;
        }
    };
    ProEacComponent.prototype.showMessage = function (severity, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: summary, detail: detail });
    };
    //#region 投入产出
    ProEacComponent.prototype.drawproductionInOutChart = function () {
        var _this = this;
        this.inOutParam.shopName = 'EAC';
        this.inOutParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/getProductionInputOutput', this.inOutParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.productionInOutChartOption = _this.echartService.getOptionInputOutput('EAC分厂投入产出', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
        });
    };
    ProEacComponent.prototype.task_ProductionInputOutput = function () {
        var _this = this;
        this.inOutTimer = setInterval(function () {
            _this.drawproductionInOutChart();
        }, 5000);
    };
    ProEacComponent.prototype.clear_task_ProductionInputOutput = function () {
        console.log('到函数外面了');
        if (this.inOutTimer) {
            console.log('到函数里面来了');
            clearInterval(this.inOutTimer);
        }
    };
    //#endregion
    //#region 计划实绩
    ProEacComponent.prototype.getproductionActPlanProductCategory = function () {
        var _this = this;
        this.actPlanParam.datatype = this.dataType;
        this.actPlanParam.shopName = this.shopName;
        var options = {
            params: { shopName: this.shopName }
        };
        this.httpService.get('/echart/production/actplanCategory', options).subscribe(function (res) {
            _this.actPlanProductCategory = res;
            _this.selectedactPlanProductCategory = _this.actPlanProductCategory[0];
            _this.drawproductionActPlanChart();
        }, function (error) { console.log(error); });
    };
    ;
    ProEacComponent.prototype.drawproductionActPlanChart = function () {
        var _this = this;
        this.actPlanParam.productCategory = this.selectedactPlanProductCategory;
        this.actPlanParam.datatype = this.inOutType;
        this.actPlanParam.shopName = this.shopName;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/actplan', this.actPlanParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.productionActPlanChartOption = _this.echartService.getOption_ActPlan('EAC分厂计划实绩', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    ProEacComponent.prototype.task_ProductionActPlan = function () {
        var _this = this;
        this.actPlanTimer = setInterval(function () {
            _this.drawproductionActPlanChart();
        }, 300000);
    };
    ProEacComponent.prototype.clear_task_ProductionActPlan = function () {
        if (this.actPlanTimer) {
            clearInterval(this.actPlanTimer);
        }
    };
    //#endregion
    //#region WIP/Move
    ProEacComponent.prototype.getproductionWipMoveProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedWIPMoveProductionType,
                dataType: 'MAIN'
            }
        };
        this.httpService.get('/echart/production/wipMoveCategory', options).subscribe(function (res) {
            _this.wipMoveProductCategory = res;
            _this.selectedWIPMoveProductionCategory = _this.wipMoveProductCategory[0];
            _this.drawproductionWipMoveChart();
        }, function (error) { console.log(error); });
    };
    ProEacComponent.prototype.WIPMoveProductionTypeClicked = function () {
        this.getproductionWipMoveProductCategory();
        this.drawproductionWipMoveChart();
    };
    ProEacComponent.prototype.drawproductionWipMoveChart = function () {
        var _this = this;
        this.wipMoveParam.productCategory = this.selectedWIPMoveProductionCategory;
        this.wipMoveParam.productionType = this.selectedWIPMoveProductionType;
        this.wipMoveParam.shopName = this.shopName;
        this.wipMoveParam.datatype = 'MAIN';
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/wipMove', this.wipMoveParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.productionWIPMoveChartOption = _this.echartService.getOption_WIPMove('EAC分厂WIP/Movement', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    ProEacComponent.prototype.task_ProductionWIPMove = function () {
        var _this = this;
        this.wipMoveTimer = setInterval(function () {
            _this.drawproductionWipMoveChart();
        }, 300000);
    };
    ProEacComponent.prototype.clear_task_ProductionWIPMove = function () {
        if (this.wipMoveTimer) {
            clearInterval(this.wipMoveTimer);
        }
    };
    //#endregion
    //#region Cut Line别
    ProEacComponent.prototype.getproductionCutLineProductCategory = function () {
        var _this = this;
        var options = {
            params: { shopName: 'C20000N', processType: 'CUT' }
        };
        this.httpService.get('/echart/production/cutLineProductCategory', options).subscribe(function (res) {
            _this.cutLineDifferCategory = res;
            _this.selectedCutLineProductionCategory = _this.cutLineDifferCategory[0];
            _this.drawproductionLineDifferenceChart();
        }, function (error) { console.log(error); });
    };
    ProEacComponent.prototype.drawproductionLineDifferenceChart = function () {
        var _this = this;
        this.cutLineParam.productCategory = this.selectedCutLineProductionCategory;
        this.cutLineParam.processtype = '7CCCC%';
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/cutLineFPY', this.cutLineParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.productionCutLineOption = _this.echartService.getOption_eacCutproduction('CUT Line FPY', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    ProEacComponent.prototype.task_ProductionLineDifference = function () {
        var _this = this;
        this.cutLineTimer = setInterval(function () {
            _this.drawproductionLineDifferenceChart();
        }, 300000);
    };
    ProEacComponent.prototype.clear_task_ProductionLineDifference = function () {
        if (this.cutLineTimer) {
            clearInterval(this.cutLineTimer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_RT'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__pro_mdl_rt_rt_component__["a" /* RtComponent */])
    ], ProEacComponent.prototype, "Child_RT", void 0);
    ProEacComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pro-eac',
            template: __webpack_require__("./src/app/production/pro-eac/pro-eac.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-eac/pro-eac.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_production_chart_option_service__["a" /* ProductionChartOptionService */],
            __WEBPACK_IMPORTED_MODULE_8_app_common_service_stringMethod_service__["a" /* StringMethodService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common__["PlatformLocation"],
            __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_common_service_echart_service__["a" /* EchartService */],
            __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_6_core_layout_retab_service_tab_service__["a" /* TabService */]])
    ], ProEacComponent);
    return ProEacComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-even/pro-even.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/production/pro-even/pro-even.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n<p-tabView (onChange)=\"onTabChange($event)\" [activeIndex]=\"index\">\n    <p-tabPanel header=\"投入产出\" leftIcon=\"pi pi-calendar\" *ngIf=\"display[0]\">\n        <app-inout #Child_InputOutput [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-inout>\n    </p-tabPanel>\n    <p-tabPanel header=\"计划实绩\" leftIcon=\"pi pi-inbox\" *ngIf=\"display[1]\">\n        <app-actplan #Child_ActPlan [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-actplan>\n    </p-tabPanel>\n    <p-tabPanel header=\"WIP/Movement\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[2]\">\n        <app-wipmovement #Child_WipMove [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-wipmovement>\n    </p-tabPanel>\n</p-tabView>"

/***/ }),

/***/ "./src/app/production/pro-even/pro-even.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProEvenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pro_mdl_inout_inout_component__ = __webpack_require__("./src/app/production/pro-mdl/inout/inout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pro_mdl_actplan_actplan_component__ = __webpack_require__("./src/app/production/pro-mdl/actplan/actplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pro_mdl_wipmovement_wipmovement_component__ = __webpack_require__("./src/app/production/pro-mdl/wipmovement/wipmovement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProEvenComponent = /** @class */ (function () {
    function ProEvenComponent(httpService, location, stringMethod, breadcrumbService, tService, EchartService) {
        this.httpService = httpService;
        this.location = location;
        this.stringMethod = stringMethod;
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.EchartService = EchartService;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.shopName = 'EVEN';
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'Production' },
            { label: 'EVEN' },
        ]);
        this.tService.setItems('Production-EVEN');
    }
    ProEvenComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true];
        var locationUrl = '';
        for (var i in this.location) {
            if (i === 'location') {
                locationUrl = this.location[i].href;
                break;
            }
        }
        localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));
    };
    ProEvenComponent.prototype.onTabChange = function (event) {
        switch (event.index) {
            case 0:
                //this.showMessage('success', 'success message', '投入产出页面打开');
                this.Child_InputOutput.task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                break;
            case 1:
                //this.showMessage('success', 'success message', event.index);
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                break;
            case 2:
                //this.showMessage('success', 'success message', event.index);
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.task_ProductionWIPMove();
                break;
            case 3:
                //this.showMessage('success', 'success message', event.index);
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                break;
        }
    };
    ProEvenComponent.prototype.showMessage = function (severity, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: summary, detail: detail });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Child_InputOutput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__pro_mdl_inout_inout_component__["a" /* InoutComponent */])
    ], ProEvenComponent.prototype, "Child_InputOutput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Child_ActPlan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__pro_mdl_actplan_actplan_component__["a" /* ActplanComponent */])
    ], ProEvenComponent.prototype, "Child_ActPlan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Child_WipMove'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__pro_mdl_wipmovement_wipmovement_component__["a" /* WipmovementComponent */])
    ], ProEvenComponent.prototype, "Child_WipMove", void 0);
    ProEvenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-pro-even',
            template: __webpack_require__("./src/app/production/pro-even/pro-even.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-even/pro-even.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_8__angular_common__["PlatformLocation"], __WEBPACK_IMPORTED_MODULE_9_app_common_service_stringMethod_service__["a" /* StringMethodService */],
            __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_0_core_layout_retab_service_tab_service__["a" /* TabService */], __WEBPACK_IMPORTED_MODULE_3__common_production_chart_option_service__["a" /* ProductionChartOptionService */]])
    ], ProEvenComponent);
    return ProEvenComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/actplan/actplan.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div id=\"eacproductionActPlanChart\" echarts [options]=\"productionActPlanChartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"xl-title lg-title\"><strong>投入产出</strong></div>\n      <ul class=\"optionul\">\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"inOutType\" value=\"IN\" label=\"工厂投入\" [(ngModel)]=\"inOutType\" inputId=\"preopt1\" (click)=\"drawproductionActPlanChart()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"inOutType\" value=\"OUT\" label=\"工厂产出\" [(ngModel)]=\"inOutType\" inputId=\"preopt2\" (click)=\"drawproductionActPlanChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of actPlanProductCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"actPlanProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedactPlanProductCategory\"\n            inputId=\"actPlanProductCategory+{{item}}\" (click)=\"drawproductionActPlanChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/actplan/actplan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActplanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActplanComponent = /** @class */ (function () {
    function ActplanComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.actPlanParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
        this.inOutType = 'IN';
        this.productionType = 'Production';
        this.selectedactPlanProductCategory = 'ALL';
    }
    ActplanComponent.prototype.ngOnInit = function () {
        this.getproductionActPlanProductCategory();
        this.drawproductionActPlanChart();
    };
    ActplanComponent.prototype.ngOnDestroy = function () {
        console.log('ACT Plan Destroy');
    };
    ActplanComponent.prototype.getproductionActPlanProductCategory = function () {
        var _this = this;
        this.actPlanParam.datatype = this.dataType;
        this.actPlanParam.shopName = this.shopName;
        var options = {
            params: { shopName: this.shopName }
        };
        this.httpService.get('/echart/production/actplanCategory', options).subscribe(function (res) {
            _this.actPlanProductCategory = res;
        }, function (error) { console.log(error); });
    };
    ActplanComponent.prototype.drawproductionActPlanChart = function () {
        var _this = this;
        this.actPlanParam.productCategory = this.selectedactPlanProductCategory;
        this.actPlanParam.datatype = this.inOutType;
        this.actPlanParam.shopName = this.shopName;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/actplan', this.actPlanParam).subscribe(function (res) {
            _this.respText = res;
            _this.productionActPlanChartOption = _this.echartService.getOption_ActPlan(_this.shopName + ' 分厂计划实绩', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    ActplanComponent.prototype.task_ProductionActPlan = function () {
        var _this = this;
        this.actPlanTimer = setInterval(function () {
            _this.drawproductionActPlanChart();
        }, 300000);
    };
    ActplanComponent.prototype.clear_task_ProductionActPlan = function () {
        if (this.actPlanTimer) {
            clearInterval(this.actPlanTimer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActplanComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActplanComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ActplanComponent.prototype, "shopName", void 0);
    ActplanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actplan',
            template: __webpack_require__("./src/app/production/pro-mdl/actplan/actplan.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-eac/pro-eac.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__["a" /* ProductionChartOptionService */]])
    ], ActplanComponent);
    return ActplanComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/dailyreport/dailyreport.component.css":
/***/ (function(module, exports) {

module.exports = "td {\r\n    text-align: center;\r\n    line-height: 10px;\r\n}\r\n.chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n.selectCondition {\r\n    position: fixed;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 570px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 570px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 570px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 550px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-tablearea{\r\n        min-height: 664px;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 790px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 770px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .xl-tablearea{\r\n        min-height: 883px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/production/pro-mdl/dailyreport/dailyreport.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g xl-tablearea lg-tablearea\">\n  <div class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12\">\n    <p-table [value]=\"values\" #dailyReportTable [loading]=\"loading\" selectionMode=\"single\" [(selection)]=\"selectedItem\"\n      (onRowSelect)=\"onRowSelect($event)\" [resizableColumns]=\"true\" [paginator]=\"false\" [rows]=\"15\"\n      [globalFilterFields]=\"['']\" [resizableColumns]=\"true\">\n      <ng-template pTemplate=\"body\" let-data>\n        <tr *ngFor=\"let header of data.header.items\">\n          <td *ngFor=\"let item of header\" [attr.rowspan]=\"item.rowspan\" [attr.colspan]=\"item.colspan\" [ngStyle]=\"{'background-color': data.header.backgroundColor,'fontSize':data.header.fontSize,'color':data.header.fontColor,'line-height':data.header.lineheight}\">\n            <strong>{{item.header}}</strong>\n          </td>\n        </tr>\n        <tr *ngFor=\"let value of data.values.items\" [pSelectableRow]=\"values\">\n          <td *ngFor=\"let item of value\" class=\"ui-resizable-column\" [attr.rowspan]=\"item.rowspan\" [attr.colspan]=\"item.colspan\"\n            [ngStyle]=\"{'color': item.color,'line-height':data.header.lineheight,'fontSize':item.fontSize}\" pEditableColumn>\n            <label *ngIf=\"!item.editable\">{{item.value}}</label>\n            <p-cellEditor *ngIf=\"item.editable\">\n              <ng-template pTemplate=\"input\">\n                <textarea pInputTextArea [rows]=\"item.editrows\" [cols]=\"item.editcols\" autoResize=\"autoResize\"\n                  [(ngModel)]=\"item.value\" (focus)=\"focus(this)\" (blur)=\"blur()\"></textarea>\n              </ng-template>\n              <ng-template pTemplate=\"output\">\n                <label>{{item.value}}</label>\n              </ng-template>\n            </p-cellEditor>\n          </td>\n        </tr>\n      </ng-template>\n    </p-table>\n  </div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"selectCondition\">\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title ui-g-12\"><strong>产品类型</strong></div>\n        <ul class=\"optionul\">\n          <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-checkbox name=\"DailyReportProductCategory\" value=\"ALL\" label=\"ALL\" [(ngModel)]=\"AllButtonValue\" inputId=\"DailyReportProductCategoryALL\"\n              (click)=\"AllChecked()\"></p-checkbox>\n          </li>\n          <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-checkbox name=\"DailyReportProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedProductCategory\"\n              inputId=\"DailyReportProductCategory+{{item}}\" (click)=\"productCategoryClicked()\"></p-checkbox>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/dailyreport/dailyreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyreportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DailyreportComponent = /** @class */ (function () {
    function DailyreportComponent(httpService) {
        this.httpService = httpService;
        this.gridparams = new __WEBPACK_IMPORTED_MODULE_2_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    DailyreportComponent.prototype.ngOnInit = function () {
        this.getProductCategory();
    };
    DailyreportComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {}
        };
        this.httpService.get('/echart/production/getDailyReportCategory', options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductCategory = [_this.productCategory[0]];
            _this.getDailyReportValue();
        }, function (error) { console.log(error); });
    };
    DailyreportComponent.prototype.productCategoryClicked = function () {
        this.getDailyReportValue();
    };
    DailyreportComponent.prototype.AllChecked = function () {
        if (this.AllButtonValue == 'ALL') {
            this.selectedProductCategory = this.productCategory;
        }
        else {
            this.selectedProductCategory = [];
        }
        this.getDailyReportValue();
    };
    DailyreportComponent.prototype.getDailyReportValue = function () {
        var _this = this;
        this.gridparams.productCategorys = this.selectedProductCategory;
        this.gridparams.deviceType = this.deviceType;
        this.httpService.post('/echart/production/dailyReportValue', this.gridparams).subscribe(function (res) {
            _this.respText = res;
            _this.gridValueInit(_this.respText.value);
        }, function (error) {
            console.log(error);
        });
    };
    DailyreportComponent.prototype.gridValueInit = function (item) {
        var fontSize = '';
        if (this.deviceType == 'tv') {
            fontSize = '15px';
        }
        else {
            fontSize = '13px';
        }
        this.values = [
            {
                header: {
                    backgroundColor: '#607D8B',
                    fontColor: 'white',
                    fontSize: fontSize,
                    lineheight: 1.3,
                    items: [
                        [
                            { header: 'Shop', rowspan: 2 },
                            { header: 'Product Category', rowspan: 2 },
                            { header: 'In/Out', rowspan: 2 },
                            { header: 'Plan', colspan: 3 },
                            { header: 'Act', colspan: 2 },
                            { header: 'Balance', colspan: 2 },
                            { header: '达成率', rowspan: 2 },
                            { header: 'Scrap', colspan: 2 },
                            { header: 'Cum Yield', rowspan: 2 }
                        ],
                        [
                            { header: 'Month' },
                            { header: 'Cum' },
                            { header: 'Daily' },
                            { header: 'Cum' },
                            { header: 'Daily' },
                            { header: 'Cum' },
                            { header: 'Daily' },
                            { header: 'Cum' },
                            { header: 'Daily' }
                        ],
                    ]
                },
                values: {
                    items: item
                }
            },
        ];
    };
    DailyreportComponent.prototype.onRowSelect = function (event) {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DailyreportComponent.prototype, "deviceType", void 0);
    DailyreportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dailyreport',
            template: __webpack_require__("./src/app/production/pro-mdl/dailyreport/dailyreport.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-mdl/dailyreport/dailyreport.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__["a" /* ApiService */]])
    ], DailyreportComponent);
    return DailyreportComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/dummy/dummy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div id=\"dummyChart\" echarts [options]=\"echartOption\" class=\"ui-g-12 chartArea-12 xl-chartArea-12 lg-chartArea-12 md-chartArea-12 sm-chartArea-12\"></div>\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/dummy/dummy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DummyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DummyComponent = /** @class */ (function () {
    function DummyComponent(echartService, httpService) {
        this.echartService = echartService;
        this.httpService = httpService;
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_2_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    DummyComponent.prototype.ngOnInit = function () {
        this.drawChart();
    };
    DummyComponent.prototype.ngOnDestroy = function () {
        this.clear_Timer();
    };
    DummyComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        this.chartParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/getDummyOption', this.chartParam).subscribe(function (res) {
            _this.respText = res;
            _this.echartOption = _this.echartService.getOptionDummy(_this.shopName + ' Dummy使用情况', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
        });
    };
    DummyComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    DummyComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DummyComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DummyComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DummyComponent.prototype, "shopName", void 0);
    DummyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dummy',
            template: __webpack_require__("./src/app/production/pro-mdl/dummy/dummy.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-eac/pro-eac.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__["a" /* ProductionChartOptionService */],
            __WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__["a" /* ApiService */]])
    ], DummyComponent);
    return DummyComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/inout/inout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div id=\"productionInOutChart\" echarts [options]=\"productionInOutChartOption\" class=\"ui-g-12 chartArea-12 xl-chartArea-12 lg-chartArea-12 md-chartArea-12 sm-chartArea-12\"></div>\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/inout/inout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_common_service_echar_watermark_service__ = __webpack_require__("./src/app/common/service/echar-watermark.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InoutComponent = /** @class */ (function () {
    function InoutComponent(echartService, waterMarkService, httpService) {
        this.echartService = echartService;
        this.waterMarkService = waterMarkService;
        this.httpService = httpService;
        this.inOutParam = new __WEBPACK_IMPORTED_MODULE_3_app_production_common_model_yieldParam__["a" /* YieldParam */]();
        this.waterMarkIndex = 0;
    }
    InoutComponent.prototype.ngOnInit = function () {
        /*     this.test(); */
        this.drawproductionInOutChart();
    };
    InoutComponent.prototype.ngOnDestroy = function () {
        this.clear_task_ProductionInputOutput();
    };
    /*   test() {
        this.httpService.get('/echart/production/test').subscribe(
          (res) => {
            debugger;
            let keyIn: string;
            keyIn = <string>res['keyIn'];
            console.log(keyIn);
          },
          (error) => {
    
          }
        )
      } */
    InoutComponent.prototype.drawproductionInOutChart = function () {
        var _this = this;
        this.inOutParam.shopName = this.shopName;
        this.inOutParam.deviceType = this.deviceType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/getProductionInputOutput', this.inOutParam).subscribe(function (res) {
            _this.respText = res;
            _this.productionInOutChartOption = _this.echartService.getOptionInputOutput(_this.shopName + ' 分厂投入产出', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
        });
    };
    InoutComponent.prototype.task_ProductionInputOutput = function () {
        var _this = this;
        this.inOutTimer = setInterval(function () {
            _this.drawproductionInOutChart();
        }, 300000);
    };
    InoutComponent.prototype.clear_task_ProductionInputOutput = function () {
        if (this.inOutTimer) {
            clearInterval(this.inOutTimer);
        }
    };
    InoutComponent.prototype.waterMarkChange = function () {
        switch (this.waterMarkIndex) {
            case 0:
                this.waterMarkObject = this.waterMarkService.getWaterMark12(this.deviceType, this.waterMark);
                break;
            case 1:
                this.waterMarkObject = this.waterMarkService.getWaterMark9(this.deviceType, this.waterMark);
                break;
            case 2:
                this.waterMarkObject = this.waterMarkService.getWaterMark8(this.deviceType, this.waterMark);
                break;
            case 3:
                this.waterMarkObject = this.waterMarkService.getWaterMark6(this.deviceType, this.waterMark);
                break;
            case 4:
                this.waterMarkObject = this.waterMarkService.getWaterMark4(this.deviceType, this.waterMark);
                break;
            case 5:
                this.waterMarkObject = this.waterMarkService.getWaterMark12(this.deviceType, this.waterMark);
                break;
            default:
                break;
        }
        this.productionInOutChartOption = this.echartService.getOptionInputOutputFlexible(this.shopName + ' 分厂投入产出', this.respText, this.waterMarkObject, this.deviceType);
        if (this.waterMarkIndex < 5) {
            this.waterMarkIndex++;
        }
        else {
            this.waterMarkIndex = 0;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InoutComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InoutComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InoutComponent.prototype, "shopName", void 0);
    InoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inout',
            template: __webpack_require__("./src/app/production/pro-mdl/inout/inout.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-eac/pro-eac.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_production_common_production_chart_option_service__["a" /* ProductionChartOptionService */], __WEBPACK_IMPORTED_MODULE_4_app_common_service_echar_watermark_service__["a" /* EchartWatermarkService */],
            __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */]])
    ], InoutComponent);
    return InoutComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/linedifference/linedifference.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 570px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 570px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 303px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 280px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 400px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 370px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 340px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/production/pro-mdl/linedifference/linedifference.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div id=\"productionLineDifferChart\" echarts [options]=\"productionLineDifferChartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"lg-title xl-title\"><strong>设备类型</strong></div>\n      <ul class=\"optionul\">\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"MachineType\" value=\"COF%\" label=\"COF\" [(ngModel)]=\"selectedMachineType\" inputId=\"MachineType1\"\n            (click)=\"MahcineTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"MachineType\" value=\"OCA%\" label=\"OCA\" [(ngModel)]=\"selectedMachineType\" inputId=\"MachineType2\"\n            (click)=\"MahcineTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"MachineType\" value=\"DEM%\" label=\"DEM\" [(ngModel)]=\"selectedMachineType\" inputId=\"MachineType3\"\n            (click)=\"MahcineTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"MachineType\" value=\"AFI%\" label=\"AFI\" [(ngModel)]=\"selectedMachineType\" inputId=\"MachineType4\"\n            (click)=\"MahcineTypeClicked()\" (selected)=\"true\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"MachineType\" value=\"2Ay%\" label=\"2AY\" [(ngModel)]=\"selectedMachineType\" inputId=\"MachineType5\"\n            (click)=\"MahcineTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"MachineType\" value=\"MFI%\" label=\"MFI\" [(ngModel)]=\"selectedMachineType\" inputId=\"MachineType6\"\n            (click)=\"MahcineTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"MachineType\" value=\"FAP%\" label=\"FAP\" [(ngModel)]=\"selectedMachineType\" inputId=\"MachineType7\"\n            (click)=\"MahcineTypeClicked()\" (selected)=\"true\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"lg-title xl-title\"><strong>产品类型</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of LineDifferProductCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"LineDifferProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedLineDifferProductionCategory\"\n            inputId=\"LineDifferProductCategory\" (click)=\"drawproductionLineDifferenceChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/linedifference/linedifference.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinedifferenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_production_common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LinedifferenceComponent = /** @class */ (function () {
    function LinedifferenceComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.selectedLineDifferProductionCategory = '5.1HD-7D00';
        this.selectedMachineType = 'COF%';
        this.LineDifferParam = new __WEBPACK_IMPORTED_MODULE_3_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    LinedifferenceComponent.prototype.ngOnInit = function () {
        this.getproductionCutLineProductCategory();
    };
    LinedifferenceComponent.prototype.MahcineTypeClicked = function () {
        this.getproductionCutLineProductCategory();
    };
    LinedifferenceComponent.prototype.getproductionCutLineProductCategory = function () {
        var _this = this;
        var options = {
            params: { shopName: this.shopName, processType: this.selectedMachineType }
        };
        this.httpService.get('/echart/production/cutLineProductCategory', options).subscribe(function (res) {
            _this.LineDifferProductCategory = res;
            _this.selectedLineDifferProductionCategory = _this.LineDifferProductCategory[0];
            _this.drawproductionLineDifferenceChart();
        }, function (error) { console.log(error); });
    };
    LinedifferenceComponent.prototype.drawproductionLineDifferenceChart = function () {
        var _this = this;
        this.LineDifferParam.productCategory = this.selectedLineDifferProductionCategory;
        this.LineDifferParam.processtype = this.selectedMachineType;
        this.LineDifferParam.shopName = this.shopName;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/cutLineFPY', this.LineDifferParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.productionLineDifferChartOption = _this.echartService.getOption_eacCutproduction(_this.shopName + ' Line FPY', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    LinedifferenceComponent.prototype.task_ProductionLineDifference = function () {
        var _this = this;
        this.LineTimer = setInterval(function () {
            _this.drawproductionLineDifferenceChart();
        }, 300000);
    };
    LinedifferenceComponent.prototype.clear_task_ProductionLineDifference = function () {
        if (this.LineTimer) {
            clearInterval(this.LineTimer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LinedifferenceComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LinedifferenceComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LinedifferenceComponent.prototype, "shopName", void 0);
    LinedifferenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-linedifference',
            template: __webpack_require__("./src/app/production/pro-mdl/linedifference/linedifference.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-mdl/linedifference/linedifference.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2_app_production_common_production_chart_option_service__["a" /* ProductionChartOptionService */]])
    ], LinedifferenceComponent);
    return LinedifferenceComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/pro-mdl.component.css":
/***/ (function(module, exports) {

module.exports = "/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .chartarea{\r\n        width: 100%;\r\n        height: 300px;\r\n        background-color: gold;\r\n    }\r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .chartarea{\r\n        width: 100%;\r\n        height: 1000px;\r\n        background-color: yellowgreen;\r\n    }\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .chartarea{\r\n        width: 100%;\r\n        height: 570px;\r\n        background-color: rebeccapurple;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .chartarea{\r\n        width: 100%;\r\n        height: 785px;\r\n        background-color: aqua;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/production/pro-mdl/pro-mdl.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-tabView (onChange)=\"onTabChange($event)\" [activeIndex]=\"index\">\r\n    <p-tabPanel header=\"投入产出\" leftIcon=\"pi pi-calendar\" *ngIf=\"display[0]\">\r\n        <app-inout #Child_InputOutput [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-inout>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"计划实绩\" leftIcon=\"pi pi-inbox\" *ngIf=\"display[1]\">\r\n        <app-actplan #Child_ActPlan [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-actplan>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"WIP/Movement\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[2]\">\r\n        <app-wipmovement #Child_WipMove [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-wipmovement>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"WIP/Movement By Line\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[3]\">\r\n        <app-wipmove-byline #Child_WipMoveByLine [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\"\r\n            [shopName]=\"shopName\"></app-wipmove-byline>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"WIP/Movement By Operation\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[4]\">\r\n        <app-wipmove-byoperation #Child_WipMoveByOperation></app-wipmove-byoperation>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"Line别\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[5]\">\r\n        <app-linedifference #Child_LineDiffer [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-linedifference>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"RT\" leftIcon=\"pi pi-user\" rightIcon=\"pi pi-star\" *ngIf=\"display[5]\">\r\n        <app-rt #Child_RT [deviceType]=\"deviceType\" [currentUserName]=\"currentUserName\" [shopName]=\"shopName\"></app-rt>\r\n    </p-tabPanel>\r\n</p-tabView>"

/***/ }),

/***/ "./src/app/production/pro-mdl/pro-mdl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProMdlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__ = __webpack_require__("./src/core/layout/breadcrumb/service/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__ = __webpack_require__("./src/core/layout/retab/service/tab.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inout_inout_component__ = __webpack_require__("./src/app/production/pro-mdl/inout/inout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actplan_actplan_component__ = __webpack_require__("./src/app/production/pro-mdl/actplan/actplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wipmovement_wipmovement_component__ = __webpack_require__("./src/app/production/pro-mdl/wipmovement/wipmovement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__wipmove_byline_wipmove_byline_component__ = __webpack_require__("./src/app/production/pro-mdl/wipmove-byline/wipmove-byline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wipmove_byoperation_wipmove_byoperation_component__ = __webpack_require__("./src/app/production/pro-mdl/wipmove-byoperation/wipmove-byoperation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__linedifference_linedifference_component__ = __webpack_require__("./src/app/production/pro-mdl/linedifference/linedifference.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rt_rt_component__ = __webpack_require__("./src/app/production/pro-mdl/rt/rt.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ProMdlComponent = /** @class */ (function () {
    function ProMdlComponent(breadcrumbService, tService, location, stringMethod) {
        this.breadcrumbService = breadcrumbService;
        this.tService = tService;
        this.location = location;
        this.stringMethod = stringMethod;
        this.index = 0;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.shopName = 'MODULE';
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: '产量指标' },
            { label: 'MDL' },
        ]);
        this.tService.setItems('产量指标 MDL');
    }
    ProMdlComponent.prototype.ngOnInit = function () {
        this.display = [true, true, true, true, true, true];
        var locationUrl = '';
        for (var i in this.location) {
            if (i === 'location') {
                locationUrl = this.location[i].href;
                break;
            }
        }
        localStorage.setItem('viewHistory', this.stringMethod.viewHistoryMethod(localStorage.getItem('viewHistory'), locationUrl));
    };
    ProMdlComponent.prototype.onTabChange = function (event) {
        switch (event.index) {
            case 0:
                this.Child_InputOutput.task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_WipMoveByLine.clear_task_ProductionActPlan();
                this.Child_WipMoveByOperation.clear_Timer();
                this.Child_LineDiffer.clear_task_ProductionLineDifference();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 1:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_WipMoveByLine.clear_task_ProductionActPlan();
                this.Child_WipMoveByOperation.clear_Timer();
                this.Child_LineDiffer.clear_task_ProductionLineDifference();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 2:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.task_ProductionWIPMove();
                this.Child_WipMoveByLine.clear_task_ProductionActPlan();
                this.Child_WipMoveByOperation.clear_Timer();
                this.Child_LineDiffer.clear_task_ProductionLineDifference();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 3:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_WipMoveByLine.task_ProductionActPlan();
                this.Child_WipMoveByOperation.clear_Timer();
                this.Child_LineDiffer.clear_task_ProductionLineDifference();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 4:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_WipMoveByLine.clear_task_ProductionActPlan();
                this.Child_WipMoveByOperation.start_Timer();
                this.Child_LineDiffer.clear_task_ProductionLineDifference();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 5:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_WipMoveByLine.clear_task_ProductionActPlan();
                this.Child_WipMoveByOperation.clear_Timer();
                this.Child_LineDiffer.task_ProductionLineDifference();
                this.Child_RT.clear_task_ProductionActPlan();
                break;
            case 6:
                this.Child_InputOutput.clear_task_ProductionInputOutput();
                this.Child_ActPlan.clear_task_ProductionActPlan();
                this.Child_WipMove.clear_task_ProductionWIPMove();
                this.Child_WipMoveByLine.clear_task_ProductionActPlan();
                this.Child_WipMoveByOperation.clear_Timer();
                this.Child_LineDiffer.clear_task_ProductionLineDifference();
                this.Child_RT.task_ProductionActPlan();
                break;
        }
    };
    ProMdlComponent.prototype.showMessage = function (severity, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: severity, summary: summary, detail: detail });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_InputOutput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__inout_inout_component__["a" /* InoutComponent */])
    ], ProMdlComponent.prototype, "Child_InputOutput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_ActPlan'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__actplan_actplan_component__["a" /* ActplanComponent */])
    ], ProMdlComponent.prototype, "Child_ActPlan", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_WipMove'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__wipmovement_wipmovement_component__["a" /* WipmovementComponent */])
    ], ProMdlComponent.prototype, "Child_WipMove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_WipMoveByLine'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__wipmove_byline_wipmove_byline_component__["a" /* WipmoveBylineComponent */])
    ], ProMdlComponent.prototype, "Child_WipMoveByLine", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_WipMoveByOperation'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__wipmove_byoperation_wipmove_byoperation_component__["a" /* WipmoveByoperationComponent */])
    ], ProMdlComponent.prototype, "Child_WipMoveByOperation", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_LineDiffer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__linedifference_linedifference_component__["a" /* LinedifferenceComponent */])
    ], ProMdlComponent.prototype, "Child_LineDiffer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Child_RT'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__rt_rt_component__["a" /* RtComponent */])
    ], ProMdlComponent.prototype, "Child_RT", void 0);
    ProMdlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pro-mdl',
            template: __webpack_require__("./src/app/production/pro-mdl/pro-mdl.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-mdl/pro-mdl.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service_breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_2_core_layout_retab_service_tab_service__["a" /* TabService */],
            __WEBPACK_IMPORTED_MODULE_9__angular_common__["PlatformLocation"],
            __WEBPACK_IMPORTED_MODULE_10_app_common_service_stringMethod_service__["a" /* StringMethodService */]])
    ], ProMdlComponent);
    return ProMdlComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/rt/rt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div id=\"eacproductionActPlanChart\" echarts [options]=\"productionActPlanChartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of actPlanProductCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"RTProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedactPlanProductCategory\"\n            inputId=\"RTProductCategory+{{item}}\" (click)=\"drawproductionActPlanChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/rt/rt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RtComponent = /** @class */ (function () {
    function RtComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.actPlanParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
        this.selectedactPlanProductCategory = '';
    }
    RtComponent.prototype.ngOnInit = function () {
        this.getproductionActPlanProductCategory();
    };
    RtComponent.prototype.ngOnDestroy = function () {
    };
    RtComponent.prototype.getproductionActPlanProductCategory = function () {
        var _this = this;
        this.actPlanParam.datatype = this.dataType;
        this.actPlanParam.shopName = this.shopName;
        var options = {
            params: { shopName: this.shopName }
        };
        this.httpService.get('/echart/production/rtCategory', options).subscribe(function (res) {
            _this.actPlanProductCategory = res;
            _this.selectedactPlanProductCategory = _this.actPlanProductCategory[0];
            _this.drawproductionActPlanChart();
        }, function (error) { console.log(error); });
    };
    RtComponent.prototype.drawproductionActPlanChart = function () {
        var _this = this;
        this.actPlanParam.productCategory = this.selectedactPlanProductCategory;
        this.actPlanParam.shopName = this.shopName;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/rt', this.actPlanParam).subscribe(function (res) {
            _this.respText = res;
            _this.productionActPlanChartOption = _this.echartService.getOption_Rt(_this.shopName + ' RT信息', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    RtComponent.prototype.task_ProductionActPlan = function () {
        var _this = this;
        this.actPlanTimer = setInterval(function () {
            _this.drawproductionActPlanChart();
        }, 300000);
    };
    RtComponent.prototype.clear_task_ProductionActPlan = function () {
        if (this.actPlanTimer) {
            clearInterval(this.actPlanTimer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RtComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RtComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RtComponent.prototype, "shopName", void 0);
    RtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rt',
            template: __webpack_require__("./src/app/production/pro-mdl/rt/rt.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-eac/pro-eac.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__["a" /* ProductionChartOptionService */]])
    ], RtComponent);
    return RtComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/scrap/scrap.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\nth {\r\n/*     color: white;\r\n    background-color: #607D8B; */\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    tr {\r\n        text-align: center;\r\n        line-height: 4px;\r\n        font-size: 14px;\r\n    }\r\n    .lg-chartArea{\r\n        height: 355px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 303px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 280px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .lg-tablearea {\r\n        height: 200px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    tr {\r\n        text-align: center;\r\n        line-height: 5px;\r\n        font-size: 17px;\r\n    }\r\n    .xl-chartArea{\r\n        height: 525px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 300px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 470px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 440px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n    .xl-tablearea {\r\n        height: 250px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/production/pro-mdl/scrap/scrap.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-10\">\n    <div class=\"ui-g-12 xl-tablearea lg-tablearea\">\n      <p-table #MonthWeekScrapTable [columns]='cols' [value]=\"MonthWeekScrapList\" selectionMode=\"single\" [(selection)]=\"selectedMonth\"\n        (onRowSelect)=\"onRowSelect($event)\" [resizableColumns]=\"true\" [paginator]=\"false\" [rows]=\"rowNumber\"\n        [globalFilterFields]=\"['rolename']\">\n        <ng-template pTemplate=\"header\" let-columns>\n          <tr>\n            <th *ngFor=\"let col of cols\"><strong>{{col.header}}</strong></th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-MonthScrapList let-columns=\"columns\">\n          <tr [pSelectableRow]=\"MonthScrapList\">\n            <td *ngFor=\"let col of columns\">{{MonthScrapList[col.field]}}</td>\n          </tr>\n        </ng-template>\n      </p-table>\n    </div>\n    <div id=\"DayScrapBarChart\" (chartClick)=\"chartClick($event)\" echarts [options]=\"DayScrapBarChartOption\" class=\"ui-g-6 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n    <div id=\"DetailScrapPieChart\" echarts [options]=\"DetailScrapPieChartOption\" class=\"ui-g-6 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  </div>\n  <div class=\"ui-2\">\n    <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n          <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n          <ul class=\"optionul\">\n            <li *ngFor=\"let item of ProductCategoryList;index as i\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n              <p-radioButton name=\"ScrapProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedProductCategory\" inputId=\"ScrapProductCategory+{{item}}\"\n                (click)=\"drawChart()\"></p-radioButton>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/scrap/scrap.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_production_common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_production_common_model_scrapentity__ = __webpack_require__("./src/app/production/common/model/scrapentity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_common_service_datetime_service__ = __webpack_require__("./src/app/common/service/datetime.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScrapComponent = /** @class */ (function () {
    function ScrapComponent(httpService, echartService, dateService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.dateService = dateService;
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_3_app_production_common_model_yieldParam__["a" /* YieldParam */]();
        this.selectDateType = 'MONTH';
        this.selectedScrapValue = new __WEBPACK_IMPORTED_MODULE_4_app_production_common_model_scrapentity__["a" /* ScrapEntity */]();
    }
    ScrapComponent.prototype.ngOnInit = function () {
        if (this.deviceType == 'tv') {
            this.rowNumber = 6;
        }
        else {
            this.rowNumber = 5;
        }
        this.cols = [
            { field: 'factoryDate', header: '日期' },
            { field: 'factoryName', header: '分厂' },
            /*       { field: 'dateType', header: '日期类型' }, */
            { field: 'productCategory', header: '产品类型' },
            /*       { field: 'productionType', header: '产品阶段' }, */
            /* { field: 'causeDepartment', header: '责任科室' }, */
            /* { field: 'scrapQty', header: '数量' }, */
            { field: 'outQty', header: '产出数' },
            { field: 'totalScrap', header: '总报废数' },
            { field: 'inQty', header: '投入数' },
            { field: 'causeRatio', header: '百分比' }
        ];
        this.getDefaultMonth();
        this.getProductCategory();
    };
    ScrapComponent.prototype.getDefaultMonth = function () {
        this.selectDate = this.dateService.getThisMonth();
        console.log("this.selectDate:" + this.selectDate);
    };
    ScrapComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: { shopName: this.shopName }
        };
        this.httpService.get('/echart/production/getScrapProductCategory', options).subscribe(function (res) {
            _this.ProductCategoryList = res;
            _this.selectedProductCategory = _this.ProductCategoryList[0];
            _this.drawChart();
        }, function (error) { console.log(error); });
    };
    ScrapComponent.prototype.drawChart = function () {
        this.getMonthWeekGridValue();
        this.drawBarChart();
        this.drawPieChart();
    };
    ScrapComponent.prototype.getMonthWeekGridValue = function () {
        var _this = this;
        var options = {
            params: { shopName: this.shopName, productCategory: this.selectedProductCategory }
        };
        this.httpService.get('/echart/production/getScrapGridValue', options).subscribe(function (res) {
            _this.MonthWeekScrapList = res;
        }, function (error) { console.log(error); });
    };
    ScrapComponent.prototype.drawBarChart = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        this.chartParam.productCategory = this.selectedProductCategory;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/dayScrapValue', this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.DayScrapBarChartOption = _this.echartService.getOPtion_DayScrapBrtChart(_this.shopName + ' 分厂Scrap', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    ScrapComponent.prototype.drawPieChart = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        this.chartParam.productCategory = this.selectedProductCategory;
        this.chartParam.date = this.selectDate;
        this.chartParam.datatype = this.selectDateType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/detailScrapValue', this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.DetailScrapPieChartOption = _this.echartService.getOPtion_DetailScrapPieChart(_this.shopName + ' 分厂Scrap', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    ScrapComponent.prototype.onRowSelect = function (event) {
        this.selectedScrapValue = event.data;
        this.selectDate = this.selectedScrapValue.factoryDate.substring(0, 4) + this.selectedScrapValue.factoryDate.substring(5);
        this.selectDateType = this.selectedScrapValue.dateType;
        this.drawPieChart();
    };
    ScrapComponent.prototype.chartClick = function (event) {
        this.selectDate = this.dateService.regularDayDate(event.name);
        this.selectDateType = 'DAY';
        this.drawPieChart();
    };
    ScrapComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    ScrapComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ScrapComponent.prototype, "shopName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ScrapComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ScrapComponent.prototype, "deviceType", void 0);
    ScrapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scrap',
            template: __webpack_require__("./src/app/production/pro-mdl/scrap/scrap.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-mdl/scrap/scrap.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_2_app_production_common_production_chart_option_service__["a" /* ProductionChartOptionService */],
            __WEBPACK_IMPORTED_MODULE_5_app_common_service_datetime_service__["a" /* DatetimeService */]])
    ], ScrapComponent);
    return ScrapComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/wipmove-byline/wipmove-byline.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 570px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 570px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 240px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 503px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 480px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 600px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 770px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 740px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/production/pro-mdl/wipmove-byline/wipmove-byline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div id=\"eacproductionCutLineChart\" echarts [options]=\"echartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n        <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n        <ul class=\"optionul\">\n          <li *ngFor=\"let item of LineName;index as i\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n            <p-radioButton name=\"LineName\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedLineName\" inputId=\"LineName+{{i}}\"\n              (click)=\"drawChart()\"></p-radioButton>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/wipmove-byline/wipmove-byline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WipmoveBylineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WipmoveBylineComponent = /** @class */ (function () {
    function WipmoveBylineComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
        this.selectedLineName = 'LINE01';
    }
    WipmoveBylineComponent.prototype.ngOnInit = function () {
        this.getLineName();
        this.drawChart();
    };
    WipmoveBylineComponent.prototype.getLineName = function () {
        /*     this.chartParam.shopName = this.shopName;
            const options = {
              params: { shopName: this.shopName }
            };
            this.httpService.get('/echart/production/getMDLLineName', options).subscribe(
              (res) => {
                this.LineName = <string[]>res;
              },
              (error) => { console.log(error); }
            ); */
        this.LineName = [
            'LINE01',
            'LINE02',
            'LINE03',
            'LINE04',
            'LINE05',
            'LINE06',
            'LINE07',
            'LINE08',
            'LINE09',
            'LINE10',
            'LINE11',
            'LINE12',
            'LINE13',
            'LINE14',
            'LINE15',
            'LINE16',
            'LINE17',
            'LINE18',
            'LINE19',
        ];
    };
    WipmoveBylineComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.linename = this.selectedLineName;
        this.chartParam.shopName = this.shopName;
        this.chartParam.deviceType = this.deviceType;
        this.chartParam.linetype = 'MAIN';
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/wipMoveByLine', this.chartParam).subscribe(function (res) {
            _this.respText = res;
            console.log('this.waterMark:' + _this.waterMark);
            _this.echartOption = _this.echartService.getOption_WIPMoveByLine(_this.shopName + ' ' + _this.selectedLineName + ' WIP/Move', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    WipmoveBylineComponent.prototype.task_ProductionActPlan = function () {
        var _this = this;
        this.Timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    WipmoveBylineComponent.prototype.clear_task_ProductionActPlan = function () {
        if (this.Timer) {
            clearInterval(this.Timer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WipmoveBylineComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WipmoveBylineComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WipmoveBylineComponent.prototype, "shopName", void 0);
    WipmoveBylineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wipmove-byline',
            template: __webpack_require__("./src/app/production/pro-mdl/wipmove-byline/wipmove-byline.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-mdl/wipmove-byline/wipmove-byline.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__["a" /* ProductionChartOptionService */]])
    ], WipmoveBylineComponent);
    return WipmoveBylineComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/wipmove-byoperation/wipmove-byoperation.component.css":
/***/ (function(module, exports) {

module.exports = ".chartArea-12{\r\n    height: 700px;\r\n    border-right: 0;\r\n    border-bottom: 0;\r\n}\r\n.chartArea{\r\n    height: 700px;\r\n}\r\n.productionTypeArea {\r\n    height: 300px;\r\n}\r\n.productionCategoryArea {\r\n    height: 400px;\r\n}\r\nul {\r\n    list-style-type: none;\r\n}\r\n/* 640px 手机 sm */\r\n@media screen and (max-width:40em){\r\n    .sm-chartArea-12{\r\n        height: 401px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .sm-chartArea{\r\n        height: 300px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .sm-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .sm-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .sm-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n}\r\n/* 641px 平板 md*/\r\n@media screen and (min-width:40.063em){\r\n    .md-chartArea-12{\r\n        height: 829px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .md-chartArea{\r\n        height: 600px;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .md-productionTypeArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    }\r\n    .md-productionTypeLi {\r\n        line-height:2.5;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .md-productionCategoryArea {\r\n        margin: 0 0 0 0;\r\n        height: 214px;\r\n    } \r\n\r\n}\r\n/* 1025px lg 显示器*/\r\n@media screen and (min-width:64.063em){\r\n    .lg-chartArea-12{\r\n        height: 570px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .lg-chartArea{\r\n        height: 570px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .lg-title{\r\n        font-size: 1.0em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .lg-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 180px;\r\n    }\r\n    .lg-productionTypeLi {\r\n        line-height:1.8;\r\n        font-size: 14px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .lg-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 184px;\r\n    } \r\n    .lg-productionCategoryArea .optionul {\r\n        height: 155px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 6px;\r\n    }\r\n    .lg-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .lg-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}\r\n/* 1441px xl 大电视*/\r\n@media screen and (min-width:90.063em){\r\n    .xl-chartArea-12{\r\n        height: 790px;\r\n        border-right: 0;\r\n        border-bottom: 0;\r\n    }\r\n    .xl-chartArea{\r\n        height: 790px;\r\n        border-right: 1px solid rgba(167, 165, 165, 0.795);\r\n        border-bottom: 0;\r\n    }\r\n    .xl-title{\r\n        font-size: 1.3em;\r\n        text-align: center;\r\n        border-bottom: 1px solid rgba(167, 165, 165, 0.795);\r\n    }\r\n    .xl-productionTypeArea {\r\n        margin: -7px 0 0 0;\r\n        height: 270px;\r\n    }\r\n    .xl-productionTypeLi {\r\n        line-height:2.5;\r\n        font-size: 17px;\r\n        margin: 0 0 0 -30px;\r\n    }\r\n    .xl-productionCategoryArea {\r\n        margin: 7px 0 0 0;\r\n        height: 247px;\r\n    }    \r\n    .xl-productionCategoryArea .optionul {\r\n        height: 225px;\r\n        overflow-x: hidden;\r\n        overflow-y: scroll;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar {\r\n        display: none;\r\n        width: 10px;\r\n    }\r\n    .xl-productionCategoryArea .optionul:hover::-webkit-scrollbar {\r\n        display: inline-block;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/\r\n        border-radius: 10px;\r\n         -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        background: #535353;\r\n    }\r\n    .xl-productionCategoryArea .optionul::-webkit-scrollbar-track {/*滚动条里面轨道*/\r\n        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);\r\n        border-radius: 10px;\r\n        background: #EDEDED;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/production/pro-mdl/wipmove-byoperation/wipmove-byoperation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n    <div echarts [options]=\"echartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\r\n    <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\r\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\r\n            <div class=\"title lg-title xl-title\"><strong>产品阶段</strong></div>\r\n            <ul class=\"optionul\">\r\n                <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"WIPMoveByOperationProductionType\" value=\"Production\" label=\"正式量产\" [(ngModel)]=\"selectedWIPMoveProductionType\"\r\n                        inputId=\"WIPMoveByOperationProductionType0\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\r\n                </li>\r\n                <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"WIPMoveByOperationProductionType\" value=\"TPCN\" label=\"TPCN\" [(ngModel)]=\"selectedWIPMoveProductionType\"\r\n                        inputId=\"WIPMoveByOperationProductionType1\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\r\n                </li>\r\n                <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"WIPMoveByOperationProductionType\" value=\"Develop\" label=\"客户送样\" [(ngModel)]=\"selectedWIPMoveProductionType\"\r\n                        inputId=\"WIPMoveByOperationProductionType2\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\r\n                </li>\r\n                <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"WIPMoveByOperationProductionType\" value=\"Engineer\" label=\"工程验证\" [(ngModel)]=\"selectedWIPMoveProductionType\"\r\n                        inputId=\"WIPMoveByOperationProductionType3\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\r\n                </li>\r\n                <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"WIPMoveByOperationProductionType\" value=\"PV\" label=\"PV\" [(ngModel)]=\"selectedWIPMoveProductionType\"\r\n                        inputId=\"WIPMoveByOperationProductionType4\" (click)=\"WIPMoveProductionTypeClicked()\" (selected)=\"true\"></p-radioButton>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\r\n            <div class=\"title lg-title xl-title\"><strong>产品类型</strong></div>\r\n            <ul class=\"optionul\"> \r\n                <li *ngFor=\"let item of productCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"wipMoveByOperationProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedProductionCategory\"\r\n                        inputId=\"wipMoveByOperationProductCategory+{{item}}\" (click)=\"drawChart()\"></p-radioButton>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\r\n            <div class=\"title lg-title xl-title\"><strong>工序类型</strong></div>\r\n            <ul class=\"optionul\">\r\n                <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"WIPMoveOPerationType\" value=\"MAIN\" label=\"主线\" [(ngModel)]=\"selectedOperationType\"\r\n                        inputId=\"WIPMoveOPerationType\" (click)=\"drawChart()\"></p-radioButton>\r\n                </li>\r\n                <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"WIPMoveOPerationType\" value=\"IQC\" label=\"IQC\" [(ngModel)]=\"selectedOperationType\"\r\n                        inputId=\"WIPMoveOPerationType2\" (click)=\"drawChart()\"></p-radioButton>\r\n                </li>\r\n                <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"WIPMoveOPerationType\" value=\"ReWork\" label=\"ReWork\" [(ngModel)]=\"selectedOperationType\"\r\n                        inputId=\"WIPMoveOPerationType3\" (click)=\"drawChart()\"></p-radioButton>\r\n                </li>\r\n                <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\r\n                    <p-radioButton name=\"WIPMoveOPerationType\" value=\"RT\" label=\"RT\" [(ngModel)]=\"selectedOperationType\"\r\n                        inputId=\"WIPMoveOPerationType4\" (click)=\"drawChart()\" (selected)=\"true\"></p-radioButton>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/wipmove-byoperation/wipmove-byoperation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WipmoveByoperationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WipmoveByoperationComponent = /** @class */ (function () {
    function WipmoveByoperationComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.currentUserName = localStorage.getItem('currentUserName');
        this.deviceType = localStorage.getItem('deviceType');
        this.shopName = 'MODULE';
        this.selectedOperationType = 'MAIN';
        this.selectedWIPMoveProductionType = 'Production'; //productionType or operationName
        this.selectedProductionCategory = '';
        this.chartParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
    }
    WipmoveByoperationComponent.prototype.ngOnInit = function () {
        this.getProductCategory();
    };
    WipmoveByoperationComponent.prototype.getProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedWIPMoveProductionType,
                dataType: 'MAIN'
            }
        };
        var url = '/echart/production/wipMoveByOperationTypeCategory';
        this.httpService.get(url, options).subscribe(function (res) {
            _this.productCategory = res;
            _this.selectedProductionCategory = _this.productCategory[0];
            _this.drawChart();
        }, function (error) { console.log(error); });
    };
    WipmoveByoperationComponent.prototype.WIPMoveProductionTypeClicked = function () {
        this.getProductCategory();
    };
    WipmoveByoperationComponent.prototype.drawChart = function () {
        var _this = this;
        this.chartParam.shopName = this.shopName;
        this.chartParam.productCategory = this.selectedProductionCategory;
        this.chartParam.productionType = this.selectedWIPMoveProductionType;
        this.chartParam.deviceType = this.deviceType;
        this.chartParam.datatype = this.selectedOperationType;
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        var url = '/echart/production/wipMoveByOperationType';
        this.httpService.post(url, this.chartParam).subscribe(function (res) {
            _this.respText = res;
            _this.echartOption = _this.echartService.getOption_WIPMove('MODULE 分厂WIP/Movement', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    WipmoveByoperationComponent.prototype.start_Timer = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.drawChart();
        }, 300000);
    };
    WipmoveByoperationComponent.prototype.clear_Timer = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    WipmoveByoperationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wipmove-byoperation',
            template: __webpack_require__("./src/app/production/pro-mdl/wipmove-byoperation/wipmove-byoperation.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-mdl/wipmove-byoperation/wipmove-byoperation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__["a" /* ProductionChartOptionService */]])
    ], WipmoveByoperationComponent);
    return WipmoveByoperationComponent;
}());



/***/ }),

/***/ "./src/app/production/pro-mdl/wipmovement/wipmovement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div id=\"eacproductionWIPMoveChart\" echarts [options]=\"productionWIPMoveChartOption\" class=\"ui-g-10 ui-lg-10 ui-xl-10 ui-md-12 ui-sm-12 chartArea xl-chartArea md-chartArea lg-chartArea sm-chartArea\"></div>\n  <div class=\"ui-g-2 ui-lg-2 ui-xl-2 ui-md-12 ui-sm-12\">\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionTypeArea xl-productionTypeArea md-productionTypeArea lg-productionTypeArea sm-productionTypeArea\">\n      <div class=\"xl-title lg-title\"><strong>产品阶段</strong></div>\n      <ul class=\"optionul\">\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"WIPMoveProductionType\" value=\"Production\" label=\"正式量产\" [(ngModel)]=\"selectedWIPMoveProductionType\"\n            inputId=\"WIPMoveProductionType1\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"WIPMoveProductionType\" value=\"Develop\" label=\"客户送样\" [(ngModel)]=\"selectedWIPMoveProductionType\"\n            inputId=\"WIPMoveProductionType2\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"WIPMoveProductionType\" value=\"Engineer\" label=\"工程验证\" [(ngModel)]=\"selectedWIPMoveProductionType\"\n            inputId=\"WIPMoveProductionType3\" (click)=\"WIPMoveProductionTypeClicked()\"></p-radioButton>\n        </li>\n        <li class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"WIPMoveProductionType\" value=\"PV\" label=\"PV\" [(ngModel)]=\"selectedWIPMoveProductionType\"\n            inputId=\"WIPMoveProductionType4\" (click)=\"WIPMoveProductionTypeClicked()\" (selected)=\"true\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n    <div class=\"ui-g-12 ui-lg-12 ui-xl-12 ui-md-6 ui-sm-6 productionCategoryArea xl-productionCategoryArea md-productionCategoryArea lg-productionCategoryArea sm-productionCategoryArea\">\n      <div class=\"xl-title lg-title\"><strong>产品类型</strong></div>\n      <ul class=\"optionul\">\n        <li *ngFor=\"let item of wipMoveProductCategory\" class=\"productionTypeLi xl-productionTypeLi md-productionTypeLi lg-productionTypeLi sm-productionTypeLi\">\n          <p-radioButton name=\"wipMoveProductCategory\" value=\"{{item}}\" label=\"{{item}}\" [(ngModel)]=\"selectedWIPMoveProductionCategory\"\n            inputId=\"wipMoveProductCategory+{{item}}\" (click)=\"drawproductionWipMoveChart()\"></p-radioButton>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/production/pro-mdl/wipmovement/wipmovement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WipmovementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__ = __webpack_require__("./src/app/production/common/model/yieldParam.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WipmovementComponent = /** @class */ (function () {
    function WipmovementComponent(httpService, echartService) {
        this.httpService = httpService;
        this.echartService = echartService;
        this.wipMoveParam = new __WEBPACK_IMPORTED_MODULE_1_app_production_common_model_yieldParam__["a" /* YieldParam */]();
        this.selectedWIPMoveProductionType = 'Production';
        this.selectedWIPMoveProductionCategory = 'ALL';
    }
    WipmovementComponent.prototype.ngOnInit = function () {
        this.getproductionWipMoveProductCategory();
    };
    //#region WIP/Move
    WipmovementComponent.prototype.getproductionWipMoveProductCategory = function () {
        var _this = this;
        var options = {
            params: {
                shopName: this.shopName,
                productionType: this.selectedWIPMoveProductionType,
                dataType: 'MAIN'
            }
        };
        this.httpService.get('/echart/production/wipMoveCategory', options).subscribe(function (res) {
            _this.wipMoveProductCategory = res;
            _this.selectedWIPMoveProductionCategory = _this.wipMoveProductCategory[0];
            _this.drawproductionWipMoveChart();
        }, function (error) { console.log(error); });
    };
    WipmovementComponent.prototype.WIPMoveProductionTypeClicked = function () {
        this.getproductionWipMoveProductCategory();
        this.drawproductionWipMoveChart();
    };
    WipmovementComponent.prototype.drawproductionWipMoveChart = function () {
        var _this = this;
        this.wipMoveParam.productCategory = this.selectedWIPMoveProductionCategory;
        this.wipMoveParam.productionType = this.selectedWIPMoveProductionType;
        this.wipMoveParam.shopName = this.shopName;
        this.wipMoveParam.datatype = 'MAIN';
        /*     this.wipMoveParam.deviceType = this.deviceType; */
        var nowDate = new Date();
        var currentTime = nowDate.toLocaleString();
        this.waterMark = 'BOECD Confidential@' + this.currentUserName + '\n' + currentTime + '@' + localStorage.getItem('currentIP');
        this.httpService.post('/echart/production/wipMove', this.wipMoveParam).subscribe(function (res) {
            _this.respText = res;
            _this.productionWIPMoveChartOption = _this.echartService.getOption_WIPMove(_this.shopName + ' 分厂WIP/Movement', _this.respText, _this.waterMark, _this.deviceType);
        }, function (error) {
            console.log(error);
        });
    };
    WipmovementComponent.prototype.task_ProductionWIPMove = function () {
        var _this = this;
        this.wipMoveTimer = setInterval(function () {
            _this.drawproductionWipMoveChart();
        }, 300000);
    };
    WipmovementComponent.prototype.clear_task_ProductionWIPMove = function () {
        if (this.wipMoveTimer) {
            clearInterval(this.wipMoveTimer);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WipmovementComponent.prototype, "currentUserName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WipmovementComponent.prototype, "deviceType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WipmovementComponent.prototype, "shopName", void 0);
    WipmovementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wipmovement',
            template: __webpack_require__("./src/app/production/pro-mdl/wipmovement/wipmovement.component.html"),
            styles: [__webpack_require__("./src/app/production/pro-eac/pro-eac.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_common_service_api_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3_app_production_common_production_chart_option_service__["a" /* ProductionChartOptionService */]])
    ], WipmovementComponent);
    return WipmovementComponent;
}());



/***/ }),

/***/ "./src/app/production/production-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pro_bp_pro_bp_component__ = __webpack_require__("./src/app/production/pro-bp/pro-bp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pro_even_pro_even_component__ = __webpack_require__("./src/app/production/pro-even/pro-even.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pro_eac_pro_eac_component__ = __webpack_require__("./src/app/production/pro-eac/pro-eac.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pro_mdl_pro_mdl_component__ = __webpack_require__("./src/app/production/pro-mdl/pro-mdl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pro_dailyreport_pro_dailyreport_component__ = __webpack_require__("./src/app/production/pro-dailyreport/pro-dailyreport.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'pro-bp',
        component: __WEBPACK_IMPORTED_MODULE_2__pro_bp_pro_bp_component__["a" /* ProBpComponent */],
    },
    {
        path: 'pro-even',
        component: __WEBPACK_IMPORTED_MODULE_3__pro_even_pro_even_component__["a" /* ProEvenComponent */]
    },
    {
        path: 'pro-eac',
        component: __WEBPACK_IMPORTED_MODULE_4__pro_eac_pro_eac_component__["a" /* ProEacComponent */]
    },
    {
        path: 'pro-mdl',
        component: __WEBPACK_IMPORTED_MODULE_5__pro_mdl_pro_mdl_component__["a" /* ProMdlComponent */]
    },
    {
        path: 'pro-dailyreport',
        component: __WEBPACK_IMPORTED_MODULE_6__pro_dailyreport_pro_dailyreport_component__["a" /* ProDailyreportComponent */]
    }
];
var ProductionRoutingModule = /** @class */ (function () {
    function ProductionRoutingModule() {
    }
    ProductionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
        })
    ], ProductionRoutingModule);
    return ProductionRoutingModule;
}());



/***/ }),

/***/ "./src/app/production/production.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductionModule", function() { return ProductionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_service_api_api_service__ = __webpack_require__("./src/app/common/service/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_production_chart_option_service__ = __webpack_require__("./src/app/production/common/production-chart-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_echarts__ = __webpack_require__("./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__production_routing_module__ = __webpack_require__("./src/app/production/production-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pro_bp_pro_bp_component__ = __webpack_require__("./src/app/production/pro-bp/pro-bp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pro_even_pro_even_component__ = __webpack_require__("./src/app/production/pro-even/pro-even.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__node_modules_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pro_eac_pro_eac_component__ = __webpack_require__("./src/app/production/pro-eac/pro-eac.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pro_mdl_pro_mdl_component__ = __webpack_require__("./src/app/production/pro-mdl/pro-mdl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_common_service_echart_service__ = __webpack_require__("./src/app/common/service/echart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pro_mdl_actplan_actplan_component__ = __webpack_require__("./src/app/production/pro-mdl/actplan/actplan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pro_mdl_inout_inout_component__ = __webpack_require__("./src/app/production/pro-mdl/inout/inout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pro_mdl_linedifference_linedifference_component__ = __webpack_require__("./src/app/production/pro-mdl/linedifference/linedifference.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pro_mdl_wipmovement_wipmovement_component__ = __webpack_require__("./src/app/production/pro-mdl/wipmovement/wipmovement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pro_mdl_wipmove_byline_wipmove_byline_component__ = __webpack_require__("./src/app/production/pro-mdl/wipmove-byline/wipmove-byline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pro_mdl_wipmove_byoperation_wipmove_byoperation_component__ = __webpack_require__("./src/app/production/pro-mdl/wipmove-byoperation/wipmove-byoperation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_common_service_stringMethod_service__ = __webpack_require__("./src/app/common/service/stringMethod.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pro_dailyreport_pro_dailyreport_component__ = __webpack_require__("./src/app/production/pro-dailyreport/pro-dailyreport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pro_mdl_dailyreport_dailyreport_component__ = __webpack_require__("./src/app/production/pro-mdl/dailyreport/dailyreport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pro_mdl_scrap_scrap_component__ = __webpack_require__("./src/app/production/pro-mdl/scrap/scrap.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_app_common_service_datetime_service__ = __webpack_require__("./src/app/common/service/datetime.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_common_service_routerInterceptor_service__ = __webpack_require__("./src/app/common/service/routerInterceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pro_mdl_dummy_dummy_component__ = __webpack_require__("./src/app/production/pro-mdl/dummy/dummy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pro_mdl_rt_rt_component__ = __webpack_require__("./src/app/production/pro-mdl/rt/rt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_app_common_service_echar_watermark_service__ = __webpack_require__("./src/app/common/service/echar-watermark.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var ProductionModule = /** @class */ (function () {
    function ProductionModule() {
    }
    ProductionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6__production_routing_module__["a" /* ProductionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_echarts__["a" /* NgxEchartsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__node_modules_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_11__node_modules_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_11__node_modules_primeng_primeng__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_11__node_modules_primeng_primeng__["ScrollPanelModule"],
                __WEBPACK_IMPORTED_MODULE_11__node_modules_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_11__node_modules_primeng_primeng__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_24_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_11__node_modules_primeng_primeng__["CheckboxModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__pro_bp_pro_bp_component__["a" /* ProBpComponent */], __WEBPACK_IMPORTED_MODULE_8__pro_even_pro_even_component__["a" /* ProEvenComponent */], __WEBPACK_IMPORTED_MODULE_12__pro_eac_pro_eac_component__["a" /* ProEacComponent */], __WEBPACK_IMPORTED_MODULE_13__pro_mdl_pro_mdl_component__["a" /* ProMdlComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pro_mdl_actplan_actplan_component__["a" /* ActplanComponent */], __WEBPACK_IMPORTED_MODULE_16__pro_mdl_inout_inout_component__["a" /* InoutComponent */], __WEBPACK_IMPORTED_MODULE_17__pro_mdl_linedifference_linedifference_component__["a" /* LinedifferenceComponent */], __WEBPACK_IMPORTED_MODULE_18__pro_mdl_wipmovement_wipmovement_component__["a" /* WipmovementComponent */], __WEBPACK_IMPORTED_MODULE_19__pro_mdl_wipmove_byline_wipmove_byline_component__["a" /* WipmoveBylineComponent */], __WEBPACK_IMPORTED_MODULE_20__pro_mdl_wipmove_byoperation_wipmove_byoperation_component__["a" /* WipmoveByoperationComponent */], __WEBPACK_IMPORTED_MODULE_22__pro_dailyreport_pro_dailyreport_component__["a" /* ProDailyreportComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pro_mdl_dailyreport_dailyreport_component__["a" /* DailyreportComponent */], __WEBPACK_IMPORTED_MODULE_25__pro_mdl_scrap_scrap_component__["a" /* ScrapComponent */], __WEBPACK_IMPORTED_MODULE_28__pro_mdl_dummy_dummy_component__["a" /* DummyComponent */], __WEBPACK_IMPORTED_MODULE_29__pro_mdl_rt_rt_component__["a" /* RtComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__common_production_chart_option_service__["a" /* ProductionChartOptionService */],
                __WEBPACK_IMPORTED_MODULE_0__common_service_api_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_14_app_common_service_echart_service__["a" /* EchartService */],
                __WEBPACK_IMPORTED_MODULE_21_app_common_service_stringMethod_service__["a" /* StringMethodService */],
                __WEBPACK_IMPORTED_MODULE_26_app_common_service_datetime_service__["a" /* DatetimeService */],
                __WEBPACK_IMPORTED_MODULE_27_app_common_service_routerInterceptor_service__["a" /* RouterInterceptorService */],
                __WEBPACK_IMPORTED_MODULE_30_app_common_service_echar_watermark_service__["a" /* EchartWatermarkService */]
            ]
        })
    ], ProductionModule);
    return ProductionModule;
}());



/***/ })

});
//# sourceMappingURL=production.module.chunk.js.map