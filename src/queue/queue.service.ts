import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class QueueService {

    constructor(
        @InjectQueue('myQueue') private myQueue: Queue
    ) {
    }
    public addToQueue(item: string, delay: number): Promise<any> {
        return this.myQueue.add({
            item,
            timeStamp: Date.now(),
        },
        { delay, lifo: false }
        )
    }
    public next() {
        return this.myQueue.getNextJob();
    }

}

