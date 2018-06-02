import React from 'react';
import { shallow } from 'enzyme';

import { IndexPage_ } from '../../pages/index';
import { TodoListItem } from '../../components/todo_list_item';
import { deleteTodo } from '../../actions/todo';


describe('Test IndexPage', () => {
  it('should render empty todo list', () => {
    const props = {
      todos: {},
    };
    const wrapper = shallow(<IndexPage_ {...props} />);
    expect(wrapper.find('ul.todo-list').children()).toHaveLength(0);
  });
  it('should render non empty todo list', () => {
    const props = {
      todos: {
        '1': {},
      },
      dispatch: jest.fn(),
      history: { push: jest.fn() },
    };
    const wrapper = shallow(<IndexPage_ {...props}/>);
    expect(wrapper.find(TodoListItem)).toHaveLength(1);
    wrapper.find(TodoListItem).dive().find('button.todo-edit').simulate('click');
    wrapper.find(TodoListItem).dive().find('button.todo-delete').simulate('click');
    expect(props.history.push.mock.calls[0]).toEqual([
      '/todo?todoId=1',
    ]);
    expect(props.dispatch.mock.calls[0]).toEqual([
      deleteTodo({ id: '1' }),
    ]);
  });
});