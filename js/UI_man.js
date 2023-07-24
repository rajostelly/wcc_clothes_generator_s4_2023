import { T_ShirtDataMan } from "./T_ShirtDataMan.js";
import { PullsDataMan } from "./PullsDataMan.js";
import { PantsDataMan } from "./PantsDataMan.js";
import { ShoesDataMan } from "./ShoesDataMan.js";
import { AccessoriesDataMan } from "./AccessoriesDataMan.js";

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

export class UI_man {
    static setAccessoryData(index) {
        accessoryImage.src = AccessoriesDataMan[index].image;
        accessoryImage.width = AccessoriesDataMan[index].width;
        accessoryImage.height = AccessoriesDataMan[index].height;
    }

    static setTshirtData(index) {
        tshirtImage.src = T_ShirtDataMan[index].image;
        tshirtImage.width = T_ShirtDataMan[index].width;
        tshirtImage.height = T_ShirtDataMan[index].height;
    }

    static setPullData(index) {
        tshirtImage.src = PullsDataMan[index].image;
        tshirtImage.width = PullsDataMan[index].width;
        tshirtImage.height = PullsDataMan[index].height;
    }

    static setPantsData(index) {
        pantsImage.src = PantsDataMan[index].image;
        pantsImage.width = PantsDataMan[index].width;
        pantsImage.height = PantsDataMan[index].height
    }

    static setShoesData(index) {
        shoesImage.src = ShoesDataMan[index].image;
        shoesImage.width = ShoesDataMan[index].width;
        shoesImage.height = ShoesDataMan[index].height;
    }

    static setAccessoryData1(index) {
        accessoryImage1.src = AccessoriesDataMan[index].image;
        accessoryImage1.width = AccessoriesDataMan[index].width;
        accessoryImage1.height = AccessoriesDataMan[index].height;
    }

    static setTshirtData1(index) {
        tshirtImage1.src = T_ShirtDataMan[index].image;
        tshirtImage1.width = T_ShirtDataMan[index].width;
        tshirtImage1.height = T_ShirtDataMan[index].height;
    }

    static setPullData1(index) {
        tshirtImage1.src = PullsDataMan[index].image;
        tshirtImage1.width = PullsDataMan[index].width;
        tshirtImage1.height = PullsDataMan[index].height;
    }

    static setPantsData1(index) {
        pantsImage1.src = PantsDataMan[index].image;
        pantsImage1.width = PantsDataMan[index].width;
        pantsImage1.height = PantsDataMan[index].height
    }

    static setShoesData1(index) {
        shoesImage1.src = ShoesDataMan[index].image;
        shoesImage1.width = ShoesDataMan[index].width;
        shoesImage1.height = ShoesDataMan[index].height;
    }

    static setAccessoryData2(index) {
        accessoryImage2.src = AccessoriesDataMan[index].image;
        accessoryImage2.width = AccessoriesDataMan[index].width;
        accessoryImage2.height = AccessoriesDataMan[index].height;
    }

    static setTshirtData2(index) {
        tshirtImage2.src = T_ShirtDataMan[index].image;
        tshirtImage2.width = T_ShirtDataMan[index].width;
        tshirtImage2.height = T_ShirtDataMan[index].height;
    }

    static setPullData2(index) {
        tshirtImage2.src = PullsDataMan[index].image;
        tshirtImage2.width = PullsDataMan[index].width;
        tshirtImage2.height = PullsDataMan[index].height;
    }

    static setPantsData2(index) {
        pantsImage2.src = PantsDataMan[index].image;
        pantsImage2.width = PantsDataMan[index].width;
        pantsImage2.height = PantsDataMan[index].height
    }

    static setShoesData2(index) {
        shoesImage2.src = ShoesDataMan[index].image;
        shoesImage2.width = ShoesDataMan[index].width;
        shoesImage2.height = ShoesDataMan[index].height;
    }

}