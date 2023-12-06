<template>
  <div>
    <div>
      <h3 class="text-h5 font-weight-medium pb-4">Popular Posts</h3>
      <v-divider></v-divider>
      <div>
        <v-row v-for="i in 5" :key="i" class="py-2">
          <v-col cols="12" md="6" lg="5">
            <v-card color="primary" :elevation="0"
                    flat height="100%" flat to="/detail">
              <v-img
                src="https://cdn.pixabay.com/photo/2021/01/22/16/55/camera-5940588_1280.jpg"
                :aspect-ratio="16 / 9"
                height="100%">
                  <v-card-text>
                      <v-btn color="accent" to="category"><span class="text-sm">TIPS</span></v-btn>
                  </v-card-text>
              </v-img>
            </v-card>
          </v-col>

          <v-col>
            <v-card-text>
                <v-hover v-slot:default="{hover}" close-delay="50" open-delay="50">
                    <a href="/" :class="['text-h6 font-weight-bold py-3 text-center text-md-left', hover ? 'accent--text' : ' white--text']">
                        What do | need to know to start learning JavaScript?
                    </a>
                </v-hover>
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Category</h3>

      <v-divider></v-divider>

      <v-card color="accent" dark flat v-for="i in 5" :key="i" class="my-4">
        <v-card-text
          class="d-flex justify-space-between align-center white--text"
        >
          <h6 class="text-h6">Travel</h6>

          <div class="text-h6">47</div>
        </v-card-text>
      </v-card>
    </div>

    <div class="pt-4">
      <h3 class="text-h5 font-weight-medium pb-4">Tags</h3>

      <v-divider></v-divider>

      <v-row class="pt-4">
        <v-col v-for="i in 7" :key="i" class="flex-shrink-0" cols="auto">
          <v-chip color="accent">#Images</v-chip>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
</script>