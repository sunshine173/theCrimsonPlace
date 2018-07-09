export class BasicApi{
    //心跳
    static heart():String {
        return 'ok';
    }
    //启动准备
    static warmup():boolean {
        //some init
        return true;
    }
}
