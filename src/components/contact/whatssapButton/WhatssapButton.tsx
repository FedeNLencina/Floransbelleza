import React, { useEffect } from "react";

export const WhatsAppButton = () => {
  useEffect(() => {
    const observerCallback = (mutationsList: any, observer: any) => {
      mutationsList.forEach((mutation: any) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node: any) => {
            if (node.nodeType === 1 && node.classList) {
              if (node.classList.contains("Main__Container-sc-rfigzw-0")) {
                const enlace = node.querySelector("a");
                if (
                  enlace &&
                  enlace.textContent.trim() === "Free WhatsApp Chat button"
                ) {
                  enlace.parentNode.removeChild(enlace);
                  observer.disconnect();
                }
              }
            }
          });
        }
      });
    };

    const observer = new MutationObserver(observerCallback);

    setTimeout(() => {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={`elfsight-app-ad7e03b3-d5e1-472a-9f36-3ddaec6abe38 whatsAppButton`}
        data-elfsight-app-lazy
      ></div>
    </>
  );
};
