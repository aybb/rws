import React from 'react';
import { shallow } from 'enzyme';

import { TodoListItem } from '../../components/todo_list_item';


describe('Test TodoListItem component', () => {
  it('should render not done todo list item', () => {
    const props = {
      name: 'Test name',
      description: 'Test description',
      done: false,
      onEdit: jest.fn(),
      onDelete: jest.fn(),
    };
    const wrapper = shallow(<TodoListItem {...props}/>);
    expect(wrapper.find('span.todo-name').text()).toEqual('Test name');
    expect(wrapper.find('span.todo-desc').text()).toEqual('Test description');
    expect(wrapper.find('span.todo-name').prop('style')).toEqual({
      textDecoration: 'none',
    });
    wrapper.find('button.todo-edit').simulate('click');
    wrapper.find('button.todo-delete').simulate('click');
    expect(props.onEdit.mock.calls).toHaveLength(1);
    expect(props.onDelete.mock.calls).toHaveLength(1);
  });

  it('should render done todo list item', () => {
    const props = {
      done: true,
    };
    const wrapper = shallow(<TodoListItem {...props}/>);
    expect(wrapper.find('span.todo-name').prop('style')).toEqual({
      textDecoration: 'line-through',
    });
  })
});