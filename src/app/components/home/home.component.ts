import { Component, OnInit, Input, Output } from '@angular/core';
import Medicine from 'src/app/models/medicine.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() public pharmacyMessage: Medicine[];

  constructor() {}

  ngOnInit(): void {}
}
