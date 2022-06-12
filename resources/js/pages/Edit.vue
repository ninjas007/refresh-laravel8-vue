<template>
    <div>
        <h1>Edit User</h1>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="handleUpdate" action="/users" method="POST">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Name"
                            v-model="user.name">
                        <div class="text-warning" v-if="errors.name">{{ errors.name[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email"
                            v-model="user.email">
                        <div class="text-warning" v-if="errors.email">{{ errors.email[0] }}</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
        <router-link :to="{ name: 'User' }">Kembali</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            user: {},
            errors: {}
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            axios.get(`/api/users/${this.id}`)
            .then(response => {
                this.user = response.data;
                console.log(this.user)
            })
            .catch(error => {
                console.log(error);
            });
        },
        handleUpdate() {
            axios.put(`/api/users/${this.id}`, this.user)
            .then(response => {
                if(response.data.status) {
                    this.$noty.success(response.data.message);
                    this.$router.push({name: 'User'});
                } else {
                    this.$noty.error("update data failed")
                }
            })
            .catch((error) => {
                console.log(error.response.status);
                if(error.response.status == 422 || error.response.status == false) {
                    this.errors = error.response.data.data
                }
                // console.log(this.errors)
            });
        }
    }
}
</script>
