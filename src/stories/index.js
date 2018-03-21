import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import NotesAndTerms from '../components/notes_and_terms'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('NotesAndTerms', module)
  .add('empty', () => <NotesAndTerms notes={``} terms={``} onSubmit={()=>{}}/>)
  .add('with some', () => <NotesAndTerms notes={`original notes`} terms={`original terms`} onSubmit={()=> {}}/>)

