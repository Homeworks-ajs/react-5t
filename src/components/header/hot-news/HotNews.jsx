import React from 'react'
import HotNewsFilter from './hot-news-filter/HotNewsFilter'
import HotNewsRow from './hot-news-row/HotNewsRow'

/**
 * Компонент создаёт разметку для списка новостей над строкой поиска. 
 * В пропсы прилетает список новостей от Header
 * @param {*} props 
 * @returns 
 */
function HotNews({data, onFilter}) {
  return (
    <div className="col">
      <HotNewsFilter onFilter={onFilter}/>
      <ul class="list-group border-0">
        {data.map(el => <HotNewsRow icons={el.icons} newsLine={el.news} key={el._id}/>)}
      </ul>
    </div>
  )
}

export default HotNews
