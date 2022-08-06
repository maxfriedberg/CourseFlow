import React from 'react'
import { createRoot } from 'react-dom/client'
import CourseFlow from './CourseFlow'

const root = createRoot( document.getElementById('reactEntry') )
root.render( <CourseFlow /> );