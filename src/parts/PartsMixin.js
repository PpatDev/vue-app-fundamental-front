export default {
    created() {
        this.$store.dispatch( 'robots/getPartsFromServer');   // dispatch to kickoff actions
    }, 
    computed: {
        parts(){
            return this.$store.state.robots.parts || 
            {
                heads: [],
                arms: [],
                torsos: [],
                bases: [],
            };
        }
    }
}