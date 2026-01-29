// components/WhoIsThisFor.tsx
import Image, { StaticImageData } from "next/image";
import Badge from "../Badge";

const AUDIENCES = [
  {
    title: "Small Business Owners",
    desc: "Importing items for resale in Nigeria.",
    image: "/business-owner.png",
  },
  {
    title: "Everyday Shoppers",
    desc: "Buying clothes, gadgets, and accessories from abroad.",
    image: "/everyday-shopper.png",
  },
] as const;

const BENEFITS = [
  {
    title: "Shop Globally",
    desc: "Buy from US and other international stores.",
    icon: "/icons/global.png",
  },
  {
    title: "Overseas Warehouse",
    desc: "We receive and process your items securely.",
    icon: "/icons/house.png",
  },
  {
    title: "Delivered to Nigeria",
    desc: "Your package arrives at your chosen Nigerian address.",
    icon: "/icons/lorry.png",
  },
  {
    title: "Transparent & Secure",
    desc: "Clear costs, real tracking, safe payments.",
    icon: "/icons/shield.png",
  },
] as const;

function AudienceCard({
  title,
  desc,
  image,
  variant,
}: {
  title: string;
  desc: string;
  image: string;
  variant: "top" | "bottom";
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-[#D7D7D7] h-75 sm:h-85 flex flex-col gap-0">
      {variant === "top" && (
        <div className="p-5">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <p className="mt-1 text-xs text-[#717171]">{desc}</p>
        </div>
      )}

      <div className="relative flex-1 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
      </div>

      {variant === "bottom" && (
        <div className="p-5">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <p className="mt-1 text-xs text-[#717171]">{desc}</p>
        </div>
      )}
    </div>
  );
}

function BenefitCard({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) {
  return (
    <div className="rounded-3xl bg-gray-100 p-6 text-center ring-1 ring-gray-200/60">
      <div className="mx-auto grid h-10 w-10 place-items-center rounded-2xl bg-white text-emerald-950 shadow-sm ring-1 ring-gray-200">
        <Image src={icon} alt="title" width={100} height={100} />
      </div>
      <h4 className="mt-3 text-xs font-semibold text-primary">{title}</h4>
      <p className="mt-2 text-[10px] leading-4 text-gray-500">{desc}</p>
    </div>
  );
}

export default function WhoIsThisFor() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge>Built for You</Badge>
          <h2 className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
            Who Is This For?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-gray-500">
            Designed for Nigerians who shop internationally and want reliable
            delivery back home.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AudienceCard
            title={AUDIENCES[0].title}
            desc={AUDIENCES[0].desc}
            image={AUDIENCES[0].image}
            variant="top"
          />

          <AudienceCard
            title={AUDIENCES[1].title}
            desc={AUDIENCES[1].desc}
            image={AUDIENCES[1].image}
            variant="bottom"
          />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {BENEFITS.map((b) => (
            <BenefitCard
              key={b.title}
              title={b.title}
              desc={b.desc}
              icon={b.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
