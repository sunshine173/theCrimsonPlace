import {Equip} from '../bag/goods';

export class Hero {
    // 英雄id
    id:number;
    //英雄槽位 从0开始
    index:number;
    //英雄exp总量
    exp:number;
    //突破层数
    lv:number;
    //装备
    equips:Equip[];
    //技能
    skills:Skill[];
    //剩余技能点
    skillPointNum:number;

    //获取战斗力
    public get fightPower() {
        return 0;
    }

    //增加装备
    public addEquip(equipIds:number[]) {

    }

    //升级技能 返回升级后的等级
    public upSkill(skillId:number) : number{
        return 0;
    }
}

export class Skill{
    //技能id
    id:number;
    //技能等级
    lv:number;

    //获取战斗力
    public get fightPower() {
        return 0;
    }
}