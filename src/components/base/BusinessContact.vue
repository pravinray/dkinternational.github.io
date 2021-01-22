<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card
        :title="title"
        color="primary"
      >
        <slot />
      </base-info-card>

      <template v-for="({ icon, text, title: t }, i) in business">
        <base-avatar-card
          :key="i"
          :icon="icon"
          :outlined="false"
          :title="!dense ? t : undefined"
          color="transparent"
          horizontal
          space="0"
        >
          <!-- Do not use v-html for user -->
          <!-- provided values -->
          <div v-html="text" />
        </base-avatar-card>

        <v-divider
          v-if="i + 1 !== business.length"
          :key="`divider-${i}`"
          class="my-2"
        />
      </template>
    </div>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'BaseBusinessContact',

    props: {
      dark: Boolean,
      dense: Boolean,
      title: String,
    },

    data: () => ({
      business: [
        {
          icon: 'mdi-map-marker-outline',
          title: 'Address',
          // text: '8553 N. Beach St. Ste. 227<br>Fort Worth, Texas 76137',
          text: ' 广州市海珠区华新一街12号财智大厦2711房 Room 2711, caizhi building, no.12, huaxin street, haizhu district, Guangzhou China',
        },
        {
          icon: 'mdi-cellphone',
          title: 'Phone',
          // text: '01 (800) 433 744<br>01 (800) 433 633',
          text: '+86 13450260513<br>+86 2084500094',
        },
        {
          icon: 'mdi-email',
          title: 'Email',
          text: 'dilbdr4@hotmail.com<br>dkintrtrading@outlook.com',
        },
      ],
    }),
  }
</script>
