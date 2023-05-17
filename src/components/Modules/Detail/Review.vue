<template>
  <section class="review">
    <div class="columns">
        <div class="column">
            <h1 class="pt-5 has-text-danger has-text-weight-bold">REVIEWS</h1>
        </div>
    </div>
    <div class="columns">
      <div class="column is-half-desktop is-full-mobile is-multiline" v-for="review in reviews" :key="review.name">
        <div class="card card-review-bg">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48 ">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                    class="is-rounded"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">{{ review.name }}</p>
                <p class="subtitle is-6">{{ review.date }}</p>
              </div>
            </div>

            <div class="content is-italic">
              {{ review.testimoni }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReviewComponent",
  data () {
    return {
        reviews: [
            { name: 'SWITCH.', date: 'December 18, 2020', rating: '7.0', testimoni: 'It isnt as easy as saying Wonder Woman 1984 is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If youre a fan of the original film, youll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmers jaw-dropping score like on the big screen. - Chris dos Santos' },
            { name: 'msbreviews', date: 'December 18, 2020', rating: '8.0', testimoni: 'If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com The superhero genre has been growing exponentially during the last decade, so its bizarre to go through an entire year with only Birds of Prey and The New Mutants instead of literally dozens of films from both Marvel and DC. Thankfully, Warner Bros. decided to release Wonder Woman 1984 before the years end, but not without a catch. Most people will only have the possibility of watching one of the few blockbusters of 2020 through HBO Max, a streaming service only' }
        ]
    }
  }
};
</script>

<style>
.review .card-review-bg {
    background: #F9F9F9;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}
</style>