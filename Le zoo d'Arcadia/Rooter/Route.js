export default class Route {
    constructor(url, title, pathHtml, pathJS, pages = "") {
      this.url = url;
      this.title = title;
      this.pathHtml = pathHtml;
      this.pathJS = pathJS;
      this.page = pages;
    }
}