<script setup lang="ts">
const model = defineModel()

// ************* TYPES ************* //
interface Props {
  label?: string
}

// ************* PROPS ************* //
const props = defineProps<Props>()
</script>

<template>
  <div class="flex gap-4 items-center">
    <label class="switch">
      <input type="checkbox" v-model="model">
      <div class="slider round"></div>
    </label>
    <span class="text-base font-medium text-gray-800" v-if="label">{{ label }}</span>
  </div>
</template>

<style scoped lang="postcss">
.switch {
  @apply relative inline-block;
  width: 60px;
  height: 34px;

  input {
    @apply hidden;
  }
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  @apply bg-purple-800;
}

input:focus + .slider {
  box-shadow: 0 0 1px #101010;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>