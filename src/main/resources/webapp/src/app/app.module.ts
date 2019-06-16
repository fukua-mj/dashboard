import { DataImportComponent } from './systemmanagement/data-import/data-import.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routes';
import 'rxjs/add/operator/toPromise';

import { EchartService } from './common/service/echart.service';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';

import { AppComponent } from './app.component';
import { AppMenuComponent, AppSubMenuComponent } from '../core/layout/menu/app.menu.component';
import { AppBreadcrumbComponent } from '../core/layout/breadcrumb/app.breadcrumb.component';
import { AppTopBarComponent } from '../core/layout/topbar/app.topbar.component';
import { AppFooterComponent } from '../core/layout/footer/app.footer.component';

import { BreadcrumbService } from '../core/layout/breadcrumb/service/breadcrumb.service';

// multi-language
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DropdownModule, GrowlModule, GalleriaModule, PanelModule, CalendarModule, ListboxModule, MessagesModule, MessageModule, OrderListModule, CardModule, OverlayPanelModule, DialogModule, PasswordModule } from 'primeng/primeng';
import { InterceptorService } from './common/service/interceptor.service';
import { SearchComponent } from './common/component/search/search.component';
import { PagenateComponent } from './common/component/pagenate/pagenate.component';
import { WebsocketService } from './boe/services/websocket.service';

export function createTranslateLoader(http: HttpClient) {
    // 다국어 파일의 확장자와 경로를 지정
    return new TranslateHttpLoader(http, './assets/language/', '.json');
}

// tab frame
import { AppRetabComponent } from 'core/layout/retab/app.retab.component';
import { TabMenuModule } from 'primeng/primeng';
import { TabService } from '../core/layout/retab/service/tab.service';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TooltipModule } from 'primeng/tooltip';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TieredMenuModule } from 'primeng/tieredmenu';
// login
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthFalseGuard } from './guards/auth.false.guard.';
import { AuthenticationService } from './_services/authentication.service';
import { LayoutFullScreenComponent } from '../core/layout/fullscreen/fullscreen.component';
import { LayoutDefaultComponent } from '../core/layout/default/default.component';
import { InputTextModule } from 'primeng/inputtext';

import { PanelMenuModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/menu';
import { RouteReuseStrategy } from '@angular/router';
import { PageReuseStrategy } from './common/strategy/page-reuse-strategy';
import { HtmlPipe } from './common/pipe/html/html.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { ApiService } from './common/service/api/api.service';
import { MessageService } from './common/service/message.service';
import { WebSocketService } from './common/service/web-socket.service';
import { TableModule } from 'primeng/table';
import { NoticeboardHistoryComponent } from './noticeboard-history/noticeboard-history.component';
import { UrlinterceptorService } from './guards/urlinterceptor.service';
import { FullscreenService } from './common/service/fullscreen.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutes,
        HttpClientModule,
        BrowserAnimationsModule,
        BreadcrumbModule,
        ScrollPanelModule,
        TabViewModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },

        }),
        DropdownModule,
        InputTextModule,
        TabMenuModule,
        ContextMenuModule,
        GrowlModule,
        PanelMenuModule,
        MenuModule,
        TooltipModule,
        ToolbarModule,
        SplitButtonModule,
        TieredMenuModule,
        GalleriaModule,
        PanelModule,
        CalendarModule,
        ListboxModule,
        MessagesModule,
        MessageModule,
        TableModule,
        OrderListModule,
        CardModule,
        OverlayPanelModule,
        DialogModule,
        PasswordModule
    ],
    declarations: [
        AppComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppBreadcrumbComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppRetabComponent,
        LoginComponent,
        LayoutFullScreenComponent,
        HomepageComponent,
        LayoutDefaultComponent,
        NoticeboardHistoryComponent
        //HtmlPipe
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
        BreadcrumbService,
        TabService,
        AuthGuard,
        AuthFalseGuard,
        AuthenticationService,
        EchartService,
        WebsocketService,
        ApiService,
        MessageService,
        WebSocketService,
        UrlinterceptorService,
        FullscreenService,
        { provide: RouteReuseStrategy, useClass: PageReuseStrategy },
        /*         {  provide: RouteReuseStrategy, useClass: PageReuseStrategy ,deps:[TabService] } */

    ],
    bootstrap: [LayoutDefaultComponent]
})
export class AppModule { }
