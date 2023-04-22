<template>
    <div class="flex">
        <NavbarApp />
        <div class='w-[85%] bg-[#F7F8FC]'>
            <div class="container">
                <div class="row mt-2">
                    <div class="col-md-10 offset-1">
                        <h1 class="my-4">Clients</h1>
                        <button class="btn btn-success" @click="visiable = true">Add Client</button>
                        <appModal v-model="visiable">
                            <h2>Add client</h2>
                            <Form @submit="handleSubmit" id="form">
                                <Field rules="required" :modelValue="form.name" v-slot="{ errors }" name="name">
                                    <input type="text" v-model="form.name" class="form-control my-2"
                                        placeholder="Name">
                                    <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                        {{ errors[0] }}
                                    </p>
                                </Field>
                                <Field rules="required" :modelValue="form.address" v-slot="{ errors }" name="address">
                                    <input type="text" v-model="form.address" placeholder="Address"
                                        class="form-control my-2">
                                    <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                        {{ errors[0] }}
                                    </p>
                                </Field>
                                <Field rules="required" :modelValue="form.phone" v-slot="{ errors }"
                                    name="phone number">
                                    <input type="text" v-model="form.phone" placeholder="Phone number"
                                        class="form-control my-2">
                                    <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                        {{ errors[0] }}
                                    </p>
                                </Field>
                            </Form>
                            <button class="btn btn-info text-white my-2" form="form">Save</button>
                        </appModal>
                        <appTable :headers="headers" :body="clients"></appTable>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { Form, Field } from "vee-validate"
import http from '@/plugins/axios';
import NavbarApp from '@/components/NavbarApp.vue';
import Notification from '@/plugins/Notification';
import appModal from '@/components/ui/app-modal.vue';
import appTable from '@/components/ui/app-table.vue';
const visiable = ref(false)
const clients = ref([])
const form = ref({
    name: "",
    address: "",
    phone: ""
})
const headers = ref([
    { title: "Name", value: "name" },
    { title: "Address", value: "address" },
    { title: "Phone", value: "phone_number" },
])

onMounted(() => {
    http.get('/clients/', {
        headers: {
            'Authorization': 'Basic YWRtaW46MTIz'
        }
    }).then(res => {
        clients.value = res.data
    })
})

const handleSubmit = () => {
    const name = form.value.name
    const address = form.value.address
    const phone = form.value.phone
    Notification({ text: "Client qo'shildi", type: "success" })
    setTimeout(() => {
        clients.value.push({name: name, address: address, phone_number: phone})
    }, 1000);
    visiable.value = false
    form.value.name = ""
    form.value.address = ""
    form.value.phone = ""
}

</script>
<style scoped></style>