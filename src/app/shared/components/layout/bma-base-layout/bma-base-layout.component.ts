import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bma-base-layout',
  templateUrl: './bma-base-layout.component.html',
  styleUrls: ['./bma-base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BmaBaseLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
