routerAdd("GET", "/hello", (e) => {
  let name = e.request.url.query().get("name") || "Person";

  return e.json(200, { message: "Hello " + name });
});
