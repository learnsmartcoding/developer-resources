//User Comment
//"@learnsmartcoding Thank you for the tutorial. I am using ngrx, store and effects for state management. You are using inject for services. Can you share info or link on how to use the authentication state managed by the auth reducer to determine whether the user is logged in or not? Thank you"

//video link: https://www.youtube.com/watch?v=Gm6FfkIsTC8

/*
// Selector for authentication state
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state'; // Adjust the import according to your app state file location
import { AuthState } from './auth.reducer'; // Adjust the import according to your auth state file location

export const selectAuthState = (state: AppState) => state.auth;

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.isLoggedIn
);

// Auth Guard Function
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppState } from './app.state'; // Adjust the import according to your app state file location

export const authGuard: CanActivateFn = (): Observable<boolean> => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select(selectIsLoggedIn).pipe(
    take(1),
    map(isLoggedIn => {
      if (isLoggedIn) {
        return true;
      } else {
        router.navigate(['/login']); // Redirect to login page if not logged in
        return false;
      }
    })
  );
};

// App Routing Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth-guard-example'; // Adjust the import according to your guard function location
import { ProtectedComponent } from './protected/protected.component'; // Adjust the import according to your protected component location

const routes: Routes = [
  {
    path: 'protected',
    component: ProtectedComponent, // Your protected component
    canActivate: [authGuard]
  },
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

*/