<template>
    <header class="header">
        <img src="@/assets/logo.png" alt="nexter logo" class="header__logo">
        <h3 class="heading-3">Your own home</h3>
        <h1 class="heading-1">The ultimate personall freedom</h1>
        <button class="btn header__btn">View our properties</button>
        <div class="header__seenon-text">Seen on</div>
        <div class="header__seenon-logos">
            <img src="@/assets/logo-bbc.png" alt="seen on logo 1">
            <img src="@/assets/logo-forbes.png" alt="seen on logo 2">
            <img src="@/assets/logo-techcrunch.png" alt="seen on logo 3">
            <img src="@/assets/logo-bi.png" alt="seen on logo 4">
        </div>
    </header>
</template>

<style lang="scss">
.header {
    background-color: $color-grey-dark-1;
    grid-column: full-start / col-end 6;
    background-image: linear-gradient(rgba($color-secondary, .93), rgba($color-secondary, .93)), url("../../../assets/hero.jpeg");
    background-size: cover;
    background-position: center;
    padding: 8rem;
    padding-top: 4rem;

    display: grid;
    grid-template-rows: 1fr min-content minmax(6rem, min-content) 1fr;
    grid-template-columns: minmax(min-content, max-content);
    grid-row-gap: 1.5rem;
    justify-content: center;

    @media only screen and (max-width: $bp-medium) {
        grid-column: 1 / -1;
    }
    @media only screen and (max-width: $bp-small) {
        padding: 5rem;
    }

    &__btn {
        align-self: start;
        justify-self: start;
    }
    &__logo {
        height: 3rem;
        justify-self: center;
    }

    &__seenon-text {

        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        grid-column-gap: 1.5rem;
        align-items: center;

        font-size: 1.6rem;
        color: $color-grey-light-2;

        &::before,
        &::after {
            content: "";
            height: 1px;
            display: block;
            background-color: currentColor;
        }
        
    }

    &__seenon-logos {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 3rem;
        justify-content: center;
        align-items: center;

        img {
            max-height: 2.5rem;
            max-width: 100%;
            filter: brightness(70%);
        }
    }


}
</style>
