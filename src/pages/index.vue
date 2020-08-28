<template>
  <div class="container">
    <section id="#" class="image-container">
      <img src="/images/salon-featuring.jpg" alt="featuring image" draggable="false" />

      <div class="scroll-down is-hidden-mobile">
        <svg
          width="35px"
          height="100%"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          :style="{ fillRule:'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: '1.5' }"
        >
          <path
            d="M123.359,79.775l0,72.843"
            class="scroll"
            :style="{ fill: 'none', stroke: '#ffffff', strokeWidth: '20px' }"
          />
          <path
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            :style="{ fill: 'none', stroke: '#ffffff', strokeWidth: '20px' }"
          />
        </svg>
      </div>

      <div class="image-text has-text-centered">
        <h1 class="is-size-1-desktop is-size-2-tablet is-size-3-mobile">Batakköylü Düğün Salonu</h1>
        <p class="is-size-5 is-size-6-mobile">En değerli anlarınız için en doğru karar</p>
      </div>
    </section>

    <div class="sections">
      <section class="my-6">
        <h2 class="menu-label is-size-5">Neden biz?</h2>

        <div class="columns is-marginless my-4 is-multiline">
          <Card
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
            :class="{ 'column': true, 'mx-4': index % 2 && screenSize && screenSize > 1024, 'my-4': screenSize && screenSize < 1024 }"
          />
        </div>
      </section>

      <section class="my-6" id="hizmetlerimiz">
        <h2 class="menu-label is-size-5">Hizmetlerimiz</h2>

        <div
          class="columns is-marginless my-4 is-multiline"
          :style="{ justifyContent: 'space-between' }"
        >
          <Box
            class="column is-one-quarter-desktop"
            v-for="(box, index) in boxes"
            :key="index"
            :box="box"
          />
        </div>
      </section>

      <section class="my-6" id="hakkimizda">
        <h2 class="menu-label is-size-5">Hakkımızda</h2>

        <div class="content">
          <p>Batakköylü Düğün Salonu Sakarya'nın Akyazı ilçesinde 2018 Ağustos ayında hizmetlerine başlamıştır. Amacımız Akyazı'ya yenilik ve değer katacak bu tesisin toplu organizasyonlarda (düğün, cemiyet, toplantı) Akyazının ihtiyaçlarını en kaliteli şekilde karşılaması ve yeni bir soluk getirmesidir. İhtiyaçlar ve kişi sayılarına göre değişmekle birlikte salonumuzda her katta 1000 kişi olmak üzere toplamda 2000 kişiye yakın ağırlanabilmektedir. Özel dizayn havalandırma ve ses sistemlerimizle organizasyona katılan değerli konuklarımıza en kaliteli ve rahat hizmeti vermekteyiz ve onlardan gelen olumlu geri dönüşlerin mutluluğunu yaşamaktayız.</p>

          <p>Salonumuz hizmeti ve müşteri memnuniyetini ön planda tutmayı misyon edinmiş, bu amaç doğrultusunda çalışmalarına başlamış ve ara vermeden hizmet vermeye devam etmektedir. En mutlu günlerinizde sizinle bu heyecanı paylaşıyor ve kaliteden ödün vermeden hizmet verme amacını taşıyoruz.Sizi mutlu görmek bizi mutlu ediyor.</p>
        </div>
      </section>

      <section class="my-6" id="galeri">
        <h2 class="menu-label is-size-5">Fotoğraf Galerisi</h2>

        <div class="is-flex-desktop carousel-container">
          <b-carousel :pause-info="false" class="carousel mr-2">
            <b-carousel-item v-for="index in 5" :key="index">
              <span class="carousel-image">
                <img :src="`/images/carousel/image${index}.jpg`" alt="gallery image" />
              </span>
            </b-carousel-item>
          </b-carousel>

          <b-carousel :pause-info="false" class="carousel">
            <b-carousel-item v-for="index in 5" :key="index">
              <span class="carousel-image">
                <img :src="`/images/carousel/image${index+5}.jpg`" alt="gallery image" />
              </span>
            </b-carousel-item>
          </b-carousel>
        </div>
      </section>

      <section class="my-6" id="iletisim">
        <h2 class="menu-label is-size-5">İletişim</h2>

        <div class="columns mb-4">
          <div class="column content mb-0">
            <p>Bizlere yanda gördüğünüz numaralardan ve sosyal mecrâlardan ulaşabilir, haritada belirtilen adresimizi ziyaret ederek her zaman bizlere ulaşabilirsiniz. Özel günlerinizi bizimle beraber yapmak istediğiniz için size teşekkür ediyoruz.</p>

            <small>Ömercikler Mahallesi, Yahyalı Caddesi, Numara 42, (Özpaş Market yanı), Akyazı/Sakarya</small>
          </div>

          <div class="column">
            <div class="columns contact">
              <div class="column">
                <div class="is-flex">
                  <b-icon class="mr-2" icon="phone"></b-icon>
                  <a href="tel:05459570054">0545 957 00 54</a>
                </div>
                <div class="is-flex">
                  <b-icon class="mr-2" icon="phone"></b-icon>
                  <a href="tel:05334736032">0533 473 60 32</a>
                </div>
                <div class="is-flex">
                  <b-icon class="mr-2" icon="phone"></b-icon>
                  <a href="tel:05444790667">0544 479 06 67</a>
                </div>
                <div class="is-flex">
                  <b-icon class="mr-2" icon="phone-classic"></b-icon>
                  <a href="tel:02644182238">0 (264) 418 22 38</a>
                </div>
              </div>

              <div class="column">
                <div class="is-flex">
                  <b-icon class="mr-2" icon="whatsapp"></b-icon>
                  <a href="https://api.whatsapp.com/send?phone=05459570054">0545 957 00 54</a>
                </div>
                <div class="is-flex">
                  <b-icon class="mr-2" icon="instagram"></b-icon>
                  <a href="https://instagram.com/btdugunsalonu" target="_blank">@btdugunsalonu</a>
                </div>
                <div class="is-flex">
                  <b-icon class="mr-2" icon="facebook has-text-blue"></b-icon>
                  <a
                    href="https://www.facebook.com/pages/Batakk%C3%B6yl%C3%BC-D%C3%BC%C4%9F%C3%BCn-Salonu/257625668469461"
                    target="_blank"
                  >
                    <span>Batakköylü Düğün Salonu</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <GmapMap
          class="my-6"
          :center="{ lat: 40.685276, lng: 30.622743 }"
          :zoom="17"
          :style="{ width: '100%', height: '300px' }"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          />
        </GmapMap>
      </section>
    </div>

    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.image-container {
  position: relative;

  img {
    max-height: -webkit-fill-available;
    width: fit-content;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .image-text {
    width: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);

    h1,
    p {
      color: white;
      text-shadow: 2px 2px 10px black;
    }
  }

  .scroll-down {
    position: absolute;
    text-align: center;
    bottom: 3em;
    left: 50%;

    .scroll {
      animation: scroll ease 1.5s infinite;
    }
  }
}

.carousel-container {
  justify-content: space-between;

  .carousel {
    width: 50%;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 400px;
  }
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(100px);
  }
}

@media only screen and (max-width: 1024px) {
  .image-container {
    top: unset;
    left: unset;
    transform: none;
    bottom: 0;

    img {
      margin-top: 3.25em;
      width: 100%;
    }

    .image-text {
      top: unset;
      left: unset;
      transform: none;
      bottom: 1em;
      line-height: normal;
      left: 50%;
      top: 50%;
      transform: translateY(-25%) translateX(-50%);
    }
  }

  .sections {
    padding: 0 1em 0 1em;
  }

  .contact .is-flex {
    justify-content: center;
  }

  .carousel-container {
    img {
      height: 300px;
    }

    .carousel {
      width: 100%;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      screenSize: 0,
      markers: [
        {
          position: {
            lat: 40.685276,
            lng: 30.622743,
          },
        },
      ],
      cards: [
        {
          title: "Her şey tamam!",
          description:
            "Samimi çalışanları, her şarta uygun ortamı ile sizlere hizmete hazır Akyazı'nın en iyisi!",
          gradient: ["rgba(142, 68, 173, 1.0)", "rgba(142, 68, 173, 0.75)"],
        },
        {
          title: "Uygun fiyatlar",
          description:
            "Harcamalarınızı sadece kendi istediğiniz kadar yapın, gersini bize bırakın!",
          gradient: ["rgba(41, 128, 185, 1.0)", "rgba(41, 128, 185, 0.75)"],
        },
        {
          title: "Temiz ve güvenli!",
          description:
            "Covid-19 ve hijyen detaylarına dikkat edilerek yapılan temizlik ve dahası!",
          gradient: ["rgba(39, 174, 96, 1.0)", "rgba(39, 174, 96, 0.75)"],
        },
      ],
      boxes: [
        {
          title: "Düğün Organizasyonu",
          image: "/images/box/dugun_organizasyonu.jpg",
        },
        {
          title: "Nişan ve Nikah Organizasyonu",
          image: "/images/box/nisan_organizasyonu.jpg",
        },
        {
          title: "Kına Gecesi",
          image: "/images/box/kina_gecesi.png",
        },
        {
          title: "Özel Organizasyonlar",
          image: "/images/box/ozel_organizasyonlar.jpg",
        },
      ],
    };
  },
  mounted() {
    this.screenSize = window.innerWidth;
  },
};
</script>