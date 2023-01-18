import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/store.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VotersComponent } from './voters/voters.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { VoteComponent } from './vote/vote.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [AppComponent, VotersComponent, CandidatesComponent, AddPersonComponent, VoteComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AppStoreModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		StoreDevtoolsModule.instrument(),
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] },
		}),
		NgbModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
