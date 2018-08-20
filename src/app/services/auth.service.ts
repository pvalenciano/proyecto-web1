import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FirebaseApp } from '../../../node_modules/angularfire2';
@Injectable()
//servicio para la autenticación de los usuarios
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  //registro con email y contraseña
  public registerUser(email: string, pass: string) {
    //las promesas devuelven ok / no ok
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err))
    })
  }

  //entrar con email y contraseña
  public loginUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err))
    })

  }

  //Comprobar si está autenticado
  public getAuth() {
    return this.afAuth.authState.map(
      auth => auth);
  }


  public loginGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  public loginFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  public loginTwitter() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }





  logout() {
    return this.afAuth.auth.signOut();
  }
}
