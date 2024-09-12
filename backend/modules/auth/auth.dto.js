import { z } from 'zod'

export const SignInDto = z.object({
  userName: z.string().max(30, 'Max length exceded'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Min length of password is 8')
    .refine(val => /[A-Z]/.test(val), 'Password must contain at least 1 uppercase letter')
    .refine(val => /[a-z]/.test(val), 'Password must contain at least 1 lowercase letter')
    .refine(val => /[0-9]/.test(val), 'Password must contain at least 1 digit')
})