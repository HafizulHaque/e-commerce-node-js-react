import { Prisma } from "@prisma/client";

export function consoleDbError(error){

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // Handle known errors
    console.log(`Prisma error code: ${error.code}`);

    if (error.code === 'P2002') {
      console.log('Unique constraint violation');
      // Extract information like which field caused the error
      console.log(error.meta);
    }
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    console.log('Prisma Unknown error:', error);
  } else if (error instanceof Prisma.PrismaClientRustPanicError) {
    console.log('Prisma Rust panic:', error);
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    console.log('Prisma initialization error:', error);
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    console.log('Prisma Validation error:', error);
  } else {
    // Generic error handler
    console.log('An unexpected DB error occurred:', error);
  }
}