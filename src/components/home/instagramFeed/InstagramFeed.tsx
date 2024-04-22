import React, { useEffect } from "react";

export function InstagramFeed() {
  useEffect(() => {
    const observerCallback = (mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (
              node.tagName === "A" &&
              node.textContent.trim() === "Free Instagram Feed widget"
            ) {
              node.parentNode.removeChild(node);
              observer.disconnect();
            }
          });
        }
      }
    };

    const observer = new MutationObserver(observerCallback);

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="elfsight-app-2a936f9d-ea35-4533-807a-a4d7280cd216 instaLayout"
      data-elfsight-app-lazy
    ></div>
  );
}
