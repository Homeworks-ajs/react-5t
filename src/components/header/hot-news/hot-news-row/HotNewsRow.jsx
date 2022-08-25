import React from 'react'

export default function HotNewsRow({icons, newsLine}) {
  return (
    <li class="list-group-item"><span>{icons}</span>{newsLine}</li>
  )
}
