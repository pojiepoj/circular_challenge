<template lang="pug">
.pokemon__container
    div(v-if='pokemon != null')
      h1 {{pokemon?.name}} I choose you!!
      img(v-bind:src='pokemon.img')
      table.pokemon__stats
        thead
            tr
              td.stats-name(v-for="stats in pokemon.stats" :key="stats.name" v-text="stats.name")
        tbody
            tr
              td(v-for="stats in pokemon.stats" :key="stats.name" v-text="stats.value")

</template>

<script>
export default {
  name: 'Pokemon',
  data () {
    return {
      ranNum: '',
      endPoint: 'http://localhost:3000/api/getpokemon/',
      pokemon: null
    }
  },
  mounted () {
    this.ranNum = Math.floor((Math.random() * 898) + 1)
    this.axios.get(this.endPoint + this.ranNum).then((response) => {
      this.pokemon = response.data
      console.log(this.pokemon)
    })
  },
  methods: {
    randomPokemon () {
      this.ranNum = Math.floor((Math.random() * 898) + 1)
      this.axios.get(this.endPoint + this.ranNum).then((response) => {
        this.pokemon = response.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon__container {
  background:rgba(180, 179, 179, 0.5);
  border-radius: 5px;
  box-shadow: 0 1.5px 0 0 rgba(0,0,0,0.1);
  width:450px;
  display: flex;
  flex-direction: column;
  h1 {
    text-transform: capitalize;
  }
}

.pokemon__stats {
    width:100%;
    .stats-name {
        text-transform: capitalize;
    }
    thead{
        font-weight: bold;
        color: rgba(0, 132, 255, 0.5);
    }
}

</style>
