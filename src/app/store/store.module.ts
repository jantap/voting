import { Injectable, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { voters, VotersModule, VotersState } from './voters';
import { candidates, CandidatesModule, CandidatesState } from './candidates';

export interface AppState {
	voters: VotersState.State;
	candidates: CandidatesState.State;
}

export const AppReducers: ActionReducerMap<AppState> = {
	voters,
	candidates,
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
	return localStorageSync({ keys: ['candidates', 'voters'], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@Injectable()
export class AppEffects {}

@NgModule({
	imports: [
		StoreModule.forRoot(AppReducers, { metaReducers }),
		CandidatesModule,
		VotersModule,
		EffectsModule.forRoot([AppEffects]),
	],
})
export class AppStoreModule {}
