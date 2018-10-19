import React from 'react';

import {addDecorator, storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import '../_fonts.scss';

import Button from '../components/atoms/Button/Button';
import Title from '../components/atoms/Title/Title';
import Signup from '../components/organisms/Signup/Signup';
import Header from '../components/atoms/Header/Header';
import ErrorMessage from '../components/atoms/ErrorMessage/ErrorMessage';
import Agreement from '../components/atoms/Agreement/Agreement';
import Input from '../components/atoms/Input/Input';
import LargeTitle from '../components/atoms/LargeTitle/LargeTitle';
import LargeText from '../components/atoms/LargeText/LargeText';
import SignupForm from '../components/molecules/SignupForm/SignupForm';
import EmailGroup from '../components/molecules/EmailGroup/EmailGroup';
import NameGroup from '../components/molecules/NameGroup/NameGroup';
import Congrats from '../components/molecules/Congrats/Congrats';

addDecorator(story => {
  const style = {
    width: '80vw',
    height: '80vh',
    backgroundColor: 'black',
    padding: '2em',
    textAlign: 'center'
  };
  return <div style={style}>{story()}</div>;
});

const notes = 'Storybook for Signup component';
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <div style={{ color: 'white' }}>
      <h1>{notes}</h1>
      <p>Please resize browser window to view comonents at different responsive breakpoints.</p>
    </div>
  ));

storiesOf('Signup', module)
  .add('default', () => (
    <Signup/>
  ));

storiesOf('atoms/Header', module)
  .add('with text', () => (
    <Header text="This is a title"/>
  ));

storiesOf('atoms/Title', module)
  .add('with text', () => (
    <Title text="This is a title"/>
  ));

storiesOf('atoms/LargeTitle', module)
  .add('with text', () => (
    <LargeTitle text="This is a title"/>
  ));

storiesOf('atoms/LargeText', module)
  .add('with text', () => (
    <LargeText text="This is a bunch of text"/>
  ));

storiesOf('atoms/ErrorMessage', module)
  .add('with text, arrow up', () => (
    <ErrorMessage text="This is an error" arrow="up"/>
  ))
  .add('with text, arrow down', () => (
    <ErrorMessage text="This is an error" arrow="down"/>
  ))
  .add('with text, no arrow', () => (
    <ErrorMessage text="This is an error"/>
  ));

storiesOf('atoms/Input', module)
  .add('default', () => (
    <Input type="text" change={action('clicked')}/>
  ))
  .add('with placeholder', () => (
    <Input type="text" placeholder="Enter name" change={action('clicked')}/>
  ))
  .add('with value', () => (
    <Input type="text" value="Charlie" change={action('clicked')}/>
  ))
  .add('with value and autofocus', () => (
    <Input type="text" value="Charlie" autoFocus change={action('clicked')}/>
  ));

storiesOf('atoms/Button', module)
  .add('with text', () => (
    <Button text='next' click={action('clicked')}/>
  ));

storiesOf('atoms/Agreement', module)
  .add('with text', () => (
    <Agreement text='I hereby agree to abide by the ' change={action('clicked')}/>
  ));

storiesOf('molecules/EmailGroup', module)
  .add('default', () => (
    <EmailGroup button="next"
                change={action('change')} click={action('clicked')}/>
  ))
  .add('with error', () => (
    <EmailGroup button="next" error="Please enter valid email address"
                change={action('change')} click={action('clicked')}/>
  ));

storiesOf('molecules/NameGroup', module)
  .add('default', () => (
    <NameGroup button="next"
               change={action('change')} click={action('clicked')}/>
  ))
  .add('with error', () => (
    <NameGroup button="next" error="Both first and last names are required"
               change={action('change')} click={action('clicked')}/>
  ));

storiesOf('molecules/SignupForm', module)
  .add('email step', () => (
    <SignupForm step="email"
                click={action('clicked')} fieldChange={action('change')}/>
  ))
  .add('email step with email error', () => (
    <SignupForm step="email" error={{ field: 'email', message: 'Please enter valid email address' }}
                click={action('clicked')} fieldChange={action('change')}/>
  ))
  .add('email step with agreement error', () => (
    <SignupForm step="email" error={{ field: 'agreement', message: 'You must agree!' }}
                click={action('clicked')} fieldChange={action('change')}/>
  ))
  .add('name step', () => (
    <SignupForm step="name"
                click={action('clicked')} fieldChange={action('change')}/>
  ))
  .add('name step with name error', () => (
    <SignupForm step="name" error={{ field: 'firstName', message: 'Both first and last names are required' }}
                click={action('clicked')} fieldChange={action('change')}/>
  ));

storiesOf('molecules/Congrats', module)
  .add('default', () => (
    <Congrats/>
  ));


