import express from "express";
import { ControllersName } from "@src/types/ControllersName";
import { AwilixContainer } from "awilix";
import SignUpController from "@src/controllers/auth/SignUpController";

const router = express.Router();

export default function authRoutes(container: AwilixContainer) {
  router.post(
    "/signup",
    container
      .resolve<ControllersName>(ControllersName.SignUpController)
      .handle.bind(
        container.resolve<ControllersName>(ControllersName.SignUpController),
      ),
  );

  router.post(
    "/signin",
    container
      .resolve<ControllersName>(ControllersName.SignInController)
      .handle.bind(
        container.resolve<ControllersName>(ControllersName.SignInController),
      ),
  );
  return router;
}
