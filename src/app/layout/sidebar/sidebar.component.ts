import { Component, Input } from '@angular/core';
import { IconsModule } from '../layout.module';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    IconsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('slideInOut', [
      state('void', style({ width: '0px', opacity: 0 })),
      state('*', style({ width: '*', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  @Input() open = true;
}
