import express from "express";

const app = express();

app.get("/products/:nom/:nomId", (req, res) => {
  const {
    params: { nom, nomId },
  } = req;

  res.send(nom + " " + nomId);
});

app.get("/exercices/:nom/:nomId", (req, res) => {
  const {
    params: { nom, nomId },
  } = req;
  res.send("<h1>bonjour</h1>" + " " + nom + " " + nomId);
});

app.get("/", (req, res) => {
  const Personnage = [
    {
      id: "1",
      user: "Ady",
    },
    {
      id: "2",
      user: "Mangue",
    },
  ];
  res.send({
    Personnage,
  });
});

app.listen(4000, () => console.log("connecter avec le port 4000"));
