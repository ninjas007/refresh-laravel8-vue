<template>
    <div>
        <section>
            <h1>Daftar User</h1>
            <router-link :to="{ name: 'Register' }">Register</router-link>
            <table class="table">
                <tr v-for="user in users">
                    <td><a href="" @click.prevent="lihatUser(user.id)">{{ user.name }} </a></td>
                    <td>
                        <a href="" @click.prevent="editUser(user.id)">Edit</a>
                        <a href="" @click.prevent="deleteUser(user.id)">Delete</a>
                    </td>
                </tr>
            </table>
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
        deleteUser(id) {
            if (confirm('Yakin mau dihapus?')) {
                axios.delete('/api/users/'+id)
                .then(response => {
                    if(response.data.status) {
                        this.$noty.success(response.data.message);
                        this.getUsers();
                    } else {
                        this.$noty.error("delete data failed")
                    }
                })
                .catch(error => {
                    console.log(error);
                });
            } else {
                return false;
            }
        },
        editUser(id) {
            this.$router.push({ name: 'Edit', params: { id: id } });
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
