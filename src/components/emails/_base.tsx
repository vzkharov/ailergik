/* eslint-disable import/named */
import React from 'react'
import { tv } from 'tailwind-variants'
import {
  Html,
  Font,
  Tailwind,
  Heading,
  Row,
  Column,
  Container,
} from '@react-email/components'

import type { ReactChildren, StyleProps } from '~/lib/types'
import config from '../../../tailwind.config'

type BaseProps = {
  children: ReactChildren
}

const Base = ({ children }: BaseProps) => (
  <Html>
    <Font fontFamily="Inter" fallbackFontFamily="Verdana" />
    <Tailwind config={config}>{children}</Tailwind>
  </Html>
)

type CardProps = StyleProps & {
  title: string
  children: ReactChildren
}

const Card = ({ title, children, style, className }: CardProps) => (
  <div>
    <Heading as="h2" className={styles.title()}>
      {title}
    </Heading>
    <Container style={style} className={styles.card({ className })}>
      {children}
    </Container>
  </div>
)

type CardInfoProps = StyleProps & { name: string; value: string }

const CardInfo = ({ name, value, style, className }: CardInfoProps) => (
  <Row style={style} className={styles.row({ className })}>
    <Column className={styles.col()}>{name}</Column>
    <Column>{value}</Column>
  </Row>
)

const styles = tv({
  slots: {
    card: 'text-xs rounded-md bg-zinc-100 p-4',
    title: 'text-md font-bold',
    row: 'p-1.5',
    col: 'w-32 font-semibold',
  },
})()

export { Base, Card, CardInfo }
