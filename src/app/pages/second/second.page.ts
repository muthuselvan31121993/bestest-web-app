import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Devdactic SSR');
    this.metaService.updateTag({ name: 'description', content: 'The Devdactic SSR Page' });
    // Twitter
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ property: 'twitter:title', content: 'NEW ARTICLE OUT NOW' });
    this.metaService.updateTag({ property: 'twitter:description', content: 'Check out this cool article' });
    this.metaService.updateTag({ property: 'twitter:image', content: 'https://s3.amazonaws.com/bestest-staging/facebook-98738-1632805745799/1632805745855.png' });

    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: '/second' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'My Ionic SSR Page' });
    this.metaService.updateTag({ property: 'og:title', content: 'My SSR Title!' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://s3.amazonaws.com/bestest-staging/facebook-98738-1632805745799/1632805745855.png' });


  }

}
