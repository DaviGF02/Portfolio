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
        <div class="closedSales__content">
          <svg view-box="0 0 232 232" style="--percentage: 70">
            <circle cx="50%" cy="50%" r="78.5" opacity="0.1" stroke="#555555" />
            <circle cx="50%" cy="50%" r="78.5" stroke="url(#circleClosedSales)" />
            <defs>
              <linearGradient
                id="circleClosedSales"
                x1="-9"
                y1="82"
                x2="145"
                y2="178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4c4cb0" />
                <stop offset="1" stop-color="#2a2a78" />
              </linearGradient>
            </defs>
          </svg>
          <div class="closedSales__percent">
            <h3>70%</h3>
            <p>alcançada</p>
          </div>
        </div>
        <div class="closedSales__goal">
          <div class="closedSales__expected"><i class="fa-solid fa-circle"></i> Esperado 100</div>
          <div class="closedSales__reached"><i class="fa-solid fa-circle"></i> Alcançado 70</div>
        </div>
      </div>
      <div class="box monthlyGoal">
        <div class="title">Meta mensal</div>
        <div class="monthlyGoal__content">
          <svg view-box="0 0 232 232" style="--percentage: 90">
            <circle cx="50%" cy="50%" r="78.5" opacity="0.1" stroke="#555555" />
            <circle cx="50%" cy="50%" r="78.5" stroke="url(#circleMonthlyGoal)" />
            <defs>
              <linearGradient
                id="circleMonthlyGoal"
                x1="-9"
                y1="82"
                x2="145"
                y2="178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#92F249" />
                <stop offset="1" stop-color="#3a8600" />
              </linearGradient>
            </defs>
          </svg>
          <div class="monthlyGoal__percent">
            <h3>90%</h3>
            <p>alcançada</p>
          </div>
        </div>
        <div class="monthlyGoal__goal">
          <div class="monthlyGoal__expected">
            <i class="fa-solid fa-circle"></i> Esperado R$ 70K
          </div>
          <div class="monthlyGoal__reached">
            <i class="fa-solid fa-circle"></i> Alcançado R$ 63K
          </div>
        </div>
      </div>
      <div class="box salesByDayOfTheWeek">
        <div class="title">Vendas por dia da semana</div>
        <div class="salesByDayOfTheWeek__content">
          <div class="bestAndWorstDay">
            <div class="bestDay">
              <span><i class="fa-solid fa-caret-up"></i> Dia com mais vendas</span>
              quarta-feira
            </div>
            <div class="worstDay">
              <span><i class="fa-solid fa-caret-down"></i> Dia com menos vendas</span>
              domingo
            </div>
          </div>
          <div class="salesByDayOfTheWeek__graphic">
            <div class="graphic__wrapper">
              <div class="graphic__bar" style="--height: 3.9rem"></div>
              <span>dom</span>
            </div>
            <div class="graphic__wrapper">
              <div class="graphic__bar" style="--height: 11.5rem"></div>
              <span>seg</span>
            </div>
            <div class="graphic__wrapper">
              <div class="graphic__bar" style="--height: 7.6rem"></div>
              <span>ter</span>
            </div>
            <div class="graphic__wrapper">
              <div class="graphic__bar" style="--height: 15.9rem"></div>
              <span>qua</span>
            </div>
            <div class="graphic__wrapper">
              <div class="graphic__bar" style="--height: 12.9rem"></div>
              <span>qui</span>
            </div>
            <div class="graphic__wrapper">
              <div class="graphic__bar" style="--height: 12rem"></div>
              <span>sex</span>
            </div>
            <div class="graphic__wrapper">
              <div class="graphic__bar" style="--height: 6.9rem"></div>
              <span>sab</span>
            </div>
          </div>
        </div>
      </div>
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
    padding: 8rem 8rem;
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

    svg {
      --percentage: 0;
      width: 19.7rem;
      height: 19.7rem;
      transform: rotate(-90deg);
      circle {
        //2 * pi * r(raio do circulo)
        //criar variavel pra dar responsividade para o circulo
        --circleSize: 493;
        stroke-dasharray: var(--circleSize);
        stroke-dashoffset: var(--circleSize);

        stroke-width: 30;
        fill: none;

        &:nth-child(1) {
          stroke-dashoffset: 0;
        }

        &:nth-child(2) {
          //calc(stroke-dasharray - (stroke-dasharray * percentual do grafico)/ 100)
          stroke-dashoffset: calc(
            var(--circleSize) - (var(--circleSize) * var(--percentage)) / 100
          );
          animation: progress 2s ease-in-out backwards;
          animation-delay: 1s;
        }
      }
    }
    @keyframes progress {
      0% {
        stroke-dasharray: var(--circleSize);
        stroke-dashoffset: var(--circleSize);
      }
    }
    .closedSales {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .closedSales__content {
        display: grid;
        place-content: center;
        position: relative;
        .closedSales__percent {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;

          h3 {
            font-size: 3.4rem;
          }
        }
      }
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
      justify-content: space-between;
      .monthlyGoal__content {
        display: grid;
        place-content: center;
        position: relative;
        .monthlyGoal__percent {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;

          h3 {
            font-size: 3.4rem;
          }
        }
      }
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
    .salesByDayOfTheWeek {
      display: grid;
      gap: 3.2rem;
      .salesByDayOfTheWeek__content {
        display: flex;
        gap: 3.2rem;
        justify-content: space-between;
        .bestAndWorstDay {
          display: grid;
          gap: 3.2rem;
          .bestDay {
            display: grid;
            gap: 0.8rem;
            font-weight: $bigRegular;
            font-size: 2.4rem;
            .fa-caret-up {
              font-size: 2rem;
              background-image: linear-gradient(180deg, $lightSuccessGreen 0%, $successGreen 100%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              position: relative;
              top: 0.5rem;
            }
            span {
              font-size: 1.4rem;
            }
          }
          .worstDay {
            display: grid;
            gap: 0.8rem;
            font-weight: $bigRegular;
            font-size: 2.4rem;
            .fa-caret-down {
              font-size: 2rem;
              background-image: linear-gradient(180deg, $thunderbird 0%, $indianRed 100%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            span {
              font-size: 1.4rem;
            }
          }
        }
        .salesByDayOfTheWeek__graphic {
          display: flex;
          gap: 5.9rem;
          align-items: flex-end;
          position: relative;

          &::before {
            content: '';
            display: block;
            height: 0.3rem;
            width: 100%;
            background: $emperor;
            border-radius: 99.9rem;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 0;
          }

          @keyframes barsAnimation {
            0% {
              height: 0;
            }
          }
          .graphic__wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            z-index: 1;
            .graphic__bar {
              width: 1.5rem;
              height: var(--height);
              background: linear-gradient(180deg, $envelopeWhite 0%, $pictonBlue 100%);
              border-radius: 99.9rem;
              animation: barsAnimation 2s backwards;
              animation-delay: 1s;
            }
          }
        }
      }
    }
  }
}
</style>
