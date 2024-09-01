import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';

@Injectable()
export class PusherService {
    pusher: Pusher;

    constructor() {
        this.pusher = new Pusher({
            appId: "1855138",
            key: "b96aa4618da406230380",
            secret: "2afa908f46177057a20f",
            cluster: "ap2",
            useTLS: true
          });
    }

    async trigger(channel: string, event: string, data: any){
        await this.pusher.trigger(channel, event, data);
    }
}
