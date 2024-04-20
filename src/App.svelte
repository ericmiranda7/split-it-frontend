<script lang="ts">
  import { navigate, Route, Router } from 'svelte-routing';
  import {user} from '$lib/store'
  import Home from './components/Home.svelte';
  import Login from './components/Login.svelte';
  import { authenticateUser } from '$lib/auth';
  import About from './components/About.svelte';
  import Logout from './components/Logout.svelte';

  $: {
    console.log('meshourldrun once')
    $user = authenticateUser();
    if (!$user.name) {
      navigate("/login" + window.location.search)
    }
  }

  export let url = "";
</script>

<main>
  <Router {url}>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
    <Route path="" component="{Home}"/>
  </Router>
</main>