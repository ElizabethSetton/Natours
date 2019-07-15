<template>
    <footer class="footer">
            <div class="footer__logo-box">
                <picture class="footer__logo">
                    <source srcset="@/assets/logo-green-1x.png 1x, @/assets/logo-green-2x.png 2x " media="(max-width:37.5em)">
                    <img srcset="@/assets/logo-green-1x.png 1x, @/assets/logo-green-2x.png 2x" alt="full logo" class="footer__logo">
                </picture>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__navigation">
                        <ul class="footer__list">
                            <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">Contact us</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">carrers</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">privecy policy</a></li>
                            <li class="footer__item"><a href="#" class="footer__link">term</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-1-of-2">
                    <p class="footer__copyright">
                        Build by <a href="#" class="footer__link">Elizabeth Setton</a> with help of curse from udemy Advanced CSS. the design by <a href="#" class="footer__link">Jonas Schmedtmann</a> but the code main :)
                    </p>
                </div>
            </div>
        </footer>
</template>
<style lang="scss">
.footer {
    background-color: $color-grey-dark-3;
    padding: 10rem 0;
    font-size: 1.4rem;
    color: $color-grey-ligth-1;

    @include respond(tab-port) {
        padding: 8rem 0;
    }

    &__logo-box {
        text-align: center;
        margin-bottom: 8rem;

        @include respond(tab-port) {
            margin-bottom: 6rem
        }
    }

    &__logo {
        width: 15rem;
        height: auto;
    }

    &__navigation {
        border-top: 1px solid $color-grey-dark;
        padding-top: 2rem; 
        display: inline-block;

        @include respond(tab-port) {
            width: 100%;
            text-align: center;
        }

    }

    &__list {
        list-style: none;
    }

    &__item {
        display: inline-block;
        
        &:not(:last-child) {
            margin-right: 1.5rem;
        }
    }

    &__link {
        &:link,
        &:visited {
            background-color: $color-grey-dark-3;
            color: $color-grey-ligth-1;
            text-decoration: none;
            text-transform: uppercase;
            display: inline-block;
            transition: all .2s;
        }

        &:hover,
        &:active {
            color: $color-primary;
            box-shadow: 0 1rem 2rem rgba($color-black, .4);
            transform: rotate(5deg) scale(1.3);
        }
    }

    &__copyright {
        border-top: 1px solid $color-grey-dark;
        padding-top: 2rem; 
        width: 80%;
        float: right;

        @include respond(tab-port) {
            width: 100%;
            float: none;
        }
    }

}
</style>

