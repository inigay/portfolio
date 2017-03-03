import { Component, OnInit } from '@angular/core';
import { RepoItem } from './repo-item.model';

@Component({
    //moduleId: module.id,
    selector: 'repo-list',
    templateUrl: 'repo-list.component.html',
    styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {

    list = [
        new RepoItem("inigay/Intigo", "https://github.com/inigay/intigo"),
        new RepoItem("inigay/portfolio", "https://github.com/inigay/portfolio", "Portfolio project dashboard using angular 2"),
        new RepoItem("inigay/proto", "https://github.com/inigay/proto"),
        new RepoItem("inigay/csv_difference", "https://github.com/inigay/csv_difference", "Calculates Difference of the files"),
        new RepoItem("inigay/chat", "https://github.com/inigay/chat", "real time chat application"),
        new RepoItem("inigay/labroots", "https://github.com/inigay/labroots", "Converts Numbers to Words, and Finds sum of common factors")
    ];

    constructor() { }

    ngOnInit() { }
}