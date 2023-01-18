import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap, withLatestFrom } from 'rxjs';
import { addCandidate, addCandidateFailure, addCandidateSuccess } from './candidates.actions';
import { Store } from '@ngrx/store';
import { selectCandidateCount } from './candidates.selectors';

@Injectable()
export class CandidatesEffects {
	constructor(private actions$: Actions, private store: Store) {}

	addCandidate$ = createEffect(() =>
		this.actions$.pipe(
			ofType(addCandidate),
			map(({ name }) => name),
			withLatestFrom(this.store.select(selectCandidateCount)),
			map(([name, count]) => addCandidateSuccess({ candidate: { name, id: count + 1, votes: 0 } }))
		)
	);
}
