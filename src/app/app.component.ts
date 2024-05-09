import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TimerDisplayComponent} from "../timer-display/timer-display.component";
import {DelayComponentComponent} from "../delay-component/delay-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TimerDisplayComponent, DelayComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homework';
  currentTime = new Date();
  delay: number | null = null;

  get futureTime(): Date | null {
    if (this.delay == null) {
      return null;
    }
    return new Date(this.currentTime.getTime() + this.delay);
  }

  updateDelay(newDelay: string) {
    this.delay = newDelay ? parseInt(newDelay, 10) * 1000 : null;
    this.currentTime = new Date();
  }
}
