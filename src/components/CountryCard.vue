<script setup>

</script>

<template>
<div class="card">
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMcAAAB3CAMAAACAEaSBAAAAGFBMVEUAAAD/zgDdAABvAADoAADaAAD0rAD/0QBKKgvJAAAAgUlEQVR4nO3PwQ2DAAwAsVCg7L8xQ/A5RfYGngEAAAAAAACAD84d5tphfjt4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLR4tHi0eLTMvcP8d5hnhzl28GjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo8WjxaPFo2fJ4AcVtaoAIiNiLAAAAAElFTkSuQmCC" class="card-img-top" alt="germany-flag">
  <div class="card-body">
    <h5 class="card-title">Germany</h5>
    <div class="card-info">
        <span><b>Population:</b> 81,770,900</span>
        <span><b>Region:</b> Europe</span>
        <span><b>Capital:</b> Berlin</span>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card {
  background-color: var(--dm-dark-blue);
  max-width: 220px;

  .card-body {
    .card-info {
      display: flex;
      flex-direction: column;
    }
  }
}
@media (min-width: 1024px) {

}
</style>