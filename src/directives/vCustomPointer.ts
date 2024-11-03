const updateMousePosition = (e: MouseEvent) => {
  document.documentElement.style.setProperty("--mouse-x", e.clientX.toString());
  document.documentElement.style.setProperty("--mouse-y", e.clientY.toString());
};

const setState = (e: MouseEvent) => {
  const domEl = e.target as HTMLElement;
  const state = domEl.getAttribute("set-pointer-state");

  if (state) {
    document
      .getElementById("custom-pointer")
      ?.setAttribute("pointer-state", state);
  }
};

const setDefaultState = () => {
  document
    .getElementById("custom-pointer")
    ?.setAttribute("pointer-state", "default");
};

export const vCustomPointer = {
  mounted(el: HTMLElement) {
    const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(
      "[set-pointer-state]"
    );

    window.addEventListener("mousemove", updateMousePosition);

    triggers.forEach((trigger) => {
      trigger.addEventListener("mouseenter", setState);
      trigger.addEventListener("mouseleave", setDefaultState);
    });
  },

  beforeUnmount(el: HTMLElement) {
    const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(
      "[set-pointer-state]"
    );

    window.removeEventListener("mousemove", updateMousePosition);

    triggers.forEach((trigger) => {
      trigger.removeEventListener("mouseenter", setState);
      trigger.removeEventListener("mouseleave", setDefaultState);
    });
  },
};
