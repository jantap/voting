import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Voter } from 'src/app/models/voter';
import { State, adapter } from './voters.state';

export const selectVotersState = createFeatureSelector<State>('voters');

const { selectEntities, selectAll } = adapter.getSelectors();

export const selectVotersEntities = createSelector(selectVotersState, selectEntities);
export const selectAllVoters = createSelector(selectVotersState, selectAll);

export const selectVoterCount = createSelector(selectAllVoters, (voters) => voters.length);

export const selectVoterById = createSelector(
	selectVotersEntities,
	(voters: Dictionary<Voter>, props: { id: string }) => voters[props.id]
);

export const selectUnvotedVoters = createSelector(selectAllVoters, (voters) =>
	voters.filter(({ hasVoted }) => !hasVoted)
);
