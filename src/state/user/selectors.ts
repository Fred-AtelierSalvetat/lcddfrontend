import type { AuthenticationState as _AuthenticationState } from './user.authentication.reducer';

export const isCurrentUserLoggedIn: (_AuthenticationState) => boolean = (state) => state.loggedIn;
