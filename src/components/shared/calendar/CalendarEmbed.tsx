import { useEffect } from "react";

export const CalendarEmbed = () => {
  useEffect(() => {
    const initializeCal = (
      C: typeof window,
      scriptSrc: string,
      initCommand: string
    ) => {
      const d = C.document;

      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal as CalFunction;

          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement("script");
            script.src = scriptSrc;
            d.head.appendChild(script);
            cal.loaded = true;
          }

          if (args[0] === initCommand) {
            const namespace = args[1];
            const api: CalFunction = (...innerArgs: any[]) => {
              api.q?.push(innerArgs);
            };
            api.q = [];
          
            if (typeof namespace === "string") {
              if (!cal.ns) cal.ns = {};
              cal.ns[namespace] = cal.ns[namespace] || api;
              cal.q?.push(args);
              cal.q?.push(["initNamespace", namespace]);
            } else {
              cal.q?.push(args);
            }
            return;
          }

          cal.q?.push(args);
        };
    };

    initializeCal(window, "https://app.cal.com/embed/embed.js", "init");

    if (window.Cal) {
      window.Cal("init", "free-wireframe-prototype", {
        origin: "https://cal.com",
      });

      window.Cal.ns?.["free-wireframe-prototype"]?.("inline", {
        elementOrSelector: "#my-cal-inline",
        config: { layout: "month_view" },
        calLink: "artifex/free-wireframe-prototype",
      });

      window.Cal.ns?.["free-wireframe-prototype"]?.("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    }
  }, []);

  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
      <div
        style={{ width: "100%", height: "600px", overflow: "scroll" }}
        id="my-cal-inline"
      />
    </div>
  );
};
