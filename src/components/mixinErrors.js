export default {
    data: function () {
        return {
            errorMessage: "",
            displayErrors: 0,
        }
    },

    methods: {
        /**
         * @return {boolean}
         */
        ServerErrors(postRes) {
            let result = postRes && postRes.data && postRes.data.err;
            if (result)
                this.errorMessage = postRes.data.err;

            return result;
        },
        showErrors(errMessage) {
            if (errMessage) {
                this.errorMessage = errMessage;
            }
            this.$refs['errors-modal'].open();
        }
    }
}
