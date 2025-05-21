/* eslint-disable import/named */
import React from 'react'
import { tv } from 'tailwind-variants'
import { Link, Text, Body, Heading } from '@react-email/components'

import { Base, Card, CardInfo } from './_base'

type ContactEmailProps = {
  name?: string
  phone?: string
  occupation?: string
}

const ContactEmail = (state: ContactEmailProps) => {
  const sender = [
    {
      name: 'Имя',
      value: state.name || emptyFieldFallback,
    },
    {
      name: 'Телефон',
      value: state.phone || emptyFieldFallback,
    },
    {
      name: 'Вид деятельности',
      value: state.occupation || emptyFieldFallback,
    },
  ]

  return (
    <Base>
      <Body className={styles.body()}>
        <div className={styles.block()} />

        <Heading as="h1" className={styles.title()}>
          Новое обращение
        </Heading>

        <Text>
          С веб-сайта{' '}
          <Link href={siteLink} title={siteName}>
            {siteLink}
          </Link>{' '}
          было отправлено новое обращение со следующими данными:
        </Text>

        <Card title="Отправитель" className={styles.sender()}>
          {sender.map(field => (
            <CardInfo key={field.name} {...field} />
          ))}
        </Card>

        <div className={styles.spacer()} />

        <Text className={styles.text()}>
          Пожалуйста, ознакомьтесь с этой заявкой как можно скорее.
        </Text>
        <Text className={styles.text()}>С уважением, Ваша система.</Text>
      </Body>
    </Base>
  )
}

const siteName = 'Ailergik'
const siteLink = 'https://ailergik.by'
const emptyFieldFallback = '-'

const styles = tv({
  slots: {
    body: 'mx-auto w-fit max-w-lg',

    block: 'h-10 w-full bg-zinc-900',
    title: 'mb-4 leading-tight text-xl font-bold',
    sender: 'p-2.5',
    message: 'p-4 leading-snug',
    spacer: 'h-4',
    text: 'm-0 my-3 leading-tight',
  },
})()

export default ContactEmail
