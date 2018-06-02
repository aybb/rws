import React from 'react';
import { shallow } from 'enzyme';

import { TodoPage_ } from '../../pages/todo';
import { createTodo, updateTodo } from '../../actions/todo';


describe('Test TodoPage', () => {
  it('should render todo page / new todo mode', () => {
    const props = {
      todoObject: null,
      dispatch: jest.fn(),
      history: { push: jest.fn() },
    };
    const wrapper = shallow(<TodoPage_ {...props}/>);
    expect(wrapper.state()).toEqual({
      name: '',
      description: '',
      done: false,
    });
    expect(wrapper.find('input.todo-done')).toHaveLength(0);
    wrapper.find('input.todo-name').simulate('change', { target: { value: '1' } });
    wrapper.find('input.todo-desc').simulate('change', { target: { value: '1' } });
    expect(wrapper.state()).toEqual({
      name: '1',
      description: '1',
      done: false,
    });
    wrapper.find('button.todo-submit').simulate('click');
    expect(props.dispatch.mock.calls[0]).toEqual([
      createTodo({ name: '1', description: '1', done: false }),
    ]);
    expect(props.history.push.mock.calls[0]).toEqual(['/']);
  });

  it('should render todo page / edit todo mode', () => {
    const props = {
      todoObject: {
        name: '1',
        description: '1',
        done: false,
        id: '1',
      },
      dispatch: jest.fn(),
      history: { push: jest.fn() },
    };
    const wrapper = shallow(<TodoPage_ {...props}/>);
    expect(wrapper.state()).toEqual(props.todoObject);
    expect(wrapper.find('input.todo-done')).toHaveLength(1);
    wrapper.find('input.todo-done').simulate('change');
    expect(wrapper.state('done')).toBe(true);
    wrapper.find('button.todo-submit').simulate('click');
    expect(props.dispatch.mock.calls[0]).toEqual([
      updateTodo({ name: '1', description: '1', done: true, id: '1' })
    ]);
  })
});