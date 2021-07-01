import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { TaskListComponent } from './components/task-list/task-list.component';
import { PlannedTasksComponent } from './components/task-list/planned-tasks/planned-tasks.component';
import { FinishedTasksComponent } from './components/task-list/finished-tasks/finished-tasks.component';

@NgModule({
  imports: [CommonModule, TaskRoutingModule, SharedModule],
  declarations: [TaskComponent, TaskListComponent, PlannedTasksComponent, FinishedTasksComponent]
})
export class TaskModule {}
