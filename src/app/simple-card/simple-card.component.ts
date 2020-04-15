import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-simple-card',
  templateUrl: './simple-card.component.html',
  styleUrls: ['./simple-card.component.scss'],
})
export class SimpleCardComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() text: string;
  @Input() label: string;
  @HostBinding('style.order') @Input() flexOrder: number;

  constructor() { }

  ngOnInit(): void { }
}
