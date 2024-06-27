import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
const tiers = [
  {
    name: "عرض النجاح",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "19 TND",
    features: ["دروس مفصلة مشروحة بطريقة مبسطة", "تمارين", "تقاييم", "اصلاح"],
    mostPopular: false,
  },
  {
    name: "العرض المثالي",
    id: "tier-startup",
    href: "#",
    priceMonthly: "90 TND",
    features: [
      "مبسطة لشرح الدروس Vidéos تسجيلات",
      "دروس مفصلة مشروحة بطريقة مبسطة",
      "تمارين",
      "تقاييم",
      "اصلاح",
    ],
    mostPopular: true,
  },
  {
    name: "عرض التميز",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "49 TND",
    features: [
      "درووس خصوصية عن بعد لجميـع المواد الاساسية",
      "درووس خصوصية عن بعد لجميـع المواد الاساسية",
      "دروس مفصلة مشروحة بطريقة مبسطة",
      "تمارين",
      "تقاييم",
      "اصلاح",
    ],
    mostPopular: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function OfferCards() {
  return (
     <motion.div
    initial={{ opacity: 0, scale: 0.6, y: -20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {tiers.map((tier, tierIdx) => (
        <div
          key={tier.id}
          className={classNames(
            tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
            tierIdx === 0 ? "lg:rounded-r-none" : "",
            tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
            "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
          )}
        >
          <div>
            <div className="flex items-center justify-end gap-x-24">
              {tier.mostPopular ? (
                <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                  recommanded
                </p>
              ) : null}
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                  "text-lg font-semibold leading-8 text-end"
                )}
              >
                {tier.name}
              </h3>
            </div>
            <p className="mt-6 flex justify-end items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-gray-900 ">
                {tier.priceMonthly}
              </span>
              <span className="text-sm font-semibold leading-6 text-gray-600">
                /شهر
              </span>
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 justify-end">
                  {feature}
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>
          <a
            href={tier.href}
            aria-describedby={tier.id}
            className={classNames(
              tier.mostPopular
                ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
              "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            )}
          >
            اشترك الآن
          </a>
        </div>
      ))}
    </motion.div>
  );
}
