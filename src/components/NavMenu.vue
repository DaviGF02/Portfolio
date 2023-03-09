<template>
    <nav>
        <RouterLink class="navLink" to="/Calculator"><i class="fa-solid fa-calculator"></i> Calculadora</RouterLink>
        <RouterLink class="navLink" to="/Counter"><i class="fa-solid fa-arrow-up-9-1"></i> Contador</RouterLink>
        <RouterLink class="navLink" to="/Dashboard"><i class="fa-solid fa-chart-line"></i> Dashboard</RouterLink>
    </nav>
</template>
<style lang="scss" scoped>
nav {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2rem 0 0 0;
    .navLink {
        color: $envelopeWhite;
        text-decoration: none;
        font-size: 2rem;
        padding: 0rem 2rem;
    }
}
</style>