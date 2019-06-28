import { Component, OnInit } from '@angular/core';
import { Product } from '../../../classes/product';
import { WishlistService } from '../../../services/wishlist.service';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  user: firebase.User;


  constructor(private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => this.user = user);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
