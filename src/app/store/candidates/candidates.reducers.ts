import { Action, createReducer, on } from '@ngrx/store';
import { adapter, initState, State } from './candidates.state';
import { addCandidateSuccess, incrementCandidateVotes } from './candidates.actions';

const candidatesReducer = createReducer(
	initState,
	on(addCandidateSuccess, (state, { candidate }) => adapter.upsertOne(candidate, state)),
	on(incrementCandidateVotes, (state, { id }) => {
		const candidate = state.entities[id];
		if (!candidate) {
			return state;
		}

		return adapter.upsertOne({ ...candidate, votes: candidate.votes + 1 }, state);
	})
);

export const candidates = (state: State | undefined, action: Action) => candidatesReducer(state, action);
