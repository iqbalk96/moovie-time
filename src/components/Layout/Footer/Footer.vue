<template>
  <div class="footer-perqara">
    <footer class="has-text-light bg-dark">
      <div class="container">
        <div
          class="columns is-mobile is-align-items-center is-justify-content-center p-0 footer-height"
        >
          <div class="column p-0">© 2023 MoovieTime. All rights reserved.</div>
          <div class="column p-0 has-text-centered">
            <img
              src="@/assets/MoovieTime-Logo-Grey.png"
              alt="MoovieTime | Perqara"
            />
          </div>
          <div class="column p-0 has-text-right">Made With Vue Js</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>
<style>
.footer-perqara .bg-dark {
  background: rgba(0, 0, 0, 0.29);
}

.footer-perqara .footer-height {
  height: 160px
}
</style>
