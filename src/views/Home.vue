<template>
  <div class="px-md-20 px-8">
    <v-row>
      <v-col cols="12" lg="12" xl="12">
          <div class="pt-4">
            <v-row>
              <v-col v-for="i in 16" :key="i" cols="12" lg="3" md="6">
                  <div>
                    <v-card
                        color="primary"
                        :elevation="0"
                        flat
                        to="/detail">
                      <v-img
                          :aspect-ratio="16 / 9"
                          class="elevation-2"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          src="https://cdn.pixabay.com/photo/2020/12/23/14/41/forest-5855196_1280.jpg"
                          style="border-radius: 16px">
                        <v-card-text>
                          <v-btn color="accent" to="category">TIPS</v-btn>
                        </v-card-text>
                      </v-img>

                      <v-card-text>
                        <v-hover v-slot:default="{hover}" close-delay="50" open-delay="50">
                            <div :class="['text-h6 font-weight-bold text-center', hover ? 'accent--text' : ' white--text']">
                                How to write an awesome blog post in 5 steps
                            </div>
                        </v-hover>
                      </v-card-text>
                    </v-card>
                  </div>
              </v-col>
            </v-row>
          </div>
      </v-col>
    </v-row>
    <v-pagination class="mt-6" v-model="page"
                  :length="25"
                  :total-visible="10"
                  prev-icon="mdi-arrow-left-bold"
                  next-icon="mdi-arrow-right-bold"
                  :color="'accent'"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
  data(){
      return{
          page: 1
      }
  }
};
</script>
