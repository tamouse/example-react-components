import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import NotesAndTerms from './index'

const successfulSave = (notes, terms) => {
  const p = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'foo')
  })
  alert(`Submitted with: \nNotes: ${notes}\nTerms: ${terms}\n\nSucceeding...`)
  return p
}

const failedSave = (notes, terms) => {
  const p = new Promise(function (resolve, reject) {
    setTimeout(reject, 100, 'foo')
  })
  alert(`Submitted with: \nNotes: ${notes}\nTerms: ${terms}\n\nFailing...`)
  return p
}

storiesOf('NotesAndTerms', module)
  .add('successful save', () => <NotesAndTerms notes={`original notes`} terms={`original terms`} onSubmit={successfulSave}/>)
  .add('failed save', () => <NotesAndTerms notes={`original notes`} terms={`original terms`} onSubmit={failedSave}/>)

