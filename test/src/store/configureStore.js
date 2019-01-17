import React,{Component} from 'react'
import { createStore} from 'redux';
import rootReducer from '../reducer'

const configureStore=()=>createStore(rootReducer)


export default configureStore
