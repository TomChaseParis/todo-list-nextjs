import Link from "next/link"
// Importation du composant Link depuis la bibliothèque "next/link".

import { prisma } from "../db"
// Importation de l'objet "prisma" depuis le fichier "../db".

import { redirect } from "next/navigation"
// Importation de la fonction "redirect" depuis la bibliothèque "next/navigation".

async function createTodo(data: FormData) {
  "use server"
  // Déclaration d'une fonction asynchrone "createTodo" prenant en paramètre un objet "data" de type FormData.
  // L'instruction "use server" est utilisée pour indiquer que cette fonction doit être exécutée côté serveur.

  const title = data.get("title")?.valueOf()
  // Extraction de la valeur associée à la clé "title" depuis l'objet FormData "data".
  // L'utilisation de "?." permet de gérer le cas où la clé "title" n'existe pas.

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title")
  }
  // Vérification de la validité de la valeur extraite. Si elle n'est pas une chaîne de caractères ou est vide, une erreur est lancée.

  await prisma.todo.create({ data: { title, complete: false } })
  // Création d'une nouvelle entrée dans la base de données à l'aide de Prisma avec un titre et une complétion initiale définis.

  redirect("/")
  // Redirection vers la page d'accueil ("/") après la création de la tâche.
}

export default function Page() {
  // Déclaration du composant par défaut "Page".

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>

      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          id=""
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        />

        <div className="flex gap-1 justify-end">
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href=".."
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}
