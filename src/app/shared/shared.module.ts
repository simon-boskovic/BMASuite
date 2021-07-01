import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BmaBaseLayoutComponent, LoginFormComponent } from '@shared/components';
@NgModule({
  declarations: [BmaBaseLayoutComponent, LoginFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [BmaBaseLayoutComponent, LoginFormComponent, CommonModule]
})
export class SharedModule {}
