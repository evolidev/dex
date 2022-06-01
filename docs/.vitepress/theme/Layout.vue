<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #sidebar-top>
      <div class="pt-10 mb-4 w-full 2xl:w-auto">
        <a
          href="/"
          class="
            logo-text
            font-bold
            text-4xl
            xl:w-80
            w-full
            pl-5
            block
            no-underline
            hover:no-underline hover:text-gray-900
            transition-colors
            duration-300
          "
        >
          Evoli
        </a>
      </div>
    </template>
  </Layout>
</template>
