<template>
    <section class="section-book">
                <div class="row">
                    <div class="book">
                        <div class="book__form">
                            <form action="#" class="form">
                                <div class="u-margin-bottom-medium">
                                    <h2 class="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>
                                <div class="form__group">
                                    <input type="text" class="form__input" placeholder="Full Name" id="name" required> 
                                    <label for="name" class="form__label">Full Name </label>
                                </div>
                                <div class="form__group">
                                    <input type="email" class="form__input" placeholder="Email" id="email" required> 
                                    <label for="email" class="form__label">Email </label>
                                </div>
                                <div class="form-group u-margin-bottom-medium ">
                                    <div class="form__radio-group">
                                        <input type="radio" class="form__radio-input" id="small" name="size">
                                        <label for="small" class="form__radio-label">
                                            <span class="form__radio-button"></span>
                                            Small toure group
                                        </label>
                                    </div>
                                    <div class="form__radio-group">
                                            <input type="radio" class="form__radio-input" id="large" name="size">
                                            <label for="large" class="form__radio-label">
                                                <span class="form__radio-button"></span>
                                                Large toure group
                                            </label>
                                        </div>
                                </div>
                                <div class="form__group">
                                    <button class="btn btn--green">Next step &rarr;</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
</template>
<style lang="scss">
.section-book {
    padding: 15rem 0;
    background-image: linear-gradient(to right bottom, $color-primary-ligth, $color-primary-dark);

    @include respond(tab-port) {
        padding: 10rem 0;
    }
}

.book {
    background-image: linear-gradient(105deg, 
                    rgba($color-white, .9) 0%,
                    rgba($color-white, .9) 50%,
                    transparent 50%),
                    url("../../../assets/nat-10.jpg");
    background-size: 100%;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .2);

    @include respond(tab-land) {
        background-image: linear-gradient(105deg, 
            rgba($color-white, .9) 0%,
            rgba($color-white, .9) 65%,
            transparent 65%),
            url("../../../assets/nat-10.jpg");
        background-size: cover;
    } 

    @include respond(tab-port) {
        background-image: linear-gradient(to right, 
            rgba($color-white, .9) 0%,
            rgba($color-white, .9) 100%),
            url("../../../assets/nat-10.jpg");

    } 

    &__form {
        width: 50%;
        padding: 6rem;

        @include respond(tab-land) {
            width: 65%;
        }

        @include respond(tab-land) {
            width: 100%;
        }
    }
  
}
.form {

    &__group:not(:last-child) {
        margin-bottom: 2rem
    }

    &__input {
        font-size: 1.5rem;
        font-family: inherit;
        color: inherit;
        padding: 1.5rem 2rem;
        border-radius: 2px;
        background-color: rgba($color-white, .5);
        border: none;
        border-bottom: 3px solid transparent;
        width: 90%;
        display: block;
        transition: all .3s;

        @include respond(tab-port){
            width: 100%;
        }

        &:focus {
            outline: none;
            box-shadow: 0 1rem 2rem rgba($color-black,  .1);
            border-bottom: 3px solid $color-primary;

            &:invalid {
                border-bottom: 3px solid $color-secondary-dark;
            }

        }

        &::-webkit-input-placeholder {
            color: $color-grey-dark-2;
        }
    }

    &__label {
        font-size: 1.2rem;
        font-weight: 700;
        margin-left: 2rem;
        margin-top: .7rem;
        display: block;
        transition: all .3s;
    }

    &__input:placeholder-shown + &__label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-4rem);

    }

    &__radio-group {
        width: 49%;
        display: inline-block;

        @include respond(tab-port){
            width: 100%;
            margin-bottom: 2rem;
        }

    }
    &__radio-input {
        display: none;
    }
    &__radio-label {
        font-size: $defailt-font-size;
        cursor: pointer;
        position: relative;
        padding-left: 4.5rem;
    }

    &__radio-button {
        height: 3rem;
        width: 3rem;
        border: 5px solid $color-primary;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        left: 0;
        top: -.4rem;

        &::after {
            content: "";
            display: block;
            height: 1.3rem;
            width: 1.3rem;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: $color-primary;
            opacity: 0;
            transition: opacity .2s;


        }   
    }

    &__radio-input:checked ~ &__radio-label &__radio-button::after {
        opacity: 1;
    }
}
</style>
