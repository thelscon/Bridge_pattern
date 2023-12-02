// Реалізувати абстракцію для відтворення різних видів музичних файлів, таких як MP3 та WAV, 
// і використовувати різні програвачі для їх відтворення.

const enum EMediaFileType {
    MP3 = 'MP3' ,
    WAV = 'WAV' ,
    OGG = 'OGG' ,
    AAC = 'AAC' ,
    FLAC = 'FLAC'
}

interface IMediaFile {
    readonly name : string
    readonly duration : number

    readonly type : EMediaFileType
}
abstract class MediaFile implements IMediaFile {
    abstract readonly type : EMediaFileType

    constructor (
        public readonly name : string ,
        public readonly duration = 1000
    ) {}
}
class MediaFileMP3 extends MediaFile {
    readonly type = EMediaFileType.MP3
}
class MediaFileWAV extends MediaFile {
    readonly type = EMediaFileType.WAV
}
class MediaFileOGG extends MediaFile {
    readonly type = EMediaFileType.OGG
}
class MediaFileAAC extends MediaFile {
    readonly type = EMediaFileType.AAC
}
class MediaFileFLAC extends MediaFile {
    readonly type = EMediaFileType.FLAC
}

//___ Bridge ___
interface IPlayer {
    play : (mediaFile : IMediaFile) => void
}
abstract class Player implements IPlayer{
    abstract play (file : IMediaFile) : void
}
//______________

class GNOMEMusic extends Player {
    play (mediaFile : IMediaFile) {
        console.log ('GNOME Music Player')
        let count = 0
        const interval = setInterval (() => {
            if (count === (mediaFile.duration - 100)) {
                console.log (`finish ${mediaFile.type} song ${mediaFile.name}`)
                clearInterval (interval)
            }
            else {
                console.log (`play ${mediaFile.type} song ${mediaFile.name}`)
                count += 100
            }
        } , 100)
    }
}

class Amberol extends Player {
    play (mediaFile : IMediaFile) {
        console.log ('Amberol Player')
        let count = 0
        const interval = setInterval (() => {
            if (count === (mediaFile.duration - 100)) {
                console.log (`finish ${mediaFile.type} song ${mediaFile.name}`)
                clearInterval (interval)
            }
            else {
                console.log (`play ${mediaFile.type} song ${mediaFile.name}`)
                count += 100
            }
        } , 100)
    }
}

class VLC extends Player {
    play (mediaFile : IMediaFile) {
        console.log ('VLC Player')
        let count = 0
        const interval = setInterval (() => {
            if (count === (mediaFile.duration - 100)) {
                console.log (`finish ${mediaFile.type} song ${mediaFile.name}`)
                clearInterval (interval)
            }
            else {
                console.log (`play ${mediaFile.type} song ${mediaFile.name}`)
                count += 100
            }
        } , 100)
    }
}

// example
const plOne = new Amberol ()
plOne.play(new MediaFileAAC('aac song'))
