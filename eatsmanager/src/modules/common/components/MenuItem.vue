<template>
    <div class="w-full flex items-center gap-x-1.5 group select-none cursor-pointer ">
        <div class="w-1 rounded-xl h-8 bg-transparent transition-colors duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-[102%] translate-y-full group-hover:translate-y-0 bg-black transition-all duration-300"></div>
        </div>
        <div class="group-hover:bg-white/10 w-full group-active:scale-95 self-stretch pl-2 rounded flex items-center space-x-2 transition-all duration-200 dark:group-hover:text-white dark:hover:text-white text-sm" href="#">
            <svg class="h-5 w-5 group-hover:fill-black dark:fill-black  transition-colors duration-200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM17 13H11V7H13V11H17V13Z"></path>
            </svg>

            <span class="hover:text-black">Coming soon</span>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
