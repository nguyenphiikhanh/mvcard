<script>
</script>

<template>
  <v-container class="py-16 not-found">
      <h1>Không tìm thấy trang</h1>
      <p>Rất tiếc, trang bạn truy cập không tồn tại.</p>
      <v-btn color="accent" to="/">Trang chủ</v-btn>
  </v-container>
</template>

<style scoped lang="scss">
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .not-found{
    height: 70vh;
  }
}
</style>