import { ROUTES } from "../utils/constant";

const routes = [
  {
    path: ROUTES.HOME.path,
    name: ROUTES.HOME.name,
    displayName: ROUTES.HOME.title,
  },
  {
    path: ROUTES.ABOUT.path,
    name: ROUTES.ABOUT.name,
    displayName: ROUTES.ABOUT.title,
  },
  {
    path: ROUTES.EXPERIENCE.path,
    name: ROUTES.EXPERIENCE.name,
    displayName: ROUTES.EXPERIENCE.title,
  },
  {
    path: ROUTES.RESUME.path,
    name: ROUTES.RESUME.name,
    displayName: ROUTES.RESUME.title,
  },
  // {
  //   path: ROUTES.CERTIFICATES.path,
  //   name: ROUTES.CERTIFICATES.name,
  //   displayName: ROUTES.CERTIFICATES.title,
  // },
  {
    path: ROUTES.CONTACT.path,
    name: ROUTES.CONTACT.name,
    displayName: ROUTES.CONTACT.title,
  },
];
export default routes;
