<template>
    <div class="popup" id="popup">
            <div class="popup__content">
                <div class="popup__left">
                    <img src="@/assets/nat-8.jpg" alt="Toure photo" class="popup__img">
                    <img src="@/assets/nat-9.jpg" alt="Toure photo" class="popup__img">
                </div>
                <div class="popup__right">
                    <a href="#section-tours" class="popup__close">&times;</a>
                    <h2 class="heading-secondary u-margin-bottom-small">Start booking now</h2>
                    <h3 class="heading-tertiary u-margin-bottom-small">Important &ndash; please read these terms before booking</h3>
                    <p class="popup__text">
                        dolor sit amet consectetur adipisicing elit. Exercitationem repellendus perspiciatis asperiores qui nam eos. Nostrum tempora id impedit tempore quae facilis animi vitae harum voluptas, natus autem totam nisi!
                        dolor sit amet consectetur adipisicing elit. Exercitationem repellendus perspiciatis asperiores qui nam eos. Nostrum tempora id impedit tempore quae facilis animi vitae harum voluptas, natus autem totam nisi!
                        dolor sit amet consectetur adipisicing elit. Exercitationem repellendus perspiciatis asperiores qui nam eos. Nostrum tempora id impedit tempore quae facilis animi vitae harum voluptas, natus autem totam nisi!
                        dolor sit amet consectetur adipisicing elit. Exercitationem repellendus perspiciatis asperiores qui nam eos. Nostrum tempora id impedit tempore quae facilis animi vitae harum voluptas, natus autem totam nisi!
                        dolor sit amet consectetur adipisicing elit. Exercitationem repellendus perspiciatis asperiores qui nam eos. Nostrum tempora id impedit tempore quae facilis animi vitae harum voluptas, natus autem totam nisi!
                        dolor sit amet consectetur adipisicing elit. Exercitationem repellendus perspiciatis asperiores qui nam eos. Nostrum tempora id impedit tempore quae facilis animi vitae harum voluptas, natus autem totam nisi!

                    </p>
                    <a href="#" class="btn btn--green">book now</a>
                </div>
            </div>
        </div>
</template>
<style lang="scss">
.popup {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba($color-black, .8);
    z-index: 9999;

    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    
    @supports(-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
        background-color: rgba($color-black, .3);
    }

    &__content {
        width: 75%;
        box-shadow: 0 2rem 4rem rgba($color-black, .2);
        background-color: $color-white;
        position: absolute;
        top: 50%;
        left: 50%; 
        transform: translate(-50%, -50%) scale(.25);
        border-radius: 3px;
        display: table;
        overflow: hidden;
        opacity: 0; 
        transition: all .4s .2s;
    }

    &__left {
        width: 33.333333%;
        display: table-cell;

    }
    &__right {
        width: 66.666667%;
        display: table-cell;
        vertical-align: middle;
        padding: 3rem 5rem;
    }

    &__img {
        display: block;
        width: 100%;

    }

    &__text {
        font-size: 1.4rem;
        margin-bottom: 4rem;
        //need prefix will not work 
        column-count: 2;
        column-gap: 4rem;
        column-rule: 1px solid $color-grey-ligth-2;


        hyphens: auto; 
    }

    &:target {
        opacity: 1;
        visibility: visible;
    }

    &:target &__content {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
    }
    &__close {
        &:link,
        &:visited {
            color: $color-grey-dark;
            position: absolute;
            top: 2.5rem;
            right: 2.5rem;
            font-size: 3rem;
            text-decoration: none;
            display: inline-block;
            transition: all .2s;
            line-height: 1;

        }

        &:hover {
            color: $color-primary;
        }
    }
}
</style>
