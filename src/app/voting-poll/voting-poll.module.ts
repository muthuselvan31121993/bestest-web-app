import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotingPollPageRoutingModule } from './voting-poll-routing.module';

import { VotingPollPage } from './voting-poll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotingPollPageRoutingModule
  ],
  declarations: [VotingPollPage]
})
export class VotingPollPageModule {}
