import Image from "next/image";
import Link from "next/link";
import Badge from "../Badge";

const HERO_IMAGES = [
  { src: "/cloth.png", alt: "Clothing" },
  { src: "/kitchen.png", alt: "Kitchen tools" },
  { src: "/furniture.png", alt: "Furniture" },
  { src: "/sneakers.png", alt: "Sneakers" },
  { src: "/gadgets.png", alt: "Gadgets" },
  { src: "/tv.png", alt: "Entertainment" },
  { src: "/speakers.png", alt: "Speakers" },
] as const;

export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-14 text-center sm:px-6 lg:px-8">
        <Badge>Global Shopping, Made Simple</Badge>

        <h1 className="mt-6 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
          Buy from International Stores.
          <br className="hidden sm:block" />
          We Deliver to Nigeria.
        </h1>

        <div className="relative mx-auto mt-10 w-full max-w-5xl flex items-center justify-center">
          <Image
            src="/hero_image_wrapper.png"
            alt="hero Images"
            width={500}
            height={500}
            priority
          />
        </div>

        <p className="mt-8 max-w-xl text-pretty text-xs leading-5 text-gray-500">
          We help Nigerians shop from abroad, receive items at our overseas
          warehouse, and ship them safely to Nigeria, with clear pricing and
          full tracking.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="#get-started"
            className="bg-primary text-white hover:bg-primary/80 inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-semibold transition"
          >
            Get Started
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-semibold transition border border-primary bg-white text-primary hover:border-primary/40"
          >
            How it Works
          </Link>
        </div>
      </div>
    </section>
  );
}
