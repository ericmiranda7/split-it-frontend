<script lang="ts">
  import { navigate, Route, Router } from 'svelte-routing';
  import {user} from '$lib/store'
  import Home from './components/Home.svelte';
  import Login from './components/Login.svelte';
  import { authenticateUser } from '$lib/auth';
  import About from './components/About.svelte';

  $: {
    $user = authenticateUser();
    if (!$user.name) {
      setTimeout(() => navigate("/login"), 1000)
    }
  }

  export let url = "";
</script>

<main>
  <Router {url}>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="" component="{Home}"/>
  </Router>
</main>