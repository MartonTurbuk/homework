import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-delay-component',
  standalone: true,
  imports: [],
  templateUrl: './delay-component.component.html',
  styleUrl: './delay-component.component.css'
})
export class DelayComponentComponent {
  @Output() delayChange = new EventEmitter<string>();

  onDelayInput(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.delayChange.emit(input) // Convert to milliseconds
  }
}
