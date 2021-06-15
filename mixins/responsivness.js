export default {
    mounted() {
        window.addEventListener('resize', this.checkDeviceWidth)
        this.checkDeviceWidth()
    },
    data() {
        return {
            isMobile: false
        };
    },
    methods: {
        checkDeviceWidth() {
            if(window.innerWidth > 768) {
                this.isMobile = false
            } else {
                this.isMobile = true
            }
         }
    },
    destroyed() {
        window.removeEventListener('resize', this.checkDeviceWidth)
    },
};
