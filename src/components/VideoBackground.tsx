/// <reference types="vite/client" />

export function VideoBackground() {
  const bgVideo = new URL('../video/animation_of_flowing_current_202605251650.mp4', import.meta.url).href

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
        src={bgVideo}
      />
    </div>
  )
}
