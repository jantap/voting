import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Candidate } from '../../models/candidate';

export interface State extends EntityState<Candidate> {}

export const adapter: EntityAdapter<Candidate> = createEntityAdapter<Candidate>({});

export const initState: State = adapter.getInitialState({});
