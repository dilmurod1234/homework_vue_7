<template>
    <div className='row'>
        <div className="col-md-6 offset-3">
            <div className="card mt-5">
                <div className="card-header">
                    <h1 className='text-center'>Login</h1>
                </div>
                <div className="card-body">
                    <Form>
                        <Field rules="required" :modelValue="form.username" v-slot="{ errors }" name="text">
                            <input type="text" v-model="form.username" class="form-control my-2" placeholder="Username">
                            <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                {{ errors[0] }}
                            </p>
                        </Field>
                        <Field rules="required" :modelValue="form.password" v-slot="{ errors }" name="password">
                            <input type="password" v-model="form.password" placeholder="Password" class="form-control my-2">
                            <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                {{ errors[0] }}
                            </p>
                        </Field>
                    </Form>
                </div>
                <div className="card-footer text-center">
                    <button className='btn btn-success' @click=sendLogin>Login</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { Form, Field } from 'vee-validate'
import { ref } from 'vue';
import Notification from '@/plugins/Notification';
import { useRouter } from 'vue-router';
import http from '@/plugins/axios';
const router = useRouter()

const form = ref({
    username: '',
    password: '',
})

const sendLogin = () => {
    http.post('/login/', {
    username: form.value.username,
    password: form.value.password,
  }).then(res => {
    if (res.status === 200) {
      Notification({ text: "Hammasi yaxshi", type: "success" })
      setTimeout(() => {
        router.push("/clients")
      }, 3000);
    }
  }).catch((err) => {
    if (err.response.status === 400) {
      Notification({ text: 'Error', type: "error" })
    }
  })
}

</script>
  
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
  