import { Component, ViewEncapsulation, forwardRef } from '@angular/core';
import { BarComponent } from './bar.component';
import { TabConfig } from './tab.config';

@Component({
    selector: 'weui-tabbar,[weui-tabbar]',
    template: `
    <div class="weui-tab__panel"><ng-content></ng-content></div>
    <div class="weui-tabbar">
        <div class="weui-tabbar__item" [ngClass]="{'weui-bar__item_on': item.active}"
            *ngFor="let item of tabs" (click)="item.active=true">
            <div style="display: inline-block;position: relative;">
                <div class="weui-tabbar__icon" [innerHTML]="item.icon"></div>
                <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;" *ngIf="item.badge && item.badge !== 'dot'">{{item.badge}}</span>
                <span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;" *ngIf="item.badge && item.badge === 'dot'"></span>
            </div>
            <p class="weui-tabbar__label">{{item.heading}}</p>    
        </div>
    </div>
    `,
    providers: [{provide: BarComponent, useExisting: forwardRef(() => TabbarComponent) }],
    host: {
        '[class.weui-tab]': 'true'
    },
    styles: [
        `weui-tabbar{display:block;}.weui-navbar__item[disabled]{color:rgba(0,0,0,.6)}.weui-tab__panel > .weui-tab, .weui-tab__panel > weui-tab {display:none;}.weui-tab__panel > .active {display:block}`,
    ],
    encapsulation: ViewEncapsulation.None
})
export class TabbarComponent extends BarComponent {
    constructor(config: TabConfig) {
        super(config);
    }
}
