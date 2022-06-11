<template>
    <div>
        <section>
            <h1>Daftar User</h1>
            <router-link :to="{ name: 'Register' }">Register</router-link>
            <ul>
                <li v-for="user in users">
                    <!-- <router-link :to="profile_url(user.name)">{{ user.name }}</router-link> -->
                    <a href="" @click.prevent="lihatUser(user.id)">{{ user.name }}</a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
        }
    },
    mounted() {
        this.getUsers()
    },
    methods: {
        getUsers() {
            axios.get('/api/users')
            .then(response => {
                this.users = response.data;
                if (this.id) {
                    this.detailUser = this.users.filter(item => item.id == this.id)[0];
                    console.log(this.detailUser);
                }
            })
            .catch(error => {
                console.log(error);
            });
        },
        profile_url(name) {
            return '/user/' + name;
        },
        lihatUser(id) {
            this.$router.push({
                name: 'Profile',
                params: { id }
            });
        }
    }
}
</script>
