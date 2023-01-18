import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CandidatesEffects } from './candidates.effects';
import { candidates } from './candidates.reducers';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature('candidates', candidates),
		EffectsModule.forFeature([CandidatesEffects]),
	],
	providers: [CandidatesEffects],
})
export class CandidatesModule {}
