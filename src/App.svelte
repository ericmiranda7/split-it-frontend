<script lang="ts">
  import { navigate, Route, Router } from 'svelte-routing';
  import user from './lib/store'
  import Home from './components/Home.svelte';
  import Login from './components/Login.svelte';

  $: {
    if ($user.name) {
      setTimeout(() => navigate("/home"), 1000)
    }
  }

  export let url = "";
</script>

<main>
  <Router {url}>
    <Route path="/home" component={Home}/>
    <Route path="" component="{Login}"/>
  </Router>
</main>