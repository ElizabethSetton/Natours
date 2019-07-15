<template>
    <section class="section-features">
                <div class="row">
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-world"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p class="feature-box__text">
                                dolor sit amet, consectetur adipisicing elit. Obcaecati vitae delectus quos accusamus? Distinctio voluptatibus consequuntur temporibus? Voluptatibus.
                            </p>
                        </div>
                    </div>
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-compass"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Meert nature</h3>
                            <p class="feature-box__text">
                                dolor sit amet, consectetur adipisicing elit. Obcaecati vitae delectus quos accusamus? Distinctio voluptatibus consequuntur temporibus? Voluptatibus.
                            </p>
                        </div>
                    </div>
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-map"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Find your way</h3>
                            <p class="feature-box__text">
                                dolor sit amet, consectetur adipisicing elit. Obcaecati vitae delectus quos accusamus? Distinctio voluptatibus consequuntur temporibus? Voluptatibus.
                            </p>
                        </div>
                    </div>
                    <div class="col-1-of-4">
                        <div class="feature-box">
                            <i class="feature-box__icon icon-basic-heart"></i>
                            <h3 class="heading-tertiary u-margin-bottom-small">Live a healthier live</h3>
                            <p class="feature-box__text">
                                dolor sit amet, consectetur adipisicing elit. Obcaecati vitae delectus quos accusamus? Distinctio voluptatibus consequuntur temporibus? Voluptatibus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
</template>

<style lang="scss">
.section-features {
    padding: 20rem 0;
    background-image:linear-gradient(
        to right bottom, 
        rgba($color-primary-ligth, 0.8), 
        rgba($color-primary-dark, 0.8)), 
        url(../../../assets/nat-4.jpg);
    background-size: cover;
    transform: skewY(-7deg);
    margin-top: -11rem;

    & > * {
        transform: skewY(6deg);
    }

    @include respond(tab-port) {
        padding: 10rem 0;
    }
}

    .feature-box {
    background-color: rgba($color-white, .8);
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba($color-black, .15);
    transition: transform .3s;
    
    @include respond(tab-port) {
        padding: 2rem;
    }
    &__icon {
        font-size: 6rem;
        margin-bottom: .5rem;
        display: inline-block;
        background-image: linear-gradient(to right, $color-primary-ligth, $color-primary-dark);
        color: transparent;
        -webkit-background-clip: text;

        @include respond(tab-port) {
            margin-bottom: 0;
        }
    }

    &:hover {
        transform: translateY(-1.5rem) scale(1.03) ;
    }
}
</style>
