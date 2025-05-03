/* eslint-disable */
// @ts-nocheck
"use client";

import { useEffect, ReactNode } from "react";

interface CalButtonProps {
  classStyles?: string;
  children?: ReactNode;
}

const CalButton: React.FC<CalButtonProps> = ({
  classStyles,
  children = "Open Calendar",
}) => {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.Cal) {
      (function (C, A, L) {
        let p = function (a: any, ar: any) {
          a.q.push(ar);
        };
        let d = C.document;
        C.Cal =
          C.Cal ||
          function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              let script = d.createElement("script");
              script.src = A;
              script.async = true;
              d.head.appendChild(script);
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      window.Cal("init", "get-a", { origin: "https://cal.com" });
      window.Cal.ns["get-a"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // Listen for the `cal:close` event
      window.addEventListener("cal:close", () => {
        console.log("Calendar closed");
      });

      // ✅ When the calendar event is successfully scheduled
      window.Cal.ns["get-a"]("on", "eventScheduled", () => {
        window.Cal.ns["get-a"]("hide");
        console.log("Event scheduled, closing modal.");

        // ✅ Push form_filled to dataLayer
        if (typeof window !== "undefined") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "form_filled",
            source: "cal.com",
            timestamp: new Date().toISOString(),
          });
          console.log("✅ dataLayer pushed: form_filled");
        }

        // Clean URL
        history.replaceState(null, "", window.location.pathname);

        // Optional: Refresh after short delay
        setTimeout(() => {
          location.reload();
        }, 300);
      });
    }

    // Fallback: detect hash and close modal
    const checkHashAndClose = () => {
      const hash = window.location.hash;
      if (
        hash.includes("embed=get-a") &&
        hash.includes("routingFormResponseId")
      ) {
        if (window.Cal?.ns?.["get-a"]) {
          window.Cal.ns["get-a"]("hide");
          console.log("Detected URL hash change. Closing modal.");

          // Push form_filled fallback
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "form_filled",
            source: "cal.com",
            triggeredBy: "hashChange",
            timestamp: new Date().toISOString(),
          });

          // Clean URL
          history.replaceState(null, "", window.location.pathname);

          // Refresh
          setTimeout(() => {
            location.reload();
          }, 300);
        }
      }
    };

    window.addEventListener("hashchange", checkHashAndClose);

    return () => {
      window.removeEventListener("hashchange", checkHashAndClose);
    };
  }, []);

  return (
    <button
      data-cal-link="forms/b78ce6bb-7177-4b60-95ab-cd540880739f"
      data-cal-namespace="get-a"
      data-cal-config='{"layout":"month_view"}'
      className={classStyles}
    >
      {children}
    </button>
  );
};

export default CalButton;
