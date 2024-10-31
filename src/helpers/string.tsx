import { Fragment } from 'react'

const padIndex = (input: string | number, size: number) =>
  input.toString().padStart(size, '0')

const renderSplittedText = (text: string) =>
  text.split('\n').map((line, index) => (
    <Fragment key={index}>
      {line}
      <br />
    </Fragment>
  ))

export { padIndex, renderSplittedText }
