<template>
    <div class="flex">
        <NavbarApp />
        <div class='w-[85%] bg-[#F7F8FC]'>
            <div class="container">
                <div class="row mt-2">
                    <div class="col-md-10 offset-1">
                        <h1 class="my-4">Suppliers</h1>
                        <button class="btn btn-success" @click="dialog = true">Add Supplier</button>
                        <appModal v-model="dialog">
                            <h2>Add Supplier</h2>
                            <Form @submit="suppliersSubmit" id="form">
                                <Field rules="required" :modelValue="form.first_name" v-slot="{ errors }" name="first name">
                                    <input type="text" v-model="form.first_name" class="form-control my-2"
                                        placeholder="Firstname">
                                    <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                        {{ errors[0] }}
                                    </p>
                                </Field>
                                <Field rules="required" :modelValue="form.last_name" v-slot="{ errors }" name="last name">
                                    <input type="text" v-model="form.last_name" placeholder="Lastname"
                                        class="form-control my-2">
                                    <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                        {{ errors[0] }}
                                    </p>
                                </Field>
                                <Field rules="required" :modelValue="form.phone" v-slot="{ errors }"
                                    name="phone number">
                                    <input type="tel" v-model="form.phone" placeholder="Phone Number"
                                        class="form-control my-2">
                                    <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                        {{ errors[0] }}
                                    </p>
                                </Field>
                                <Field rules="required" :modelValue="form.address" v-slot="{ errors }"
                                    name="address">
                                    <input type="text" v-model="form.address" placeholder="Address"
                                        class="form-control my-2">
                                    <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                        {{ errors[0] }}
                                    </p>
                                </Field>
                                <Field rules="required" :modelValue="form.email" v-slot="{ errors }"
                                    name="email">
                                    <input type="email" v-model="form.email" placeholder="Email"
                                        class="form-control my-2">
                                    <p class="text-danger mt-1 fs-7" v-if="errors && errors.length">
                                        {{ errors[0] }}
                                    </p>
                                </Field>
                            </Form>
                            <button class="btn btn-info text-white my-2" form="form">Save</button>
                        </appModal>
                        <appTable :headers="headers" :body="suppliers"></appTable>
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
const dialog = ref(false)
const suppliers = ref([])
const form = ref({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phone: ""
})
const headers = ref([
    { title: "Firstname", value: "first_name" },
    { title: "Lastname", value: "last_name" },
    { title: "Address", value: "address" },
    { title: "Phone", value: "phone_number" },
    { title: "Email", value: "email" }
])

onMounted(() => {
    http.get('/suppliers/', {
        headers: {
            'Authorization': 'Basic YWRtaW46MTIz'
        }
    }).then(res => {
        suppliers.value = res.data
    })
})

const suppliersSubmit = () => {
    const first_name = form.value.first_name
    const last_name = form.value.last_name
    const address = form.value.address
    const email = form.value.email
    const phone_number = form.value.phone_number
    Notification({ text: "Supplier qo'shildi", type: "success" })
    setTimeout(() => {
        suppliers.value.push({first_name: first_name, address: address, phone_number: phone_number, last_name: last_name, email: email})
    }, 1000);
    dialog.value = false
    form.value.first_name = ""
    form.value.last_name = ""
    form.value.address = ""
    form.value.email = ""
    form.value.phone = ""
}

</script>
<style scoped></style>