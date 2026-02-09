import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

(() => {

    const swiper  = new Swiper('.proccess__swiper', {
        modules: [Autoplay],
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        spaceBetween: 44,
        autoplay: {
            delay: 3000,
        }
    });

})();
