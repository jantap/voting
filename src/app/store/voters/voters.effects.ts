import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap, withLatestFrom } from 'rxjs';
import { addVoter, addVoterFailure, addVoterSuccess, vote } from './voters.actions';
import { Voter } from 'src/app/models/voter';
import { Store } from '@ngrx/store';
import { selectVoterCount } from './voters.selectors';
import { incrementCandidateVotes } from '../candidates/candidates.actions';

@Injectable()
export class VotersEffects {
	constructor(private actions$: Actions, private store: Store) {}

	addVoter$ = createEffect(() =>
		this.actions$.pipe(
			ofType(addVoter),
			map(({ name }) => name),
			withLatestFrom(this.store.select(selectVoterCount)),
			map(([name, count]) => addVoterSuccess({ voter: { id: count + 1, name, hasVoted: false } }))
		)
	);

	vote$ = createEffect(() =>
		this.actions$.pipe(
			ofType(vote),
			map(({ candidateId }) => incrementCandidateVotes({ id: candidateId }))
		)
	);
}
