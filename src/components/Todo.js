import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todos'

const styles = {
  pointer: {
    cursor: 'pointer',
  },
  complete: {
    textDecoration: 'line-through',
    color: 'red',
  }
}

const Todo = ({ id, name, complete, dispatch }) => (
  <li
    onClick={() => dispatch(toggleTodo(id)) }
    style={ complete ? {...styles.pointer, ...styles.complete} : styles.pointer }
  >
    {name}
  </li>
)

export default connect()(Todo)
