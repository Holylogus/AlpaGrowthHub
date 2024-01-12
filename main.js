import AdminController from "./Controller/Admin/AdminController.js";
import UrlapController from "./Controller/Admin/UrlapController.js";
import PublicController from "./Controller/Public/PublicController.js";


$(function () {
    new AdminController();
    new UrlapController();
    new PublicController();
});