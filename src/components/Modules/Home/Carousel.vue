<template>
    <section>
        <b-carousel-list
            v-model="values"
            :data="items"
            :arrow="arrow"
            :arrow-hover="arrowHover"
            :items-to-show="perList"
            :items-to-list="increment"
            :repeat="repeat"
            :has-drag="drag"
            :has-grayscale="gray"
            :has-opacity="opacity" />
    </section>
</template>

<script>
export default {
    name: 'CarouselComponent',
    data() {
        return {
            arrow: true,
            arrowHover: true,
            drag: true,
            gray: false,
            opacity: false,
            values: 1,
            perList: 4,
            increment: 1,
            repeat: false,
            items: [
                {
                    alt: 'Slide 1',
                    title: 'Slide 1',
                    image: 'https://picsummm.photos/id/0/1230/500',
                    srcFallback: 'https://picsum.photos/id/0/1230/500'
                },
                {
                    title: 'Slide 2',
                    image: 'https://picsum.photos/id/1/1230/500'
                },
                {
                    title: 'Slide 3',
                    image: 'https://picsum.photos/id/2/1230/500'
                },
                {
                    title: 'Slide 4',
                    image: 'https://picsum.photos/id/3/1230/500'
                },
                {
                    title: 'Slide 5',
                    image: 'https://picsum.photos/id/4/1230/500'
                },
                {
                    title: 'Slide 6',
                    image: 'https://picsum.photos/id/5/1230/500'
                },
                {
                    title: 'Slide 7',
                    image: 'https://picsum.photos/id/6/1230/500'
                },
                {
                    title: 'Slide 8',
                    image: 'https://picsum.photos/id/7/1230/500'
                }
            ]
        }
    }
}
</script>