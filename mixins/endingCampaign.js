export default {
    data() {
        return {
        };
    },
    computed: {
        endingCampaignDate() {
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ]
            const todays_date = new Date()
            const this_month = todays_date.getMonth()
            const this_year = todays_date.getFullYear()
            const all_days_in_month = this.daysInMonth(this_month, this_year)
            const todays_day = todays_date.getDate()
            const reference_day = Math.floor(all_days_in_month / 2)
            if(todays_day < reference_day) {
                return {
                    day: reference_day,
                    month: monthNames[this_month],
                    year: this_year
                }
            }
            return {
                day: all_days_in_month,
                month: monthNames[this_month],
                year: this_year
            }
        }
    },
    methods: {
        daysInMonth (month, year) {
            return new Date(year, month + 1, 0).getDate();
        }
    },
};
