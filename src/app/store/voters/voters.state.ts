import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Voter } from '../../models/voter';

export interface State extends EntityState<Voter> {}

export const adapter: EntityAdapter<Voter> = createEntityAdapter<Voter>({});

export const initState: State = adapter.getInitialState({});
