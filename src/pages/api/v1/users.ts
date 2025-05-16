import type { NextApiHandler } from "next";
import { getDatabaseConnection } from "../../../../lib/getDatabaseConnection";
import { User } from "../../../../db/entity/User";

const Users: NextApiHandler = async (req, res) => {
  const { username, password, passwordConfirmation } = req.body;

  const { manager } = await getDatabaseConnection();

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  const user = new User();
  user.username = username.trim();
  user.password = password;
  user.passwordConfirmation = passwordConfirmation;

  await user.validate();

  if (user.hasErrors()) {
    res.statusCode = 422;
    res.write(JSON.stringify(user.errors))
  } else {
    await manager.save(user);
    res.statusCode = 200;
    res.write(JSON.stringify(user));
  }

  res.end();
}

export default Users;
