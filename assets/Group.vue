<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Group',
};
</script>

<template>
  <div class="flex ${props.className}">
    <svg
      width="100%"
      height="100%"
      preserve-aspect-ratio="none"
      view-box="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M 34.722 17.73 C 34.722 16.511 34.612 15.339 34.408 14.215 H 18.178 V 20.862 H 27.453 C 27.053 23.01 25.839 24.83 24.014 26.048 V 30.36 H 29.583 C 32.842 27.368 34.722 22.963 34.722 17.73 Z"
        fill="#4285F4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M 18.178 34.523 C 22.831 34.523 26.732 32.984 29.583 30.36 L 24.014 26.048 C 22.471 27.079 20.497 27.688 18.178 27.688 C 13.69 27.688 9.891 24.666 8.536 20.604 H 2.778 V 25.056 C 5.614 30.672 11.442 34.523 18.178 34.523 Z"
        fill="#34A853"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M 8.536 20.604 C 8.191 19.573 7.995 18.472 7.995 17.339 C 7.995 16.206 8.191 15.105 8.536 14.074 V 9.622 H 2.778 C 1.611 11.942 0.945 14.566 0.945 17.339 C 0.945 20.112 1.611 22.736 2.778 25.056 L 8.536 20.604 Z"
        fill="#FBBC05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M 18.178 6.989 C 20.708 6.989 22.98 7.856 24.766 9.559 L 29.709 4.631 C 26.724 1.858 22.823 0.155 18.178 0.155 C 11.442 0.155 5.614 4.006 2.778 9.622 L 8.536 14.074 C 9.891 10.012 13.69 6.989 18.178 6.989 Z"
        fill="#EA4335"
      />
    </svg>
  </div>
</template>

<!--
  This component was generated from Figma with FireJet. 
  Learn more at https://www.firejet.io
  
  README:
  The output code may look slightly different when copied to your codebase. To fix this:
  1. Include the necessary fonts. The required fonts are imported from index.html
  2. Include the global styles. They can be found in styles.css
  
  Note: Step 2 is not required for tailwind.css output
-->
