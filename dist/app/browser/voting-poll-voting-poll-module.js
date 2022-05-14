(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voting-poll-voting-poll-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/voting-poll/voting-poll.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voting-poll/voting-poll.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ionContentClass\">\n  <ion-grid class=\"contentHeight\">\n    <ion-row class=\"contentHeight\">\n      <ion-col [ngClass]=\"votingCard()\">\n        <ion-card class=\"cardClass\" no-padding *ngIf=\"isCardEnabled\">\n          <div>\n            <ion-icon src=\"../../../assets/icon/option.svg\" class=\"more\" color=\"primary\" (click)=\"showMenu()\">\n            </ion-icon>\n          </div>\n\n          <ion-item style=\"margin-top: 20px\" lines=\"none\">\n            <ion-avatar>\n              <img [src]=\"poll?.user?.photo_url!= null ? poll?.user?.photo_url : defaultImageURL\" />\n            </ion-avatar>\n            <div style=\"margin-left: 10px\">\n              <ion-label class=\"userName\">{{ poll?.user?.name }} </ion-label>\n              <ion-label style=\"font-size: x-small\">@{{ poll?.user?.username }}</ion-label>\n            </div>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-text class=\"poll\">{{ poll?.poll }}</ion-text>\n          </ion-item>\n          <ion-item *ngIf=\"textPoll_img_url !== ''\">\n\n            <ion-img *ngIf=\"textPoll_img_type === 'gif'\"\n\n              [src]=\"textPoll_img_url\"></ion-img>\n\n            <ion-img *ngIf=\"textPoll_img_type === 'webImage'\"\n\n              [src]=\"textPoll_img_url\"></ion-img>\n\n            <iframe *ngIf=\"textPoll_img_type === 'youtube'\" width=\"100%\" height=\"300\"\n\n              [src]=\"textPoll_img_url\" frameborder=\"0\"\n\n              allowfullscreen></iframe>\n\n          </ion-item>\n          <div *ngFor=\"let items of poll?.candidates;let j = index\">\n            <ion-row>\n              <ion-col size=\"10\">\n                <ion-item *ngIf=\"poll?.type === 'text'\" lines=\"none\">\n                  <ion-input id=\"inputValue\" (click)=\"getValue(poll , items)\" [(ngModel)]=\"items.candidate\"\n                    class=\"inputText\" [readonly]=\"true\" type=\"text\">\n                    <ion-progress-bar class=\"progress2\" *ngIf=\"\n                    poll.type === 'text' &&\n                    hasJsonProp(poll, 'results') && getProgressPercent(items.id, poll?.results?.results)==0\" \n                    value=\"1\">\n                  </ion-progress-bar> \n                  <ion-progress-bar class=\"defaultprogres\" \n                  value=\"1\"></ion-progress-bar>\n                  <ion-progress-bar class=\"progress4\" *ngIf=\"poll.deletevote && pollclick== items.id\"\n                    value=\"1\">\n                </ion-progress-bar>\n                  <ion-progress-bar class=\"progress1\" *ngIf=\"\n                  poll.type === 'text' &&\n                  hasJsonProp(poll, 'results') && getProgressPercent(items.id, poll?.results?.results)!=0\" \n                  value=\"{{getProgressPercent(items.id, poll?.results?.results)}}\">\n                </ion-progress-bar> \n                  </ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"2\" class=\"votePercent\" *ngIf=\"votedFlag\">\n                <div *ngIf=\"userDetails?.name==poll?.user?.name\">\n                  <ion-text class=\"questionMarkGray\" *ngIf=\"poll.type === 'text' && !hasJsonProp(poll, 'results')\">0%\n                  </ion-text>\n                </div>\n                <div *ngIf=\"userDetails?.name!=poll?.user?.name\">\n                  <ion-text class=\"questionMarkGray\" style=\"color: #d7d7d7;\"\n                    *ngIf=\"poll.type === 'text' && !hasJsonProp(poll, 'results')\">?\n                  </ion-text>\n                </div>\n                <ion-text class=\"questionMark\" *ngIf=\"poll.type === 'text' && hasJsonProp(poll, 'results')\">\n                  {{getCandidateVotePercText(items.id,poll?.results?.results)}}</ion-text>\n              </ion-col>\n            </ion-row>\n          </div>\n          <div *ngIf=\"poll?.type === 'image'\">\n            <div *ngIf=\"poll?.candidates.length === 1\">\n              <div *ngFor=\"let items of poll?.candidates\" class=\"one-image-layout\">\n                <div class=\"container\">\n                  <img (click)=\"getValue(poll , items)\" [src]=\"items?.image_url\" />\n                  <div class=\"absoluteO\">\n                    <div class=\"number\" *ngIf=\"hasJsonProp(poll, 'results')\">\n                      <div role=\"progressbar1\"\n                        *ngIf=\"votedFlag && getCandidateVotePerc(items.id,poll?.results?.results)==0\"\n                        style=\"--value1:100\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                      </div>\n                    </div>\n                    <div class=\"number\"\n                      *ngIf=\"votedFlag && hasJsonProp(poll, 'results') && getCandidateVotePerc(items.id,poll?.results?.results) !=0\">\n                      <div role=\"progressbar\" *ngIf=\"votedFlag\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"--value:{{getCandidateVotePerc(items.id,poll?.results?.results)}}\"></div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n              <ion-item style=\"margin-left: auto\" lines=\"none\" lines=\"none\">\n                <ion-input [(ngModel)]=\"poll.option1\" [readonly]=\"true\" type=\"text\" class=\"inputText\">\n                </ion-input>\n              </ion-item>\n              <ion-item style=\"margin-left: auto\" lines=\"none\" lines=\"none\">\n                <ion-input [(ngModel)]=\"poll.option2\" [readonly]=\"true\" type=\"text\" class=\"inputText\">\n                </ion-input>\n              </ion-item>\n            </div>\n            <div *ngIf=\"poll?.candidates.length === 2\">\n              <div *ngIf=\"poll.poll_layout[0].orientation ==='centered'\" class=\"two-image-layout-square\">\n                <div *ngFor=\"let items of poll.candidates;let i = index\" class=\"two-image-layout-square-item\">\n                  <div class=\"container\">\n                    <img (click)=\"getValue(poll , items);selectedItem = i\" [src]=\"items.image_url\"  [ngStyle]=\"{'border': selectedItem == i ? '4px solid rgb(0,150,0)' : ''}\" />\n                    <div class=\"absoluteS\">\n                      <div class=\"number\" *ngIf=\"hasJsonProp(poll, 'results')\">\n                        <div role=\"progressbar1\"\n                          *ngIf=\"votedFlag && getCandidateVotePerc(items.id,poll?.results?.results)==0\"\n                          style=\"--value1:100\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        </div>\n                      </div>\n                      <div class=\"number\"\n                        *ngIf=\"votedFlag && hasJsonProp(poll, 'results') && getCandidateVotePerc(items.id,poll?.results?.results) !=0\">\n                        <div role=\"progressbar\" *ngIf=\"votedFlag\" aria-valuenow=\"65\" aria-valuemin=\"0\"\n                          aria-valuemax=\"100\" style=\"--value:{{getCandidateVotePerc(items.id,poll?.results?.results)}}\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <ion-input [readonly]=\"true\" [(ngModel)]=\"items.image_title\" class=\"image-label\"></ion-input>\n                </div>\n              </div>\n              <div *ngIf=\"poll.poll_layout[0].orientation === 'horizontal'\" class=\"two-image-layout-horizontal\">\n                <div *ngFor=\"let items of poll.candidates;let i = index\" class=\"two-image-layout-horizontal-item\">\n                  <div class=\"container\">\n                    <img (click)=\"getValue(poll , items);selectedItem = i\" [src]=\"items.image_url\"  [ngStyle]=\"{'border': selectedItem == i ? '4px solid rgb(0,150,0)' : ''}\" />\n                    <div class=\"absoluteS\">\n                      <div class=\"number\" *ngIf=\"hasJsonProp(poll, 'results')\">\n                        <div role=\"progressbar1\"\n                          *ngIf=\"votedFlag && getCandidateVotePerc(items.id,poll?.results?.results)==0\"\n                          style=\"--value1:100\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        </div>\n                      </div>\n                      <div class=\"number\"\n                        *ngIf=\"votedFlag && hasJsonProp(poll, 'results') && getCandidateVotePerc(items.id,poll?.results?.results) !=0\">\n                        <div role=\"progressbar\" *ngIf=\"votedFlag\" aria-valuenow=\"65\" aria-valuemin=\"0\"\n                          aria-valuemax=\"100\" style=\"--value:{{getCandidateVotePerc(items.id,poll?.results?.results)}}\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <ion-input [readonly]=\"true\" [(ngModel)]=\"items.image_title\" class=\"image-label\"></ion-input>\n                </div>\n              </div>\n              <div *ngIf=\"poll.poll_layout[0].orientation === 'vertical'\" class=\"two-image-layout-vertical\">\n                <div *ngFor=\"let items of poll.candidates;let i = index\" class=\"two-image-layout-vertical-item\">\n                  <div class=\"container\">\n                    <img class=\"imageStyle\" (click)=\"getValue(poll , items);selectedItem = i\" [src]=\"items.image_url\"  [ngStyle]=\"{'border': selectedItem == i ? '4px solid rgb(0,150,0)' : ''}\" />\n                    <div class=\"absoluteTV\">\n                      <div class=\"number\" *ngIf=\"!hasJsonProp(poll, 'results')\">\n                        <div role=\"progressbar1\"\n                          *ngIf=\"votedFlag && getCandidateVotePerc(items.id,poll?.results?.results)==0\"\n                          style=\"--value1:100\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                          style=\"--value:0\">\n                        </div>\n                      </div>\n                      <div class=\"number\" *ngIf=\" hasJsonProp(poll, 'results')\">\n                        <div role=\"progressbar\" *ngIf=\"votedFlag\" aria-valuenow=\"65\" aria-valuemin=\"0\"\n                          aria-valuemax=\"100\" style=\"--value:{{getCandidateVotePerc(items.id,poll?.results?.results)}}\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <ion-input [readonly]=\"true\" [(ngModel)]=\"items.image_title\" class=\"image-label\"></ion-input>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"poll.candidates.length === 3\">\n              <div *ngIf=\"poll.poll_layout[0].orientation ==='centered'\" class=\"three-image-layout-square\">\n                <div *ngFor=\"let items of poll.candidates;let i = index\" class=\"three-image-layout-square-item\">\n                  <div class=\"container\">\n                    <img (click)=\"getValue(poll , items);selectedItem = i\" [src]=\"items.image_url\"  [ngStyle]=\"{'border': selectedItem == i ? '4px solid rgb(0,150,0)' : ''}\" />\n                    <div class=\"absoluteTHS\">\n                      <div class=\"number\" *ngIf=\"hasJsonProp(poll, 'results')\">\n                        <div role=\"progressbar1\"\n                          *ngIf=\"votedFlag && getCandidateVotePerc(items.id,poll?.results?.results)==0\"\n                          style=\"--value1:100\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        </div>\n                      </div>\n                      <div class=\"number\"\n                        *ngIf=\"votedFlag && hasJsonProp(poll, 'results') && getCandidateVotePerc(items.id,poll?.results?.results) !=0\">\n                        <div role=\"progressbar\" *ngIf=\"votedFlag\" aria-valuenow=\"65\" aria-valuemin=\"0\"\n                          aria-valuemax=\"100\" style=\"--value:{{getCandidateVotePerc(items.id,poll?.results?.results)}}\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <ion-input [readonly]=\"true\" [(ngModel)]=\"items.image_title\" class=\"image-label\"></ion-input>\n                </div>\n              </div>\n              <div *ngIf=\"poll.poll_layout[0]?.orientation === 'default'\" class=\"three-image-layout-horizontal\">\n                <div *ngFor=\"let items of poll.candidates;let i = index\" class=\"three-image-layout-horizontal-item\">\n                  <div class=\"container\">\n                    <img style=\"border-radius: 5px;\" (click)=\"getValue(poll , items);selectedItem = i\" [src]=\"items.image_url\"  [ngStyle]=\"{'border': selectedItem == i ? '4px solid rgb(0,150,0)' : ''}\"/>\n                    <div class=\"absoluteT\">\n                      <div class=\"number\" *ngIf=\"hasJsonProp(poll, 'results')\">\n                        <div role=\"progressbar1\"\n                          *ngIf=\"votedFlag && getCandidateVotePerc(items.id,poll?.results?.results)==0\"\n                          style=\"--value1:100\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        </div>\n                      </div>\n                      <div class=\"number\"\n                        *ngIf=\"votedFlag && hasJsonProp(poll, 'results') && getCandidateVotePerc(items.id,poll?.results?.results) !=0\">\n                        <div role=\"progressbar\" *ngIf=\"votedFlag\" aria-valuenow=\"65\" aria-valuemin=\"0\"\n                          aria-valuemax=\"100\" style=\"--value:{{getCandidateVotePerc(items.id,poll?.results?.results)}}\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <ion-input [readonly]=\"true\" [(ngModel)]=\"items.image_title\" class=\"image-label\"></ion-input>\n                </div>\n              </div>\n              <div *ngIf=\"poll.poll_layout[0]?.orientation === 'vertical'\" class=\"three-image-layout-vertical\">\n                <div *ngFor=\"let items of poll.candidates;let i = index\" class=\"three-image-layout-vertical-item\">\n                  <div class=\"container\">\n                    <img style=\"height: 200px;\" class=\"imageStyle\" (click)=\"getValue(poll , items);selectedItem = i\" [src]=\"items.image_url\"  [ngStyle]=\"{'border': selectedItem == i ? '4px solid rgb(0,150,0)' : ''}\" />\n                    <div class=\"absoluteTHV\">\n                      <div class=\"number\" *ngIf=\"hasJsonProp(poll, 'results')\">\n                        <div role=\"progressbar1\"\n                          *ngIf=\"votedFlag && getCandidateVotePerc(items.id,poll?.results?.results)==0\"\n                          style=\"--value1:100\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        </div>\n                      </div>\n                      <div class=\"number\"\n                        *ngIf=\"votedFlag && hasJsonProp(poll, 'results') && getCandidateVotePerc(items.id,poll?.results?.results) !=0\">\n                        <div role=\"progressbar\" *ngIf=\"votedFlag\" aria-valuenow=\"65\" aria-valuemin=\"0\"\n                          aria-valuemax=\"100\" style=\"--value:{{getCandidateVotePerc(items.id,poll?.results?.results)}}\">\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                  <ion-input [readonly]=\"true\" [(ngModel)]=\"items.image_title\" class=\"image-label\"></ion-input>\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"poll.candidates.length === 4\" class=\"four-image-layout\">\n              <div *ngFor=\"let items of poll.candidates;let i = index\" class=\"four-image-layout-item\">\n                <div class=\"container\">\n                  <img style=\"border-radius: 5px;\" (click)=\"getValue(poll , items);selectedItem = i\" [src]=\"items.image_url\"  [ngStyle]=\"{'border': selectedItem == i ? '4px solid rgb(0,150,0)' : ''}\" />\n                  <div class=\"absolute\">\n                    <div class=\"number\" *ngIf=\"hasJsonProp(poll, 'results')\">\n                      <div role=\"progressbar1\"\n                        *ngIf=\"votedFlag && getCandidateVotePerc(items.id,poll?.results?.results)==0\"\n                        style=\"--value1:100\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                      </div>\n                    </div>\n                    <div class=\"number\"\n                      *ngIf=\"votedFlag && hasJsonProp(poll, 'results') && getCandidateVotePerc(items.id,poll?.results?.results) !=0\">\n                      <div role=\"progressbar\" *ngIf=\"votedFlag\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n                        style=\"--value:{{getCandidateVotePerc(items.id,poll?.results?.results)}}\"></div>\n                    </div>\n                  </div>\n                </div>\n                <ion-input [readonly]=\"true\" [(ngModel)]=\"items.image_title\" placeholder=\"Title Image\"\n                  class=\"image-label\">\n                </ion-input>\n              </div>\n            </div>\n          </div>\n          <ion-row style=\"margin-bottom: 10px\" class=\"voteCard\">\n            <ion-col>\n              <div style=\"margin-top: 20%; color: #979797; margin-bottom: auto\">\n                <ion-icon style=\"font-size: x-small\" name=\"time-outline\"></ion-icon>\n                <ion-text class=\"createdAt\">\n                  {{poll.created_at | date}}.{{poll.created_at | date:\"HH:mm a\"}}\n                </ion-text>\n              </div>\n            </ion-col>\n            <ion-col class=\"voteBox\">\n              <div style=\"margin-top: 5%;margin-right: 10px;\">\n\n                <ion-label *ngIf=\"!votedFlag \" class=\"votelabel\">Vote to see results\n                </ion-label>\n                <ion-label *ngIf=\"poll.totalVotes !== 0 && votedFlag\" class=\"votelabel\">Votes:<span\n                    class=\"voteResult\">{{poll.totalVotes}}</span></ion-label>\n              </div>\n              <ion-icon name=\"share-social\" class=\"shareIcon\" color=\"primary\">\n              </ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n        <ion-row class=\"createPoll_row\" *ngIf=\"IsEnabledCreatePoll && platformFlag\">\n          <ion-col class=\"btnCol\">\n            <!-- <button class=\"btnCss\" type=\"button\" (click)=\"createPoll()\">Create your own poll</button> -->\n            <a class=\"btnCss\"  href=\"https://bestest-dev.web.app/create-poll?userID={{userID}}\">Create your own poll</a>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"coltwo\" *ngIf=\"!platformFlag\">\n        <img class=\"bestestLogo\" src=\"../../assets/icon/bestestWhite.png\">\n        <div class=\"createPollDiv\">Creating and sharing polls just got easier</div>\n        <ion-row class=\"createPoll_row\" *ngIf=\"IsEnabledCreatePoll\">\n          <ion-col class=\"btnCol\">\n            <!-- <button class=\"desktopCreateButton\" type=\"button\" (click)=\"createPoll()\">Create your own poll</button> -->\n            <a class=\"btnCss\" href=\"https://bestest-dev.web.app/create-poll?userID={{userID}}\">Create your own poll</a>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/service/user-media-tray.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/user-media-tray.service.ts ***!
  \****************************************************/
/*! exports provided: UserMediaTrayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMediaTrayService", function() { return UserMediaTrayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let UserMediaTrayService = class UserMediaTrayService {
    constructor() {
        this._userMedia = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._userSelectedLayout = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this._textPollMediaURL = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            type: null,
            url: null,
            imageCopy: null,
            isEdited: null,
        });
        this._imgPollMediaURL = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
            type: null,
            url: null,
            imageCopy: null,
            isEdited: null,
        });
        this._imguserMedia = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        // Expose the observable$ part of the userMedia subject (read only stream)
        this.userMedia$ = this._userMedia.asObservable();
        this.imguserMedia$ = this._imguserMedia.asObservable();
        this.userSelectedLayout$ = this._userSelectedLayout.asObservable();
        this.textPollMediaURL$ = this._textPollMediaURL.asObservable();
        this.imgPollMediaURL$ = this._imgPollMediaURL.asObservable();
    }
    // the getter will return the last value emitted in the above subjects
    get userMedia() {
        // console.log('this._userMedia.getValue().length',this._userMedia.getValue().length)
        return this._userMedia.getValue();
    }
    get imguserMedia() {
        // console.log(this._userMedia.getValue().length)
        return this._imguserMedia.getValue();
    }
    get getUserSelectedLayout() {
        return this._userSelectedLayout.getValue();
    }
    get textPollMediaURL() {
        return this._textPollMediaURL.getValue();
    }
    // get imguserMedia() {
    //   console.log(this._imguserMedia.getValue().length)
    //   return this._imguserMedia.getValue();
    // }
    // assigning a value to  this.userMedia will push it onto the observable
    // and down to all of its subsribers (ex: this.userMedia = [])
    set userMedia(val) {
        this._userMedia.next(val);
    }
    set imguserMedia(val) {
        this._imguserMedia.next(val);
    }
    setUserSelectedLayout(val) {
        this._userSelectedLayout.next(val);
    }
    setTextPollMediaURL(val) {
        this._textPollMediaURL.next(val);
    }
    // setimguserMedia(val) {
    //   console.log(this._imguserMedia.getValue().length);
    //   this._imguserMedia.next(val);
    // }
    mediaExists(src) {
        return this.userMedia.some(function (m) {
            return m.image_url === src;
        });
    }
    addUserMedia(src) {
        if (src.search('data:image/png;base64,') >= 0) {
            src.replace('data:image/png;base64,', '');
        }
        else if (src.search('data:image/jpeg;base64,') >= 0) {
            src.replace('data:image/jpeg;base64,', '');
        }
        else if (src.search('data:image/jpg;base64,') >= 0) {
            src.replace('data:image/jpg;base64,', '');
        }
        const mediaExists = this.mediaExists(src);
        if (!mediaExists) {
            // we assign a new copy of userMedia by adding a new item to it
            const timestamp = Math.floor(Date.now() / 1000).toString();
            this.userMedia = [
                ...this.userMedia,
                {
                    candidate: timestamp,
                    image_url: src,
                    x_coordinate: 0,
                    y_coordinate: 0,
                    image_title: '',
                    isEdited: false,
                    imageCopy: src,
                },
            ];
        }
    }
    addUserMediap(src, tith) {
        if (src.search('data:image/png;base64,') >= 0) {
            src.replace('data:image/png;base64,', '');
        }
        else if (src.search('data:image/jpeg;base64,') >= 0) {
            src.replace('data:image/jpeg;base64,', '');
        }
        else if (src.search('data:image/jpg;base64,') >= 0) {
            src.replace('data:image/jpg;base64,', '');
        }
        const mediaExists = this.mediaExists(src);
        if (!mediaExists) {
            // we assign a new copy of userMedia by adding a new item to it
            const timestamp = Math.floor(Date.now() / 1000).toString();
            this.userMedia = [
                ...this.userMedia,
                {
                    candidate: timestamp,
                    image_url: src,
                    x_coordinate: 0,
                    y_coordinate: 0,
                    image_title: tith,
                    isEdited: false,
                    imageCopy: src,
                },
            ];
        }
    }
    addimgUserMedia(srcimg) {
        // console.log('src is ',srcimg)
        // const mediaExists = this.mediaExists(src.url);
        // we assign a new copy of userMedia by adding a new item to it
        const timestamp = Math.floor(Date.now() / 1000).toString();
        this.imguserMedia = [
            ...this.imguserMedia,
            {
                media: srcimg,
            },
        ];
        // console.log('imguserMedia is ',this.imguserMedia.length)
        // console.log('imguserMedia is ',this.imguserMedia)
    }
    removeUserMedia(value) {
        this.userMedia = this.userMedia.filter(function (item) {
            return item.image_url !== value;
        });
        this.imguserMedia = this.imguserMedia.filter(function (item) {
            return item.media.imageCopy.dataUrl !== value;
        });
        // console.log('imguserMedia is ',this.imguserMedia.length)
    }
};
UserMediaTrayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], UserMediaTrayService);



/***/ }),

/***/ "./src/app/voting-poll/voting-poll-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/voting-poll/voting-poll-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VotingPollPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingPollPageRoutingModule", function() { return VotingPollPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _voting_poll_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voting-poll.page */ "./src/app/voting-poll/voting-poll.page.ts");




const routes = [
    {
        path: '',
        component: _voting_poll_page__WEBPACK_IMPORTED_MODULE_3__["VotingPollPage"]
    }
];
let VotingPollPageRoutingModule = class VotingPollPageRoutingModule {
};
VotingPollPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VotingPollPageRoutingModule);



/***/ }),

/***/ "./src/app/voting-poll/voting-poll.module.ts":
/*!***************************************************!*\
  !*** ./src/app/voting-poll/voting-poll.module.ts ***!
  \***************************************************/
/*! exports provided: VotingPollPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingPollPageModule", function() { return VotingPollPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _voting_poll_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voting-poll-routing.module */ "./src/app/voting-poll/voting-poll-routing.module.ts");
/* harmony import */ var _voting_poll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./voting-poll.page */ "./src/app/voting-poll/voting-poll.page.ts");







let VotingPollPageModule = class VotingPollPageModule {
};
VotingPollPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _voting_poll_routing_module__WEBPACK_IMPORTED_MODULE_5__["VotingPollPageRoutingModule"]
        ],
        declarations: [_voting_poll_page__WEBPACK_IMPORTED_MODULE_6__["VotingPollPage"]]
    })
], VotingPollPageModule);



/***/ }),

/***/ "./src/app/voting-poll/voting-poll.page.scss":
/*!***************************************************!*\
  !*** ./src/app/voting-poll/voting-poll.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputText {\n  border-radius: 3.7px;\n  text-align: start;\n  height: 40px !important;\n  display: inline-block;\n  font-family: \"Milliard-SemiBold\" !important;\n  font-size: 16.7px;\n}\n.inputText .native-input.sc-ion-input-md {\n  padding-left: 8px;\n  padding-right: 8px;\n}\nion-item.sc-ion-input-md-h:not(.item-label),\nion-item:not(.item-label) .sc-ion-input-md-h {\n  --padding-start:3.5%;\n  height: 50px !important;\n  margin-top: 10px;\n}\n.bottom-sheet-popover .popover-content {\n  border-radius: 15px;\n  bottom: 10px !important;\n  top: calc(100% - 200px) !important;\n}\n.header {\n  margin-top: 20px;\n  margin-left: 20px;\n}\n.main_headers {\n  font-family: \"Milliard-Bold\" !important;\n  font-weight: bolder;\n  font-size: 30px;\n  color: black;\n  margin-left: 10px;\n  margin-top: 10%;\n}\n.icon {\n  font-size: small;\n  margin-right: 2px;\n  margin-top: 2px;\n}\n.menu {\n  float: right;\n  margin-right: 15px;\n  margin-top: 10px;\n  height: 20px;\n  font-size: x-large;\n  font-weight: bold;\n}\n.share {\n  float: right;\n  font-size: large;\n  margin-top: 10px;\n}\n.calendar {\n  margin-left: 5px;\n  font-size: x-small;\n}\n.filter {\n  color: #009604;\n  margin-top: 5%;\n  margin-right: 8px;\n  text-align: right;\n}\n.filterLabel {\n  font-size: small;\n  margin-bottom: auto;\n}\n.label {\n  font-size: 16.7px;\n  color: black;\n  font-family: \"Milliard-Book\" !important;\n  margin-left: 12px;\n}\n.more {\n  float: right;\n  margin-right: 15px;\n  margin-top: 10px;\n  height: 20px;\n  font-size: 60px;\n}\n.userName {\n  font-family: \"Milliard-Bold\" !important;\n  font-size: 19.7px;\n  letter-spacing: -0.23px;\n  color: #484949;\n}\n.name {\n  font-family: \"Milliard-Book\" !important;\n  font-size: 9px;\n  letter-spacing: 0.03px;\n  color: black;\n}\n.cardClass {\n  margin: 5px;\n  margin-top: 10px;\n}\n.questionMark {\n  color: black;\n  font-size: 16.7px;\n  font-family: \"Milliard-SemiBold\" !important;\n}\n.questionMarkGray {\n  color: black;\n  font-size: 16.7px;\n  font-family: \"Milliard-Medium\" !important;\n}\n.time {\n  margin-top: 30px;\n  color: #979797;\n  margin-bottom: auto;\n}\n.timeIcon {\n  font-size: x-small;\n  margin-top: 2px;\n}\n.timeLabel {\n  margin-left: 2px;\n  font-size: x-small;\n}\n.votes {\n  font-size: 16.7px;\n  float: right;\n  margin-right: 4%;\n  font-family: \"Milliard-Book\" !important;\n  color: #303030;\n}\n.voteCard {\n  padding: 0 5px;\n}\n.voteCard .voteBox {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.votelabel {\n  font-family: \"Milliard-Book\" !important;\n  font-size: 16.7px;\n  color: #303030;\n}\n.voteResult {\n  font-size: 16.7px;\n  color: #303030;\n  font-family: \"Milliard-Bold\" !important;\n  margin-left: 3px;\n}\n.shareIcon {\n  font-size: x-large;\n  transform: rotateY(180deg);\n  margin-top: 6px;\n  margin-right: 10px;\n}\n.progress {\n  height: 38px;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  border-radius: 2px;\n  --progress-background: #009604 !important;\n  --buffer-background: rgb(199, 232 ,200) !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n  transition: 20s width linear 1s;\n}\n.poll {\n  font-size: 20px;\n  font-weight: bold;\n  overflow-wrap: anywhere;\n  font-family: \"Milliard-Bold\" !important;\n  line-height: 23.3px;\n  letter-spacing: 0.47px;\n  color: black;\n}\n.filterLabel {\n  font-size: x-small;\n  margin-bottom: auto;\n}\n.votePercent {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: auto;\n}\n.myCard {\n  position: relative;\n}\n.image-label {\n  text-align: center;\n  color: #009604;\n  display: flex !important;\n  font-size: small;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n}\n.myOverlay {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  z-index: 99;\n  opacity: 0.5;\n  margin-left: 60%;\n  margin-top: 20%;\n  color: black;\n  font-weight: bold;\n}\n.two-image-layout-square {\n  display: flex;\n  justify-content: center;\n}\n.two-image-layout-square .two-image-layout-square-item {\n  margin-left: 2%;\n  margin-right: 2%;\n  margin-bottom: 5%;\n}\n.two-image-layout-square .two-image-layout-square-item ion-img {\n  height: 156.3px;\n  width: 156.3px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.two-image-layout-horizontal {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 10px;\n}\n.two-image-layout-horizontal .two-image-layout-horizontal-item {\n  flex: 100%;\n  height: 150.7px;\n  margin-right: 10px;\n  margin-bottom: 5%;\n  margin-top: 25px;\n}\n.two-image-layout-horizontal .two-image-layout-horizontal-item ion-img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.two-image-layout-vertical {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-left: 10px;\n}\n.two-image-layout-vertical .two-image-layout-vertical-item {\n  flex: 45%;\n  margin-right: 10px;\n  margin-bottom: 5%;\n  height: 308.3px;\n}\n.two-image-layout-vertical .two-image-layout-vertical-item ion-img {\n  height: 308.3px;\n  width: 157px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.three-image-layout-square {\n  display: flex;\n  justify-content: center;\n  margin-left: 5px;\n}\n.three-image-layout-square .three-image-layout-square-item {\n  flex: 29%;\n  margin-right: 15px;\n  margin-bottom: 5%;\n  height: 102.3px;\n  width: 102.3px;\n}\n.three-image-layout-square .three-image-layout-square-item ion-img {\n  height: 102.3px;\n  width: 102.3px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.three-image-layout-horizontal {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 10px;\n}\n.three-image-layout-horizontal .three-image-layout-horizontal-item {\n  flex: 100%;\n  height: 97.7px;\n  width: 321.7px;\n  margin-right: 10px;\n  margin-bottom: 5%;\n  margin-top: 25px;\n}\n.three-image-layout-horizontal .three-image-layout-horizontal-item ion-img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.three-image-layout-vertical {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 10px;\n}\n.three-image-layout-vertical .three-image-layout-vertical-item {\n  flex: 29%;\n  margin-right: 10px;\n  margin-bottom: 10%;\n  height: 308px;\n  width: 104.3px;\n}\n.three-image-layout-vertical .three-image-layout-vertical-item ion-img {\n  height: 308px;\n  width: 104.3px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.imageStyle {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.four-image-layout {\n  display: flex;\n  flex-wrap: wrap;\n  padding-left: 10px;\n}\n.four-image-layout .four-image-layout-item {\n  flex: 45%;\n  height: 150px;\n  margin-right: 10px;\n  margin-bottom: 30px;\n}\n.four-image-layout .four-image-layout-item ion-img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: none;\n     object-fit: none;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.roundProgress {\n  width: 100%;\n  height: 60px;\n  position: absolute;\n  z-index: 99;\n  opacity: 0.5;\n  margin-left: 60%;\n  margin-top: 20%;\n  color: black;\n  font-weight: bold;\n}\n.container {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.container img {\n  width: 100%;\n  height: 100%;\n  display: block;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\ndiv.absolute {\n  position: absolute;\n  top: 95px;\n  right: 0;\n  width: 60px;\n  height: 50px;\n}\ndiv.absoluteO {\n  position: absolute;\n  top: 75%;\n  right: 0;\n  width: 60px;\n  height: 50px;\n}\ndiv.absoluteT {\n  position: absolute;\n  top: 42%;\n  right: 0;\n  width: 60px;\n  height: 50px;\n}\ndiv.absoluteS {\n  position: absolute;\n  top: 65%;\n  right: 0;\n  width: 60px;\n  height: 50px;\n}\ndiv.absoluteTV {\n  position: absolute;\n  top: 80%;\n  right: 0;\n  width: 60px;\n  height: 50px;\n}\ndiv.absoluteTHS {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  height: 50px;\n}\ndiv.absoluteTHV {\n  position: absolute;\n  top: 82%;\n  right: 0;\n  width: 55px;\n  height: 50px;\n}\n.topleft {\n  position: absolute;\n  top: 8px;\n  left: 16px;\n  font-size: 18px;\n}\n.popup {\n  display: none;\n  position: absolute;\n  right: 15px;\n  width: 150px;\n  --background: #A3A3A3 !important;\n  z-index: 9;\n}\n.labelFilter {\n  font-size: 12px;\n  margin-top: auto;\n  margin-bottom: auto;\n  vertical-align: middle;\n  letter-spacing: -0.5px;\n  font-family: \"Milliard-Book\" !important;\n}\n.item_bottom {\n  border-bottom: 0.2px solid #ebeaea;\n  height: 35px;\n}\n.one-image-layout {\n  margin: 0 10px;\n  height: 250px;\n}\n@-webkit-keyframes growProgressBar {\n  0%, 33% {\n    --pgPercentage: 0;\n  }\n  100% {\n    --pgPercentage: var(--value);\n  }\n}\n@keyframes growProgressBar {\n  0%, 33% {\n    --pgPercentage: 0;\n  }\n  100% {\n    --pgPercentage: var(--value);\n  }\n}\n@property --pgPercentage {\n  syntax: \"<number>\";\n  inherits: false;\n  initial-value: 0;\n}\ndiv[role=progressbar] {\n  --size: 12rem;\n  --fg: rgb(0 150 4);\n  --bg: #e0f0e0;\n  --pgPercentage: var(--value);\n  -webkit-animation: growProgressBar 1s 1 forwards;\n          animation: growProgressBar 1s 1 forwards;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0), conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0);\n  font-size: 12px;\n  color: var(--fg);\n}\ndiv[role=progressbar]::before {\n  counter-reset: percentage var(--value);\n  content: counter(percentage) \"%\";\n}\n/* demo */\nbody {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n.createdAt {\n  color: #bbbbbd;\n  margin-left: 2px;\n  font-size: 8.3pt;\n  letter-spacing: -0.22px;\n  font-family: \"Milliard-Book\" !important;\n}\n@-webkit-keyframes growProgressBar1 {\n  0%, 33% {\n    --pgPercentage1: 0;\n  }\n  100% {\n    --pgPercentage1: var(--value1);\n  }\n}\n@keyframes growProgressBar1 {\n  0%, 33% {\n    --pgPercentage1: 0;\n  }\n  100% {\n    --pgPercentage1: var(--value1);\n  }\n}\n@property --pgPercentage1 {\n  syntax: \"<number>\";\n  inherits: false;\n  initial-value: 0;\n}\ndiv[role=progressbar1] {\n  --size: 12rem;\n  --bg: #53a156;\n  --fg: #e0f0e0;\n  --pgPercentage1: var(--value1);\n  animation: growProgressBar1 1s 1 alternate-reverse;\n  width: 50px;\n  height: 50px !important;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0), conic-gradient(var(--fg) calc(var(--pgPercentage1) * 1%), var(--bg) 0);\n  font-size: 12px;\n  color: var(--fg);\n}\ndiv[role=progressbar1]::before {\n  color: #009604;\n  content: counter(percentage) \"%\";\n}\n.progressForword {\n  animation: progresforword 1s reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px !important;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  border-radius: 3.7px;\n  border-top: 1px solid #009604;\n  border-bottom: 1px solid #009604;\n  border-right: 1px solid #009604;\n  --progress-background: #009604 !important;\n  --buffer-background: white !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n.progressbgColor {\n  animation: progressbgColor 1s reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px !important;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  border-radius: 3.7px;\n  border-top: 1px solid #009604;\n  border-bottom: 1px solid #009604;\n  border-right: 1px solid #009604;\n  border-left: 1px solid #009604;\n  --progress-background: rgb(199, 232 ,200) !important;\n  --buffer-background: white !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n@-webkit-keyframes progressbgColor {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0%;\n  }\n}\n@keyframes progressbgColor {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0%;\n  }\n}\n@-webkit-keyframes progresforword {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0%;\n  }\n}\n@keyframes progresforword {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0%;\n  }\n}\n.progressReverse {\n  animation: progresreverse 1s reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px !important;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  border-radius: 3.7px;\n  border-top: 1px solid #009604;\n  border-bottom: 2px solid #009604;\n  --progress-background: rgb(199, 232 ,200) !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n@-webkit-keyframes progresreverse {\n  0% {\n    width: 3%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes progresreverse {\n  0% {\n    width: 3%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n.progress3 {\n  animation: progresfulltest 0ms reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px !important;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  --progress-background: rgb(199, 232 ,200) !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n@-webkit-keyframes progresfulltest {\n  0% {\n    width: 3%;\n  }\n}\n@keyframes progresfulltest {\n  0% {\n    width: 3%;\n  }\n}\n.progressDelete {\n  animation: progressdelete 800ms reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px !important;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  border-radius: 3.7px;\n  border-top: 1px solid #009604;\n  border-bottom: 1px solid #009604;\n  --progress-background: rgb(0 150 4) !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n@-webkit-keyframes progressdelete {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes progressdelete {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n.defaultprogres {\n  animation: defaultprogres 0ms reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px !important;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  --progress-background: rgb(199, 232 ,200) !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n@-webkit-keyframes defaultprogres {\n  0% {\n    width: 3%;\n  }\n}\n@keyframes defaultprogres {\n  0% {\n    width: 3%;\n  }\n}\n.cardClass {\n  margin: 20px 10px 0 10px !important;\n}\n.ionContentClass {\n  --background: #000;\n}\n.createPoll_row {\n  margin: 15px 0;\n}\n.webDesktopVotingCard {\n  max-width: 500px;\n  background: #000 !important;\n}\n.contentHeight {\n  height: auto;\n}\n.coltwo {\n  margin-top: 0 !important;\n  margin-left: -10%;\n  align-items: center;\n  align-self: center;\n}\n.bestestLogo {\n  width: 210px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  position: relative;\n  align-items: center;\n}\n.createPollDiv {\n  color: white;\n  font-size: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  position: relative;\n  align-items: center;\n  text-align: center;\n  margin-top: 30px;\n}\n.desktopCreateButton {\n  color: white;\n  background: #009604;\n  height: 49px;\n  display: block;\n  position: relative;\n  border-radius: 20px;\n  text-align: center;\n  line-height: 28px;\n  font-size: 19px;\n  /* width: 70%; */\n  padding: 0 76px;\n  margin-top: 10px;\n}\n.voteRow {\n  margin-bottom: 10px;\n  margin-top: 10%;\n  width: 100%;\n}\n.container {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n  border-radius: 10px !important;\n  overflow: hidden;\n}\n.container img {\n  width: 100%;\n  height: 100%;\n  display: block;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.mess {\n  border: 2px solid #88ff00;\n}\n.webshareIcon {\n  font-size: x-large;\n  transform: rotateY(180deg);\n  margin-right: 10px;\n}\n.webdatetimeicon {\n  color: #979797;\n  margin-bottom: auto;\n  font-size: x-small;\n  margin-top: 9px;\n}\n.webdatetimetext {\n  margin-left: 2px;\n  font-size: x-small;\n  color: #979797;\n}\n.votelabel {\n  font-family: \"Milliard-Book\" !important;\n  font-size: 16.7px;\n  color: #303030;\n}\n.webvoterow {\n  margin-bottom: 10px;\n  margin-top: 10%;\n}\n@keyframes growProgressBar1 {\n  0%, 33% {\n    --pgPercentage1: 0;\n  }\n  100% {\n    --pgPercentage1: var(--value1);\n  }\n}\n@property --pgPercentage1 {\n  syntax: \"<number>\";\n  inherits: false;\n  initial-value: 0;\n}\ndiv[role=progressbar1] {\n  --size: 12rem;\n  --bg: #53a156;\n  --fg: #e0f0e0;\n  --pgPercentage1: var(--value1);\n  animation: growProgressBar1 1s 1 alternate-reverse;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0), conic-gradient(var(--fg) calc(var(--pgPercentage1) * 1%), var(--bg) 0);\n  font-size: 12px;\n  color: var(--fg);\n}\ndiv[role=progressbar1]::before {\n  color: #009604;\n  content: counter(percentage) \"%\";\n}\n.progress1 {\n  animation: progresfull 1s reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  border-radius: 2px;\n  border: 1px solid #009600;\n  --progress-background: #009604 !important;\n  --buffer-background:white !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n.progress2 {\n  animation: progreszero 1s reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  border-radius: 3.7px;\n  border-top: 1px solid #009600;\n  border-bottom: 1px solid #009600;\n  --progress-background: rgb(199 ,232 ,200) !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n@-webkit-keyframes progreszero {\n  0% {\n    width: 3%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes progreszero {\n  0% {\n    width: 3%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@-webkit-keyframes progresfull {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0%;\n  }\n}\n@keyframes progresfull {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0%;\n  }\n}\n.defaultprogres {\n  animation: defaultprogres 0ms reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  --progress-background: rgb(199 ,232 ,200)!important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n@keyframes defaultprogres {\n  0% {\n    width: 3%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n.progress4 {\n  animation: progresfulltest1 800ms reverse;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  height: 50px;\n  position: absolute;\n  z-index: -1;\n  margin-left: 0px;\n  border-radius: 3.7px;\n  border-top: 1px solid #009600;\n  border-bottom: 1px solid #009600;\n  --progress-background: rgb(0 150 0) !important;\n  --buffer-background:rgb(199 ,232 ,200) !important;\n  white-space: nowrap;\n  overflow: hidden;\n  text-align: center;\n}\n@-webkit-keyframes progresfulltest1 {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n@keyframes progresfulltest1 {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcHBsZS9EZXNrdG9wL011dGh1L2lvbmljLWFwcHMvZGV2ZGFjdGljLXNzcm5ldy9iZXN0ZXN0LXdlYi1hcHAvc3JjL2FwcC92b3RpbmctcG9sbC92b3RpbmctcG9sbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ZvdGluZy1wb2xsL3ZvdGluZy1wb2xsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7RUFHQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBQ0RKO0FERUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDQU47QURNRTs7RUFFRSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRE1FO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNISjtBRE1FO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSEo7QURPRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE9FO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pKO0FET0U7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0FDSko7QURPRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNKSjtBRE9F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LG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQzVCSjtBRDhCRTtFQUNFO0lBQ0UsU0FBQTtFQzNCSjtFRDhCRTtJQUNFLFdBQUE7RUM1Qko7QUFDRjtBRHFCRTtFQUNFO0lBQ0UsU0FBQTtFQzNCSjtFRDhCRTtJQUNFLFdBQUE7RUM1Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZvdGluZy1wb2xsL3ZvdGluZy1wb2xsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dFRleHQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMy43cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIC8vLS1iYWNrZ3JvdW5kOiByZ2IoMTk5LCAyMzIgLDIwMCkgIWltcG9ydGFudDtcclxuICAgIC8vYm9yZGVyOiAxLjJweCBzb2xpZCAjMDA5NjA0O1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ01pbGxpYXJkLVNlbWlCb2xkJyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNi43cHg7XHJcbiAgICAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi1pdGVtLnNjLWlvbi1pbnB1dC1tZC1oOm5vdCguaXRlbS1sYWJlbCksXHJcbiAgaW9uLWl0ZW06bm90KC5pdGVtLWxhYmVsKSAuc2MtaW9uLWlucHV0LW1kLWgge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjMuNSU7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3R0b20tc2hlZXQtcG9wb3ZlciAucG9wb3Zlci1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIHRvcDogY2FsYygxMDAlIC0gMjAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubWFpbl9oZWFkZXJzIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1pbGxpYXJkLUJvbGRcIiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgLmljb24ge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIFxyXG4gIH1cclxuICBcclxuICAubWVudSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaGFyZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhbGVuZGFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXIge1xyXG4gICAgY29sb3I6IHJnYigwIDE1MCA0KTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLmZpbHRlckxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvXHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE2LjdweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LWZhbWlseTogJ01pbGxpYXJkLUJvb2snICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLm1vcmUge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXJOYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWlsbGlhcmQtQm9sZCcgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTkuN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjIzcHg7XHJcbiAgICBjb2xvcjogcmdiKDcyLCA3MywgNzMpO1xyXG4gIH1cclxuICBcclxuICAubmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogJ01pbGxpYXJkLUJvb2snICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAzcHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAuY2FyZENsYXNzIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweFxyXG4gIH1cclxuICBcclxuICAucXVlc3Rpb25NYXJrIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE2LjdweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWlsbGlhcmQtU2VtaUJvbGQnICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWVzdGlvbk1hcmtHcmF5IHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICBmb250LXNpemU6IDE2LjdweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWlsbGlhcmQtTWVkaXVtJyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGltZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgY29sb3I6ICM5Nzk3OTc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAudGltZUljb24ge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxuICBcclxuICAudGltZUxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgfVxyXG4gIFxyXG4gIC52b3RlcyB7XHJcbiAgICBmb250LXNpemU6IDE2LjdweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICBmb250LWZhbWlseTogJ01pbGxpYXJkLUJvb2snICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDQ4LCA0OCwgNDgpO1xyXG4gIH1cclxuICBcclxuICAudm90ZUNhcmQge1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgXHJcbiAgICAudm90ZUJveCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnZvdGVsYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ01pbGxpYXJkLUJvb2snICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE2LjdweDtcclxuICAgIGNvbG9yOiByZ2IoNDgsIDQ4LCA0OCk7XHJcbiAgfVxyXG4gIFxyXG4gIC52b3RlUmVzdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMTYuN3B4O1xyXG4gICAgY29sb3I6IHJnYig0OCwgNDgsIDQ4KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWlsbGlhcmQtQm9sZCcgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaGFyZUljb24ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9ncmVzcyB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICMwMDk2MDQgIWltcG9ydGFudDtcclxuICAgIC0tYnVmZmVyLWJhY2tncm91bmQ6IHJnYigxOTksIDIzMiAsMjAwKSAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAyMHMgd2lkdGggbGluZWFyIDFzO1xyXG4gIH1cclxuICBcclxuICAucG9sbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNaWxsaWFyZC1Cb2xkJyAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzLjNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjQ3cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVyTGFiZWwge1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0b1xyXG4gIH1cclxuICBcclxuICAudm90ZVBlcmNlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5teUNhcmQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2UtbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDk2MDQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAubXlPdmVybGF5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgXHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC50d28taW1hZ2UtbGF5b3V0LXNxdWFyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIFxyXG4gICAgLnR3by1pbWFnZS1sYXlvdXQtc3F1YXJlLWl0ZW0ge1xyXG4gICAgLy8gIGZsZXg6IDQ1JTtcclxuICAgIC8vICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAvLyAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICBpb24taW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDE1Ni4zcHg7XHJcbiAgICAgICAgd2lkdGg6IDE1Ni4zcHg7XHJcbiAgICAgICAvLyBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50d28taW1hZ2UtbGF5b3V0LWhvcml6b250YWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBcclxuICAgIC50d28taW1hZ2UtbGF5b3V0LWhvcml6b250YWwtaXRlbSB7XHJcbiAgICAgIGZsZXg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTUwLjdweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICBcclxuICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50d28taW1hZ2UtbGF5b3V0LXZlcnRpY2FsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBcclxuICAgIC50d28taW1hZ2UtbGF5b3V0LXZlcnRpY2FsLWl0ZW0ge1xyXG4gICAgICBmbGV4OiA0NSU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgIGhlaWdodDogMzA4LjNweDtcclxuICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDguM3B4O1xyXG4gICAgICAgIHdpZHRoOiAxNTdweDtcclxuICAgICAgIC8vIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGhyZWUtaW1hZ2UtbGF5b3V0LXNxdWFyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAvLyBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgIC8vIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBcclxuICAgIC50aHJlZS1pbWFnZS1sYXlvdXQtc3F1YXJlLWl0ZW0ge1xyXG4gICAgICBmbGV4OiAyOSU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgIGhlaWdodDogMTAyLjNweDtcclxuICAgICAgd2lkdGg6IDEwMi4zcHg7XHJcbiAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgIGhlaWdodDogMTAyLjNweDtcclxuICAgICAgICB3aWR0aDogMTAyLjNweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGhyZWUtaW1hZ2UtbGF5b3V0LWhvcml6b250YWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBcclxuICAgIC50aHJlZS1pbWFnZS1sYXlvdXQtaG9yaXpvbnRhbC1pdGVtIHtcclxuICAgICAgZmxleDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA5Ny43cHg7XHJcbiAgICAgIHdpZHRoOiAzMjEuN3B4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICBcclxuICAgICAgaW9uLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRocmVlLWltYWdlLWxheW91dC12ZXJ0aWNhbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIFxyXG4gICAgLnRocmVlLWltYWdlLWxheW91dC12ZXJ0aWNhbC1pdGVtIHtcclxuICAgICAgZmxleDogMjklO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgICAgaGVpZ2h0OiAzMDhweDtcclxuICAgICAgd2lkdGg6IDEwNC4zcHg7XHJcbiAgICAgIGlvbi1pbWcge1xyXG4gICAgICAgIGhlaWdodDogMzA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwNC4zcHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmltYWdlU3R5bGUge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvdXItaW1hZ2UtbGF5b3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgXHJcbiAgICAuZm91ci1pbWFnZS1sYXlvdXQtaXRlbSB7XHJcbiAgICAgIGZsZXg6IDQ1JTtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIFxyXG4gICAgICBpb24taW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogbm9uZTtcclxuICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICAucm91bmRQcm9ncmVzcyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gIFxyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBkaXYuYWJzb2x1dGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA5NXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgZGl2LmFic29sdXRlTyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc1JTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdi5hYnNvbHV0ZVQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MiU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBkaXYuYWJzb2x1dGVTIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNjUlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgZGl2LmFic29sdXRlVFYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4MCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBkaXYuYWJzb2x1dGVUSFMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdi5hYnNvbHV0ZVRIViB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDgyJTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50b3BsZWZ0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbGVmdDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnBvcHVwIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI0EzQTNBMyAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTtcclxuICB9XHJcbiAgXHJcbiAgLmxhYmVsRmlsdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01pbGxpYXJkLUJvb2snICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtX2JvdHRvbSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCByZ2IoMjM1LCAyMzQsIDIzNCk7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5vbmUtaW1hZ2UtbGF5b3V0IHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBncm93UHJvZ3Jlc3NCYXIge1xyXG4gIFxyXG4gICAgMCUsXHJcbiAgICAzMyUge1xyXG4gICAgICAtLXBnUGVyY2VudGFnZTogMDtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICAtLXBnUGVyY2VudGFnZTogdmFyKC0tdmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAcHJvcGVydHkgLS1wZ1BlcmNlbnRhZ2Uge1xyXG4gICAgc3ludGF4OiAnPG51bWJlcj4nO1xyXG4gICAgaW5oZXJpdHM6IGZhbHNlO1xyXG4gICAgaW5pdGlhbC12YWx1ZTogMDtcclxuICB9XHJcbiAgXHJcbiAgZGl2W3JvbGU9XCJwcm9ncmVzc2JhclwiXSB7XHJcbiAgICAtLXNpemU6IDEycmVtO1xyXG4gICAgLS1mZzogcmdiKDAgMTUwIDQpO1xyXG4gICAgLS1iZzogI2UwZjBlMDtcclxuICAgIC0tcGdQZXJjZW50YWdlOiB2YXIoLS12YWx1ZSk7XHJcbiAgICBhbmltYXRpb246IGdyb3dQcm9ncmVzc0JhciAxcyAxIGZvcndhcmRzO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUsIHdoaXRlIDgwJSwgdHJhbnNwYXJlbnQgMCA5OS45JSwgd2hpdGUgMCksXHJcbiAgICAgIGNvbmljLWdyYWRpZW50KHZhcigtLWZnKSBjYWxjKHZhcigtLXBnUGVyY2VudGFnZSkgKiAxJSksIHZhcigtLWJnKSAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1mZyk7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdltyb2xlPVwicHJvZ3Jlc3NiYXJcIl06OmJlZm9yZSB7XHJcbiAgICBjb3VudGVyLXJlc2V0OiBwZXJjZW50YWdlIHZhcigtLXZhbHVlKTtcclxuICAgIGNvbnRlbnQ6IGNvdW50ZXIocGVyY2VudGFnZSkgJyUnO1xyXG4gIH1cclxuICBcclxuICAvKiBkZW1vICovXHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcbiAgXHJcbiAgLmNyZWF0ZWRBdCB7XHJcbiAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODkpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogOC4zcHQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWlsbGlhcmQtQm9vaycgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBncm93UHJvZ3Jlc3NCYXIxIHtcclxuICBcclxuICAgIDAlLFxyXG4gICAgMzMlIHtcclxuICAgICAgLS1wZ1BlcmNlbnRhZ2UxOiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC0tcGdQZXJjZW50YWdlMTogdmFyKC0tdmFsdWUxKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQHByb3BlcnR5IC0tcGdQZXJjZW50YWdlMSB7XHJcbiAgICBzeW50YXg6ICc8bnVtYmVyPic7XHJcbiAgICBpbmhlcml0czogZmFsc2U7XHJcbiAgICBpbml0aWFsLXZhbHVlOiAwO1xyXG4gIH1cclxuICBcclxuICBkaXZbcm9sZT1cInByb2dyZXNzYmFyMVwiXSB7XHJcbiAgICAtLXNpemU6IDEycmVtO1xyXG4gICAgLS1iZzogIzUzYTE1NjtcclxuICAgIC0tZmc6ICNlMGYwZTA7XHJcbiAgICAtLXBnUGVyY2VudGFnZTE6IHZhcigtLXZhbHVlMSk7XHJcbiAgICBhbmltYXRpb246IGdyb3dQcm9ncmVzc0JhcjEgMXMgMSBhbHRlcm5hdGUtcmV2ZXJzZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6XHJcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUsIHdoaXRlIDgwJSwgdHJhbnNwYXJlbnQgMCA5OS45JSwgd2hpdGUgMCksXHJcbiAgICAgIGNvbmljLWdyYWRpZW50KHZhcigtLWZnKSBjYWxjKHZhcigtLXBnUGVyY2VudGFnZTEpICogMSUpLCB2YXIoLS1iZykgMCk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0tZmcpO1xyXG4gIH1cclxuICBcclxuICBkaXZbcm9sZT1cInByb2dyZXNzYmFyMVwiXTo6YmVmb3JlIHtcclxuICAgIC8vIGNvdW50ZXItcmVzZXQ6IHBlcmNlbnRhZ2UgdmFyKC0tdmFsdWUxKTtcclxuICAgIGNvbG9yOiByZ2IoMCAxNTAgNCk7XHJcbiAgICBjb250ZW50OiBjb3VudGVyKHBlcmNlbnRhZ2UpICclJztcclxuICB9XHJcbiAgXHJcbiAgLnByb2dyZXNzRm9yd29yZCB7XHJcbiAgICBhbmltYXRpb246IHByb2dyZXNmb3J3b3JkIDFzIHJldmVyc2U7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzLjdweDtcclxuICAgLy8gYm9yZGVyOiAycHggc29saWQgIzAwOTYwNDtcclxuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigwIDE1MCA0KTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCAxNTAgNCk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMCAxNTAgNCk7XHJcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICMwMDk2MDQgIWltcG9ydGFudDtcclxuICAgLS1idWZmZXItYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucHJvZ3Jlc3NiZ0NvbG9yIHsgXHJcbiAgICBhbmltYXRpb246IHByb2dyZXNzYmdDb2xvciAxcyByZXZlcnNlO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMy43cHg7XHJcbiAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMwMDk2MDQ7XHJcbiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCAxNTAgNCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMTUwIDQpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDAgMTUwIDQpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoMCAxNTAgNCkgO1xyXG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2IoMTk5LCAyMzIgLDIwMCkgIWltcG9ydGFudDtcclxuICAgLS1idWZmZXItYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHByb2dyZXNzYmdDb2xvciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICAgIH1cclxuICB9O1xyXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc2ZvcndvcmQge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICBcclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogMCU7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICAucHJvZ3Jlc3NSZXZlcnNlIHtcclxuICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3JldmVyc2UgMXMgcmV2ZXJzZTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMuN3B4O1xyXG4gIC8vICBib3JkZXI6IDJweCBzb2xpZCAjMDA5NjA0O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCAxNTAgNCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigwIDE1MCA0KTtcclxuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmdiKDE5OSwgMjMyICwyMDApICFpbXBvcnRhbnQ7XHJcbiAgIC8vIC0tYnVmZmVyLWJhY2tncm91bmQ6IHJnYigxOTksIDIzMiAsMjAwKSAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcHJvZ3Jlc3JldmVyc2Uge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfTtcclxuICAucHJvZ3Jlc3MzIHtcclxuICAgIGFuaW1hdGlvbjogcHJvZ3Jlc2Z1bGx0ZXN0IDBtcyByZXZlcnNlO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2IoMTk5LCAyMzIgLDIwMCkgIWltcG9ydGFudDtcclxuICAgIC8vLS1idWZmZXItYmFja2dyb3VuZDp3aGl0ZSAgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHByb2dyZXNmdWxsdGVzdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAzJTtcclxuICAgIH1cclxuICB9O1xyXG4gIC5wcm9ncmVzc0RlbGV0ZSB7XHJcbiAgICBhbmltYXRpb246IHByb2dyZXNzZGVsZXRlIDgwMG1zIHJldmVyc2U7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzLjdweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCAxNTAgNCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMTUwIDQpO1xyXG4gICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2IoMCAxNTAgNCkgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHByb2dyZXNzZGVsZXRlIHtcclxuICAgIDAlIHtcclxuICAgICAgd2lkdGg6IDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLmRlZmF1bHRwcm9ncmVzIHtcclxuICAgIGFuaW1hdGlvbjogZGVmYXVsdHByb2dyZXMgMG1zIHJldmVyc2U7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJnYigxOTksIDIzMiAsMjAwKSAhaW1wb3J0YW50O1xyXG4gICAgLy8tLWJ1ZmZlci1iYWNrZ3JvdW5kOndoaXRlICAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZGVmYXVsdHByb2dyZXMge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMyU7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbi5jYXJkQ2xhc3N7XHJcbiAgICBtYXJnaW46IDIwcHggMTBweCAwIDEwcHggIWltcG9ydGFudDtcclxufVxyXG4uaW9uQ29udGVudENsYXNze1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwO1xyXG59XHJcbi5jcmVhdGVQb2xsX3Jvd3tcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG59XHJcbi53ZWJEZXNrdG9wVm90aW5nQ2FyZHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250ZW50SGVpZ2h0e1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5jb2x0d297ICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbiAgLmJlc3Rlc3RMb2dve1xyXG4gICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jcmVhdGVQb2xsRGl2e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5kZXNrdG9wQ3JlYXRlQnV0dG9ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzAwOTYwNDtcclxuICAgIGhlaWdodDogNDlweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgLyogd2lkdGg6IDcwJTsgKi9cclxuICAgIHBhZGRpbmc6IDAgNzZweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLnZvdGVSb3d7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDttYXJnaW4tdG9wOiAxMCU7d2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbi5tZXNzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjODhmZjAwO1xyXG59XHJcbi53ZWJzaGFyZUljb257XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ud2ViZGF0ZXRpbWVpY29ue1xyXG5jb2xvcjogIzk3OTc5NzsgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuZm9udC1zaXplOiB4LXNtYWxsOyBtYXJnaW4tdG9wOiA5cHg7XHJcbn1cclxuLndlYmRhdGV0aW1ldGV4dHtcclxubWFyZ2luLWxlZnQ6IDJweDsgZm9udC1zaXplOiB4LXNtYWxsO1xyXG5jb2xvcjogIzk3OTc5NztcclxufVxyXG4udm90ZWxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiAnTWlsbGlhcmQtQm9vaychaW1wb3J0YW50OyBmb250LXNpemU6IDE2LjdweDsgY29sb3I6IHJnYig0OCw0OCw0OCk7XHJcbn1cclxuLndlYnZvdGVyb3d7XHJcbm1hcmdpbi1ib3R0b206IDEwcHg7bWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbkBrZXlmcmFtZXMgZ3Jvd1Byb2dyZXNzQmFyMSB7XHJcbiAgMCUsIDMzJSB7IC0tcGdQZXJjZW50YWdlMTogMDsgfVxyXG4gIDEwMCUgeyAtLXBnUGVyY2VudGFnZTE6IHZhcigtLXZhbHVlMSk7IH1cclxuICB9XHJcbiAgQHByb3BlcnR5IC0tcGdQZXJjZW50YWdlMSB7XHJcbiAgc3ludGF4OiAnPG51bWJlcj4nO1xyXG4gIGluaGVyaXRzOiBmYWxzZTtcclxuICBpbml0aWFsLXZhbHVlOiAwO1xyXG4gIH1cclxuICBkaXZbcm9sZT1cInByb2dyZXNzYmFyMVwiXSB7XHJcbiAgLS1zaXplOiAxMnJlbTtcclxuICAtLWJnOiAjNTNhMTU2O1xyXG4gIC0tZmc6ICNlMGYwZTA7XHJcbiAgLS1wZ1BlcmNlbnRhZ2UxOiB2YXIoLS12YWx1ZTEpO1xyXG4gIGFuaW1hdGlvbjogZ3Jvd1Byb2dyZXNzQmFyMSAxcyAxIGFsdGVybmF0ZS1yZXZlcnNlO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNsb3Nlc3Qtc2lkZSwgd2hpdGUgODAlLCB0cmFuc3BhcmVudCAwIDk5LjklLCB3aGl0ZSAwKSxcclxuICAgIGNvbmljLWdyYWRpZW50KHZhcigtLWZnKSBjYWxjKHZhcigtLXBnUGVyY2VudGFnZTEpICogMSUpLCB2YXIoLS1iZykgMClcclxuICAgIDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLWZnKTtcclxuICB9XHJcbiAgZGl2W3JvbGU9XCJwcm9ncmVzc2JhcjFcIl06OmJlZm9yZSB7XHJcbiAvLyBjb3VudGVyLXJlc2V0OiBwZXJjZW50YWdlIHZhcigtLXZhbHVlMSk7XHJcbiBjb2xvcjogIzAwOTYwNDtcclxuICBjb250ZW50OiBjb3VudGVyKHBlcmNlbnRhZ2UpICclJztcclxuICB9XHJcbiAgLnByb2dyZXNzMSB7XHJcbiAgICBhbmltYXRpb246IHByb2dyZXNmdWxsIDFzIHJldmVyc2U7ICAgIFxyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoOyBcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCAxNTAgMCk7XHJcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQgOiAjMDA5NjA0ICFpbXBvcnRhbnQ7XHJcbiAgIC0tYnVmZmVyLWJhY2tncm91bmQ6d2hpdGUgICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5wcm9ncmVzczIge1xyXG4gICAgICBhbmltYXRpb246IHByb2dyZXN6ZXJvIDFzIHJldmVyc2U7XHJcbiAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMy43cHg7XHJcbiAgICAvLyAgYm9yZGVyOiAycHggc29saWQgIzAwOTYwNDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMCAxNTAgMCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDAgMTUwIDApO1xyXG4gICAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJnYigxOTkgLDIzMiAsMjAwKSAhaW1wb3J0YW50O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBrZXlmcmFtZXMgcHJvZ3Jlc3plcm8ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDMlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICBAa2V5ZnJhbWVzIHByb2dyZXNmdWxse1xyXG4gIDAle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIDEwMCV7XHJcbiAgICAgIHdpZHRoOiAwJTtcclxuICB9XHJcbiAgfTtcclxuICAuZGVmYXVsdHByb2dyZXMge1xyXG4gICAgYW5pbWF0aW9uOiBkZWZhdWx0cHJvZ3JlcyAwbXMgcmV2ZXJzZTtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJnYigxOTkgLDIzMiAsMjAwKSFpbXBvcnRhbnQ7XHJcbiAgICAvLy0tYnVmZmVyLWJhY2tncm91bmQ6d2hpdGUgICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBkZWZhdWx0cHJvZ3JlcyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHdpZHRoOiAzJTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9O1xyXG4gIC5wcm9ncmVzczQge1xyXG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzZnVsbHRlc3QxIDgwMG1zIHJldmVyc2U7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMy43cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDAgMTUwIDApO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwIDE1MCAwKTtcclxuICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmdiKDAgMTUwIDApICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOnJnYigxOTkgLDIzMiAsMjAwKSAgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHByb2dyZXNmdWxsdGVzdDEge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAxMDAlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfTsiLCIuaW5wdXRUZXh0IHtcbiAgYm9yZGVyLXJhZGl1czogMy43cHg7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogXCJNaWxsaWFyZC1TZW1pQm9sZFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTYuN3B4O1xufVxuLmlucHV0VGV4dCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbmlvbi1pdGVtLnNjLWlvbi1pbnB1dC1tZC1oOm5vdCguaXRlbS1sYWJlbCksXG5pb24taXRlbTpub3QoLml0ZW0tbGFiZWwpIC5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGFkZGluZy1zdGFydDozLjUlO1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJvdHRvbS1zaGVldC1wb3BvdmVyIC5wb3BvdmVyLWNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgdG9wOiBjYWxjKDEwMCUgLSAyMDBweCkgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubWFpbl9oZWFkZXJzIHtcbiAgZm9udC1mYW1pbHk6IFwiTWlsbGlhcmQtQm9sZFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi1yaWdodDogMnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5tZW51IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNoYXJlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FsZW5kYXIge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi5maWx0ZXIge1xuICBjb2xvcjogIzAwOTYwNDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmZpbHRlckxhYmVsIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmxhYmVsIHtcbiAgZm9udC1zaXplOiAxNi43cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwiTWlsbGlhcmQtQm9va1wiICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4ubW9yZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNjBweDtcbn1cblxuLnVzZXJOYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiTWlsbGlhcmQtQm9sZFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTkuN3B4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjNweDtcbiAgY29sb3I6ICM0ODQ5NDk7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiTWlsbGlhcmQtQm9va1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wM3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkQ2xhc3Mge1xuICBtYXJnaW46IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnF1ZXN0aW9uTWFyayB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNi43cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1pbGxpYXJkLVNlbWlCb2xkXCIgIWltcG9ydGFudDtcbn1cblxuLnF1ZXN0aW9uTWFya0dyYXkge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTYuN3B4O1xuICBmb250LWZhbWlseTogXCJNaWxsaWFyZC1NZWRpdW1cIiAhaW1wb3J0YW50O1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4udGltZUljb24ge1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnRpbWVMYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLnZvdGVzIHtcbiAgZm9udC1zaXplOiAxNi43cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgZm9udC1mYW1pbHk6IFwiTWlsbGlhcmQtQm9va1wiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzAzMDMwO1xufVxuXG4udm90ZUNhcmQge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi52b3RlQ2FyZCAudm90ZUJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnZvdGVsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1pbGxpYXJkLUJvb2tcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2LjdweDtcbiAgY29sb3I6ICMzMDMwMzA7XG59XG5cbi52b3RlUmVzdWx0IHtcbiAgZm9udC1zaXplOiAxNi43cHg7XG4gIGNvbG9yOiAjMzAzMDMwO1xuICBmb250LWZhbWlseTogXCJNaWxsaWFyZC1Cb2xkXCIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnNoYXJlSWNvbiB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiAjMDA5NjA0ICFpbXBvcnRhbnQ7XG4gIC0tYnVmZmVyLWJhY2tncm91bmQ6IHJnYigxOTksIDIzMiAsMjAwKSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDIwcyB3aWR0aCBsaW5lYXIgMXM7XG59XG5cbi5wb2xsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIGZvbnQtZmFtaWx5OiBcIk1pbGxpYXJkLUJvbGRcIiAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjMuM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMC40N3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5maWx0ZXJMYWJlbCB7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnZvdGVQZXJjZW50IHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubXlDYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW1hZ2UtbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDA5NjA0O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5teU92ZXJsYXkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBvcGFjaXR5OiAwLjU7XG4gIG1hcmdpbi1sZWZ0OiA2MCU7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnR3by1pbWFnZS1sYXlvdXQtc3F1YXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udHdvLWltYWdlLWxheW91dC1zcXVhcmUgLnR3by1pbWFnZS1sYXlvdXQtc3F1YXJlLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuLnR3by1pbWFnZS1sYXlvdXQtc3F1YXJlIC50d28taW1hZ2UtbGF5b3V0LXNxdWFyZS1pdGVtIGlvbi1pbWcge1xuICBoZWlnaHQ6IDE1Ni4zcHg7XG4gIHdpZHRoOiAxNTYuM3B4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnR3by1pbWFnZS1sYXlvdXQtaG9yaXpvbnRhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnR3by1pbWFnZS1sYXlvdXQtaG9yaXpvbnRhbCAudHdvLWltYWdlLWxheW91dC1ob3Jpem9udGFsLWl0ZW0ge1xuICBmbGV4OiAxMDAlO1xuICBoZWlnaHQ6IDE1MC43cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4udHdvLWltYWdlLWxheW91dC1ob3Jpem9udGFsIC50d28taW1hZ2UtbGF5b3V0LWhvcml6b250YWwtaXRlbSBpb24taW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50d28taW1hZ2UtbGF5b3V0LXZlcnRpY2FsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnR3by1pbWFnZS1sYXlvdXQtdmVydGljYWwgLnR3by1pbWFnZS1sYXlvdXQtdmVydGljYWwtaXRlbSB7XG4gIGZsZXg6IDQ1JTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgaGVpZ2h0OiAzMDguM3B4O1xufVxuLnR3by1pbWFnZS1sYXlvdXQtdmVydGljYWwgLnR3by1pbWFnZS1sYXlvdXQtdmVydGljYWwtaXRlbSBpb24taW1nIHtcbiAgaGVpZ2h0OiAzMDguM3B4O1xuICB3aWR0aDogMTU3cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGhyZWUtaW1hZ2UtbGF5b3V0LXNxdWFyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnRocmVlLWltYWdlLWxheW91dC1zcXVhcmUgLnRocmVlLWltYWdlLWxheW91dC1zcXVhcmUtaXRlbSB7XG4gIGZsZXg6IDI5JTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgaGVpZ2h0OiAxMDIuM3B4O1xuICB3aWR0aDogMTAyLjNweDtcbn1cbi50aHJlZS1pbWFnZS1sYXlvdXQtc3F1YXJlIC50aHJlZS1pbWFnZS1sYXlvdXQtc3F1YXJlLWl0ZW0gaW9uLWltZyB7XG4gIGhlaWdodDogMTAyLjNweDtcbiAgd2lkdGg6IDEwMi4zcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGhyZWUtaW1hZ2UtbGF5b3V0LWhvcml6b250YWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50aHJlZS1pbWFnZS1sYXlvdXQtaG9yaXpvbnRhbCAudGhyZWUtaW1hZ2UtbGF5b3V0LWhvcml6b250YWwtaXRlbSB7XG4gIGZsZXg6IDEwMCU7XG4gIGhlaWdodDogOTcuN3B4O1xuICB3aWR0aDogMzIxLjdweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi50aHJlZS1pbWFnZS1sYXlvdXQtaG9yaXpvbnRhbCAudGhyZWUtaW1hZ2UtbGF5b3V0LWhvcml6b250YWwtaXRlbSBpb24taW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aHJlZS1pbWFnZS1sYXlvdXQtdmVydGljYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50aHJlZS1pbWFnZS1sYXlvdXQtdmVydGljYWwgLnRocmVlLWltYWdlLWxheW91dC12ZXJ0aWNhbC1pdGVtIHtcbiAgZmxleDogMjklO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgaGVpZ2h0OiAzMDhweDtcbiAgd2lkdGg6IDEwNC4zcHg7XG59XG4udGhyZWUtaW1hZ2UtbGF5b3V0LXZlcnRpY2FsIC50aHJlZS1pbWFnZS1sYXlvdXQtdmVydGljYWwtaXRlbSBpb24taW1nIHtcbiAgaGVpZ2h0OiAzMDhweDtcbiAgd2lkdGg6IDEwNC4zcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1hZ2VTdHlsZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZm91ci1pbWFnZS1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5mb3VyLWltYWdlLWxheW91dCAuZm91ci1pbWFnZS1sYXlvdXQtaXRlbSB7XG4gIGZsZXg6IDQ1JTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmZvdXItaW1hZ2UtbGF5b3V0IC5mb3VyLWltYWdlLWxheW91dC1pdGVtIGlvbi1pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBub25lO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucm91bmRQcm9ncmVzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuZGl2LmFic29sdXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDk1cHg7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5kaXYuYWJzb2x1dGVPIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDc1JTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbmRpdi5hYnNvbHV0ZVQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDIlO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuZGl2LmFic29sdXRlUyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NSU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5kaXYuYWJzb2x1dGVUViB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4MCU7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5kaXYuYWJzb2x1dGVUSFMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNTBweDtcbn1cblxuZGl2LmFic29sdXRlVEhWIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgyJTtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi50b3BsZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDhweDtcbiAgbGVmdDogMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucG9wdXAge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIC0tYmFja2dyb3VuZDogI0EzQTNBMyAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA5O1xufVxuXG4ubGFiZWxGaWx0ZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1pbGxpYXJkLUJvb2tcIiAhaW1wb3J0YW50O1xufVxuXG4uaXRlbV9ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAwLjJweCBzb2xpZCAjZWJlYWVhO1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5vbmUtaW1hZ2UtbGF5b3V0IHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbkBrZXlmcmFtZXMgZ3Jvd1Byb2dyZXNzQmFyIHtcbiAgMCUsIDMzJSB7XG4gICAgLS1wZ1BlcmNlbnRhZ2U6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLS1wZ1BlcmNlbnRhZ2U6IHZhcigtLXZhbHVlKTtcbiAgfVxufVxuQHByb3BlcnR5IC0tcGdQZXJjZW50YWdlIHtcbiAgc3ludGF4OiBcIjxudW1iZXI+XCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbiAgaW5pdGlhbC12YWx1ZTogMDtcbn1cbmRpdltyb2xlPXByb2dyZXNzYmFyXSB7XG4gIC0tc2l6ZTogMTJyZW07XG4gIC0tZmc6IHJnYigwIDE1MCA0KTtcbiAgLS1iZzogI2UwZjBlMDtcbiAgLS1wZ1BlcmNlbnRhZ2U6IHZhcigtLXZhbHVlKTtcbiAgYW5pbWF0aW9uOiBncm93UHJvZ3Jlc3NCYXIgMXMgMSBmb3J3YXJkcztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2xvc2VzdC1zaWRlLCB3aGl0ZSA4MCUsIHRyYW5zcGFyZW50IDAgOTkuOSUsIHdoaXRlIDApLCBjb25pYy1ncmFkaWVudCh2YXIoLS1mZykgY2FsYyh2YXIoLS1wZ1BlcmNlbnRhZ2UpICogMSUpLCB2YXIoLS1iZykgMCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWZnKTtcbn1cblxuZGl2W3JvbGU9cHJvZ3Jlc3NiYXJdOjpiZWZvcmUge1xuICBjb3VudGVyLXJlc2V0OiBwZXJjZW50YWdlIHZhcigtLXZhbHVlKTtcbiAgY29udGVudDogY291bnRlcihwZXJjZW50YWdlKSBcIiVcIjtcbn1cblxuLyogZGVtbyAqL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jcmVhdGVkQXQge1xuICBjb2xvcjogI2JiYmJiZDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgZm9udC1zaXplOiA4LjNwdDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1pbGxpYXJkLUJvb2tcIiAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGdyb3dQcm9ncmVzc0JhcjEge1xuICAwJSwgMzMlIHtcbiAgICAtLXBnUGVyY2VudGFnZTE6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLS1wZ1BlcmNlbnRhZ2UxOiB2YXIoLS12YWx1ZTEpO1xuICB9XG59XG5AcHJvcGVydHkgLS1wZ1BlcmNlbnRhZ2UxIHtcbiAgc3ludGF4OiBcIjxudW1iZXI+XCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbiAgaW5pdGlhbC12YWx1ZTogMDtcbn1cbmRpdltyb2xlPXByb2dyZXNzYmFyMV0ge1xuICAtLXNpemU6IDEycmVtO1xuICAtLWJnOiAjNTNhMTU2O1xuICAtLWZnOiAjZTBmMGUwO1xuICAtLXBnUGVyY2VudGFnZTE6IHZhcigtLXZhbHVlMSk7XG4gIGFuaW1hdGlvbjogZ3Jvd1Byb2dyZXNzQmFyMSAxcyAxIGFsdGVybmF0ZS1yZXZlcnNlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNsb3Nlc3Qtc2lkZSwgd2hpdGUgODAlLCB0cmFuc3BhcmVudCAwIDk5LjklLCB3aGl0ZSAwKSwgY29uaWMtZ3JhZGllbnQodmFyKC0tZmcpIGNhbGModmFyKC0tcGdQZXJjZW50YWdlMSkgKiAxJSksIHZhcigtLWJnKSAwKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tZmcpO1xufVxuXG5kaXZbcm9sZT1wcm9ncmVzc2JhcjFdOjpiZWZvcmUge1xuICBjb2xvcjogIzAwOTYwNDtcbiAgY29udGVudDogY291bnRlcihwZXJjZW50YWdlKSBcIiVcIjtcbn1cblxuLnByb2dyZXNzRm9yd29yZCB7XG4gIGFuaW1hdGlvbjogcHJvZ3Jlc2ZvcndvcmQgMXMgcmV2ZXJzZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMuN3B4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwOTYwNDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDk2MDQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMwMDk2MDQ7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogIzAwOTYwNCAhaW1wb3J0YW50O1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9ncmVzc2JnQ29sb3Ige1xuICBhbmltYXRpb246IHByb2dyZXNzYmdDb2xvciAxcyByZXZlcnNlO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMy43cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA5NjA0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwOTYwNDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwOTYwNDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDA5NjA0O1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJnYigxOTksIDIzMiAsMjAwKSAhaW1wb3J0YW50O1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3NiZ0NvbG9yIHtcbiAgMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBwcm9ncmVzZm9yd29yZCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbn1cbi5wcm9ncmVzc1JldmVyc2Uge1xuICBhbmltYXRpb246IHByb2dyZXNyZXZlcnNlIDFzIHJldmVyc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiAzLjdweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDk2MDQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA5NjA0O1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJnYigxOTksIDIzMiAsMjAwKSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3JldmVyc2Uge1xuICAwJSB7XG4gICAgd2lkdGg6IDMlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucHJvZ3Jlc3MzIHtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzZnVsbHRlc3QgMG1zIHJldmVyc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJnYigxOTksIDIzMiAsMjAwKSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc2Z1bGx0ZXN0IHtcbiAgMCUge1xuICAgIHdpZHRoOiAzJTtcbiAgfVxufVxuLnByb2dyZXNzRGVsZXRlIHtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzc2RlbGV0ZSA4MDBtcyByZXZlcnNlO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMy43cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA5NjA0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwOTYwNDtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2IoMCAxNTAgNCkgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzZGVsZXRlIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmRlZmF1bHRwcm9ncmVzIHtcbiAgYW5pbWF0aW9uOiBkZWZhdWx0cHJvZ3JlcyAwbXMgcmV2ZXJzZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmdiKDE5OSwgMjMyICwyMDApICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQGtleWZyYW1lcyBkZWZhdWx0cHJvZ3JlcyB7XG4gIDAlIHtcbiAgICB3aWR0aDogMyU7XG4gIH1cbn1cbi5jYXJkQ2xhc3Mge1xuICBtYXJnaW46IDIwcHggMTBweCAwIDEwcHggIWltcG9ydGFudDtcbn1cblxuLmlvbkNvbnRlbnRDbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogIzAwMDtcbn1cblxuLmNyZWF0ZVBvbGxfcm93IHtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi53ZWJEZXNrdG9wVm90aW5nQ2FyZCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRlbnRIZWlnaHQge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb2x0d28ge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5iZXN0ZXN0TG9nbyB7XG4gIHdpZHRoOiAyMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNyZWF0ZVBvbGxEaXYge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZGVza3RvcENyZWF0ZUJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwOTYwNDtcbiAgaGVpZ2h0OiA0OXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBmb250LXNpemU6IDE5cHg7XG4gIC8qIHdpZHRoOiA3MCU7ICovXG4gIHBhZGRpbmc6IDAgNzZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnZvdGVSb3cge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLm1lc3Mge1xuICBib3JkZXI6IDJweCBzb2xpZCAjODhmZjAwO1xufVxuXG4ud2Vic2hhcmVJY29uIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ud2ViZGF0ZXRpbWVpY29uIHtcbiAgY29sb3I6ICM5Nzk3OTc7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgbWFyZ2luLXRvcDogOXB4O1xufVxuXG4ud2ViZGF0ZXRpbWV0ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xuICBjb2xvcjogIzk3OTc5Nztcbn1cblxuLnZvdGVsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1pbGxpYXJkLUJvb2tcIiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2LjdweDtcbiAgY29sb3I6ICMzMDMwMzA7XG59XG5cbi53ZWJ2b3Rlcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG5Aa2V5ZnJhbWVzIGdyb3dQcm9ncmVzc0JhcjEge1xuICAwJSwgMzMlIHtcbiAgICAtLXBnUGVyY2VudGFnZTE6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgLS1wZ1BlcmNlbnRhZ2UxOiB2YXIoLS12YWx1ZTEpO1xuICB9XG59XG5AcHJvcGVydHkgLS1wZ1BlcmNlbnRhZ2UxIHtcbiAgc3ludGF4OiBcIjxudW1iZXI+XCI7XG4gIGluaGVyaXRzOiBmYWxzZTtcbiAgaW5pdGlhbC12YWx1ZTogMDtcbn1cbmRpdltyb2xlPXByb2dyZXNzYmFyMV0ge1xuICAtLXNpemU6IDEycmVtO1xuICAtLWJnOiAjNTNhMTU2O1xuICAtLWZnOiAjZTBmMGUwO1xuICAtLXBnUGVyY2VudGFnZTE6IHZhcigtLXZhbHVlMSk7XG4gIGFuaW1hdGlvbjogZ3Jvd1Byb2dyZXNzQmFyMSAxcyAxIGFsdGVybmF0ZS1yZXZlcnNlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUsIHdoaXRlIDgwJSwgdHJhbnNwYXJlbnQgMCA5OS45JSwgd2hpdGUgMCksIGNvbmljLWdyYWRpZW50KHZhcigtLWZnKSBjYWxjKHZhcigtLXBnUGVyY2VudGFnZTEpICogMSUpLCB2YXIoLS1iZykgMCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWZnKTtcbn1cblxuZGl2W3JvbGU9cHJvZ3Jlc3NiYXIxXTo6YmVmb3JlIHtcbiAgY29sb3I6ICMwMDk2MDQ7XG4gIGNvbnRlbnQ6IGNvdW50ZXIocGVyY2VudGFnZSkgXCIlXCI7XG59XG5cbi5wcm9ncmVzczEge1xuICBhbmltYXRpb246IHByb2dyZXNmdWxsIDFzIHJldmVyc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5NjAwO1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6ICMwMDk2MDQgIWltcG9ydGFudDtcbiAgLS1idWZmZXItYmFja2dyb3VuZDp3aGl0ZSAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcm9ncmVzczIge1xuICBhbmltYXRpb246IHByb2dyZXN6ZXJvIDFzIHJldmVyc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMy43cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA5NjAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwOTYwMDtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2IoMTk5ICwyMzIgLDIwMCkgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXN6ZXJvIHtcbiAgMCUge1xuICAgIHdpZHRoOiAzJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBwcm9ncmVzZnVsbCB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbn1cbi5kZWZhdWx0cHJvZ3JlcyB7XG4gIGFuaW1hdGlvbjogZGVmYXVsdHByb2dyZXMgMG1zIHJldmVyc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2IoMTk5ICwyMzIgLDIwMCkhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBrZXlmcmFtZXMgZGVmYXVsdHByb2dyZXMge1xuICAwJSB7XG4gICAgd2lkdGg6IDMlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ucHJvZ3Jlc3M0IHtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzZnVsbHRlc3QxIDgwMG1zIHJldmVyc2U7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMy43cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA5NjAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwOTYwMDtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2IoMCAxNTAgMCkgIWltcG9ydGFudDtcbiAgLS1idWZmZXItYmFja2dyb3VuZDpyZ2IoMTk5ICwyMzIgLDIwMCkgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNmdWxsdGVzdDEge1xuICAwJSB7XG4gICAgd2lkdGg6IDAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/voting-poll/voting-poll.page.ts":
/*!*************************************************!*\
  !*** ./src/app/voting-poll/voting-poll.page.ts ***!
  \*************************************************/
/*! exports provided: VotingPollPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VotingPollPage", function() { return VotingPollPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_user_media_tray_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-media-tray.service */ "./src/app/service/user-media-tray.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");








let VotingPollPage = class VotingPollPage {
    constructor(_sanitizer, titleService, metaService, route, http, userMediaService, popoverController, alertCtrl) {
        this._sanitizer = _sanitizer;
        this.titleService = titleService;
        this.metaService = metaService;
        this.route = route;
        this.http = http;
        this.userMediaService = userMediaService;
        this.popoverController = popoverController;
        this.alertCtrl = alertCtrl;
        this.poll = {};
        this.pollId = "";
        this.loadData = false;
        this.username = '';
        this.Poll_Id = "";
        this.defaultImageURL = 'assets/icon/defaultProfilePic.png';
        this.IsEnabledCreatePoll = false;
        this.initialLoadFlag = true;
        this.isCardEnabled = true;
        this.votedFlag = false;
        this.userID = "";
        this.user_sid = "";
        this.selectedItem = '';
        this.userDetails = {
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
        this.platformFlag = false;
        this.textPoll_img_type = "";
        this.textPoll_img_url = "";
        this.youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/;
        this.approvedImages = ['jpeg', 'jpg', 'png'];
        this.approvedVideos = ['mp4', 'mov'];
        this.approvedMedia = ['gif'];
        this.approvedGifSources = ['giphy', 'gph', 'tenor'];
        this.isImageValid = (ext) => this.approvedImages.includes(ext);
        this.youTubeIsValid = (url) => {
            if (url) {
                const match = url.match(this.youtubeRegex);
                if (match && match[2].length === 11) {
                    return true;
                }
            }
            return false;
        };
        this.validateYouTubeUrl = (url) => {
            if (url) {
                const match = url.match(this.youtubeRegex);
                if (match && match[2].length === 11) {
                    return `https://www.youtube.com/embed/${match[2]}?rel=0&autoplay=0&showinfo=0&controls=1&frameborder=0`;
                }
            }
            return false;
        };
        this.isUrlValid = (url) => {
            try {
                new URL(url);
            }
            catch (e) {
                console.error(e);
                return false;
            }
            return true;
        };
        this.isValidGifSource = (url) => this.approvedGifSources.some((v) => url.indexOf(v) >= 0);
        this.route.queryParamMap
            .subscribe((params) => {
            let paramsObject;
            paramsObject = Object.assign({}, params);
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
        let httpOptions;
        if (flag != "") {
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64',
                    'Authorization': this.user_sid
                })
            };
        }
        else {
            httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64'
                })
            };
        }
        this.http.get('https://bestest-api.herokuapp.com/poll/' + this.Poll_Id, httpOptions).subscribe((res) => {
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
                this.updateMetaTag(res[0].share_images);
                this.createDummyUser();
            }
        });
    }
    hasJsonProp(obj, prop) {
        return obj.hasOwnProperty(prop);
    }
    getCandidateVotePerc(candidateId, results) {
        var perc = results.filter(function (res) {
            return res['candidate_id'] === candidateId;
        });
        if (perc.length > 0 && this.hasJsonProp(perc[0], 'pct')) {
            return Math.round(perc[0].pct * 100);
        }
        else {
            return 0;
        }
    }
    getCandidateVotePercText(candidateId, results) {
        var perc = results.filter(function (res) {
            return res['candidate_id'] === candidateId;
        });
        if (perc.length > 0 && this.hasJsonProp(perc[0], 'pct')) {
            return Math.round(perc[0].pct * 100) + '%';
        }
        else {
            return 0 + '%';
        }
    }
    getProgressPercent(candidateId, results) {
        var perc = results.filter(function (res) {
            return res['candidate_id'] === candidateId;
        });
        return perc[0] ? perc[0].pct : 0;
    }
    createDummyUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.initialLoadFlag = false;
            let email = '';
            let randomNum = Math.floor(Math.random() * 90000) + 10000;
            email = "user" + randomNum + "@gmail.com";
            // const userDetail = {username:'',name:'',email:email,password:'12345678',device_id:"434nbjhbkuhukgfgjv"};
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64'
                })
            };
            this.http.post('https://bestest-api.herokuapp.com/validate/email', {
                email: email
            }, httpOptions).subscribe((user) => {
            }, (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const status = err.status;
                switch (status) {
                    case 200:
                        let params = { "username": "user" + randomNum, "name": "user" + randomNum, "email": email, "password": "12345678", "device_id": "748b6393-f4ed-4fef-8c23-bb9d439c4e6a" };
                        this.http.post('https://bestest-api.herokuapp.com/user', params, httpOptions).subscribe((user) => {
                            this.user_sid = user.sid;
                            this.userID = user.id;
                        });
                        break;
                    case 406:
                        this.createDummyUser();
                        break;
                }
            }));
        });
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
                this.textPoll_img_url = this._sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedURL);
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
    getLinkPreviewData(data) {
        return this.http.post('https://us-central1-bestest-37e90.cloudfunctions.net/getLinkPreviewDetails', data);
    }
    votingCard() {
        // if(!this.platformFlag)
        return "webDesktopVotingCard";
    }
    getValue(item, items) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pollId = item.id;
            this.candidateId = items.id;
            this.myvote = item.myVote;
            this.selectedItem = items.id;
            this.pollclick = items.id;
            if (item.voteStatus !== false) {
                if (this.myvote !== undefined) {
                    if (this.myvote.candidate_id === this.candidateId) {
                        this.deleteVote();
                    }
                    else {
                        this.putVote();
                    }
                }
                else {
                    this.postVote();
                }
            }
            else {
                const alert = yield this.alertCtrl.create({
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
                yield alert.present();
            }
        });
    }
    deleteVote() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64',
                'Authorization': this.user_sid
            })
        };
        this.http.delete('https://bestest-api.herokuapp.com/vote/' + this.myvote.id, httpOptions).subscribe((res) => {
            this.getPollData('delete');
        });
    }
    postVote() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64',
                'Authorization': this.user_sid
            })
        };
        const data = {
            poll_id: this.pollId, candidate_id: this.candidateId
        };
        this.http.post('https://bestest-api.herokuapp.com/vote', data, httpOptions).subscribe((res) => {
            this.getPollData('post');
        });
    }
    putVote() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Basic': 'd954b2f4-eab8-45b4-a6ca-ccd5a3aabe64',
                'Authorization': this.user_sid
            })
        };
        const data = {
            poll_id: this.pollId, candidate_id: this.candidateId
        };
        this.http.put('https://bestest-api.herokuapp.com/vote', data, httpOptions).subscribe((res) => {
            this.getPollData('put');
        });
    }
    showMenu() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        });
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
};
VotingPollPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _service_user_media_tray_service__WEBPACK_IMPORTED_MODULE_3__["UserMediaTrayService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
VotingPollPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-voting-poll',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./voting-poll.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/voting-poll/voting-poll.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./voting-poll.page.scss */ "./src/app/voting-poll/voting-poll.page.scss")).default]
    })
], VotingPollPage);



/***/ })

}]);
//# sourceMappingURL=voting-poll-voting-poll-module.js.map