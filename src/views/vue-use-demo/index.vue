<script setup lang="ts">
import moment from 'moment'
import { useNow } from '@vueuse/core'
const { now, pause, resume } = useNow({ controls: true })

// const now = useNow()
</script>

<template>
  <div>
    <el-button @click="pause()" type="primary">Pause</el-button>
    <el-button @click="resume()">Resume</el-button>

    <h1 text-black absolute right-0 top-0>
      {{ moment(now).format('YYYY-MM-DD HH:mm:ss') }}
    </h1>
  </div>
</template>
