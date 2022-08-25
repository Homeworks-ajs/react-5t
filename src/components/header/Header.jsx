import React from 'react'
import HotNews from './hot-news/HotNews'
import data from './data'

/**
 * Компонент с состонянием. Здесь группируем 2 компонента HotNews и AdvBlock 
 * и делимся с ними состоянием. 
 * @param {*} props 
 * @returns 
 */
function Header() {
  const onFilter = evt => {}
  
  return (
    <HotNews data={data} onFilter={onFilter}/>
  )
}

export default Header
