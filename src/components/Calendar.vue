<template>
    <div id="appCalendar">
        <div class="calendar">
            <div class="month">
                <div class="date">
                    <h1></h1>
                    <p></p>
                </div>
            </div>
            <div class="weekdays">
                <div class="mon">mon</div>
                <div class="tue">tue</div>
                <div class="wed">wed</div>
                <div class="thu">thu</div>
                <div class="fri">fri</div>
                <div class="sat">sat</div>
                <div class="sun">sun</div>
            </div>
            <div class="days"></div>
        </div>
    </div>
</template>
<script>
const monthIndex = new Date().getMonth();

const monthElement = document.querySelector('.date h1');
const fullDateElement = document.querySelector('.date p');
const daysElement = document.querySelector('.days');

const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

monthElement.innerText = months[monthIndex];
fullDateElement.innerText = new Date().toDateString();

let days = '';

for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`
}

for (let i = 1; i <= lastDay; i++){
    if ((i === new Date().getDate())) {
        days += `<div class="numberDay today">${i}</div>`
    }
    days += `<div class="numberDay">${i}</div>`
}

daysElement.innerHTML = days;
</script>
<style lang="scss" scoped>
#appCalendar {
    height: 100vh;
    display: grid;
    place-content: center;
    .calendar {
        margin: auto;
        width: 500px;
        background: $bgDark;
        color: $envelopeWhite;
        border-radius: 48px;
        @include bigShadow;

        .month {
            display: flex;
            justify-content: center;
            padding-top: 54px;
            padding-bottom: 54px;
            box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 40%);
            background: rgba(255, 255, 255, 10%);
            border-radius: 48px 48px 0 0;
        }

        .weekdays {
            box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 20%);
        }

        .weekdays,
        .days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            place-content: center;
            padding: 10px auto;
            text-align: center;
            padding: 16px 8px 16px 8px;
            gap: 12px;
        }

        .days {
            .numberDay {
                border-radius: 999px;
                padding: 16px 0px;
                @include buttonShadow;
                @include commonHoverBlue;
            }
        }
    }

    .today {
        background: linear-gradient(180deg, rgba($black, 15%) 0%, rgba($white, 5%) 100%), $bgLighterBlue;
        transition: 1s;
    }
}
</style>
