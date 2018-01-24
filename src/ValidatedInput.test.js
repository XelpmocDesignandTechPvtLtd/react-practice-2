import React from 'react'
import ValidatedInput from './ValidatedInput.js'
import { mount, shallow } from 'enzyme'
import Input from 'xelpmoc-core'
import _ from 'lodash'

test('ValidatedInput - successfully using Input component from xelpmoc-core', () => {
  const validatedInput = mount(<ValidatedInput />)
  expect(validatedInput.find('Input')).toHaveLength(1)
})

test('ValidatedInput - validating onChange', () => {
  const validatedInput = mount(<ValidatedInput />)
  expect(_.isFunction(validatedInput.find('Input').at(0).props().onChange)).toBe(true)
})

test('ValidatedInput - validates correctly on error', () => {
  const errorMsg = 'Invalid input'
  const validatedInput = mount(
    <ValidatedInput
      errorFunc={val => {
        return val.length < 4
      }}
      errorMsg={errorMsg}
		/>
	)

  const input = validatedInput.find('input')

  input.simulate('change', { target: { value: '123' } })
  expect(validatedInput.state().hasError).toBe(false)
  expect(validatedInput.find('.error').length).toBe(1)
})
