<template>
    <div>
        <h1>Register</h1>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="handleSubmit" action="/users" method="POST">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Name" v-model="form.name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Email" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="Password" v-model="form.password">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                csrfToken: csrfToken
            }
        }
    },
    methods: {
        handleSubmit() {
            axios.post('/api/users', this.form)
            .then(response => {
                this.$router.push({
                    name: 'User'
                });
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>
