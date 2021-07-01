import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'finished-tasks',
  templateUrl: './finished-tasks.component.html',
  styleUrls: ['./finished-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinishedTasksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
