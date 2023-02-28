<template>
  <div id="appCounter">
    <div id="counter">
      <span id="titleCounter">Contador</span>
      <span id="count">0</span>
      <div class="counterButtons">
        <button class="btn decrease">Subtrair</button>
        <button class="btn reset">Resetar</button>
        <button class="btn increase">Somar</button>
      </div>
    </div>
  </div>
</template>
<script>
// let count = 0;

// const counter = document.querySelector('#count');
// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(function(btn) {
//     btn.addEventListener('click', function (e) {
//         const buttonsClass = e.currentTarget.classList;
//         if (buttonsClass.contains("decrease")) {
//             count--;
//         }
//         else if(buttonsClass.contains("increase")) {
//             count++;
//         }
//         else {
//             count = 0;
//         }
//         if (count > 0) {
//             counter.style.color = '#3A8600';
//         }
//         if (count < 0) {
//             counter.style.color = '#CE181E';
//         }
//         if (count === 0) {
//             counter.style.color = '#E5E5E5';
//         }
//         counter.innerHTML = count;
//     })
// })
</script>
<style lang="scss" scoped>
#appCounter {
  height: 100vh;
  display: grid;
  place-content: center;

  #counter {
    background: $bgDark;
    color: $white;
    @include bigShadow;
    border-radius: 48px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    #titleCounter {
      @include heading1;
    }
    #count {
      font-size: 6rem;
    }

    .counterButtons {
      button {
        margin: 8px;
        width: 150px;
        height: 40px;
        border: 0;
        background: $darkGrayButton;
        border-radius: 999px;
        color: $envelopeWhite;
        cursor: pointer;
        @include buttonShadow;
        @include regularText4;
        @include commonHoverBlue;
      }
    }
  }
}
</style>
