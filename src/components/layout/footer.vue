<template>
  <div>
    <v-card absolute app color="primary" dark flat>
      <v-container>

        <div class="text-center mt-6">
            <v-toolbar-title
                    class="font-weight-bold text-h5 secondary--text"
                    style="cursor: pointer"
                    @click="$router.push('/')">
                <v-icon color="primary" large>mdi-feather</v-icon> Hero
                <span class="accent--text">UI</span>
            </v-toolbar-title>
          &copy;
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    heroui: [
      {
        text: "Github",
        href: "https://github.com/AGDholo",
      },
      {
        text: "Themes",
        href: "https://heroui.net/",
      },
    ],
    shock: [
      {
        text: "Download",
        href: "https://github.com/AGDholo/giraffe",
      },
      {
        text: "Issues",
        href: "https://github.com/AGDholo/giraffe/issues",
      },
      {
        text: "LICENSE",
        href: "https://github.com/AGDholo/giraffe/blob/master/LICENSE",
      },
    ],
  }),
};
</script>
