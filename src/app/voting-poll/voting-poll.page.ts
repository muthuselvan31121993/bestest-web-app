import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIService } from '../service/api.service';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { UserMediaTrayService } from '../service/user-media-tray.service';
import {
  isPlatform,
  AlertController,
  IonInfiniteScroll,
  MenuController,
  PopoverController,
  ToastController,Platform
} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-voting-poll',
  templateUrl: './voting-poll.page.html',
  styleUrls: ['./voting-poll.page.scss'],
})
export class VotingPollPage implements OnInit {
  public poll: any = {};
  pollId: any = "";
  errorStatus: any;
  candidateId: any;
  myvote: any;
  loadData: boolean = false;
  username: string = '';
  Poll_Id: string = "";
  defaultImageURL = 'assets/icon/defaultProfilePic.png';
  IsEnabledCreatePoll: boolean = false;
  initialLoadFlag: boolean = true;
  isCardEnabled: boolean = true;
  votedFlag: boolean = false;
  deviceId: any;
  RandomNo: any;
  pollclick: any;
  userID: string = "";
  user_sid: string = "";
  selectedItem: any = '';
  userDetails = {
    id: "",
    email: "",
    name: "",
    password: "",
    newPassword: "",
    username: "",
    photo_url: "",
    photo_url2: "",
    sid: "",
    website: ""
  };
  platformFlag: boolean;
  textPoll_img_type: string = "";
  textPoll_img_url: any = "";
  youtubeRegex =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
  approvedImages = ['jpeg', 'jpg', 'png'];
  approvedVideos = ['mp4', 'mov'];
  approvedMedia = ['gif'];
  approvedGifSources = ['giphy', 'gph', 'tenor'];
  isImageValid = (ext: string) => this.approvedImages.includes(ext);
  youTubeIsValid = (url: string) => {
    if (url) {
      const match = url.match(this.youtubeRegex);
      if (match && match[2].length === 11) {
        return true;
      }
    }
    return false;
  };

  validateYouTubeUrl = (url: string) => {
    if (url) {
      const match = url.match(this.youtubeRegex);
      if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?rel=0&autoplay=0&showinfo=0&controls=1&frameborder=0`;
      }
    }
    return false;
  };

  isUrlValid = (url: string) => {
    try {
      new URL(url);
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  };
  isValidGifSource = (url: string | string[]) =>
    this.approvedGifSources.some((v) => url.indexOf(v) >= 0);

  constructor(private Platform:Platform,private _sanitizer:DomSanitizer,private titleService: Title, private metaService: Meta,
    private route: ActivatedRoute, private http: HttpClient, private userMediaService: UserMediaTrayService, private popoverController: PopoverController, private alertCtrl: AlertController) {
      // 
      if(this.Platform.is('cordova'))
        this.platformFlag=true;
      else{
          if(isPlatform('ios') || isPlatform('android'))
             this.platformFlag = true;
          else this.platformFlag=false
      }
      this.route.queryParamMap
      .subscribe((params) => {
        let paramsObject: any;
        paramsObject = { ...params };
        console.log("sonstructor ::", (paramsObject.params));
        this.Poll_Id = (paramsObject.params).pollId;
        console.log("this.Poll_Id ::", this.Poll_Id);
      });
  }

  ngOnInit() {
    console.log("init ::", this.Poll_Id);
    this.votedFlag = false;
    this.IsEnabledCreatePoll = false;
    this.getPollData('');
  }
  getPollData(flag) {
    let httpOptions: any;
    if (flag != "") {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64',
          'Authorization': this.user_sid
        })
      };
    }
    else {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64'
        })
      };
    }
    this.http.get('https://bestest-api.herokuapp.com/poll/' + this.Poll_Id, httpOptions).subscribe((res: any) => {
      let poll = res[0];
      if (res.length > 0) {
        poll = res[0];
        poll.candidates.forEach(element => {
          if (poll.media_url !== null) {
            this.attachVideoOrGifURL(poll.media_url);
          }

        });
        if (flag == "delete") {
          poll.deletevote = true;
          this.votedFlag = true;
          this.IsEnabledCreatePoll = true;
        }
        else if (flag == "put" || flag == "post") {
          poll.deletevote = false;
          this.votedFlag = true;
          this.IsEnabledCreatePoll = true;
        }
        this.poll = poll;
      }

      if (this.initialLoadFlag) {
        this.updateMetaTag(res[0].share_images)
        this.createDummyUser();
      }
    });

  }
  hasJsonProp(obj, prop) {
    return obj.hasOwnProperty(prop)
  }
  getCandidateVotePerc(candidateId, results) {
    var perc = results.filter(function (res) {
      return res['candidate_id'] === candidateId
    });

    if (perc.length > 0 && this.hasJsonProp(perc[0], 'pct')) {
      return Math.round(perc[0].pct * 100)
    } else {
      return 0
    }

  }
  getCandidateVotePercText(candidateId, results) {
    var perc = results.filter(function (res) {
      return res['candidate_id'] === candidateId
    });
    if (perc.length > 0 && this.hasJsonProp(perc[0], 'pct')) {
      return Math.round(perc[0].pct * 100) + '%'
    } else {
      return 0 + '%'
    }
  }
  getProgressPercent(candidateId, results) {
    var perc = results.filter(function (res) {
      return res['candidate_id'] === candidateId
    });

    return perc[0] ? perc[0].pct : 0;

  }
  async createDummyUser() {
    this.initialLoadFlag = false;
    let email = '';
    let randomNum = Math.floor(Math.random() * 90000) + 10000;
    email = "user" + randomNum + "@gmail.com";
    // const userDetail = {username:'',name:'',email:email,password:'12345678',device_id:"434nbjhbkuhukgfgjv"};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64'
      })
    };
    this.http.post('https://bestest-api.herokuapp.com/validate/email', {
      email: email
    }, httpOptions).subscribe((user: any) => {
    },
      async (err) => {
        const status = err.status;
        switch (status) {
          case 200:
            let params = { "username": "user" + randomNum, "name": "user" + randomNum, "email": email, "password": "12345678", "device_id": "748b6393-f4ed-4fef-8c23-bb9d439c4e6a" };

            this.http.post('https://bestest-api.herokuapp.com/user', params, httpOptions).subscribe((user: any) => {
              this.user_sid = user.sid;
              this.userID = user.id;
            })
            break;
          case 406:
            this.createDummyUser();
            break;

        }
      }
    );

  }
  attachVideoOrGifURL(videoOrGifURL) {
    const ext = videoOrGifURL.split('.').pop().toLowerCase();
    const isImageValid = this.isImageValid(ext);
    if (isImageValid) {
      this.textPoll_img_type = "webImage";
      this.textPoll_img_url = videoOrGifURL;
    }
    const isYoutubeValid = this.youTubeIsValid(videoOrGifURL);
    if (isYoutubeValid) {
      const youtubeEmbedURL = this.validateYouTubeUrl(videoOrGifURL);
      if (youtubeEmbedURL) {
        this.textPoll_img_type = "youtube";
        this.textPoll_img_url=this._sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedURL);


      }
    } 
    const isValidGifSource = this.isValidGifSource(videoOrGifURL) || ext === 'gif'; 
    if (isValidGifSource) { 
      this.getLinkPreviewData(JSON.stringify({ link: videoOrGifURL })).subscribe((res) => { 
        if (res.images !== undefined) { 
          this.textPoll_img_type = "gif"; 
          this.textPoll_img_url = res.images[0]; 
        }
        else if (res.url !== undefined) { 
          this.textPoll_img_type = "gif"; 
          this.textPoll_img_url = res.url; 
        }
        else { 
           alert('Error adding GIF, please try again'); 
        } 
      });
   }
  }


  // attachVideoOrGifURL(videoOrGifURL) {

  //   const ext = videoOrGifURL.split('.').pop().toLowerCase();
  //   const isImageValid = this.isImageValid(ext);
  //   if (isImageValid) {
  //     this.userMediaService.setTextPollMediaURL({
  //       type: 'webImage',
  //       url: videoOrGifURL,
  //     });
  //   }
  //   const isYoutubeValid = this.youTubeIsValid(videoOrGifURL);
  //   if (isYoutubeValid) {

  //     const youtubeEmbedURL = this.validateYouTubeUrl(videoOrGifURL);
  //     if (youtubeEmbedURL) {

  //       this.userMediaService.setTextPollMediaURL({
  //         type: 'youtube',
  //         url: youtubeEmbedURL,
  //       });
  //     }
  //   }

  //   const isValidGifSource =
  //     this.isValidGifSource(videoOrGifURL) || ext === 'gif';
  //   if (isValidGifSource) {
  //     this.getLinkPreviewData(
  //       JSON.stringify({ link: videoOrGifURL })
  //     ).subscribe((res) => {
  //       if (res.images !== undefined) {
  //         this.userMediaService.setTextPollMediaURL({
  //           type: 'gif',
  //           url: res.images[0],
  //         });
  //       } else if (res.url !== undefined) {
  //         this.userMediaService.setTextPollMediaURL({
  //           type: 'gif',
  //           url: res.url,
  //         });
  //       } else {
  //         alert('Error adding GIF, please try again');
  //       }
  //     });
  //   }

  //   // this.dismissClick()
  // }
  getLinkPreviewData(data): Observable<any> {
    return this.http.post(
      'https://us-central1-bestest-37e90.cloudfunctions.net/getLinkPreviewDetails',
      data
    );
  }
  votingCard() {
    // if(!this.platformFlag)
    return "webDesktopVotingCard";
  }
  async getValue(item, items) {
    this.pollId = item.id;
    this.candidateId = items.id;
    this.myvote = item.myVote;
    this.selectedItem = items.id;
    this.pollclick = items.id;
    if (item.voteStatus !== false) {
      if (this.myvote !== undefined) {
        if (this.myvote.candidate_id === this.candidateId) {
          this.deleteVote();
        } else {
          this.putVote();
        }
      } else {
        this.postVote();
      }
    } else {
      const alert = await this.alertCtrl.create({
        cssClass: 'alertCustomCss',
        message: "The pollster discontinued voting on this poll",
        buttons: [
          {
            text: 'OK',
            role: 'OK',
            cssClass: 'secondary',
            handler: (blah) => {
              this.popoverController.dismiss();
            }
          }
        ]
      });

      await alert.present();

    }
  }
  deleteVote() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64',
        'Authorization': this.user_sid
      })
    };
    this.http.delete('https://bestest-api.herokuapp.com/vote/' + this.myvote.id, httpOptions).subscribe((res: any) => {
      this.getPollData('delete');
    });

  }
  postVote() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64',
        'Authorization': this.user_sid
      })
    };
    const data = {
      poll_id: this.pollId, candidate_id: this.candidateId
    }

    this.http.post('https://bestest-api.herokuapp.com/vote', data, httpOptions).subscribe((res: any) => {
      this.getPollData('post');
    });
  }
  putVote() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64',
        'Authorization': this.user_sid
      })
    };
    const data = {
      poll_id: this.pollId, candidate_id: this.candidateId
    };

    this.http.put('https://bestest-api.herokuapp.com/vote', data, httpOptions).subscribe((res: any) => {
      this.getPollData('put');
    });
  }
  async showMenu() {
    let uId = this.poll.user_id;
    let poll = this.poll;
    let selfId = localStorage.getItem('sid');
    // const modal = await this.popoverController.create({
    //   component: UserPopupComponent,
    //   cssClass: 'bottom-sheet-popover',
    //   componentProps: {
    //     uId,
    //     poll,
    //     selfId
    //   }
    // });
    // await modal.present();
  }
  updateMetaTag(data) {
    this.titleService.setTitle('Devdactic SSR');
    this.metaService.updateTag({ name: 'description', content: 'The Devdactic SSR Page' });
    // Twitter
    this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ property: 'twitter:title', content: 'NEW ARTICLE OUT NOW' });
    this.metaService.updateTag({ property: 'twitter:description', content: 'Check out this cool article' });
    this.metaService.updateTag({ property: 'twitter:image', content: data[0].url });

    // Facebook
    this.metaService.updateTag({ property: 'og:url', content: '/second' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    this.metaService.updateTag({ property: 'og:description', content: 'My Ionic SSR Page' });
    this.metaService.updateTag({ property: 'og:title', content: 'My SSR Title!' });
    this.metaService.updateTag({ property: 'og:image', content: data[1].url });
  }
}
