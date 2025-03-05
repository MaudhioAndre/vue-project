<script setup>
</script>

<template>
    <button>
        header : <slot name="header" :title="'INI TITLE'" > </slot>
        Main : <slot name="main" :nama="'dhio'" :umur="'18'"> </slot>
        BASIC : <slot></slot>
        <!-- <slot>Submit</slot> -->
        <span v-if="$slots.footer">Footer nya adalah : <slot name="footer" /></span>
    </button>

</template>