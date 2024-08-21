<script setup lang="ts">
import LayoutLayer from "./LayoutLayer.vue";
import {
  colemakLayer,
  BoardLayer,
  qwertyLayer,
  navLayer,
  numLayer,
  symLayer,
  funLayer,
  winLayer,
  uniLayer,
} from "../boardLayout";
// import { isRegistered, register ,unregisterAll} from "@tauri-apps/plugin-global-shortcut";
import { onMounted, onUnmounted, Ref, ref } from "vue";

let layer: Ref<BoardLayer | null> = ref(colemakLayer);
let layerChangeCount = ref(0);

// const layerMap: Record<string, BoardLayer> = {
//   "colemak": colemakLayer,
//   "Control+Space": qwertyLayer,
//   "Tab": navLayer,
//   "Backspace": numLayer,
//   "Enter": symLayer,
//   "Delete": funLayer,
//   "": uniLayer,
//   "20": winLayer,
// };


  onMounted(async () => {
    // mac 에서는 input filter 가 무조건 걸린다.... 임시 보류
    // await register("Tab", (event) => {
    //   if (event.state === "Pressed") {
    //     layer.value = navLayer
    //     layerChangeCount.value++;
    //   } else if (event.state === "Released") {
    //     layer.value = colemakLayer;
    //     layerChangeCount.value++;
    //   }
    // });
    // for (const x of Object.entries(layerMap)) {
    //   const shortcut = `F${x[0]}`;
    //   if (!(await isRegistered(shortcut))) {
    //     await register(shortcut, (s) => {
    //       layer.value = x[1];
    //       layerChangeCount.value++;
    //     });
    //   }
    // }
    //
    // const toggleShortcut = "F24";
    // if (!(await isRegistered(toggleShortcut))) {
    //   await register(toggleShortcut, (s) => {
    //     emit("toggle");
    //   });
    // }
  });

  onUnmounted(async () => {
    // await unregisterAll();
  });

</script>

<template>
  <LayoutLayer v-if="layer" :layer="layer" :key="layerChangeCount" />
</template>
