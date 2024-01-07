<template>
  <div class="flex gap-4 items-center">
    <label class="switch">
      <input v-model="model" type="checkbox" />
      <span class="slider round" />
    </label>
    <span v-if="label" class="text-base font-medium text-gray-800">{{
      label
    }}</span>
  </div>
</template>

<script setup lang="ts">
// ************* TYPES ************* //
interface Props {
  label?: string
}

// ************* PROPS ************* //
defineProps<Props>()

const model = defineModel()
</script>

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
  content: '';
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