window.addEventListener("pageswap", (event) => {
    if (!event.viewTransition) return;

    const destination = new URL(event.activation.entry.url);

    if (destination.pathname.endsWith("/index.html") ||
        destination.pathname.endsWith("/")) {
        event.viewTransition.types.add("home");
    } else {
        event.viewTransition.types.add("forward");
    }
});
