<template>
    <div class="story__content">
            <h3 class="heading-3 mb-sm">Happy Customers</h3>
            <h2 class="heading-2 heading-2--dark mb-md" >&rdquo;The best desition of our lives&rdquo;</h2>
            <p class="story__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A facere delectus quas dignissimos excepturi nihil quaerat, eaque beatae aperiam error eum repellat, quis adipisci. Dolores placeat vero aspernatur rerum. Officia.
            </p>
            <button class="btn">find your own home</button>
        </div>
</template>

<style lang="scss">
.story {
    &__content {
        background-color: $color-grey-light-1;
        grid-column: col-start 5 / full-end;

        padding: 6rem 8vw;

        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: flex-start;

        display: grid;
        align-content: center;
        justify-items: start;

        @media only screen and (max-width: $bp-medium) {
            grid-column: 1 / -1;
            grid-row: 5 / 6;
        }
    }

    &__text {
        font-size: 1.5rem;
        font-style: italic;
        margin-bottom: 4rem;
    }

}
</style>

