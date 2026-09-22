
      (function() {
        try {
          const atomiStaticPageMeta = {"pageId":"GmTdp9dbEHUr9vQzOzsu","pageName":"Quiet Nerves VSL - FINAL","pageDomain":null};
          const ATOMI_PLATFORM_NOTIFY_URL = "https://apido.atomicat-api.com/platform/notify/s/fe";

          function atomiSerializeError(error) {
            try {
              if (!error) return { message: "Unknown error" };
              if (typeof error === "string") return { message: error };
              if (error instanceof Error) {
                return {
                  name: error.name,
                  message: error.message,
                  stack: error.stack,
                };
              }
              return {
                message: error?.message || "Non-Error exception",
                raw: JSON.stringify(error),
              };
            } catch (serializationError) {
              return {
                message: "Failed to serialize error",
                serializationError: serializationError?.message,
              };
            }
          }

          function atomiReportError(error, extra = {}) {
            try {
              const payload = {
                domain: window?.location?.hostname || atomiStaticPageMeta?.pageDomain || "",
                pageUrl: window?.location?.href || "",
                pagePath: window?.location?.pathname || "",
                referrer: document?.referrer || "",
                userAgent: navigator?.userAgent || "",
                language: navigator?.language || "",
                viewport: {
                  width: window?.innerWidth,
                  height: window?.innerHeight,
                },
                timestamp: new Date().toISOString(),
                pageMeta: atomiStaticPageMeta,
                error: atomiSerializeError(error),
                extra,
              };

              const payloadString = JSON.stringify(payload);
              if (navigator?.sendBeacon) {
                const blob = new Blob([payloadString], { type: "text/plain;charset=UTF-8" });
                navigator.sendBeacon(ATOMI_PLATFORM_NOTIFY_URL, blob);
                return;
              }

              fetch(ATOMI_PLATFORM_NOTIFY_URL, {
                method: "POST",
                mode: "no-cors",
                keepalive: true,
                headers: {
                  "Content-Type": "text/plain;charset=UTF-8",
                },
                body: payloadString,
              }).catch(() => {});
            } catch (reportingError) {
              console.log(reportingError);
            }
          }

          if (typeof window !== "undefined") {
            window.atomiReportError = atomiReportError;
          }
        } catch (error) {
          console.log(error);
        }
      })();
    
      function atomiNormalizeRevealEntries(items) {
        if (!items || !items.length) return [];
        const def = 100;
        return items.map(function (entry) {
          if (typeof entry === "string") {
            var s = entry.trim();
            return s ? { value: s, showAtPercent: def } : null;
          }
          if (entry && typeof entry === "object") {
            var v = entry.value != null ? entry.value : (entry.id != null ? entry.id : entry.className);
            v = v != null ? String(v).trim() : "";
            if (!v) return null;
            var p = entry.showAtPercent != null ? Number(entry.showAtPercent) : def;
            if (isNaN(p)) p = def;
            p = Math.max(0, Math.min(100, p));
            return { value: v, showAtPercent: p };
          }
          return null;
        }).filter(Boolean);
      }
      function atomiShowItems({items}) {
      try {
        (items || []).forEach((item) => {
          const key = typeof item === "string" ? item : (item && (item.value != null ? item.value : (item.id != null ? item.id : item.className)));
          if (key == null || key === "") return;
          const token = String(key).trim();
          if (!token) return;
          const hiddenItem = [...document.querySelectorAll(`#${token}`), ...document.querySelectorAll(`.${token}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    
      function runDelayedFunctions(data) {
        try {
          document.querySelectorAll('.atomicat-delay').forEach(el => el.classList.remove('atomicat-delay'));
          if(data?.setDisplayed){
            localStorage.setItem(data?.setDisplayed, true);
          }
          
        } catch (error) {
          console.log(error);
        }
      }
    (function() {
          try {
              const clickeventList = [{"compKey":"6011fec","misc":{"type":"html"}},{"compKey":"5855ce5","misc":{"type":"html"}},{"compKey":"1dd41cc","misc":{"type":"html"}},{"compKey":"f0dfca0","misc":{"type":"html"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();