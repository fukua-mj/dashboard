import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageboardComponent } from './messageboard/messageboard.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { ChatComponent } from './chat/chat.component';
import { NoticewriterComponent } from './noticewriter/noticewriter.component';

const routes: Routes = [
    {
        path:'messageboard',
        component:MessageboardComponent
    },{
        path:'noticeboard',
        component:NoticeboardComponent
    },{
        path:'chat',
        component:ChatComponent
    },{
        path:'noticewriter',
        component:NoticewriterComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }
