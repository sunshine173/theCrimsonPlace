import {BagTypeEnum} from './enum/bag_type';
import {GoodTypeEnum} from './enum/good_type';

export class Good {
    constructor (
        //存放在哪个背包里
        bagType:BagTypeEnum,
        //物品ID
        id:number,
        //物品类型
        type:GoodTypeEnum,
        //数量
        num:number,
        //物品等级
        lv:number,
        //是否锁定 不能分解不能出售
        bLocked:boolean
    ){
        //todo 检查物品是否合法
    }

    //获取道具战斗力
    public get fightPower() {
        //todo
        return 0;
    }

    //使用道具
    public use() {

    }
}

export class Equip extends Good {
    //已开符文槽位数量
    fuWenSpaceNum:number;
    //已镶嵌符文
    fuWens:Good[];

    //获取装备战斗力
    public get fightPower() {
        //todo
        return 0;
    }

    //移除符文
    public clearFuWen() {

    }

    //镶嵌符文
    public addFuWen(fuWens:Good) {

    }
}