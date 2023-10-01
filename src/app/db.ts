// Importer la classe PrismaClient depuis le module "@prisma/client".
import { PrismaClient } from "@prisma/client"

// Créer une variable globale globalForPrisma en tant qu'objet inconnu (unknown as unknown as) avec une propriété "prisma" de type PrismaClient ou undefined.
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// Exporter une instance de PrismaClient nommée "prisma".
export const prisma =
  globalForPrisma.prisma ??
  // Si globalForPrisma.prisma existe, utilisez-la ; sinon, créez une nouvelle instance de PrismaClient avec une option de journalisation pour les requêtes.
  new PrismaClient({
    log: ["query"],
  })

// Si l'environnement de Node.js n'est pas en mode "production", définissez globalForPrisma.prisma sur l'instance de PrismaClient créée.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
