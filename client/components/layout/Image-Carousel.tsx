import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import macbookImage from '../../../Public/Images/macbook-pro-carousel.png'
import iphoneImage from '../../../Public/Images/iphone-14-pro-carousel.png'
import ipadImage from '../../../Public/Images/ipad-carousel.png'
import airpodImage from '../../../Public/Images/airpods-carousel.png'
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
    <div className="relative">
      <img
        src={imageSrc}
        alt={title}
        className="object-cover w-full h-80 sm:h-96 lg:h-120"
      />
      <div className="absolute bottom-4 left-4">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
          {name}
        </h3>
        <Link to={productPageUrl}>
          <button className="bg-white hover:bg-gray-50 text-black font-bold py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-9 rounded-full">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  )

  return (
    <AliceCarousel
      mouseTracking
      items={[
        <Slide
          key="macbook"
          imageSrc={macbookImage}
          title="Introducing the"
          name="MACBOOK PRO"
          buttonText="Shop Now"
          productPageUrl="/macbook" // LINKS NEED TO BE UPDATED
        />,
        <Slide
          key="iphone"
          imageSrc={iphoneImage}
          title="Discover the new"
          name="IPHONE 14 PRO"
          buttonText="Shop Now"
          productPageUrl="/iphone" // LINKS NEED TO BE UPDATED
        />,
        <Slide
          key="ipad"
          imageSrc={ipadImage}
          title="Experience the Latest"
          name="IPAD"
          buttonText="Shop Now"
          productPageUrl="/ipad" // LINKS NEED TO BE UPDATED
        />,
        <Slide
          key="airpods"
          imageSrc={airpodImage}
          title="Get Immersed in Sound with"
          name="AIRPODS"
          buttonText="Shop Now"
          productPageUrl="/airpods" // LINKS NEED TO BE UPDATED
        />,
      ]}
      onSlideChanged={handleSlideChange}
      autoPlay={true}
      disableButtonsControls
      autoPlayInterval={2000}
      infinite
      animationType="fadeout"
    />
  )
}
