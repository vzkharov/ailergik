'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'

const FeedForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      contact: '',
      message: '',
      privacy: true,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="flex h-[650px] items-stretch gap-8">
      {/* Left Column */}
      <div className="flex max-w-min flex-col justify-between rounded-lg bg-[#FFD88D] p-8 pr-10">
        <div className="mb-8">
          <h3 className="mb-xl font-medium leading-none">
            ОБЪЕДИНЯЕМСЯ,
            <br />
            ЧТОБЫ СДЕЛАТЬ
            <br />
            СЕРВИС ЛУЧШЕ!
          </h3>
          <p className="mb-xl text-lg">
            Не стесняйтесь обращаться к нам, если вы хотите сотрудничать с нами
            или просто поговорить
          </p>
          <p className="text-md italic leading-none">
            Или напишите нам по электронной почте:
            <br />
            <a href="mailto:hello@ailergik.by" className="underline">
              hello@ailergik.by
            </a>
          </p>
        </div>

        <h2 className="font-gilroy text-[90px] font-bold leading-none">
          AiLERGIK
        </h2>
      </div>

      {/* Right Column */}
      <div className="my-auto flex-1 p-4">
        <p className="mb-2xl text-lg leading-tight text-muted-foreground">
          Мы здесь, чтобы помочь вам и ответить на любые ваши вопросы. Давайте
          обсудим!
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-xl"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="ИМЯ*"
                      variant="outline"
                      className={styles.input}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="КОМПАНИЯ*"
                      variant="outline"
                      className={styles.input}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="ТЕЛЕФОН ИЛИ E-MAIL*"
                      variant="outline"
                      className={styles.input}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="ВВЕДИТЕ ВАШЕ СООБЩЕНИЕ*"
                      variant="outline"
                      className={styles.input}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-sm space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-xs leading-none">
                    <FormLabel>
                      Отправляя сообщение вы соглашаетесь с нашей{' '}
                      <a href="#" className="underline">
                        Политикой конфиденциальности
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-xl h-16 w-full bg-primary text-lg text-white"
            >
              ОТПРАВИТЬ
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Имя должно содержать не менее 2 символов',
  }),
  company: z.string().min(2, {
    message: 'Название компании должно содержать не менее 2 символов',
  }),
  contact: z.string().min(5, {
    message: 'Введите корректный телефон или email',
  }),
  message: z.string().min(10, {
    message: 'Сообщение должно содержать не менее 10 символов',
  }),
  privacy: z.boolean().refine(val => val === true, {
    message: 'Вы должны согласиться с политикой конфиденциальности',
  }),
})

const styles = {
  input:
    'font-medium not-italic text-foreground placeholder:font-medium placeholder:not-italic placeholder:text-foreground',
}

export { FeedForm }
