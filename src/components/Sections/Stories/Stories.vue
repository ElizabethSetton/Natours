<template>
    <section class="section-stories">
                <div class="bg-video">
                    <video class="bg-video__content" autoplay muted loop>
                        <source src="@/assets/video.mp4" type="video/mp4">
                        <source src="@/assets/video.webm" type="video/webm">
                        your browser is not supported!
                    </video>
                </div>
                <div class="u-center-text u-margin-bottom-big">
                    <h2 class="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>
                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img src="@/assets/nat-8.jpg" alt="Person on toure" class="story__img">
                            <figcaption class="story__caption">Mary smith</figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">I had the best wee with my family</h3>
                            <p>
                                dolor sit amet, consectetur adipisicing elit. Obcaecati vitae delectus quos accusamus? Distinctio voluptatibus consequuntur temporibus? Voluptatibus officia nesciunt blanditiis provident magnam molestiae ad saepe enim explicabo possimus. Voluptates.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="story">
                        <figure class="story__shape">
                            <img src="@/assets/nat-9.jpg" alt="Person on toure" class="story__img">
                            <figcaption class="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div class="story__text">
                            <h3 class="heading-tertiary u-margin-bottom-small">I had the best wee with my family</h3>
                            <p>
                                dolor sit amet, consectetur adipisicing elit. Obcaecati vitae delectus quos accusamus? Distinctio voluptatibus consequuntur temporibus? Voluptatibus officia nesciunt blanditiis provident magnam molestiae ad saepe enim explicabo possimus. Voluptates.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="u-center-text u-margin-top-huge">
                    <a href="#" class="btn-text">Read all storys &rarr;</a>
                </div>
            </section>
</template>
<style lang="scss">
.section-stories {
    padding: 15rem 0;
    position: relative;

    @include respond(tab-port) {
        padding: 10rem 0;
    }

}
    .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: .15;
    overflow: hidden;

    &__content {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
}
.story {
    width: 75%;
    margin: 0 auto;
    box-shadow: 0 3rem 6rem rgba($color-black, .1);
    background-color: rgba($color-white, .6);
    border-radius: 3px;
    padding: 6rem;
    padding-left: 9rem;
    font-size: $defailt-font-size;
    transform: skewX(-12deg);
    
    @include respond(tab-port) {
        width: 100%;
        padding: 4rem;
        padding-left: 7rem;

    }

    @include respond(phone) {
        transform: skew(0);

    }

    &__shape {
        width: 15rem;
        height: 15rem;
        background-color: orangered;
        float: left;
        -webkit-shape-outside: circle(50% at 50% 50%);
        shape-outside: circle(50% at 50% 50%);
        -webkit-clip-path: circle(50% at 50% 50%);
        clip-path: circle(50% at 50% 50%);
        transform: translateX(-3rem) skewX(12deg);
        position: relative;

        @include respond(phone) {
            transform: translateX(-3rem) skew(0);
            
        }
    
    }

    &__img {
        height: 100%;
        transform: translate(-4rem) scale(1.4);
        backface-visibility: hidden;
        transition: all .5s;
    }

    &__text {
        transform: skewX(12deg);

        @include respond(phone) {
            transform: skew(0);
            
        }
    }

    &__caption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        color: $color-white;
        text-transform: uppercase;
        font-size: 1.7rem;
        text-align: center;
        opacity: 0;
        transition: all .5s;
        backface-visibility: hidden;
    }

    &:hover &__caption {
        opacity: 1;
        transform: translate(-50%, -50%);
    }

    &:hover &__img {
        transform: translate(-4rem) scale(1);
        filter: blur(3px) brightness(80%);
    }

}
</style>

