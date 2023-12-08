<template>
  <div>
    <v-card absolute app color="primary" dark flat>
      <v-container>
        <div class="text-center mt-6">
            <v-toolbar-title
                    class="font-weight-bold text-h5 secondary--text"
                    style="cursor: pointer"
                    @click="$router.push('/')">
                MV<span class="accent--text">CARD</span>
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
  }),
};
</script>
