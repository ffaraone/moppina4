export const DEFAULT_ALBUM_ART = '/src/assets/imgs/default.png';

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
    breadcrumb: string[] = [];
}
