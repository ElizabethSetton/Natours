<template>
    <section class="gallery">
        <figure class="gallery__iteam gallery__iteam--1"><img src="@/assets/gal-1.jpeg" alt="Gallery image 1" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--2"><img src="@/assets/gal-2.jpeg" alt="Gallery image 2" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--3"><img src="@/assets/gal-3.jpeg" alt="Gallery image 3" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--4"><img src="@/assets/gal-4.jpeg" alt="Gallery image 4" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--5"><img src="@/assets/gal-5.jpeg" alt="Gallery image 5" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--6"><img src="@/assets/gal-6.jpeg" alt="Gallery image 6" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--7"><img src="@/assets/gal-7.jpeg" alt="Gallery image 7" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--8"><img src="@/assets/gal-8.jpeg" alt="Gallery image 8" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--9"><img src="@/assets/gal-9.jpeg" alt="Gallery image 9" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--10"><img src="@/assets/gal-10.jpeg" alt="Gallery image 10" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--11"><img src="@/assets/gal-11.jpeg" alt="Gallery image 11" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--12"><img src="@/assets/gal-12.jpeg" alt="Gallery image 12" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--13"><img src="@/assets/gal-13.jpeg" alt="Gallery image 13" class="gallery__img"></figure>
        <figure class="gallery__iteam gallery__iteam--14"><img src="@/assets/gal-14.jpeg" alt="Gallery image 14" class="gallery__img"></figure>
    </section>
</template>
<style lang="scss">
.gallery {
    background-color: $color-grey-light-1;
    grid-column: full-start / full-end;


    display: grid;
    grid-template-rows: repeat(6, 5vw);
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 1.5rem;
    // padding: 1.5rem;


    &__iteam {
        &--1 {
            grid-row: 1 / span 2;
            grid-column: 1 / span 2;
        }
        &--2 {
            grid-row: 1 / span 3;
            grid-column: 3 / span 3;
        }
        &--3 {
            grid-row: 1 / span 2 ;
            grid-column: 6 / 7;
        }
        &--4 {
            grid-row: 1 / span 2;
            grid-column: 7 / -1;
        }
        &--5 {
            grid-row: 3 / span 3;
            grid-column: 1 / span 2;
        }
        &--6 {
            grid-row: 4 / span 2;
            grid-column: 3 / span 2;
        }
        &--7 {
            grid-row: 4 / 5;
            grid-column: 5 / 6;
        }

        &--8 {
            grid-row: 3 / span 2;
            grid-column: 6 / span 2;
        }
        &--9 {
            grid-row: 3 / span 3;
            grid-column: 8 / span -1;
        }
        &--10 {
            grid-row: 6 / span 2;
            grid-column: 1 / 2;
        }
        &--11 {
            grid-row: 6 / span 2;
            grid-column: 2 / span 2;
        }
        &--12 {
            grid-row: 6 / span 2;
            grid-column: 4 / 5;
        }
        &--13 {
            grid-row: 5 / span 3;
            grid-column: 5 / span 3;
        }
        &--14 {
            grid-row: 6 / span 2;
            grid-column: 8 / -1;
        }
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
}
</style>
