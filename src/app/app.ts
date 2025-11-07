import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   risk?: number;
  entry?: number;
  slPrice?: number;
  slPercent?: number;
  leverage?: number;
  mode: 'price' | 'percent' = 'price';

  get lot(): number {
    if (!this.risk || !this.entry || !this.leverage) return 0;

    let diff = 0;
    if (this.mode === 'price') {
      if (!this.slPrice) return 0;
      diff = this.entry - this.slPrice;
    } else {
      if (!this.slPercent) return 0;
      diff = this.entry * (this.slPercent / 100);
    }

    if (diff <= 0) return 0;
    return Math.floor((this.risk * this.leverage) / diff);
  }
}
