<template>
    <footer class="footer">
        <ul class="nav">
            <li class="nav__item"><a href="#" class="nav__link">Find your dream home</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Request proposal</a></li>
            <li class="nav__item"><a href="#" class="nav__link">download home planner</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Contact us</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Submit your property</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Find ypur dream home</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Come work with us</a></li>
        </ul>
        <p class="copyright">
            &copy; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam dolorem quos, voluptatibus dolor, at deleniti veniam, impedit nobis fuga obcaecati. Quibusdam nulla voluptatibus facere tempora vitae veniam natus soluta!
        </p>
    </footer>
</template>
<style lang="scss">
.footer {
    background-color: $color-secondary;
    grid-column: full-start / full-end;

    padding: 8rem;

}

.nav {
    list-style: none;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center;

    &__link:link,
    &__link:visited {
        font-size: 1.4rem;
        color: #ffffff;
        text-decoration: none;
        font-family: $font-display;
        text-transform: uppercase;
        text-align: center;
        padding: 1.5rem;
        display: block;
        transition: all .2s;

        background-color: rgba(#ffffff, .05);
    }

    &__link:hover,
    &__link:active {
        background-color: rgba(#ffffff, .05);
        transform: translateY(-3px);
    }
}

.copyright {
    font-size: 1.4rem;
    color: $color-grey-light-2;
    margin-top: 6rem;
    text-align: center;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
}

</style>
