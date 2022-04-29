import { Controller, Get, Param, Res } from '@nestjs/common'; 
import { QueueService } from './queue.service';

@Controller('queue')
export class QueueController {
  constructor(
    private readonly queueService: QueueService
  ) { }

  @Get(":item")
  addToSchedule(@Param('item') item: string, @Res() res) {
    this.queueService.addToQueue(item, 1000);
    res.send("your item " + item)
  }
}
