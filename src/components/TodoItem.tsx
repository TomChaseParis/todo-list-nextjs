"use client"
// Utilisation du commentaire "use client" pour indiquer que le code doit être exécuté côté client.

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
}
// Définition d'un type TypeScript "TodoItemProps" qui décrit les propriétés attendues pour le composant "TodoItem".

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  // Déclaration du composant React "TodoItem" qui prend les propriétés spécifiées dans "TodoItemProps".

  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />

      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  )
}
