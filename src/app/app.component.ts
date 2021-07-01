import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(private _authService: AuthService) {}
  isLoggedIn(): boolean {
    return this._authService.isLoggedIn();
  }
}
