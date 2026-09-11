function getTransitionType(fromUrl, toUrl) {
    if (!fromUrl || !toUrl) return null;

    const from = new URL(fromUrl);
    const to = new URL(toUrl);

    const toHome =
        to.pathname.endsWith("/index.html") ||
        to.pathname.endsWith("/");

    if (toHome) {
        return "home";
    }

    return "forward";
}

window.addEventListener("pageswap", (event) => {
    if (!event.viewTransition || !event.activation) return;

    const type = getTransitionType(
        event.activation.from?.url,
        event.activation.entry.url
    );

    if (type) {
        event.viewTransition.types.add(type);
    }
});

window.addEventListener("pagereveal", (event) => {
    if (!event.viewTransition || !navigation.activation) return;

    const type = getTransitionType(
        navigation.activation.from?.url,
        navigation.activation.entry.url
    );

    if (type) {
        event.viewTransition.types.add(type);
    }
});
