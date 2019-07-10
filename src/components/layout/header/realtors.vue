<template>
    <div class="realtors">
        <h3 class="heading-3">Top 3 realtors</h3>
        <div class="realtors__list">
            <img src="@/assets/realtor-1.jpeg" alt="realtor 1" class="realtors__img">
            <div class="realtors__details">
                <h4 class="heading-4 heading-4--light">Erik feinman</h4>
                <p class="realtors__sold">245 houses sold</p>
            </div>
            <img src="@/assets/realtor-2.jpeg" alt="realtor 2" class="realtors__img">
            <div class="realtors__details">
                <h4 class="heading-4 heading-4--light">Kim brown</h4>
                <p class="realtors__sold">212 houses sold</p>
            </div>
            <img src="@/assets/realtor-3.jpeg" alt="realtor 3" class="realtors__img">
            <div class="realtors__details">
                <h4 class="heading-4 heading-4--light"> Toby ramsey</h4>
                <p class="realtors__sold">198 houses sold</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.realtors {
    background-color: $color-secondary;
    grid-column: col-start 7 / full-end;
    padding: 3rem;

    display: grid;
    align-content: center;
    justify-content: center;
    justify-items: center;
    grid-row-gap: 2rem;

    @media only screen and (max-width: $bp-medium) {
        grid-column: 1 / -1;
    }

    &__list {
        display: grid;
        grid-template-columns: min-content max-content;
        grid-column-gap: 2rem;
        grid-row-gap: 5vh;
        align-items: center;

        @media only screen and (max-width: $bp-medium) {
            grid-template-columns: repeat(3, min-content max-content);
        }

        @media only screen and (max-width: $bp-small) {
            grid-template-columns: min-content max-content;
        }
    }

    &__img {
        width: 7rem;
        border-radius: 50%;
        display: block;
    }

    &__details {

    }

    &__sold {
        text-transform: uppercase;
        color: $color-grey-light-2;
        margin-top: -3px;
    }
}
</style>
