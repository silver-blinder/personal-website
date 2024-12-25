import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { memo, useEffect, useLayoutEffect, useMemo, useState } from 'react'

export const useIsomorphicLayoutEffect
  = typeof window !== 'undefined' ? useLayoutEffect : useEffect

interface UseMediaQueryOptions {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === 'undefined'

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {},
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener('change', handleChange)

    return () => {
      matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

// const duration = 0.15
// const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: 'blur(4px)' }
// const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    controls,
    cards,
    isCarouselActive,
  }: {
    controls: any
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery('(max-width: 640px)')
    const cylinderWidth = isScreenSizeSm ? 1500 : 2400
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value: any) => `rotate3d(0, 1, 0, ${value}deg)`,
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-mauve-dark-2"
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      >
        <motion.div
          drag={isCarouselActive ? 'x' : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d',
          }}
          onDrag={(_: any, info: any) =>
            isCarouselActive
            && rotation.set(rotation.get() + info.offset.x * 0.03)}
          onDragEnd={(_: any, info: any) =>
            isCarouselActive
            && controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.03,
              transition: {
                type: 'spring',
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })}
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-mauve-dark-2 p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
            >
              <motion.img
                src={imgUrl}
                alt={`image_${i}`}
                className="pointer-events-none w-full rounded-xl object-cover aspect-square"
                style={{
                  willChange: 'transform',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  },
)

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

// 静态导入所有图片
const images = import.meta.glob('/public/images/travel-pic/*', {
  eager: true, // 使用静态导入
  as: 'url', // 直接作为 URL 导入
})

function ThreeDPhotoCarousel() {
  const controls = useAnimation()

  const cards = useMemo(() =>
    Object.values(images), [])

  return (
    <motion.div layout className="relative -mt-32">
      <div className="relative h-[700px] w-full overflow-hidden">
        <Carousel
          controls={controls}
          cards={cards}
          isCarouselActive={true}
        />
      </div>
    </motion.div>
  )
}

export default ThreeDPhotoCarousel
