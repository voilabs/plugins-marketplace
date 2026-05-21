export default function GoogleTagManagerDashboardCard(props) {
  const h = props.React.createElement;

  return h(
    "article",
    { className: "voilabs-gtm-card" },
    h("strong", null, props.plugin.name),
    h("span", null, "Public analytics injection is managed by this plugin."),
  );
}
