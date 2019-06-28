import { Component, OnInit } from '@angular/core';
import { Product } from '../../../classes/product';
import { WishlistService } from '../../../services/wishlist.service';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(x => console.log(x));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
