<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Social Media</h3>
    <ul>
      <li><a href="https://github.com/nicokempe" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://twitter.com/NicoVRNY" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://instagram.com/nicovrny" target="_blank" rel="noopener">Instagram</a></li>
      <li><a href="https://www.youtube.com/channel/UCWHDTr-DTRpDdH1Ld7VpzRw" target="_blank" rel="noopener">YouTube</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
