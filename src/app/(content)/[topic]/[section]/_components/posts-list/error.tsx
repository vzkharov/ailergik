'use client'

import { memo } from 'react'

import { Button } from '~/components/ui/button'

const ErrorComponent = memo(() => (
  <div className="flex h-[50svh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md text-center">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Что-то пошло не так!
      </h1>
      <p className="mt-4 text-muted-foreground">
        Извиняемся за неудобства! Произошла ошибка на стороне сервера,
        попробуйте перезагрузить страницу
      </p>
      <Button className="mt-6" onClick={() => globalThis?.location.reload()}>
        Перезагрузить
      </Button>
    </div>
  </div>
))

ErrorComponent.displayName = '@posts-list/error'

export { ErrorComponent }
