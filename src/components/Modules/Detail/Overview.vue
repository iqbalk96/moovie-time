<template>
  <section class="overview">
    <div class="container">
      <div class="columns overview-base">
        <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile"></div>
        <div class="column">
          <p class="has-text-white overview-year">
            {{ $route.params.year }}
          </p>
          <h1 class="has-text-white overview-hero-title">
            {{ $route.params.name }}
          </h1>
          <p class="has-text-white overview-hero-genre">
            Fantasy, Action, Adventure
          </p>
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="container">
        <div class="columns">
          <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile">
            <img
              :src="`${imagePath}${$route.params.thumbnail}`"
              :alt="$route.params.name"
              class="card-moovie"
            />
          </div>
          <div class="column">
            <div class="columns is-justify-content-center">
              <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile">
                <div class="is-flex is-justify-content-space-around">
                  <div class="is-flex is-align-items-center">
                    <img
                      :src="require('@/assets/star.png')"
                      width="30"
                      alt="star rating detail"
                    />
                    <h1 class="overview-rating ml-2">{{ $route.params.rating }}</h1>
                  </div>
                  <div>
                    <div class="overview-title">USER SCORE</div>
                    <div class="overview-value">3621 VOTES</div>
                  </div>
                </div>
              </div>
              <div
                class="column is-one-fifth-desktop is-12-tablet is-6-mobile is-flex is-justify-content-center"
              >
                <div>
                  <p class="overview-title">STATUS</p>
                  <p class="overview-value">RELEASE</p>
                </div>
              </div>
              <div
                class="column is-one-fifth-desktop is-12-tablet is-6-mobile is-flex is-justify-content-center"
              >
                <div>
                  <p class="overview-title">LANGUAGE</p>
                  <p class="overview-value">ENGLISH</p>
                </div>
              </div>
              <div
                class="column is-one-fifth-desktop is-12-tablet is-6-mobile is-flex is-justify-content-center"
              >
                <div>
                  <p class="overview-title">BUDGET</p>
                  <p class="overview-value">$200.000.000,00</p>
                </div>
              </div>
              <div
                class="column is-one-fifth-desktop is-12-tablet is-6-mobile is-flex is-justify-content-center"
              >
                <div>
                  <p class="overview-title">PRODUCTION</p>
                  <p class="overview-value">DC ENTERTAINMENT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { imagePath } from '@/utils/config';
export default {
  name: "OverviewComponent",
  data(){
    return {
      imagePath
    }
  }
};
</script>

<style>
.overview .detail {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  padding: 2rem 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.overview .card-moovie {
  height: 350px;
  border-radius: 0px;
  width: 250px;
  object-fit: cover;
  position: absolute;
  bottom: -118px;
}

.overview .overview-title {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.5);
}

.overview .overview-value {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
}

.overview .overview-rating {
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #e5e5e5;
  margin-top: -7px;
}

.overview .overview-year {
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}

.overview .overview-hero-title {
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
}

.overview .overview-hero-genre {
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
}

.overview .overview-base {
  margin-top: -230px
}
</style>
