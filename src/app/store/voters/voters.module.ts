import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { VotersEffects } from './voters.effects';
import { voters } from './voters.reducers';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature('voters', voters),
		EffectsModule.forFeature([VotersEffects]),
	],
	providers: [VotersEffects],
})
export class VotersModule {}
