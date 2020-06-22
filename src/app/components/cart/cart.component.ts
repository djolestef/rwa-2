import {
  removeAllFromCart,
  removeMedicineFromCart,
} from './../../store/actions/cart.action';
import { getCartMedicines } from './../../store/reducers/index';
import { CartState } from './../../store/reducers/cart.reducer';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import Medicine from 'src/app/models/medicine.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _store: Store<{ cart: CartState }>) {}

  public medicinesInCart: Medicine[];
  public total: number;

  ngOnInit(): void {
    this._store.pipe(select(getCartMedicines)).subscribe((data) => {
      this.medicinesInCart = [];
      this.total = 0;
      for (let value in data) {
        this.medicinesInCart.push(data[value]);
      }
      this.medicinesInCart.forEach((medicine) => {
        this.total += medicine.price;
      });
    });
  }

  public onClick() {
    this._store.dispatch(removeAllFromCart());
    alert(
      'Vaša porudžbina je registrovana pod brojem ' +
        Math.floor(Math.random() * Math.floor(100)) +
        '. \nObavezno ponesite recept ukoliko je on potreban.'
    );
  }

  public removeMedicine(button: HTMLButtonElement) {
    let id: number = parseInt(button.value);
    this._store.dispatch(removeMedicineFromCart({ id }));
  }
}
