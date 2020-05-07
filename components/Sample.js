import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors'

export default function Sample (props) {
  const data = [{ age: 1, name: 'ccathy' }, { age: 2, name: 'bob' }, { age: 1, name: 'fred' }]
  return (
    <ol>
    	{data.map(person => (
    		<li>Age: {person.age} Name: {person.name}</li>)
    		)
    	}
    </ol>
  )
}
