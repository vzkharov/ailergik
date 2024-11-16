import { ReactNode } from 'react'
import { EmergencyContent } from '../accodions-content/content-emergency'
import { KvinkeContent } from '../accodions-content/content-kvinke'

type EmergencyTopic = {
  id: string
  title: string
  color: string
  content: ReactNode
}

const emergency = [
  {
    id: '1',
    title: 'О чем поговорить со службой 103?',
    color: '#F293954D',
    content: <EmergencyContent />,
  },
  {
    id: '2',
    title: 'Отекать по сценарию Квинке',
    color: '#F293954D',

    content: <KvinkeContent />,
  },
  {
    id: '3',
    title: 'Анафилаксия у ребенка. Что делать?',
    color: '#F293954D',

    content: null,
  },
  {
    id: '4',
    title: 'Токсидермия (экстренное состояние)',
    color: '#F293954D',

    content: null,
  },
  {
    id: '5',
    title: 'Синдром Стивенса-Джонсона',
    color: '#F293954D',

    content: null,
  },
  {
    id: '6',
    title: 'Синдром Лайелла',
    color: '#F293954D',

    content: null,
  },

  {
    id: '7',
    title: 'Укусы насекомых',
    color: '#F293954D',

    content: null,
  },
  {
    id: '8',
    title: 'Укусы змей',
    color: '#F293954D',

    content: null,
  },
  {
    id: '9',
    title: 'Контакт с борщевиком',
    color: '#F293954D',

    content: null,
  },
] satisfies EmergencyTopic[]

export { emergency }
