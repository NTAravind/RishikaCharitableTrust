import Masonry from 'react-masonry-css'

const images = Object.values(
  import.meta.glob('../assets/explore/*.{jpg,jpeg,png,gif}', { eager: true })
).map((mod) => mod.default)

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

const Gallery = () => {
  return (
    <div className="p-4">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="my-masonry-column"
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            className="mb-4 rounded-lg w-full object-cover"
          />
        ))}
      </Masonry>
    </div>
  )
}

export default Gallery
