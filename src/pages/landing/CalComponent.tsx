/* eslint-disable */
// @ts-nocheck
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

const CalComponent: React.FC = () => {
  useEffect(() => {
    (function (C: Window, A: string, L: string) {
      const p = (a: { q: any[] }, ar: any) => {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement("script");
            script.src = A;
            script.async = true;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (args[0] === L) {
            const api = (...apiArgs: any[]) => {
              p(api, apiArgs);
            };
            const namespace = args[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], args);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, args);
            return;
          }
          p(cal, args);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    if (typeof window !== "undefined" && window.Cal) {
      // Init Cal inline
      window.Cal("init", "free-wireframe-prototype", {
        origin: "https://cal.com",
      });

      window.Cal.ns["free-wireframe-prototype"]("inline", {
        elementOrSelector: "#my-cal-inline",
        config: { layout: "month_view" },
        calLink: "artifex/free-wireframe-prototype",
      });

      window.Cal.ns["free-wireframe-prototype"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // ✅ Add GTM event push on successful booking
      window.Cal.ns["free-wireframe-prototype"]("on", "eventScheduled", () => {
        console.log("✅ Cal inline booking completed.");

        // Push cal_submission to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "cal_submission",
          source: "cal.com_inline",
          timestamp: new Date().toISOString(),
        });

        console.log("✅ dataLayer pushed: cal_submission");
      });
    }
  }, []);

  return (
    <div
      id="my-cal-inline"
      className="w-full max-w-[1000px] h-auto mx-auto md:overflow-y-auto lg:overflow-hidden"
    ></div>
  );
};

export default CalComponent;
