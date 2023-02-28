const { connection, ProdModel } = require("./model/db");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", async (req, res) => {
  try {
    res.status(200).send("Welcome to classifieds app");
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

app.post("/classifieds/add", async (req, res) => {
  const data = req.body;
  try {
    const prod = new ProdModel(data);
    await prod.save();
    res.send({ msg: "Classified Posted" });
  } catch (err) {
    res.status(404).send({ msg: "404 error failed to post" });
  }
});

app.get("/classifieds/paginate", async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  if (page == undefined || limit == undefined) {
    try {
      const products = await ProdModel.find();
      res.status(200).send(products);
    } catch (err) {
      res.status(404).send({ msg: "404 error" });
    }
  } else if (page && limit) {
    // console.log(page,limit)
    try {
      const products = await ProdModel.find()
        .skip(limit * (page - 1))
        .limit(limit);
      res.status(200).send(products);
    } catch (err) {
      res.status(404).send({ msg: "404 error" });
    }
  }
});

app.get("/classifieds", async (req, res) => {
  const sort = req.query.sort;
  const order = req.query.order;

  if (sort == undefined || order == undefined) {
    try {
      const products = await ProdModel.find();
      res.status(200).send(products);
    } catch (err) {
      res.status(404).send({ msg: "404 error" });
    }
  } else if (order == "asc" && sort) {
    try {
      const products = await ProdModel.find().sort({ postedAt: 1 });
      res.status(200).send(products);
    } catch (err) {
      res.status(404).send({ msg: "404 error" });
    }
  } else if (order == "desc" && sort) {
    try {
      const products = await ProdModel.find().sort({ postedAt: -1 });
      res.status(200).send(products);
    } catch (err) {
      res.status(404).send({ msg: "404 error" });
    }
  }
});

app.get("/classifieds/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const products = await ProdModel.find({ category });
    res.status(200).send(products);
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

app.delete("/classifieds/:id", async (req, res) => {
    const id=req.params.id;
  try {
    await ProdModel.findByIdAndDelete({_id:id});
    res.status(200).send({"msg":"buyed"})
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

app.listen(4500, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log("server running at 4500");
});
