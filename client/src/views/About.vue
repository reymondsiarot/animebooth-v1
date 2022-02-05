<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>Cookie: {{ $cookies.get("me") }}</div>
    <button @click="$cookies.remove('me');">remove</button>
  </div>
</template>
