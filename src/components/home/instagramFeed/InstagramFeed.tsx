import React, { useEffect } from "react";

export function InstagramFeed() {
  const toolbarElement = document.querySelector(".eapps-widget-toolbar");

  useEffect(() => {
    const observerCallback = (mutationsList: any, observer: any) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node: any) => {
            if (node.textContent.trim() === "Free Instagram Feed widget") {
              node.parentNode.removeChild(node);
              observer.disconnect();
            }
          });
        }
      }
    };

    const observer = new MutationObserver(observerCallback);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
      toolbarElement && toolbarElement?.remove();
    };
  }, []);

  return (
    <div
      className="elfsight-app-2a936f9d-ea35-4533-807a-a4d7280cd216 instaLayout"
      data-elfsight-app-lazy
    ></div>
  );
}
