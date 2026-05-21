export default function GoogleTagManagerSettings(props) {
  const h = props.React.createElement;

  return h(
    "section",
    { className: "voilabs-gtm-panel" },
    h("h3", null, "Google Tag Manager"),
    h(
      "p",
      null,
      "Enter a GTM container ID such as GTM-ABC123. The plugin injects the head script and body noscript tag after it is installed and enabled.",
    ),
    h(
      "ul",
      null,
      h("li", null, "Container ID is validated with the GTM- prefix."),
      h("li", null, "dataLayer is used by default."),
      h("li", null, "The public injections run only on public pages."),
    ),
  );
}
