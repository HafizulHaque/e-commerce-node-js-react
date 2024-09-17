import { PrismaClient } from '@prisma/client'
import { consoleDbError } from '../../utils/dbError.js';

const prisma = new PrismaClient()

export async function createUser({ username, email, password }) {

  try {
    const user = await prisma.user.create({
      data: {
        name: username,
        email,
        password
      }
    })
    delete user.password
    return user;

  } catch(err) {
    consoleDbError(err)
  }

  return null;
}