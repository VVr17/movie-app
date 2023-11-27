<template>
  <div class="section">
    <div class="container">
      <h1 class="title-primary">Movies</h1>
      <p>Movies list</p>
      <ul>
        <li>
          <router-link :to="{ name: 'MovieDetails', params: { id: 1 } }">
            Movie 1
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
