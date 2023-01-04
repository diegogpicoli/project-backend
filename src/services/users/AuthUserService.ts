import prismaClient from "../../prisma";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
        password: password
      }
    })

    if (!user) {
      throw new Error("Email ou senha incorreto")
    }
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
  }
}

export {
  AuthUserService
}