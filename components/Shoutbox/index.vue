<template>
  <div class="">
    <div class="">
      <ul class="pl-0">
        <li class="flex gap-2" v-for="(s, idx) in shouts" :key="s.id">
          <span>{{ s.data.text }}</span>
          <span v-if="!!s.name">--</span>
          <span class="italic txt-2" v-if="!!s.name">{{ s.name }}</span>
        </li>
      </ul>
    </div>

    <Form class="grid grid-cols-[1fr,auto,auto] gap-4" @submit="onSubmit">
      <TextInput class="w-full" name="shout" type="text" label="" placeholder="say hi!" />
      <TextInput name="name" type="text" label="" placeholder="sign?" />
      <button class="bg-success" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'

type Shout = {
  id: number
  created_at: string
  name: string
  data: {
    text: string
  }
}

// const supabase = useSupabaseClient()

const shouts = ref<Shout[]>([])
// const user = useSupabaseUser()

async function freshFetch() {
  let { data } = await supabase.from('shouts').select(`*`)
  if (data) {
    shouts.value = data
  }
}

async function onSubmit(values) {
  console.log(values)
  const user = useSupabaseUser()
  console.log(user)

  const updates = {
    name: values.name,
    data: { text: values.shout },
  }

  let { error } = await supabase.from('shouts').upsert([updates], {
    returning: 'minimal', // Don't return the value after inserting
  })
  setTimeout(() => {
    freshFetch()
  }, 1000)
}
// freshFetch()
</script>
