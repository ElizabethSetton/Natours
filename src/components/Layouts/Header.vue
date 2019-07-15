<template>
  <div class="header">
        <div class="header__logo-box">
            <img src="@/assets/logo-white.png" alt="Logo" class="header__logo">
        </div>
        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Outdoors</span>
                <span class="heading-primary--sub">is where life heppens</span>
            </h1>

            <a href="#" class="btn btn--white btn--animated">Discover out tours</a>
        </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
    .header {
        height: 95vh;
        background-image:linear-gradient(
            to right bottom, rgba($color-primary-ligth, 0.8), rgba($color-primary-dark, 0.8)), url(../../assets/hero-small.jpg);
        background-size: cover;
        background-position: top;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

        @media (min-resolution: 192dpi) and (min-width: 37.5em),
                (min-width: 125em) {
            background-image:linear-gradient(
                to right bottom, rgba($color-secondary-ligth, 0.8), rgba($color-secondary-dark, 0.8)), url(../../assets/hero.jpg);
        }

        @include respond(phone) {
            clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
        }
        &__logo-box {
            position: absolute;
            top: 4rem;
            left: 4rem;
        }
        &__logo {
            height: 3.5rem;
        }
        &__text-box {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
        }
    }
    .heading-primary {
    color: $color-white;
    text-transform: uppercase;
    
    backface-visibility: hidden;
    margin-bottom: 6rem;

    &--main {
        display: block;
        font-size: 6rem;
        font-weight: 400;
        letter-spacing: 3.5rem;
    
        animation-name: moveInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        
        /*
        animation-deley: 3s;
        animation-iteration-count: 3;
        */

        @include respond(phone) {
            letter-spacing: 1rem;
            font-family: 5rem
        }    
    }
    
    &--sub {
        display: block;
        font-size: 2rem;
        font-weight: 700px;
        letter-spacing: 1.75rem;
    
        animation-name: moveInRight;
        animation-duration: 1s;
        animation-timing-function: ease-out;

        @include respond(phone) {
            letter-spacing: .5rem;
        }  
    }

    }
</style>
