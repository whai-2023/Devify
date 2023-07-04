import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import macbookImage from '/images/macbook-pro-carousel.png'
import iphoneImage from '/images/iphone-14-pro-carousel.png'
import ipadImage from '/images/ipad-carousel.png'
import airpodImage from '/images/airpods-carousel.png'
import { Link } from 'react-router-dom'

export default function ImageCarousel() {
  const handleSlideChange = (event: { item: number }) => {
    console.log(`Slide changed to index: ${event.item}`)
  }

  const Slide = ({
    imageSrc,
    title,
    name,
    buttonText,
    productPageUrl,
  }: {
    imageSrc: string
    title: string
    name: string
    buttonText: string
    productPageUrl: string
  }) => (
    <div className="relative pt-20 bg-black">
      <img
        src={imageSrc}
        alt={title}
        className="object-cover mx-auto h-80 sm:h-96 brightness-75 lg:h-[700px] "
      />
      <div className="absolute bottom-12 left-72">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          {name}
        </h3>
        <Link to={productPageUrl}>
          <button className="bg-white hover:bg-grey-400 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-9 rounded-full">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  )

  return (
    <div className="z-0">
      <AliceCarousel
        mouseTracking
        items={[
          <Slide
            key="macbook"
            imageSrc={macbookImage}
            title="Introducing the"
            name="MacBook Pro"
            buttonText="Shop Now"
            productPageUrl="/macbooks"
          />,
          <Slide
            key="iphone"
            imageSrc={iphoneImage}
            title="Discover the new"
            name="Iphone 14 Pro"
            buttonText="Shop Now"
            productPageUrl="/iphones"
          />,
          <Slide
            key="ipad"
            imageSrc={ipadImage}
            title="Experience the Latest"
            name="Ipad"
            buttonText="Shop Now"
            productPageUrl="/ipads"
          />,
          <Slide
            key="airpods"
            imageSrc={airpodImage}
            title="Get Immersed in Sound with"
            name="Airpods"
            buttonText="Shop Now"
            productPageUrl="/airpods"
          />,
        ]}
        onSlideChanged={handleSlideChange}
        autoPlay={true}
        disableButtonsControls
        autoPlayInterval={2000}
        infinite
        animationType="fadeout"
      />
    </div>
  )
}
