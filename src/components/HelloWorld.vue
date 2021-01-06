<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <p>Tuổi hiện tại là {{ age }}</p>
    <UserDetail @ageWasUpdated="age = $event" :age="age"></UserDetail> 
    <hr>
    <EditDetail v-bind:age="age"></EditDetail> 
  </div>
</template>

<script>
import UserDetail from './UserDetail'
import EditDetail from './EditDetail'
export default {
  name: 'HelloWorld',
  data() {
    return {
      age: 10
    }
  },
  props: {
    msg: String
  },

  components: {
    UserDetail,
    EditDetail
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
