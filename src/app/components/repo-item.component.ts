import { Component, OnInit, Input} from '@angular/core';

@Component({
    //moduleId: module.id,
    selector: 'repo-item',
    templateUrl: 'repo-item.component.html',
    styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {

    @Input() repoName;
    @Input() repoLink;
    @Input() repoDesc;
    @Input() starCount;
    @Input() forkCount;

    constructor() { }

    ngOnInit() { }
}