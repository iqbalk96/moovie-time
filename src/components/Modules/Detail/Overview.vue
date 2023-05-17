<template>
  <section class="overview">
    <div class="detail">
      <div class="container">
        <div class="columns">
          <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile">
            <img
              :src="require(`@/assets/movie/${thumbnail}`)"
              :alt="name"
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
                    <h1 class="overview-rating ml-2" style="margin-top: -7px">
                      7.0
                    </h1>
                  </div>
                  <div>
                    <div class="overview-title">USER SCORE</div>
                    <div class="overview-value">3621 VOTES</div>
                  </div>
                </div>
              </div>
              <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile is-flex is-justify-content-center">
                <div>
                  <p class="overview-title">STATUS</p>
                  <p class="overview-value">RELEASE</p>
                </div>
              </div>
              <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile is-flex is-justify-content-center">
                <div>
                  <p class="overview-title">LANGUAGE</p>
                <p class="overview-value">ENGLISH</p>
                </div>
              </div>
              <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile is-flex is-justify-content-center">
                <div>
                  <p class="overview-title">BUDGET</p>
                <p class="overview-value">$200.000.000,00</p>
                </div>
              </div>
              <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile is-flex is-justify-content-center">
                <div>
                  <p class="overview-title">PRODUCTION</p>
                <p class="overview-value">DC ENTERTAINMENT</p>
                </div>
              </div>
              <!-- <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile">
                <p class="overview-title">LANGUAGE</p>
                <p class="overview-value">ENGLISH</p>
              </div>
              <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile">
                <p class="overview-title">BUDGET</p>
                <p class="overview-value">$200.000.000,00</p>
              </div>
              <div class="column is-one-fifth-desktop is-12-tablet is-6-mobile">
                <p class="overview-title">PRODUCTION</p>
                <p class="overview-value">DC ENTERTAINMENT</p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OverviewComponent",
  props: {
    thumbnail: {
      default: "",
    },
  },
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
  height: 330px;
  border-radius: 0px;
  width: 250px;
  object-fit: cover;
  position: absolute;
  bottom: -100px;
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
}
</style>
