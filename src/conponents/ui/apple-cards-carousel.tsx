import { IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useOutsideClick } from '../../hooks/use-outside-click'
import { cn } from '../../lib/utils'

interface CarouselProps {
  items: JSX.Element[]
  initialScroll?: number
}

// interface Card {
//   src: string
//   singer: string
//   title?: string
//   content: React.ReactNode
// }

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void
  currentIndex: number
}>({
      onCardClose: () => {},
      currentIndex: 0,
    })

export function Carousel({ items, initialScroll = 0 }: CarouselProps) {
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const [_canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [_canScrollRight, setCanScrollRight] = React.useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll
      checkScrollability()
    }
  }, [initialScroll])

  const _scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const _scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const isMobile = () => {
    return window && window.innerWidth < 768
  }

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384 // (md:w-96)
      const gap = isMobile() ? 4 : 8
      const scrollPosition = (cardWidth + gap) * (index + 1)
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      })
      setCurrentIndex(index)
    }
  }

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 scroll-smooth [scrollbar-width:none] gap-4"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              'absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l',
            )}
          >
          </div>

          <div
            className={cn(
              'flex flex-row justify-start gap-4 pl-4',
              'mx-auto', // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: 'easeOut',
                    once: true,
                  },
                }}
                key={`card${index}`}
                className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                style={{ willChange: 'auto' }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

// export function Card({
//   card,
//   index,
//   layout = false,
// }: {
//   card: Card
//   index: number
//   layout?: boolean
// }) {
//   const [open, setOpen] = useState(false)
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { onCardClose } = useContext(CarouselContext)

//   const handleOpen = () => {
//     setOpen(true)
//   }

//   const handleClose = () => {
//     setOpen(false)
//     onCardClose(index)
//   }

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === 'Escape') {
//         handleClose()
//       }
//     }

//     if (open) {
//       document.body.style.overflow = 'hidden'
//     }
//     else {
//       document.body.style.overflow = 'auto'
//     }

//     window.addEventListener('keydown', onKeyDown)
//     return () => window.removeEventListener('keydown', onKeyDown)
//   }, [open])

//   useOutsideClick(containerRef, () => handleClose())

//   return (
//     <>
//       <AnimatePresence>
//         {open && (
//           <div className="fixed inset-0 z-50 overflow-auto flex items-center justify-center">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
//             />
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               ref={containerRef}
//               layoutId={layout ? `card-${card.title}` : undefined}
//               className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
//             >
//               <button
//                 className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
//                 onClick={handleClose}
//               >
//                 <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
//               </button>
//               <motion.p
//                 layoutId={layout ? `category-${card.title}` : undefined}
//                 className="text-base font-medium text-black dark:text-white"
//               >
//                 {card.singer}
//               </motion.p>
//               <motion.p
//                 layoutId={layout ? `title-${card.title}` : undefined}
//                 className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
//               >
//                 {card.title}
//               </motion.p>
//               <div className="py-10">{card.content}</div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//       <motion.button
//         layoutId={layout ? `card-${card.title}` : undefined}
//         onClick={handleOpen}
//         className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[18rem] w-[18rem] overflow-hidden flex flex-col items-start justify-start relative z-10"
//       >
//         <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
//         <div className="relative z-40 p-8">
//           <motion.p
//             layoutId={layout ? `category-${card.singer}` : undefined}
//             className="text-white text-sm md:text-base font-medium font-sans text-left"
//           >
//             {card.singer}
//           </motion.p>
//           <motion.p
//             layoutId={layout ? `title-${card.title}` : undefined}
//             className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
//           >
//             {card.title}
//           </motion.p>
//         </div>
//         <BlurImage
//           src={card.src}
//           alt={card.title}
//           fill
//           className="object-cover absolute z-10 inset-0"
//         />
//       </motion.button>
//     </>
//   )
// }

export function BlurImage({ height, width, src, className, alt, ...rest }: any) {
  const [isLoading, setLoading] = useState(true)
  return (
    <img
      className={cn('transition duration-300', isLoading ? 'blur-sm' : 'blur-0', className)}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === 'string' ? src : undefined}
      alt={alt || 'Background of a beautiful view'}
      {...rest}
    />
  )
}
