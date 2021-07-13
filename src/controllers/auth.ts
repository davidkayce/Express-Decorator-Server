import { Request, Response } from "express";
import { controller, post } from "./decorators";

@controller("/auth")
export class Auth {

  @post("/login")
  private login = (req: Request, res: Response): void => {
    res.send("Hey there, welcome to login page");
  }
}
