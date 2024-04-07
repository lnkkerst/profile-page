<script setup lang="ts">
import { variants } from "@catppuccin/palette";
import avatar from "~/assets/img/avatar.jpg";

useHead({
  title: "lnkkerst - profile",
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "lnkkerst's profile",
    },
  ],
});

const chips = reactive([
  {
    title: "Student",
    color: variants.latte.mauve.hex,
    icon: "mdi-book",
  },
  {
    title: "SDU",
    color: "#9c0c13",
    icon: "mdi-school",
  },
  {
    title: "Arch Linux User",
    color: "#0e8bc5",
    icon: "mdi-arch",
  },
  { title: "Web", color: "#3ba777", icon: "mdi-vuejs" },
  {
    title: "Rust Beginner",
    color: "#372b27",
    icon: "mdi-language-rust",
  },
]);

const links = reactive([
  {
    title: "Blog",
    icon: "mdi-notebook",
    color: variants.latte.red.hex,
    href: "https://blog.lnkkerst.me",
  },
  {
    title: "Github",
    icon: "mdi-github",
    color: "#151920",
    href: "https://github.com/lnkkerst",
  },
  {
    title: "E-Mail",
    icon: "mdi-email",
    color: variants.latte.teal.hex,
    href: "mailto:lnkkerst04@gmail.com",
  },
  {
    title: "Telegram",
    icon: "mdi-send",
    color: "#239ad5",
    href: "https://t.me/lnkkerst",
  },
  {
    title: "Twitter",
    icon: "mdi-twitter",
    color: "#1b92e1",
    href: "https://twitter.com/lnkkerst1",
  },
]);
</script>

<template>
  <div grid place-items="center" w="screen" h="screen">
    <v-card w="1/4" max-w="540px" min-w="300px" elevation="3">
      <v-card-title>
        <div flex flex-col items-center mt="xl">
          <v-avatar size="x-large">
            <v-img :src="avatar" alt="lnk"></v-img>
          </v-avatar>
          <span font="bold">lnkkerst</span>
        </div>
      </v-card-title>
      <v-card-subtitle text="center">
        A student who forgot how to study 😢
      </v-card-subtitle>
      <v-card-text>
        <div flex="~ wrap" gap="2">
          <v-chip
            v-for="item in chips"
            :key="item.title"
            :color="item.color"
            :prepend-icon="item.icon"
            size="small"
          >
            {{ item.title }}
          </v-chip>
        </div>
        <div
          text="center 1.2rem"
          :style="{ color: variants.latte.text.hex }"
          pt="5rem"
          pb="3rem"
        >
          Best wishes to you!
        </div>
      </v-card-text>
      <v-card-actions>
        <div mx="auto" flex justify="center">
          <v-tooltip v-for="item in links" :key="item.title" location="top">
            <template #activator="{ props: activatorProps }">
              <NuxtLink :to="item.href">
                <v-btn
                  :icon="item.icon"
                  :color="item.color"
                  v-bind="activatorProps"
                ></v-btn>
              </NuxtLink>
            </template>
            {{ item.title }}
          </v-tooltip>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped></style>
