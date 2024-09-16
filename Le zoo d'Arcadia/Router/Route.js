export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.authorize = authorize;
    }
}

/*
[] -> tout le monde peut y acceder
 ["disconnected"] -> reservé aux utilisateurs deconnectés
 ["visiteur"] -> reservé aux visiteurs
 [admin] -> reservé aux utilisateurs avec le role admin
 [admin/visiteur] -> Reservé aux utilisateurs avec le role visiteur ou admin
*/