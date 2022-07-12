<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <span class="footer__copy">© TEST, 1022–2022</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  margin-top: auto;
  background: #010101;
}
.footer__inner {
  display: flex;
  align-items: end;
  justify-content: center;
  height: 200px;
}
.footer__copy {
  display: block;
  color: #fff;
  margin-top: auto;
  margin-bottom: 30px;
}
</style>
