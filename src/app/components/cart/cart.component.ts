import { CartState } from './../../store/reducers/cart.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private store: Store<{ cart: CartState }>) {}

  ngOnInit(): void {}

  public prikazi() {
    this.store.subscribe((s) => console.log(s));
  }
}
