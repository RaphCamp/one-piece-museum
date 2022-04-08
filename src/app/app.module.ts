import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

//en attendant le serveur
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { IdentificationComponent } from './identification/identification.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { MuseeComponent} from './musee/musee.component';
import { AppRoutingModule } from './app-routing.module';
import { PieceSearchComponent } from './piece-search/piece-search.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IdentificationComponent,
    DetailViewComponent,
    MuseeComponent,
    PieceSearchComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
),
 AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
