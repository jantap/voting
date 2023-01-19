import { createAction, props } from '@ngrx/store';
import { Candidate } from '../../models/candidate';

export const addCandidate = createAction('[Candidates] Add Candidate', props<{ name: string }>());
export const addCandidateSuccess = createAction(
	'[Candidates] Add Candidate Success',
	props<{ candidate: Candidate }>()
);
export const addCandidateFailure = createAction('[Candidates] Add Candidate Failure', props<any>());

export const incrementCandidateVotes = createAction('[Candidates] Increment Candidate Votes', props<{ id: number }>());
