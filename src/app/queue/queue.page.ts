import { MopidyService } from '../mopidy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage {

  constructor(private mp: MopidyService) {
  }
}
