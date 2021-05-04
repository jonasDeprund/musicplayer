export const playAudio = (isPlaying, audioRef) => {
  // Check if the song is isPlaying
  if (isPlaying) {
    const playPromise = audioRef.current.play()
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play()
      })
    }
  }
}
