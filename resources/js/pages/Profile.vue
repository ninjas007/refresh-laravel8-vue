<template>
    <div>
        <section v-if="id">
            <h1>User : {{ detailUser.name }}</h1>
            <h4>Email : {{ detailUser.email }}</h4>
            <router-link :to="{ name: 'User' }">Kembali</router-link>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            detailUser: {}
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            axios.get(`/api/users/${this.id}`).then(response => {
                this.detailUser = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>
