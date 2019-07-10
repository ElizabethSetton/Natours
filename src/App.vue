<template>
  <div class="container">
    <app-sidebar></app-sidebar>
    <app-header></app-header>
    <app-realtors></app-realtors>
    <app-features></app-features>
    <app-story-img></app-story-img>
    <app-story-content></app-story-content>
    <app-homes></app-homes>
    <app-gallery></app-gallery>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/layout/header/header.vue'
import Realtors from './components/layout/header/realtors.vue'
import Sidebar from './components/layout/sidebar.vue'
// import Story from './components/sections/story/story.vue'
import StoryContent from './components/sections/story/storyContent.vue'
import StoryImg from './components/sections/story/storyImg.vue'
import Features from './components/sections/features.vue'
import Gallery from './components/sections/gallery.vue'
import Homes from './components/sections/homes.vue'
import Footer from './components/layout/footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-realtors': Realtors,
    'app-sidebar': Sidebar,
    'app-story-img': StoryImg,
    'app-story-content': StoryContent,
    'app-features': Features,
    'app-gallery': Gallery,
    'app-homes': Homes,
    'app-footer': Footer
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: $bp-largest) {
        font-size: 50%;
    }
    

}
body {
    font-family: $font-primary;
    color: $color-grey-dark-2;
    font-weight: 300;
    line-height: 1.6;
}


.container {
    display: grid;
    grid-template-rows: 80vh min-content 40vw repeat(3,min-content);
    grid-template-columns: [sidebar-start ]8rem [sidebar-end full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];

    @media only screen and (max-width: $bp-large) {
        grid-template-rows: 6rem 80vh min-content 40vw repeat(3,min-content);
        grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end] minmax(6rem, 1fr) [full-end];
    }

    @media only screen and (max-width: $bp-medium) {
        grid-template-rows: 6rem calc(100vh - 6rem);
    }
}
%heading {
    font-family: $font-display;
    font-weight: 400;
}


.heading-1 {
    @extend %heading;
    font-size: 4.5rem;
    color: $color-grey-light-1;
    line-height: 1;
}
.heading-2 {
    @extend %heading;
    font-size: 4rem;
    font-style: italic;
    line-height: 1;

    &--light {color: $color-grey-light-1;}
    &--dark {color: $color-grey-dark-1;}

}
.heading-3 {
    @extend %heading;
    font-size: 1.6rem;
    color: $color-primary;
    text-transform: uppercase;
}
.heading-4 {
    @extend %heading;
    font-size: 1.9rem;

    &--light {color: $color-grey-light-1;}
    &--dark {color: $color-grey-dark-1;}
}

.btn {
    background-color: $color-primary;
    color: #ffffff;
    border: none;
    border-radius: 0;
    font-family: $font-display;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.8rem 3rem;
    cursor: pointer;
    transition: all .2s;

    &:hover {
        background-color: $color-primary-dark;
    }
}
.mb-sm {margin-bottom: 2rem;}
.mb-md {margin-bottom: 3rem;}
.mb-lg {margin-bottom: 4rem;}
.mb-hg {margin-bottom: 8rem;}

</style>
