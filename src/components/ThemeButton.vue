<template>
    <div>
        <input  @change="toggleTheme"
                id="checkbox"
                type="checkbox"
                class="switch-checkbox"
        />
        <label for="checkbox" class="switch-label">
            <img src="../assets/icons/moon.png" alt="moon">
            <img src="../assets/icons/sun.png" alt="sun">
            <div class="switch-toggle"
                :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
            ></div>
        </label>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const userTheme = ref('light-theme');

onMounted(() => {
    const initUserTheme = getTheme() || getMediaPreference();
    setTheme(initUserTheme);
});

function toggleTheme() {
    const activeTheme = localStorage.getItem("user-theme");
    if (activeTheme === "light-theme") {
        setTheme("dark-theme");
    } else {
        setTheme("light-theme");
    }
}

function getTheme() {
    return localStorage.getItem("user-theme");
}

function setTheme(theme) {
    localStorage.setItem("user-theme", theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
}

function getMediaPreference() {
    const hasDarkPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (hasDarkPreference) {
      return "dark-theme";
    } else {
      return "light-theme";
    }
}

</script>

<style scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--color-text);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.53);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--color-background);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.02);
  left: calc(var(--element-size) * 0.03);
  height: calc(var(--element-size) * 0.44);
  width: calc(var(--element-size) * 0.44);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.45)) !important;
}
</style>