<template>
  <div id="app">
    <div class="container">
      <AddToDo />
      <Todos />
    </div> 
  </div>
</template>

<script>
import Todos from './components/Todos'
import AddToDo from './components/AddToDo'

export default {
  name: 'app',
  components: {
    Todos,
    AddToDo
  }
}
</script>

<style>
  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    background-color: #e8f7f0;
  }
  
  .container {
    max-width: 1100px;
    overflow: auto;
    margin: auto;
    padding: 0 2rem;
  }
</style>
