import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterJwtSampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterJwtSampleApplicationAppRoutingModule} from './app-routing.module';
import { JhipsterJwtSampleApplicationHomeModule } from './home/home.module';
import { JhipsterJwtSampleApplicationAdminModule } from './admin/admin.module';
import { JhipsterJwtSampleApplicationAccountModule } from './account/account.module';
import { JhipsterJwtSampleApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterJwtSampleApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterJwtSampleApplicationSharedModule,
        JhipsterJwtSampleApplicationHomeModule,
        JhipsterJwtSampleApplicationAdminModule,
        JhipsterJwtSampleApplicationAccountModule,
        JhipsterJwtSampleApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterJwtSampleApplicationAppModule {}
