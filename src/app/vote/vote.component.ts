import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllCandidates } from '../store/candidates/candidates.selectors';
import { selectUnvotedVoters } from '../store/voters/voters.selectors';
import { vote } from '../store/voters/voters.actions';

@Component({
	selector: 'app-vote',
	templateUrl: './vote.component.html',
	styleUrls: ['./vote.component.scss'],
})
export class VoteComponent {
	voters$ = this.store.select(selectUnvotedVoters);
	candidates$ = this.store.select(selectAllCandidates);

	voter = 0;
	candidate = 0;

	constructor(private store: Store) {}

	vote() {
		if (this.voter != 0 && this.candidate != 0) {
			this.store.dispatch(vote({ voterId: this.voter, candidateId: this.candidate }));
			this.voter = 0;
			this.candidate = 0;
		}
	}
}
