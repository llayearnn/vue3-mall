<script setup lang="ts">
import { useBluetooth } from '@vueuse/core'
import moment from 'moment'

const { isConnected, isSupported, device, requestDevice, error } = useBluetooth(
  {
    acceptAllDevices: true,
  },
)
import { useNow } from '@vueuse/core'

const now = useNow()
</script>

<template>
  <div class="grid grid-cols-1 gap-x-4 gap-y-4">
    <div>
      {{
        isSupported
          ? 'Bluetooth Web API Supported'
          : 'Your browser does not support the Bluetooth Web API'
      }}
    </div>
    <h1 text-black absolute right-0 top-0>
      {{ moment(now).format('YYYY-MM-DD HH:mm:ss') }}
    </h1>
  </div>
</template>
