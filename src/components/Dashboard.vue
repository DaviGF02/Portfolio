<template>
  <div id="appDashboard">
    <div class="dashboard">
      <div class="box npsGeneral">
        <div class="title">NPS geral</div>
        <div class="npsGeneral__content"><i class="fa-solid fa-face-laugh-beam"></i>Excelente!</div>
        <div class="npsGeneral__score">NPS Score 75</div>
      </div>
      <div class="box closedSales">
        <div class="title">Vendas fechadas</div>
        <div class="closedSales__content"></div>
        <div class="closedSales__goal">
          <div class="closedSales__expected"><i class="fa-solid fa-circle"></i> Esperado 100</div>
          <div class="closedSales__reached"><i class="fa-solid fa-circle"></i> Alcançado 70</div>
        </div>
      </div>
      <div class="box monthlyGoal">
        <div class="title">Meta mensal</div>
        <div class="monthlyGoal__content"></div>
        <div class="monthlyGoal__goal">
          <div class="monthlyGoal__expected">
            <i class="fa-solid fa-circle"></i> Esperado R$ 70K
          </div>
          <div class="monthlyGoal__reached">
            <i class="fa-solid fa-circle"></i> Alcançado R$ 63K
          </div>
        </div>
      </div>
      <div class="box salesByDayOfTheWeek"></div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
#appDashboard {
  display: grid;
  place-content: center;
  height: 100vh;
  color: $envelopeWhite;

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

    .title {
      font-weight: $semiBold;
      font-size: 2.4rem;
    }
    .npsGeneral {
      display: flex;
      flex-direction: column;
      align-items: center;

      .npsGeneral__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 7.65rem 0;
        color: $lightSuccessGreen;
        .fa-face-laugh-beam {
          padding: 0 0 1.6rem 0;
          font-size: 5.4rem;
          width: 5.4rem;
          //colocar degrade na fonte/ icone

          /* Primeiro passo: definir um degradê como fundo */
          background-image: linear-gradient(180deg, $lightSuccessGreen 0%, $successGreen 100%);
          /* Segundo passo: apagar do fundo tudo que não estiver imediatamente atrás de texto */
          background-clip: text;
          -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
          /* Terceiro passo: apagar o texto, deixando apenas o fundo atrás dele */
          -webkit-text-fill-color: transparent;
        }
      }
    }

    .closedSales {
      display: flex;
      flex-direction: column;
      align-items: center;
      .closedSales__goal {
        display: flex;
        .closedSales__expected {
          padding: 0 2rem 0 0;
          .fa-circle {
            color: $emperor;
          }
        }
        .closedSales__reached {
          .fa-circle {
            background-image: linear-gradient(135deg, $bgLighterBlue 0%, $bgDarkBlue 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }

    .monthlyGoal {
      display: flex;
      flex-direction: column;
      align-items: center;
      .monthlyGoal__goal {
        display: flex;
        .monthlyGoal__expected {
          padding: 0 2rem 0 0;
          .fa-circle {
            color: $emperor;
          }
        }
        .monthlyGoal__reached {
          .fa-circle {
            background-image: linear-gradient(135deg, $lightSuccessGreen 0%, $successColor 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }
  }
}
</style>
