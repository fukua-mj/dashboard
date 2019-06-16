import { Injectable } from '@angular/core';



@Injectable()
export class EchartWatermarkService {

    constructor() { }

    getWaterMark12(deviceType: string, waterMark: string) {
        let waterMarkObject: any;
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
                ]

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
                ]

                break;
        }

        return waterMarkObject;
    }

    getWaterMark9(deviceType: string, waterMark: string) {
        let waterMarkObject: any;
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

                ]

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
                ]

                break;
        }

        return waterMarkObject;
    }

    getWaterMark8(deviceType: string, waterMark: string) {
        let waterMarkObject: any;
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

                ]

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
                ]

                break;
        }

        return waterMarkObject;
    }

    getWaterMark6(deviceType: string, waterMark: string) {
        let waterMarkObject: any;
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

                ]

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
                ]

                break;
        }

        return waterMarkObject;
    }

    getWaterMark4(deviceType: string, waterMark: string) {
        let waterMarkObject: any;
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
                ]

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
                ]

                break;
        }

        return waterMarkObject;
    }
}
