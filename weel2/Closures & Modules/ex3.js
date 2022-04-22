const SongsManager = function () {
    const _songs = {}
    const _youtubeBase = "https://www.youtube.com/watch?v="
    
    const getIdentifier = url => url.split("").splice(32).join("")
    const addSong = (songName,link) => _songs[songName] = getIdentifier(link)


    const getSong = songName => _youtubeBase + _songs[songName]

    return {
        addSong,
        getSong
    }
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax"))