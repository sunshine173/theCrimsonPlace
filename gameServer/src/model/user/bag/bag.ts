import {BagTypeEnum} from './enum/bag_type';
export class Bag{
    //背包id
    public id:number;
    //背包名字
    public name:number;
    //背包类型
    public type:BagTypeEnum
    //背包格子数
    public bagSpaceNum:number;
    //是否可以批量出售
    public bBatchSale:boolean;
    //是否可以批量分解
    public bBatchDecompose;
    //道具列表
    public goods:any[];
}