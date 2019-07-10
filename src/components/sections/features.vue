<template>
    <section class="features">
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-global"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">Worlds best luxury homes</h4>
                <p class="feature__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing Rem porro repudiandae dignissimos explicabo pariatur.
                </p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-trophy"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">Only the best properties</h4>
                <p class="feature__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing Rem porro repudiandae dignissimos explicabo pariatur.
                </p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-map-pin"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">All homes in top locations</h4>
                <p class="feature__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing Rem porro repudiandae dignissimos explicabo pariatur.
                </p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-key"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">New home in one week</h4>
                <p class="feature__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing Rem porro repudiandae dignissimos explicabo pariatur.
                </p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-presentation"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">Top 1% realtors</h4>
                <p class="feature__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing Rem porro repudiandae dignissimos explicabo pariatur.
                </p>
            </div>
            <div class="feature">
                <svg class="feature__icon">
                    <use xlink:href="@/assets/sprite.svg#icon-lock"></use>
                </svg>
                <h4 class="heading-4 heading-4--dark">Secure paymant on nexter</h4>
                <p class="feature__text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing Rem porro repudiandae dignissimos explicabo pariatur.
                </p>
            </div>
        </section>
</template>
<style lang="scss">
.features {
    grid-column: center-start / center-end;

    margin: 15rem 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 6rem;
    align-items: start;
}

.feature {

    display: grid;
    grid-template-columns: min-content 1fr;
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;

    &__icon {
        fill: $color-primary;
        width: 4.5rem;
        height: 4.5rem;
        grid-row: 1 / span 2;

        transform: translateY(-1rem);
    }

    &__text {
        font-size: 1.7rem;
    }
}   
</style>
