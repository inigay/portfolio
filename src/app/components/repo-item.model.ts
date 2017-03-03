
export class RepoItem
{
    repoName:string;
    repoLink: string;
    repoDesc: string;
    starCount: number;
    forkCount: number;

    constructor(repoName:string, repoLink:string, repoDesc?:string, starCount?: number, forkCount?: number){
        this.repoName = repoName;
        this.repoLink = repoLink;
        this.repoDesc = repoDesc || 'No description, website, or topics provided.';
        this.starCount = starCount || 0;
        this.forkCount = forkCount || 0;
    }

}