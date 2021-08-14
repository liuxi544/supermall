
import BackTop from "@/components/common/backTop/BackTop.vue";
export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            arrive: false,
        }
    },
    methods: {
        show() {
            let distance =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (distance > 1000) {
                this.arrive = true;
            } else {
                this.arrive = false;
            }
            // console.log(this.arrive);
        },
        backTop() {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        },
    },
    mounted() {
        window.addEventListener("scroll", this.show);
        // window.addEventListener("scroll", this.scrollPosition);
    },
    deactivated() {
        window.removeEventListener("scroll", this.show);
        // window.removeEventListener("scroll", this.scrollPosition);
    },
}