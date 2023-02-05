<template>
  <ContentRenderer :value="page" />
</template>

<script lang="ts">


export default defineComponent({
  async setup(props, ctx) {
    const posts1 = queryContent('/article').where({ 'title': { $contains: 'Directions' } });
    const [res1] = await Promise.all([
      posts1.find(),
    ])

    return {
      page: res1[0]
    }
  },
})

</script>
