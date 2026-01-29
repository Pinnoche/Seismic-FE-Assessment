import Image from "next/image";
import Link from "next/link";

function ArtCard({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-4xl shadow-sm ring-[0.5px] ring-[#D7D7D7]
        ${className}`}
    >
      <div className="relative h-full w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
        />
      </div>
    </div>
  );
}

export default function FinalSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            Start Shipping From
            <br />
            Abroad Without Stress
          </h2>

          <p className="mt-3 max-w-md text-xs leading-5 text-gray-500">
            Shop internationally with confidence and receive your items in
            Nigeria with ease.
          </p>

          <div className="mt-6">
            <Link
              href="#create-account"
              className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-6 py-3 text-xs font-semibold text-white transition hover:bg-emerald-900"
            >
              Create an Account
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ArtCard
            src="/top-box.png"
            alt="Shipping flow"
            className="col-span-2 h-40 sm:h-47.5"
            priority
          />
          <ArtCard
            src="/box-left.png"
            alt="Payments"
            className="h-37.5 sm:h-42.5"
          />
          <ArtCard
            src="/box-right.png"
            alt="Delivery route"
            className="h-37.5 sm:h-42.5"
          />
        </div>
      </div>
    </section>
  );
}
