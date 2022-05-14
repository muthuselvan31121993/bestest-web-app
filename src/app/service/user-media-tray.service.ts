import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

export interface layout {
  id: number;
  orientation: 'string';
  columns: number;
}

export interface textPollMedia {
  type: any;
  url: any;
  isEdited: boolean;
  imageCopy: any;
}
export interface imgPollMedia {
  type: any;
  url: any;
  isEdited: boolean;
  imageCopy: any;
}

@Injectable({
  providedIn: 'root',
})
export class UserMediaTrayService {
  _userMedia = new BehaviorSubject<Array<any>>([]);
  _userSelectedLayout = new BehaviorSubject<layout>(null);
  _textPollMediaURL = new BehaviorSubject<textPollMedia>({
    type: null,
    url: null,
    imageCopy: null,
    isEdited: null,
  });
  _imgPollMediaURL = new BehaviorSubject<imgPollMedia>({
    type: null,
    url: null,
    imageCopy: null,
    isEdited: null,
  });
  _imguserMedia = new BehaviorSubject<Array<any>>([]);

  // Expose the observable$ part of the userMedia subject (read only stream)
  userMedia$ = this._userMedia.asObservable();
  imguserMedia$ = this._imguserMedia.asObservable();
  userSelectedLayout$ = this._userSelectedLayout.asObservable();
  textPollMediaURL$ = this._textPollMediaURL.asObservable();
  imgPollMediaURL$ = this._imgPollMediaURL.asObservable();

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

  mediaExists(src: string) {
    return this.userMedia.some(function (m) {
      return m.image_url === src;
    });
  }

  addUserMedia(src: string) {
    if (src.search('data:image/png;base64,') >= 0) {
      src.replace('data:image/png;base64,', '');
    } else if (src.search('data:image/jpeg;base64,') >= 0) {
      src.replace('data:image/jpeg;base64,', '');
    } else if (src.search('data:image/jpg;base64,') >= 0) {
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

  addUserMediap(src: string, tith: string) {
    if (src.search('data:image/png;base64,') >= 0) {
      src.replace('data:image/png;base64,', '');
    } else if (src.search('data:image/jpeg;base64,') >= 0) {
      src.replace('data:image/jpeg;base64,', '');
    } else if (src.search('data:image/jpg;base64,') >= 0) {
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

  removeUserMedia(value: string) {
    this.userMedia = this.userMedia.filter(function (item) {
      return item.image_url !== value;
    });

    this.imguserMedia = this.imguserMedia.filter(function (item) {
      return item.media.imageCopy.dataUrl !== value;
    });
    // console.log('imguserMedia is ',this.imguserMedia.length)
  }
  constructor() {}
}
