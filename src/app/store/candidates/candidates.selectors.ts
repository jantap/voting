import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Candidate } from '../../models/candidate';
import { State, adapter } from './candidates.state';

export const selectCandidatesState = createFeatureSelector<State>('candidates');

const { selectEntities, selectAll } = adapter.getSelectors();

export const selectCandidatesEntities = createSelector(selectCandidatesState, selectEntities);
export const selectAllCandidates = createSelector(selectCandidatesState, selectAll);
export const selectCandidateCount = createSelector(selectAllCandidates, (candidates) => candidates.length);

export const selectCandidateById = createSelector(
	selectCandidatesEntities,
	(candidates: Dictionary<Candidate>, props: { id: string }) => candidates[props.id]
);
