<template>
    <section class="section-about">
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-2">
                        <h3 class="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                        <p class="paragraph">
                            dolor sit amet, consectetur adipisicing elit. Obcaecati vitae delectus quos accusamus? Distinctio voluptatibus consequuntur temporibus? Voluptatibus officia nesciunt blanditiis provident magnam molestiae ad saepe enim explicabo possimus. Voluptates.
                        </p>

                        <h3 class="heading-tertiary u-margin-bottom-small">Live adventurous like you never have before</h3>
                        <p class="paragraph">
                            dolor sit amet, consectetur adipisicing elit. Obcaecati vitae delectus quos accusamus? ad saepe enim explicabo possimus. Voluptates.
                        </p>
                        
                        <a href="#" class="btn-text">Learn more &rarr;</a>
                        
                    </div>
                    <div class="col-1-of-2">
                        <div class="composition">

                            <img srcset="@/assets/nat-1.jpg 300w, @/assets/nat-1-large.jpg 1000w"
                                sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                                alt="Photo1"
                                class="composition__photo composition__photo--p1"
                                src="@/assets/nat-1.jpg">

                            <img srcset="@/assets/nat-2.jpg 300w, @/assets/nat-2-large.jpg 1000w"
                                sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                                alt="Photo2"
                                class="composition__photo composition__photo--p2"
                                src="@/assets/nat-2.jpg">

                            <img srcset="@/assets/nat-3.jpg 300w, @/assets/nat-3-large.jpg 1000w"
                                sizes="(max-width: 900px) 20vw, (max-width: 600px) 30vw, 300px"
                                alt="Photo3"
                                class="composition__photo composition__photo--p3"
                                src="@/assets/nat-3.jpg">


                            <!-- <img src="img/nat-1-large.jpg" alt="photo 1" class="composition__photo composition__photo--p1">
                            <img src="img/nat-2-large.jpg" alt="photo 2" class="composition__photo composition__photo--p2">
                            <img src="img/nat-3-large.jpg" alt="photo 3" class="composition__photo composition__photo--p3"> -->
                        </div>
                    </div>
                </div>
            </section>
</template>
<style lang="scss">
.section-about {
    background-color: $color-grey-ligth-1;
    padding: 25rem 0;
    margin-top: -20vh;

    @include respond(tab-port) {
        padding: 20rem 0;
    }
}
.heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, $color-primary-ligth, $color-primary-dark);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: 2px;
    transition: all .2s;

    @include respond(tab-port) {
        font-size: 3rem;
    }  
    @include respond(phone) {
        font-size: 2.5rem;
    }  
    &:hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba($color-black, .2);
    }
}

    .heading-tertiary {
    font-size: $defailt-font-size;
    font-weight: 600;
    text-transform: uppercase;
}

.paragraph {
    font-size: $defailt-font-size;

    &:not(:last-child) {
        margin-bottom: 3rem;
    }
}
.composition {
    position: relative;

    &__photo {
        width: 55%;
        box-shadow: 0 1.5rem 4rem rgba($color-black, .4);
        border-radius: 2px;
        position: absolute;
        z-index: 10;
        transition: all .2s;
        outline-offset: 2rem;

        @include respond(tab-port) {
            float: left;
            position: relative;
            width: 33.3333%;
            box-shadow: 0 1.5rem 3rem rgba($color-black, .2);
        }

        &--p1 {
            left: 0;
            top: -2rem;

            @include respond(tab-port) {
                top: 0;
                transform: scale(1.2);
            }
        }

        &--p2 {
            right: 0;
            top: 2rem;

            @include respond(tab-port) {
                top: -1rem;
                transform: scale(1.3);
                z-index: 100;
            }
        }

        &--p3 {
            right: 20%;
            top: 10rem;

            @include respond(tab-port) {
                top: 1rem;
                left: 0;
                transform: scale(1.1);
            }
        }

        &:hover {
            outline: 1.5rem solid $color-primary;
            transform: scale(1.05) translateY(-.5rem);
            box-shadow: 0 2.5rem 4rem rgba($color-black, .5);
            z-index: 20;
        }
    }

    &:hover &__photo:not(:hover) {
        transform: scale(.95);
    }


}
</style>

