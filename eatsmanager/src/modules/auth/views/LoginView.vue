<template>
    <section id="login" class="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
    <div class="p-6 bg-sky-100 rounded">
      <div class="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-3 w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      <h1 class="tracking-wide">SkyScraper<span class="font-mono">™</span></h1>
      </div>
        <form id="login_form" action="api_login" method="POST"
        class="flex flex-col justify-center">
          <label class="text-sm font-medium">Username</label>
          <input class="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" type="text" name="username" placeholder="wahyusa" required>
          <label class="text-sm font-medium">Password</label>
          <input class="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500" type="password" name="password" placeholder="********" required>
          <button class="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300" type="submit">
            <span id="login_process_state" class="hidden">Checking ...</span>
            <span id="login_default_state">Login</span></button>
        </form>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
