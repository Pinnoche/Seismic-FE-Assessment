import Image from "next/image";
import Badge from "../Badge";

const STEPS = [
  {
    step: "STEP ONE",
    num: "01",
    title: "Shop Online",
    desc: "Buy items from international stores that ship to our overseas warehouse.",
    side: "left",
  },
  {
    step: "STEP TWO",
    num: "02",
    title: "We Receive Your Item",
    desc: "Your order arrives at our shared overseas warehouse, where it is checked in and prepared for shipping.",
    side: "right",
  },
  {
    step: "STEP THREE",
    num: "03",
    title: "Choose Shipping & Pay",
    desc: "Select your shipping option, view the cost, and complete payment.",
    side: "right",
  },
  {
    step: "STEP FOUR",
    num: "04",
    title: "Delivered to Nigeria",
    desc: "Your package is shipped to Nigeria and delivered to your address, with tracking updates along the way.",
    side: "left",
  },
] as const;

function StepCard({
  step,
  num,
  title,
  desc,
}: {
  step: string;
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="w-full max-w-105">
      <div className="rounded-full flex items-center justify-between shadow-sm px-4 py-2">
        <span className="text-sm font-medium tracking-wide text-gray-600">
          {step}
        </span>

        <span className="grid h-10 w-10 place-items-center rounded-full border border-dashed border-primary text-sm font-semibold text-primary">
          {num}
        </span>
      </div>

      <div className="relative w-full rounded-3xl p-6 shadow-sm mt-6">
        <h3 className="text-sm font-semibold text-primary">{title}</h3>
        <p className="mt-2 text-xs leading-5 text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="text-center">
          <Badge>Simple Steps</Badge>
          <h2 className="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
            How it Works
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-gray-500">
            Buying from international stores does not have to be complicated.
            Here is how we make it simple.
          </p>
        </div>

        <div className="mt-14 lg:px-12">
          <div className="relative flex lg:justify-center max-md:gap-12">
            <div className="flex flex-col justify-between gap-36">
              <StepCard
                step={STEPS[0].step}
                num={STEPS[0].num}
                title={STEPS[0].title}
                desc={STEPS[0].desc}
              />
              <div className="mt-24">
                <StepCard
                  step={STEPS[3].step}
                  num={STEPS[3].num}
                  title={STEPS[3].title}
                  desc={STEPS[3].desc}
                />
              </div>
            </div>
            <div className="hidden lg:block mt-32">
              <Image
                src="/Step_2_Connector.png"
                alt="connector"
                width={100}
                height={100}
              />
              <div className="hidden lg:block mt-72">
                <Image
                  src="/Step_3_Connector.png"
                  alt="connector"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center max-md:gap-8">
              <StepCard
                step={STEPS[1].step}
                num={STEPS[1].num}
                title={STEPS[1].title}
                desc={STEPS[1].desc}
              />

              <Image
                src="/Step_Connector.png"
                alt="connector"
                width={10}
                height={10}
                className="hidden lg:block"
              />

              <StepCard
                step={STEPS[2].step}
                num={STEPS[2].num}
                title={STEPS[2].title}
                desc={STEPS[2].desc}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
