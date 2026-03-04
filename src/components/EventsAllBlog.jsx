import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

const EVENTS_IMAGE_BASE = "/images/events";

const eventsData = [
  {
    id: 1,
    title: "Natural Vanilla Ice Cream Dansal 2025",
    date: "December 26, 2024",
    excerpt:
      "The ice cream festival made using natural vanilla, organized by Agro Ventures ....",
    brief:
      "The ice cream festival made using natural vanilla, organized by Agro Ventures Plantations Limited to mark the Vesak festival, was held on 12.05.2025 in front of the Agro Ventures head office in Battaramulla.🍦",
    images: [
      `${EVENTS_IMAGE_BASE}/ic0.png`,
      `${EVENTS_IMAGE_BASE}/ic1.webp`,
      `${EVENTS_IMAGE_BASE}/ic2.webp`,
      `${EVENTS_IMAGE_BASE}/ic3.webp`,
      `${EVENTS_IMAGE_BASE}/ic4.webp`,
      `${EVENTS_IMAGE_BASE}/ic5.webp`,
      `${EVENTS_IMAGE_BASE}/ic6.webp`,
      `${EVENTS_IMAGE_BASE}/ic7.webp`,
      `${EVENTS_IMAGE_BASE}/ic8.webp`,
      `${EVENTS_IMAGE_BASE}/ic9.webp`,
      `${EVENTS_IMAGE_BASE}/ic10.webp`, 
      `${EVENTS_IMAGE_BASE}/ic11.webp`,
    ],
  },
  {
    id: 2,
    title: "Annual Field Convention 2025",
    date: "January 15, 2024",
    excerpt:
      "The Annual Field Convention of Agro Ventures Plantations (Pvt) Ltd took place....",
    brief: `
    
    <p>The Annual Field Convention of Agro Ventures Plantations (Pvt) Ltd took place on <strong>April 10, 2025</strong>, at the <strong>Hotel Grand Mountain in Matale</strong>. This momentous occasion was dedicated to recognizing and celebrating the exceptional dedication of our team, from field workers to management, across all our estates.</p>
    
    <p>As a token of our gratitude for their hard work and commitment over the past year, we presented <strong>certificates of appreciation</strong> to our valued employees. 🎖️</p>
    
    <p>In line with our commitment to education and community upliftment, we distributed a year’s worth of school supplies to the children of all our staff. A special highlight of the event was the awarding of <strong>cash scholarships of Rs. 20,000 each</strong> to two children of our employees to support their academic journeys. 🎒📚</p>
    
    <p>This initiative showcases our ongoing efforts toward poverty alleviation, rural development, sustainability, and women empowerment—values that lie at the core of Agro Ventures.</p>
    
    <h5>We extend our heartfelt thanks to the teams from the following estates:</h5>
    <ul>
        <li>Pathingaskotuwa Estate</li>
        <li>Salagama Estate</li>
        <li>Rusigama Estate</li>
        <li>Kawdupalalla Estate</li>
        <li>Kawatayamuna Estate</li>
        <li>Nawaland Estate</li>
        <li>Raithawala Estate</li>
        <li>Raththota Estate</li>
        <li>Pallepola Estate</li>
        <li>Palapathwala Estate</li>
    </ul>
    
    <p style="text-align: center; font-size: 1.4em; margin-top: 40px;"><strong>Together, we grow stronger. Together, we make a difference.</strong> 💚</p>
  `,
    images: [
      `${EVENTS_IMAGE_BASE}/af0.png`,
      `${EVENTS_IMAGE_BASE}/af1.webp`,
      `${EVENTS_IMAGE_BASE}/af2.webp`,
      `${EVENTS_IMAGE_BASE}/af3.webp`,
      `${EVENTS_IMAGE_BASE}/af4.webp`,
      `${EVENTS_IMAGE_BASE}/af5.webp`,
      `${EVENTS_IMAGE_BASE}/af6.webp`,
      `${EVENTS_IMAGE_BASE}/af7.webp`,
      `${EVENTS_IMAGE_BASE}/af8.webp`,
      `${EVENTS_IMAGE_BASE}/af9.webp`,
      `${EVENTS_IMAGE_BASE}/af10.webp`,
    ],
  },
  {
    id: 3,
    title: "Inauguration of the 3rd Matara Branch Office",
    date: "November 22, 2023",
    brief: `<p>We are delighted to announce the successful inauguration of our 3rd Matara branch office by our honorable chairman, Mr. Nilanga Karunarathna. The event took place on our new premises and was graced by the presence of our dedicated staff members and esteemed customers.<p/><p>This significant milestone marks another step in our continued growth and commitment to serving our community. We extend our heartfelt gratitude to everyone who attended and contributed to making this event a memorable success.</p>`,
    excerpt:
      "Inauguration of our 3rd Matara branch office by our honorable chairman, Mr. Nilanga Karunarathna...",
    images: [
      `${EVENTS_IMAGE_BASE}/mb0.webp`,
      `${EVENTS_IMAGE_BASE}/mb1.webp`,
      `${EVENTS_IMAGE_BASE}/mb2.webp`,
      `${EVENTS_IMAGE_BASE}/mb3.webp`,
      `${EVENTS_IMAGE_BASE}/mb4.webp`,
      `${EVENTS_IMAGE_BASE}/mb5.webp`,
      `${EVENTS_IMAGE_BASE}/mb6.webp`,
      `${EVENTS_IMAGE_BASE}/mb7.webp`,
      `${EVENTS_IMAGE_BASE}/mb8.webp`,
      `${EVENTS_IMAGE_BASE}/mb9.webp`,
      `${EVENTS_IMAGE_BASE}/mb10.webp`,
      `${EVENTS_IMAGE_BASE}/mb11.webp`,
    ],
  },
  {
    id: 4,
    title: "Celebrating 1 Year of Growth and Success!",
    date: "February 12, 2025",
    brief: `<p>We are thrilled to mark the <strong>1st anniversary</strong> of the Southern Zone of Agroventures Plantations Pvt Ltd. It's been an incredible journey of hard work, dedication, and growth, and we couldn't have done it without YOU.</p>
    
    <h4>🙏 A Heartfelt Thank You 🙏</h4>
    
    <p>Our Founder Chairman, <strong>Mr. Nilanga Karunarathne</strong>, will grace this special occasion as our chief guest on <strong>September 16, 2023</strong>, at our newly inaugurated Zonal Distribution Center in Galle.</p>
    
    <p>We extend our deepest gratitude to all our clients, the dedicated sales force, and the exceptional Sales Management team of the Southern Zone. Your unwavering support has been the cornerstone of our success.</p>
    
    <p>Together, we've achieved remarkable milestones in just one year, and we're excited about the bright future ahead. 🌱</p>
    
    <p style="text-align: center; font-size: 1em; margin-top: 40px;"><strong>Together, we've achieved remarkable milestones, and the future looks even brighter!</strong></p>`,
    excerpt:
      "We are thrilled to mark the 1st anniversary of the Southern Zone of Agroventures Plantations Pvt Ltd....",
    images: [
      `${EVENTS_IMAGE_BASE}/yg0.webp`,
      `${EVENTS_IMAGE_BASE}/yg1.webp`,
      `${EVENTS_IMAGE_BASE}/yg2.webp`,
      `${EVENTS_IMAGE_BASE}/yg3.webp`,
      `${EVENTS_IMAGE_BASE}/yg4.webp`,
      `${EVENTS_IMAGE_BASE}/yg5.webp`,
      `${EVENTS_IMAGE_BASE}/yg6.webp`,
      `${EVENTS_IMAGE_BASE}/yg7.webp`,
      `${EVENTS_IMAGE_BASE}/yg8.webp`,
      `${EVENTS_IMAGE_BASE}/yg9.webp`,
      `${EVENTS_IMAGE_BASE}/yg10.webp`,
      `${EVENTS_IMAGE_BASE}/yg11.webp`,
    ],
  },
  {
    id: 5,
    title: "Inauguration of our new Western Zonal Office - Kottawa",
    date: "April 1, 2025",
    brief:
      "We are thrilled to announce the inauguration of our new Western Zonal Office in Kottawa! With the gracious presence of our beloved Chairman, Mr. Nilanga Karunarathne, and our dedicated Senior Management and islandwide Management team, we celebrated the opening on 3rd November 2023.",
    excerpt: "We are thrilled to announce the inauguration of our new ...",
    images: [
      `${EVENTS_IMAGE_BASE}/kt0.webp`,
      `${EVENTS_IMAGE_BASE}/kt1.webp`,
      `${EVENTS_IMAGE_BASE}/kt2.webp`,
      `${EVENTS_IMAGE_BASE}/kt3.webp`,
      `${EVENTS_IMAGE_BASE}/kt4.webp`,
      `${EVENTS_IMAGE_BASE}/kt5.webp`,
      `${EVENTS_IMAGE_BASE}/kt6.webp`,
      `${EVENTS_IMAGE_BASE}/kt7.webp`,
      `${EVENTS_IMAGE_BASE}/kt8.webp`,
      `${EVENTS_IMAGE_BASE}/kt9.webp`,
      `${EVENTS_IMAGE_BASE}/kt10.webp`,
      `${EVENTS_IMAGE_BASE}/kt11.webp`,
    ],
  },
  {
    id: 6,
    title: "Ice Cream Dansala - held on 21st June",
    date: "September 19, 2024",
    brief:
      "Vanilla Ice Cream Dansala was held on 21st June, using natural organic vanilla extract from Agro Ventures estates without artificial sweeteners",
    excerpt:
      "Vanilla Ice Cream Dansala was held on 21st June, using natural organic vanilla extract from ...",
    images: [
      `${EVENTS_IMAGE_BASE}/id1.webp`,
      `${EVENTS_IMAGE_BASE}/id2.webp`,
      `${EVENTS_IMAGE_BASE}/id3.webp`,
      `${EVENTS_IMAGE_BASE}/id4.webp`,
      `${EVENTS_IMAGE_BASE}/id5.webp`,
      `${EVENTS_IMAGE_BASE}/id6.webp`,
      `${EVENTS_IMAGE_BASE}/id7.webp`,
      `${EVENTS_IMAGE_BASE}/id8.webp`,
      `${EVENTS_IMAGE_BASE}/id9.webp`,
      `${EVENTS_IMAGE_BASE}/id10.webp`,
      `${EVENTS_IMAGE_BASE}/id11.webp`,
      `${EVENTS_IMAGE_BASE}/id12.webp`,
    ],
  },
  {
    id: 7,
    title:
      "Providing dry food and other essential items for the welfare of the families",
    date: "September 19, 2024",
    brief:
      "Our company's Human Resource Development Division providing dry food and other essential items for the welfare of the families of those working in our field for the beginning of the new year 2024. It was held symbolically in estates. Our employee welfare is our priority!",
    excerpt: "Our company's HR Development providing dry food and other...",
    images: [
      `${EVENTS_IMAGE_BASE}/dry10.png`,
      `${EVENTS_IMAGE_BASE}/dry2.webp`,
      `${EVENTS_IMAGE_BASE}/dry3.webp`,
      `${EVENTS_IMAGE_BASE}/dry4.webp`,
      `${EVENTS_IMAGE_BASE}/dry5.webp`,
      `${EVENTS_IMAGE_BASE}/dry6.webp`,
      `${EVENTS_IMAGE_BASE}/dry7.webp`,
      `${EVENTS_IMAGE_BASE}/dry8.webp`,
      `${EVENTS_IMAGE_BASE}/dry9.webp`,
      `${EVENTS_IMAGE_BASE}/dry1.webp`,
      `${EVENTS_IMAGE_BASE}/dry11.webp`,
      `${EVENTS_IMAGE_BASE}/dry12.webp`,
      `${EVENTS_IMAGE_BASE}/dry13.webp`,
    ],
  },
  {
    id: 8,
    title: "Agroventures Estate Annual Employee Get-Together!",
    date: "September 19, 2024",
    brief: `<p>This special occasion is dedicated to honoring the hard work and dedication of our employees and their families. As part of our commitment to supporting education and empowering our community, we take immense pride in providing all the necessary <strong>school supplies for a full academic year</strong> to the children of our valued team members.</p>
    
    <p>During this heartwarming event, families gather to enjoy a day filled with laughter, games, and camaraderie. It’s a time for us to express our gratitude to our employees for their unwavering commitment to excellence in the workplace, while also investing in the future of their children through education.</p>
    
    <p>Through this gesture, we strive to create a supportive environment where every child has the tools they need to thrive academically, setting them up for success in their educational journey. We believe that by investing in the education of our employees' children, we not only contribute to their individual growth but also strengthen the fabric of our community.</p>
    
    <p style="text-align: center; font-weight: bold; font-size: 1.3em; margin-top: 40px;">
        Join us as we come together to celebrate the spirit of unity, generosity, and the power of education! 🌟
    </p> `,
    excerpt:
      "This special occasion is dedicated to honoring the hard work and ...",
    images: [
      `${EVENTS_IMAGE_BASE}/gt0.webp`,
      `${EVENTS_IMAGE_BASE}/gt1.webp`,
      `${EVENTS_IMAGE_BASE}/gt2.webp`,
      `${EVENTS_IMAGE_BASE}/gt3.webp`,
      `${EVENTS_IMAGE_BASE}/gt4.webp`,
      `${EVENTS_IMAGE_BASE}/gt5.webp`,
      `${EVENTS_IMAGE_BASE}/gt6.webp`,
      `${EVENTS_IMAGE_BASE}/gt7.webp`,
      `${EVENTS_IMAGE_BASE}/gt8.webp`,
      `${EVENTS_IMAGE_BASE}/gt9.webp`,
      `${EVENTS_IMAGE_BASE}/gt10.webp`,
      `${EVENTS_IMAGE_BASE}/gt11.webp`,
    ],
  },
  {
    id: 9,
    title: "Annual Sales Award Ceremony 2024",
    date: "September 19, 2024",
    brief:
      "Agroventures Plantations celebrated their annual sales convention at Monarch Imperial in a glitzy explosion of colour and flair as they celebrated their sales staff in style on 22 February. ",
    excerpt:
      "Agroventures Plantations celebrated their annual sales convention at Monarch Imperial in a glitzy explosion ...",
    images: [
      `${EVENTS_IMAGE_BASE}/as0.webp`,
      `${EVENTS_IMAGE_BASE}/as1.webp`,
      `${EVENTS_IMAGE_BASE}/as2.webp`,
      `${EVENTS_IMAGE_BASE}/as3.webp`,
      `${EVENTS_IMAGE_BASE}/as4.webp`,
      `${EVENTS_IMAGE_BASE}/as5.webp`,
      `${EVENTS_IMAGE_BASE}/as6.webp`,
      `${EVENTS_IMAGE_BASE}/as7.webp`,
      `${EVENTS_IMAGE_BASE}/as8.webp`,
      `${EVENTS_IMAGE_BASE}/as9.webp`,
      `${EVENTS_IMAGE_BASE}/as10.webp`,
      
    ],
  },
  {
    id: 10,
    title: "Ice Cream Dansala",
    date: "September 19, 2024",
    brief: `
    <p>For the <strong>2nd consecutive year</strong>, Agroventures Plantations successfully held the <strong>"Vanilla Ice Cream Dansala"</strong>, made from vanilla <strong>organically cultivated in our own vanilla plantations</strong>.</p>
    
    <p>The event was held in front of the Agroventures Plantations head office in <strong>Koswatta, Battaramulla, Sri Lanka</strong>, bringing joy to the community with delicious, home-grown vanilla ice cream.</p>
    
    <p style="text-align: center; font-size: 1.4em; margin-top: 40px; font-weight: bold;">
        Sharing sweetness from our plantations to the community! 💚🍦
    </p>`,
    excerpt:
      "Ice Cream Dansala organized for 2nd consecutive year by agroventures plantations using own cultivations from vanilla plantations...",
    images: [
      `${EVENTS_IMAGE_BASE}/d0.webp`,
      `${EVENTS_IMAGE_BASE}/d1.webp`,
      `${EVENTS_IMAGE_BASE}/d2.webp`,
      `${EVENTS_IMAGE_BASE}/d3.webp`,
      `${EVENTS_IMAGE_BASE}/d4.webp`,
      `${EVENTS_IMAGE_BASE}/d5.webp`,
      `${EVENTS_IMAGE_BASE}/d6.webp`,
      `${EVENTS_IMAGE_BASE}/d7.webp`,
      `${EVENTS_IMAGE_BASE}/d8.webp`,
      `${EVENTS_IMAGE_BASE}/d9.webp`,
      `${EVENTS_IMAGE_BASE}/d10.webp`,
      `${EVENTS_IMAGE_BASE}/d11.webp`,
      `${EVENTS_IMAGE_BASE}/d12.webp`,
    ],
  },
];

const EventsAllBlogs = () => {
  const navigate = useNavigate();

  const handleReadMore = (event) => {
    navigate("/event-detail", { state: { eventData: event } });
  };
  return (
    <section className="pt-100 pb-100">
      <div className="container">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div>
                {" "}
                {/* renamed class */}
                {/* Fixed Height Image Container */}
                <div className="post-img position-relative overflow-hidden">
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="post-info p-4">
                  <h3 className="mb-2">{event.title}</h3>
                  <h6 className="text-muted mb-3">{event.date}</h6>
                  <p className="mb-3">{event.excerpt}</p>
                  <a
                    className="readmore dark-color"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleReadMore(event);
                    }}
                  >
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EventsAllBlogs;
