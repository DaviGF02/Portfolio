<script setup lang="ts"></script>
<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]"
    :position="[3,1,4]"
    />
    <TresScene>
      <TresMesh :position="[0, 2, 0]">
        <TresBoxGeometry :args="[1.5,3,0.5]" />
        <TresMeshNormalMaterial/>
      </TresMesh>
    </TresScene>
    <TresAxesHelper />
  </TresCanvas>
</template>
