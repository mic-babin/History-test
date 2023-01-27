// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  const nextURL = "https://my-website.com/page_b";
  const nextTitle = "My new page title";
  const nextState = { additionalInformation: "Updated the URL with JS" };
  window.history.pushState(nextState, nextTitle, nextURL);
  console.log("window history", window.history);
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};
