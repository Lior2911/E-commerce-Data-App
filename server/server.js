const dotenv = require("dotenv");
dotenv.config();
const DB = require("./DB");
const cors = require("cors");
const express = require("express");

const orderRouter = require("./routes/orders-route");
const departmentRouter = require("./routes/department-route");
const CategoryRouter = require("./routes/category-router");
const informationRouter = require("./routes/information-router");
const storesRouter = require("./routes/stores-router");
const productRouter = require("./routes/product-router");
const lastOrderRouter = require('./routes/lastOrder-router')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/orders", orderRouter);
app.use("/department", departmentRouter);
app.use("/category", CategoryRouter);
app.use("/information", informationRouter);
app.use("/stores", storesRouter);
app.use("/product", productRouter);
app.use("/lastOrder", lastOrderRouter);

app.get("/", (request, response) => {
  response.send({ success: true, message: "welcome" });
});

app.listen(port, () => {
  console.log("suck yuh madda");
});