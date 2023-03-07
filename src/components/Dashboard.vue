<template>
  <div id="appDashboard">
    <div class="dashboard">
      <div class="box npsGeneral"></div>
      <div class="box closedSales"></div>
      <div class="box monthlyGoal"></div>
      <div class="box salesByDayOfTheWeek"></div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
#appDashboard {
    display: grid;
    place-content: center;
    height: 100vh;

  .dashboard {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    column-gap: 3.2rem;
    row-gap: 5.9rem;
    padding: 11.2rem 12.3rem;
    background: $bgDark;
    border-radius: 4.8rem;
    @include bigShadow;
    .box {
      padding: 2.9rem 4.8rem;
      border-radius: 1.6rem;
      background: $bgDark;
      @include buttonShadow;

      &:nth-child(4) {
        grid-column: 1/4;
      }
    }
  }
}
</style>
