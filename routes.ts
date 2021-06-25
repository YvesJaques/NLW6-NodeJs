import { Router } from "express";
import { AuthenticateUserController } from "./src/controllers/AuthenticateUserController";
import { CreateComplimentController } from "./src/controllers/CreateComplimentController";
import { CreateTagController } from "./src/controllers/CreateTagController";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();


router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle)
router.post("/compliments", createComplimentController.handle)

export { router }