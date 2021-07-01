import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@core/services';

@Component({
  selector: 'core-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  constructor(private _authService: AuthService) {}

  logout() {
    this._authService.logout();
  }
}
