<template>
  <TresCanvas>
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[3, 1, 4]" :look-at="[0, 0, 0]" />
    <TresScene>
      <TresMesh :position="[0, 2, 0]" :rotation="[0, Math.PI / 6, Math.PI / 6]" ref="boxRef">
        <TresBoxGeometry :args="[1, 1, 1]" />
        <TresMeshNormalMaterial />
      </TresMesh>
    </TresScene>
    <TresAxesHelper />
  </TresCanvas>
</template>
<script setup lang="ts">
import { useRenderLoop } from '@tresjs/core'
import { ref } from 'vue'

const boxRef = ref()

const { onLoop } = useRenderLoop()

onLoop(({ delta, elapsed }) => {
  if (!boxRef.value) return
  boxRef.value.rotation.z += 0.01
  boxRef.value.rotation.y += 0.01
})
</script>
