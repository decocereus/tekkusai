import Link from "next/link";
import ProductShowcase from "@/components/product-showcase";
import CompanyCard from "@/components/company-card";
import AboutSection from "@/components/about-section";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Hero />
        <ProductShowcase
          title="Singularity"
          subtitle="Founders Edition by tekkusai"
          price="$39"
          preOrderText="Pre-orders expected to ship by end of May"
          features={[
            "Premium tempered glass",
            "Smooth, balanced glide",
            "490 x 420mm, 3mm thick",
            "Edge-to-edge rubber base",
            "Rounded edges + corners",
            "Original monochrome artwork",
          ]}
          imagePrimary="https://imagedelivery.net/O23G1A9SLo-A5s0I6mXQGA/f2b1fc19-04b0-481c-910f-99587b6a1500/1440"
          imageSecondary="https://imagedelivery.net/O23G1A9SLo-A5s0I6mXQGA/f515f723-9049-44fe-1420-ef8a74f8df00/1440"
        />
        <AboutSection />
        <section className="py-20" id="companies">
          <h2 className="text-5xl font-bold mb-16 border-b border-gray-800 pb-4">
            Companies
          </h2>

          <div className="space-y-32">
            <CompanyCard
              name="KUROSUN"
              description="Blending Japanese-inspired visuals with cutting-edge innovation, Kurosun focuses on premium products used by top esports professionals. Our designs fuse art with performance, ensuring every piece stands out both in look and feel."
              image="/kurosun.heif"
              logo="/kurosun-logo.svg"
              companyLink="https://kurosun.co"
              companyTwitterLink="https://x.com/KurosunCo"
              isReversed={false}
            />

            <CompanyCard
              name="GLSSWRKS"
              description="GLSSWRKS pushes the limits with precision-engineered glass mousepads. Our lineup includes serialized, limited-edition releases with unique personas and the Polarity Series, available year-round. Crafted with the highest-quality materials, stunning artwork, and a meticulously refined surface for peak performance."
              image="/glassworks.heif"
              logo="/glassworks-logo.svg"
              companyLink="https://glsswrks.gg/"
              companyTwitterLink="https://x.com/GLSSWRKSGG"
              isReversed={true}
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <Image src="/main-logo.webp" alt="tekkusai" width={128} height={49} />
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://x.com/tekkusai"
              target="_blank"
              className="p-2 rounded-full border border-gray-800 hover:bg-white/10 transition-all"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                data-astro-cid-vqbephrr=""
                data-icon="twitter"
              >
                {" "}
                <symbol id="ai:local:twitter">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m13.081 10.712-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576 6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576 5.842-6.962m-8.004 9.538L5.077 20.25"
                  ></path>
                </symbol>
                <use xlinkHref="#ai:local:twitter"></use>{" "}
              </svg>
            </Link>
            <Link
              href="https://discord.com/invite/hc9ZyFTPrJ"
              target="_blank"
              className="p-2 rounded-full border border-gray-800 hover:bg-white/10 transition-all"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.947-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
