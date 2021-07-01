import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'planned-tasks',
  templateUrl: './planned-tasks.component.html',
  styleUrls: ['./planned-tasks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlannedTasksComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
