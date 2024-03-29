import type { FC } from 'hono/jsx'

export const Input: FC = (props) => {
  return (
    <input
      class="ring-offset-background file:bg-transparent focus-visible:ring-ring flex h-10 w-full rounded-md bg-neutral-3 p-2 text-sm text-neutral-dark-5 file:border-0 file:text-sm file:font-medium placeholder:text-neutral-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-neutral-dark-3 dark:text-neutral-5"
      placeholder={props.name}
      id={props.id}
    />
  )
}
