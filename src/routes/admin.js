const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/admin/OrderController");
const ProductController = require("../controllers/admin/ProductController");
const AuthController = require("../controllers/admin/AuthController");
const middleware = require("../middleware/middleware");

router.get(
  "/dashboard",

  OrderController.OrderDashBoard
);
router.get("/orders", OrderController.orderIndex);
router.get(
  "/orders/:order_id",

  OrderController.getOrderDetail
);
router.put(
  "/orders/confirm/:order_id",

  OrderController.confirmOrder
);
router.delete(
  "/orders/delete/:order_id",

  OrderController.deleteOrder
);

router.get(
  "/products",

  ProductController.productIndex
);
router.post(
  "/products/store",

  ProductController.storeProduct
);
router.delete("/products/delete/:product_id", ProductController.deleteProduct);
router.put("/products/update/", ProductController.updateProduct);
router.get("/categories", ProductController.getCategoryAdd);

router.get("/authentication", AuthController.handleAuthAdmin);

router.get("/authentication/:token", AuthController.handleAuthToken);
router.get("/logout", AuthController.logoutAdmin);
router.post("/login", AuthController.handleLoginAdmin);

module.exports = router;
