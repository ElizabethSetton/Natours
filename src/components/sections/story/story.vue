<template>
    <div>
        <app-story-content></app-story-content>
        <app-story-img></app-story-img>
    </div>
</template>
<script>
import StoryImg from "./storyImg.vue"
import StoryContent from "./storyContent.vue"
export default {
    components: {
        'app-story-img': StoryImg,
        'app-story-content': StoryContent
    }
}
</script>
