export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(
        title: string,
        link: string,
        votes?: number) {
            this.title = title;
            this.link = link;
            this.votes = votes || 0;
        }
    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    // we want to display a short version of the URL
    // with just the domain name
    domain(): string | null {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (error) {
            return null;
        }
    }
}
