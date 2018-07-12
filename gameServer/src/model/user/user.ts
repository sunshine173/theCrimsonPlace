//用户
import {Player} from './player/palyer';

export class User{
    private m_RandomSeed:number = Math.floor(Math.random()*1000);

    public m_player:Player;

    public get seed() {
        return this.m_RandomSeed;
    }
    public get random() {
        this.m_RandomSeed = (this.m_RandomSeed * 9233 + 58888) % 233;
        return Math.floor(this.m_RandomSeed * 0.004292*10e6)/10e6;
    }
}