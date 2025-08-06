// src/app/shared/icons.module.ts
import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  Home, Users, FileText, Settings, Rocket, MessageCircle, Menu
} from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Home,
      Users,
      FileText,
      Settings,
      Rocket,
      MessageCircle,
      Menu
    })
  ],
  exports: [
    LucideAngularModule
  ]
})
export class IconsModule {}
