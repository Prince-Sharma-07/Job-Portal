import jwt from "jsonwebtoken";

type Data = {
  id: string;
};

export function createToken(data: Data) {
  const token = jwt.sign(data, process.env.JWT_SECRET as string);
  return token;
}

export function verifyToken(token: string) {
  const decryptedData = jwt.verify(token, process.env.JWT_SECRET as string);
  return decryptedData;
}
