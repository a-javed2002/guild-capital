import Slider from "react-slick";

const PartnerSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 5, // Number of visible slides
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Speed in milliseconds
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 5 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 5 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className='home-second rem7-marginTop'>
            <h1 className="primary text-center">Our Diverse Network of Partners</h1>
            <div className="partners-container mt-5">
                <Slider {...settings}>
                    {[
                        { img: "/assets/images/Shape.png", name: "Boltshift" },
                        { img: "/assets/images/Shape2.png", name: "Lightbox" },
                        { img: "/assets/images/Shape3.png", name: "FeatherDev" },
                        { img: "/assets/images/Shape4.png", name: "Spherule" },
                        { img: "/assets/images/Shape5.png", name: "Nietzsche" },
                        { img: "/assets/images/Shape.png", name: "Boltshift" },
                        { img: "/assets/images/Shape2.png", name: "Lightbox" },
                        { img: "/assets/images/Shape3.png", name: "FeatherDev" },
                        { img: "/assets/images/Shape4.png", name: "Spherule" },
                        { img: "/assets/images/Shape5.png", name: "Nietzsche" }
                    ].map((partner, index) => (
                        <div key={index} className="d-flex gap-2 align-items-center justify-content-center">
                            <img src={partner.img} className="network-icon" loading="lazy" alt={partner.name} />
                            <span className="white-txt">{partner.name}</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default PartnerSection;
