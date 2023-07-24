import { T_ShirtDataWoman } from "./T_ShirtDataWoman.js";
import { PantsDataWoman } from "./PantsDataWoman.js";
import { ShoesDataWoman } from "./ShoesDataWoman.js";
import { PullsDataWoman } from "./PullsDataWoman.js";
import { AccessoriesDataWoman } from "./AccessoriesDataWoman.js";

const tshirtImage = document.querySelector('#tshirt-image');
const pantsImage = document.querySelector('#pants-image');
const shoesImage = document.querySelector('#shoes-image');
const accessoryImage = document.querySelector('#accessory-image');

const tshirtImage1 = document.querySelector('#tshirt-image1');
const pantsImage1 = document.querySelector('#pants-image1');
const shoesImage1 = document.querySelector('#shoes-image1');
const accessoryImage1 = document.querySelector('#accessory-image1');

const tshirtImage2 = document.querySelector('#tshirt-image2');
const pantsImage2 = document.querySelector('#pants-image2');
const shoesImage2 = document.querySelector('#shoes-image2');
const accessoryImage2 = document.querySelector('#accessory-image2');

export class UI_woman {
    static setAccessoryData(index) {
        accessoryImage.src = AccessoriesDataWoman[index].image;
        accessoryImage.width = AccessoriesDataWoman[index].width;
        accessoryImage.height = AccessoriesDataWoman[index].height;
    }

    static setTshirtData(index) {
        tshirtImage.src = T_ShirtDataWoman[index].image;
        tshirtImage.width = T_ShirtDataWoman[index].width;
        tshirtImage.height = T_ShirtDataWoman[index].height;
    }

    static setPullData(index) {
        tshirtImage.src = PullsDataWoman[index].image;
        tshirtImage.width = PullsDataWoman[index].width;
        tshirtImage.height = PullsDataWoman[index].height;
    }

    static setPantsData(index) {
        pantsImage.src = PantsDataWoman[index].image;
        pantsImage.width = PantsDataWoman[index].width;
        pantsImage.height = PantsDataWoman[index].height
    }

    static setShoesData(index) {
        shoesImage.src = ShoesDataWoman[index].image;
        shoesImage.width = ShoesDataWoman[index].width;
        shoesImage.height = ShoesDataWoman[index].height;
    }

    static setAccessoryData1(index) {
        accessoryImage1.src = AccessoriesDataWoman[index].image;
        accessoryImage1.width = AccessoriesDataWoman[index].width;
        accessoryImage1.height = AccessoriesDataWoman[index].height;
    }

    static setTshirtData1(index) {
        tshirtImage1.src = T_ShirtDataWoman[index].image;
        tshirtImage1.width = T_ShirtDataWoman[index].width;
        tshirtImage1.height = T_ShirtDataWoman[index].height;
    }

    static setPullData1(index) {
        tshirtImage1.src = PullsDataWoman[index].image;
        tshirtImage1.width = PullsDataWoman[index].width;
        tshirtImage1.height = PullsDataWoman[index].height;
    }

    static setPantsData1(index) {
        pantsImage1.src = PantsDataWoman[index].image;
        pantsImage1.width = PantsDataWoman[index].width;
        pantsImage1.height = PantsDataWoman[index].height
    }

    static setShoesData1(index) {
        shoesImage1.src = ShoesDataWoman[index].image;
        shoesImage1.width = ShoesDataWoman[index].width;
        shoesImage1.height = ShoesDataWoman[index].height;
    }

    static setAccessoryData2(index) {
        accessoryImage2.src = AccessoriesDataWoman[index].image;
        accessoryImage2.width = AccessoriesDataWoman[index].width;
        accessoryImage2.height = AccessoriesDataWoman[index].height;
    }

    static setTshirtData2(index) {
        tshirtImage2.src = T_ShirtDataWoman[index].image;
        tshirtImage2.width = T_ShirtDataWoman[index].width;
        tshirtImage2.height = T_ShirtDataWoman[index].height;
    }

    static setPullData2(index) {
        tshirtImage2.src = PullsDataWoman[index].image;
        tshirtImage2.width = PullsDataWoman[index].width;
        tshirtImage2.height = PullsDataWoman[index].height;
    }

    static setPantsData2(index) {
        pantsImage2.src = PantsDataWoman[index].image;
        pantsImage2.width = PantsDataWoman[index].width;
        pantsImage2.height = PantsDataWoman[index].height
    }

    static setShoesData2(index) {
        shoesImage2.src = ShoesDataWoman[index].image;
        shoesImage2.width = ShoesDataWoman[index].width;
        shoesImage2.height = ShoesDataWoman[index].height;
    }
}