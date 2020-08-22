import { createRouter } from "modules/network/routing";
import events from "core/events";

const getTitle = (sectionName, env) => env === "PRODUCTION"
  ? `${sectionName} - ${window.location.hostname}`
  : `[${env}] ${sectionName} - ${window.location.hostname}`;

const routes = [
  { name: "home", uri: "/home", data: { title: getTitle("Accueil", "@@ENV") } }
];

const router = createRouter(window, routes);

router.setDefaultRoute("home");
router.onRouteChange(route => {

  document.title = route.data.title;
  events.notifyObservers("router:update", route);
});

export default router;
