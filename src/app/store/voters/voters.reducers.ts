import { Action, createReducer, on } from '@ngrx/store';
import { addVoterSuccess, vote } from './voters.actions';
import { adapter, initState, State } from './voters.state';

const votersReducer = createReducer(
	initState,
	on(addVoterSuccess, (state, { voter }) => adapter.upsertOne(voter, state)),
	on(vote, (state, { voterId }) => {
		const voter = state.entities[voterId];
		if (!voter) {
			return state;
		}

		return adapter.upsertOne({ ...voter, hasVoted: true }, state);
	})
);

export const voters = (state: State | undefined, action: Action) => votersReducer(state, action);
