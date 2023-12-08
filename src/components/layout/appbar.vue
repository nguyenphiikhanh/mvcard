<template>
  <div>
    <v-navigation-drawer
        v-if="!$vuetify.breakpoint.smAndUp"
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        color="primary"
        dark>
      <v-list color="primary" nav>
        <v-list-item
            v-for="(item, i) in barItems"
            :key="i"
            :href="item.href"
            :target="item.target"
            :to="item.to"
            link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="mb-3"
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="darken-1"
        elevate-on-scroll
        flat>
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row
            :no-gutters="!$vuetify.breakpoint.smAndUp"
            align="center"
            justify="space-between">
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
                v-if="!$vuetify.breakpoint.mdAndUp"
                @click.stop="drawer = !drawer"/>
            <v-toolbar-title
                class="font-weight-bold text-h5 secondary--text"
                style="cursor: pointer"
                @click="$router.push('/')">
              <v-icon color="accent" large>mdi-feather</v-icon> Hero
              <span class="accent--text">UI</span>
            </v-toolbar-title>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="9">
            <v-btn
                v-for="(item, i) in barItems"
                :key="i"
                :to="item.to"
                class="text-capitalize"
                exact
                exact-active-class="accent--text"
                text
            >{{ item.title }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    barItems: [
      {
        title: "Home",
        to: "/",
      },
      {
        title: "Category",
        to: "/category",
      },
      {
        title: "Detail",
        to: "/detail",
      },
      {
        title: "Authors",
        to: "/authors",
      },
      {
          title: "Authors1",
          to: "/authors1",
      },
      {
          title: "Authors2",
          to: "/authors2",
      },
      {
          title: "Authors3",
          to: "/authors3",
      },
      {
          title: "Authors4",
          to: "/authors4",
      },
      {
          title: "Authors5",
          to: "/authors5",
      },
    ],
  }),
};
</script>
