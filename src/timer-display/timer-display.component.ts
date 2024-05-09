import {Component, Input} from '@angular/core';
import {DelayComponentComponent} from "../delay-component/delay-component.component";
import {DatePipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-timer-display',
  standalone: true,
  imports: [
    DelayComponentComponent,
    DatePipe,
    NgIf
  ],
  templateUrl: './timer-display.component.html',
  styleUrl: './timer-display.component.css'
})
export class TimerDisplayComponent {
  @Input() date: Date | null = null;
}
