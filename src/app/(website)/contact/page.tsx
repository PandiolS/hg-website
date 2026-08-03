import Image from "next/image";
import { ArrowRight, Headphones, MessageCircle, Calendar } from "lucide-react";

const contactOptions = [
  {
    title: "Sales",
    description:
      "Contact sales team for plans and pricing inquiries.",
    image: "/images/contact_sales.webp",
    link: "+01 23 45 6689",
    type: "image",
  },
  {
    title: "Customer support",
    description:
      "Ask product questions, report problems, or leave feedback.",
    image: "/images/contact-support.jpg",
    link: "+01 23 45 6689",
    type: "support",
  },
//   {
//     title: "Partnership Program",
//     description:
//       "Collaborations that lead your company to success. Grow and expand your business with us.",
//     image: "/images/contact-partnership.jpg",
//     link: "Discover partnership opportunities",
//     type: "partner",
//   },
];

export default function ContactPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get in touch with Higherd
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            We're here for any questions or feedback you may have!
          </p>
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {contactOptions.map((item) => (
            <div
              key={item.title}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                transition
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Top image area */}
              <div className="h-56 relative bg-pink-50">

                {item.type === "image" && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                )}


                {item.type === "support" && (
                  <div className="h-full flex items-center justify-center">

                    <div className="
                      w-28 h-28
                      rounded-full
                      bg-primary
                      flex
                      items-center
                      justify-center
                    ">
                      <MessageCircle
                        size={55}
                        className="text-white"
                      />
                    </div>

                    <div className="
                      absolute
                      top-8
                      right-10
                      w-10
                      h-10
                      rounded-full
                      bg-primary
                      flex
                      items-center
                      justify-center
                    ">
                      <Headphones
                        size={20}
                        className="text-white"
                      />
                    </div>

                    <div className="
                      absolute
                      bottom-8
                      left-10
                      w-10
                      h-10
                      rounded-full
                      bg-primary
                      flex
                      items-center
                      justify-center
                    ">
                      <Calendar
                        size={20}
                        className="text-white"
                      />
                    </div>

                  </div>
                )}


                {/* {item.type === "partner" && (
                  <div className="
                    h-full
                    flex
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-cyan-100
                    via-yellow-100
                    to-pink-200
                  ">

                    <div className="text-center space-y-5">
                      <span className="text-sm font-semibold text-slate-600">
                        Slack
                      </span>

                      <span className="text-sm font-semibold text-slate-600">
                        Zapier
                      </span>

                      <span className="text-sm font-semibold text-slate-600">
                        Power BI
                      </span>

                      <span className="text-xl font-bold text-blue-600">
                        G
                      </span>
                    </div>

                  </div>
                )} */}

              </div>


              {/* Content */}
              <div className="p-8">

                <h2 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h2>

                <p className="
                  mt-3
                  text-slate-600
                  leading-relaxed
                ">
                  {item.description}
                </p>

                <a
                  href={`tel:${item.link}`}
                  target="_self"
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-cyan-700
                    font-semibold
                    hover:text-cyan-900
                  "
                >
                  {item.link}

                  <ArrowRight size={20}/>
                </a>              

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}