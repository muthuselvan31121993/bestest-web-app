import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  id = null;
  data = null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadata();
  }

  ngOnInit() {}

  loadata() {
    const DATA_KEY = makeStateKey('pokemon-' + this.id);
    if (this.transferState.hasKey(DATA_KEY)) {
      console.log('Fetch data from State!');
      this.data = this.transferState.get(DATA_KEY, null);
      this.transferState.remove(DATA_KEY);
    } else {
      console.log('Get Data from API...');
      this.http
        .get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        .subscribe((res) => {
          if (isPlatformServer(this.platformId)) {
            this.transferState.set(DATA_KEY, res);
          } else {
            this.data = res;
          }
        });
    }
  }
}
