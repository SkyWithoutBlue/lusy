"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

const YM_COUNTER_ID = 104778739;

const YandexMetrika = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && typeof window !== "undefined") {
      try {
        ym("hit", pathname);
      } catch (error) {
        console.warn("Yandex Metrika hit error:", error);
      }
    }
  }, [pathname]);

  return (
    <YMInitializer
      accounts={[YM_COUNTER_ID]}
      options={{
        defer: true,
        webvisor: true,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        ecommerce: false,
      }}
      version="2"
    />
  );
};

export default YandexMetrika;
