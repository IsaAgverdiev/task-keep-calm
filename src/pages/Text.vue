<template>
  <section class="page1">
    <div class="container">
      <h1 class="title page1__title">Аниме или манга?</h1>
      <div class="page1__inner">
        <div class="page1__left page1__inner-item">
          <h2 class="title subtitle">Плюсы аниме</h2>
          <p class="page1__text page1__left-text">
            <span class="bold"
              >Главными плюсами будет являться анимация, звук, и цвет.</span
            >
            По сути самые весовые плюсы аниме. Любая сцена в анимации выглядит
            куда интереснее, чем статичное изображения в манге. Это дополняет
            живости и радует эстетическое чувство.<br />
            <span class="bold">Звук:</span> ну тут понятно. В Японии огромное
            количество человек профессионально занимаются озвучкой, поэтому все
            персонажи манги смогут звучать в вашей голове по- разному. Это,
            опять же, сильно дополняет восприятие истории.<br />
            <span class="bold">Цвет.</span> Цветное изображение показывает все
            краски, передает настроение картины и формирует более развернутое
            представление о происходящем.
          </p>
          <div class="img__wrap img1__wrap">
            <img class="img img1" :src="img1" alt="photo" />
          </div>
        </div>
        <div class="page1__right page1__inner-item">
          <div class="img__wrap img2__wrap">
            <img class="img img2" :src="img2" alt="photo" />
          </div>
          <h2 class="title subtitle page1__right-subtitle">Плюсы манги</h2>
          <p class="page1__text page1__right-text">
            <span class="bold">Самый главный плюс - развернутая история.</span>
            Прочитав мангу, вы узнаете все детали, лучше поймете историю и
            мотивацию персонажей. Манга раскрывает историю на полную, а аниме
            отражает лишь часть. <br />
            <span class="bold">Скорость выхода.</span> Манга всегда выходит
            раньше, и вам не придется ждать несколько лет, чтобы узнать
            концовку.<br />
            <span class="bold">Напрямую от автора.</span> В манге не будет
            отсебятины режиссера и вольных интерпретаций. Вся история
            воспроизводится одним человеком, а это говорить о большей
            целостности.<br />
            <span class="bold">Детализация и стиль.</span> В манге больше
            деталей, все прорисовано, а также автор использует свой уникальный
            стиль рисовки.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img1 from "@/assets/page1/img1.jpg";
import img2 from "@/assets/page1/img2.jpg";

export default {
  data: function () {
    return {
      img1: img1,
      img2: img2,
    };
  },
};
</script>

<style>
.page1 {
  margin-bottom: 222px;
}
.page1__inner {
  display: flex;
  gap: 200px;
}
.page1__inner-item {
  max-width: 600px;
  width: 100%;
}

.page1__text {
  font-size: 18px;
  line-height: 150%;
}
.page1__left-text {
  margin-top: 25px;
  margin-bottom: 112px;
}

.img__wrap {
  width: 100%;
}
.img1__wrap {
  height: 411px;
}
.img2__wrap {
  width: 840px;
  height: 480px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.subtitle.page1__right-subtitle {
  margin-top: 125px;
  margin-bottom: 25px;
}
</style>
