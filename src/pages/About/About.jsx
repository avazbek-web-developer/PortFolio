
import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "I specialize in crafting cutting-edge designs of the highest quality, executed with professional expertise."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "I excel in delivering high-quality website development services at a professional level.."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Web Sites",
    description: "Professional development of websites with expertise in Android applications."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description: "I specialize in capturing high-quality photographs across various categories with professional precision.."
  }
];


const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          I'm a dedicated full stack developer based in the vibrant city of Namangan, Uzbekistan. Currently, I'm honing my language skills as an English student at Namsu University. With a keen eye for detail and a passion for problem-solving, I specialize in creating seamless experiences across both front-end and back-end development. My goal is to leverage my diverse skill set to build innovative and user-centric solutions that make a positive impact.
        </p>

        <p>
          As a full stack developer, my role is to create websites that not only function smoothly and are user-friendly but also possess an aesthetic appeal. I strive to infuse a personal touch into every project, ensuring that it not only catches the eye but also remains easy to navigate. My ultimate objective is to convey your message and identity in the most creative and impactful manner possible. I have had the privilege of designing websites for numerous renowned brands, bringing their visions to life with my expertise in web design.
        </p>
      </section>


      {/* <!--
      - service
    --> */}

      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">

          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </ul>

      </section>


      {/* <!--
      - testimonials
    --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

        </ul>

      </section>


      {/* <!--
      - clients
    --> */}

      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>

        </ul>

      </section>

    </article>
  )
}

export default About