//角色
import {Hero} from '../hero/hero';
import {Bag} from '../bag/bag';

export class Player{
    //角色id
    public id:number;
    //经验
    public exp:number;
    //金币
    public coin:number;
    //钻石
    public diamond:number;
    //名字
    public nickname:number;
    //头像
    public avatarId:number;
    //头像框
    public avatarBorderId:number;
    //最大英雄数
    public maxHeroNum:number;
    //背包列表
    public bags:Bag[];
    //配置
    public option;
    //英雄
    public heros:Hero[];

    //战斗力
    public get fightPower() {
        //todo 战斗力公式
        return 0;
    }
}