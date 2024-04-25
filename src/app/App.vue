<script lang="ts" src="./App"></script>
<style src="./style.css" scoped></style>
<template>
  <div class="app">
    <PokemonSearch />
    <PokemonItem v-if="pokemonStore.pokemon" :pokemon="pokemonStore.pokemon" />
  </div>
</template>
