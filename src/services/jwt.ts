//@ts-nocheck
import jwt from "jsonwebtoken";
export function createToken(userData) {
  const token = jwt.sign(userData, process.env.JWT_SECRET);
  return token;
}

export function verifyToken(data) {
  const decryptedData = jwt.verify(data, process.env.JWT_SECRET);
  return decryptedData;
}
