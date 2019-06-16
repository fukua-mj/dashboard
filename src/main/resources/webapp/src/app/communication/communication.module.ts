import { InputTextModule, CardModule, ButtonModule, EditorModule, DialogModule, ListboxModule, GrowlModule, OverlayPanelModule } from 'primeng/primeng';
import { HtmlPipe } from './../common/pipe/html/html.pipe';
import { PanelModule } from 'primeng/panel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationRoutingModule } from './communication-routing.module';
import { MessageboardComponent } from './messageboard/messageboard.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'app/common/service/message.service';
import { NoticewriterComponent } from './noticewriter/noticewriter.component';
import { WebSocketService } from 'app/common/service/web-socket.service';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    PanelModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    EditorModule,
    DialogModule,
    ListboxModule,
    GrowlModule,
    TableModule,
    OverlayPanelModule
  ],
  declarations: [
    MessageboardComponent,
    NoticeboardComponent,
    ChatComponent,
    HtmlPipe,
    NoticewriterComponent
  ],

  providers: [MessageService,WebSocketService]
})
export class CommunicationModule { }
