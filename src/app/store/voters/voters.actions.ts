import { createAction, props } from '@ngrx/store';
import { Voter } from 'src/app/models/voter';

export const addVoter = createAction('[Voters] Add Voter', props<{ name: string }>());
export const addVoterSuccess = createAction('[Voters] Add Voter Success', props<{ voter: Voter }>());
export const addVoterFailure = createAction('[Voters] Add Voter Failure', props<any>());

export const vote = createAction('[Voters] Vote', props<{ voterId: number; candidateId: number }>());
