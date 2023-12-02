"use strict";
// Реалізувати абстракцію для відтворення різних видів музичних файлів, таких як MP3 та WAV, 
// і використовувати різні програвачі для їх відтворення.
class MediaFile {
    name;
    duration;
    constructor(name, duration = 1000) {
        this.name = name;
        this.duration = duration;
    }
}
class MediaFileMP3 extends MediaFile {
    type = "MP3" /* EMediaFileType.MP3 */;
}
class MediaFileWAV extends MediaFile {
    type = "WAV" /* EMediaFileType.WAV */;
}
class MediaFileOGG extends MediaFile {
    type = "OGG" /* EMediaFileType.OGG */;
}
class MediaFileAAC extends MediaFile {
    type = "AAC" /* EMediaFileType.AAC */;
}
class MediaFileFLAC extends MediaFile {
    type = "FLAC" /* EMediaFileType.FLAC */;
}
class Player {
}
//______________
class GNOMEMusic extends Player {
    play(mediaFile) {
        console.log('GNOME Music Player');
        let count = 0;
        const interval = setInterval(() => {
            if (count === (mediaFile.duration - 100)) {
                console.log(`finish ${mediaFile.type} song ${mediaFile.name}`);
                clearInterval(interval);
            }
            else {
                console.log(`play ${mediaFile.type} song ${mediaFile.name}`);
                count += 100;
            }
        }, 100);
    }
}
class Amberol extends Player {
    play(mediaFile) {
        console.log('Amberol Player');
        let count = 0;
        const interval = setInterval(() => {
            if (count === (mediaFile.duration - 100)) {
                console.log(`finish ${mediaFile.type} song ${mediaFile.name}`);
                clearInterval(interval);
            }
            else {
                console.log(`play ${mediaFile.type} song ${mediaFile.name}`);
                count += 100;
            }
        }, 100);
    }
}
class VLC extends Player {
    play(mediaFile) {
        console.log('VLC Player');
        let count = 0;
        const interval = setInterval(() => {
            if (count === (mediaFile.duration - 100)) {
                console.log(`finish ${mediaFile.type} song ${mediaFile.name}`);
                clearInterval(interval);
            }
            else {
                console.log(`play ${mediaFile.type} song ${mediaFile.name}`);
                count += 100;
            }
        }, 100);
    }
}
// example
const plOne = new Amberol();
plOne.play(new MediaFileAAC('aac song'));
