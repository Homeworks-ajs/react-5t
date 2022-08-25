import React from 'react'

/**
 * Компонент для списка фильтров. Принимает обработчик для переключения по фильтрам новостей.
 * Не стал писать реализацию обработчика, просто повесил на ссылки.
 * @returns 
 */
export default function HotNewsFilter({onFilter}) {
  return (
    <div className="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button onClick={onFilter} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" onClick={onFilter} aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={onFilter} href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={onFilter} href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
