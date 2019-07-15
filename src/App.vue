<template>
  <div id="app">
    <app-navigation></app-navigation>
    <app-header></app-header>
    <app-about></app-about>
    <app-features></app-features>
    <app-tours></app-tours>
    <app-stories></app-stories>
    <app-form></app-form>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Layouts/Header.vue'
import About from './components/Sections/About/About.vue'
import Features from './components/Sections/Features/Features.vue'
import Tours from './components/Sections/Tours/Tours.vue'
import Stories from './components/Sections/Stories/Stories.vue'
import Form from './components/Sections/Form/Form.vue'
import Footer from './components/Layouts/Footer.vue'
import Navigation from './components/navigation.vue'

export default {
  components: {
    'app-header': Header,
    'app-about': About,
    'app-features': Features,
    'app-tours': Tours,
    'app-stories': Stories,
    'app-form': Form,
    'app-footer': Footer,
    'app-navigation': Navigation
  }
}
</script>

<style lang="scss">
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html {
  //defines what 1rem is
  font-size: 62.5%; //10x

  @include respond(tab-land) {
    font-size: 56.25%;
  }
  @include respond(tab-port) {
    font-size: 50%;
  }
  @include respond(big-desktop) {
    font-size: 75%;
  }
}

body {
  box-sizing: border-box;
  padding: 3rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.7;
  color: $color-grey-dark;

  @include respond(tab-port) {
    padding: 0;
  }
}
::selection {
  background-color: $color-primary;
  color: $color-white;
}
.btn {
    &,
    &:link,
    &:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: $defailt-font-size;

        border: none;
        cursor: pointer;
        
    }

    &:hover {
        transform: translateY(-.3rem);
        box-shadow: 0 1rem 2rem rgba($color-black, .2);

        &::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }

    &:active,
    &:focus {
        outline: none;
        transform: translateY(-1rem);
        box-shadow: 0 .5rem 1rem rgba($color-black, .2);
    }

    &--white{
        background-color: $color-white;
        color: $color-grey-dark;

        &::after {
            background-color: $color-white;
        }
    }
    &--green{
        background-color: $color-primary;
        color: $color-white;

        &::after {
            background-color: $color-primary;
        }
    }

    &::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }

    &--animated {
        animation: moveInBottom .5s ease-out .75s;
        animation-fill-mode: backwards;
    }
}

.btn-text {
    &:link,
    &:visited {
        font-size: $defailt-font-size;
        color: $color-primary;
        display: inline;
        text-decoration: none;
        border-bottom: 1px solid $color-primary;
        padding: 3px;
        transition: all .3s;
    }

    &:hover {
        background-color: $color-primary;
        color: $color-white;
        box-shadow: 0 1rem 2rem rgba($color-black, .15);
        // transform: translateY(-.3px)
        color: red;
    }

    &:active {
        box-shadow: 0 .5rem 1rem rgba($color-black, .15);
        // transform: translateY(0);
    }
}

.row {
    max-width: $grid-width;
    margin: 0 auto;
 
    &:not(:last-child) {
        margin-bottom: $gutter-vertical;

        @include respond(tab-port) {
            margin-bottom: $gutter-vertical-small;
        }  
    }


    @include respond(tab-port) {
        max-width: 50rem;
        padding: 0 3rem;
     } 

    @include clearfix;
    
    [class^="col-"] {
        float: left;

        &:not(:last-child) {
            margin-right: $gutter-horizontal;

            @include respond(tab-port) {
                margin-right: 0;
                margin-bottom: $gutter-vertical-small;
            } 
        }

        @include respond(tab-port) {
            width: 100% !important;
        }  
    }
    .col-1-of-2 {
        width: calc((100% - #{$gutter-horizontal}) / 2 );
    }

    .col-1-of-3 {
        width: calc((100% - 2 * #{$gutter-horizontal}) / 3);
    }

    .col-2-of-3 {
        width: calc( 2 * ((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal});
    }

    .col-1-of-4 {
        width: calc((100% - 3 * #{$gutter-horizontal}) / 4);
    }

    .col-2-of-4 {
        width: calc( 2 * ((100% - 3 * #{$gutter-horizontal}) / 4) + #{$gutter-horizontal});
    }

    .col-3-of-4 {
        width: calc( 3 * ((100% - 3 * #{$gutter-horizontal}) / 4) + 2 * (#{$gutter-horizontal}));
    }
}
 
 .u-center-text { text-align: center !important; }

.u-margin-bottom-small { margin-bottom: 1.5rem !important; }
.u-margin-bottom-medium { 
    margin-bottom: 4rem !important; 

    @include respond(tab-port) {
       margin-bottom: 3rem !important;
    }
}

.u-margin-bottom-big { 
    margin-bottom: 8rem !important;

    @include respond(tab-port) {
        margin-bottom: 5rem !important;
    }
}

.u-margin-top-big { margin-bottom: 8rem !important; }
.u-margin-top-huge { margin-bottom: 10rem !important; }
</style>
