import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'navigation-item',
    templateUrl: 'navigation-item.component.html',
    styleUrls: ['./navigation-item.component.css']
})
export class NavigationItemComponent implements OnInit {

    @Input() itemHeading: string;
    @Input() iconHtml: string;

    constructor() { }

    ngOnInit() { }
}