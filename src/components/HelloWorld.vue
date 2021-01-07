<template>
  <div>
    <Result></Result>
    <Counter></Counter>
  </div>
</template>

<script>
import Result from './Vuex/Result'
import Counter from './Vuex/Counter'
export default {
  name: 'HelloWorld',
  components: {
    Result,
    Counter
  }
}
</script>