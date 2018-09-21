export const DEFAULT_ALBUM_ART = 'assets/imgs/default.png';

export enum MopidyPlaybackState {
    Stopped = 'stopped',
    Playing = 'playing',
    Paused = 'paused'
}

export class MopidyState {
    playbackState: MopidyPlaybackState = MopidyPlaybackState.Stopped;
    trackSeekPos = 0;
    trackLength = 100;
    trackName = '';
    trackInfo = '';
    fileInfo = '';
    volume = 0;
    albumArt: string = DEFAULT_ALBUM_ART;
}

export class MopidyQueueItem {
    name = '';
    albumArt = DEFAULT_ALBUM_ART;
    trackInfo = '';
    tlid = -1;
    current = false;
}

export class MopidyBrowseState {
    backends: any[] = [];
    private refs: any[] = [];

    get breadcrumb() {
        return this.refs.map(ref => ref.name).join(' > ');
    }

    push(ref) {
        this.refs.push(ref);
    }
    pop() {
        this.refs.pop();
    }
    reset() {
        this.refs = [];
    }
    get current() {
        return this.refs.length === 0 ? null : this.refs.slice(-1)[0];
    }
    get length() {
        return this.refs.length;
    }
}
