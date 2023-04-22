<template>
    <div className='flex flex-col w-[255px] h-[100vh] bg-[#363740;]'>
        <router-link to="/clients" class="router_link">
          <div className='py-[18px] px-8 border-l-[3px] border-transparent hover:bg-[#9FA2B4] hover:bg-opacity-10 hover:border-[#DDE2FF]'>
            <p className='text-base text-[#DDE2FF]'>Clients</p>
          </div>
        </router-link>
        <router-link to="/suppliers" class="router_link">
          <div className='py-[18px] px-8 border-l-[3px] border-transparent hover:bg-[#9FA2B4] hover:bg-opacity-10 hover:border-[#DDE2FF]'>
            <p className='text-base text-[#DDE2FF]'>Suppliers</p>
          </div>
        </router-link>
      </div>
</template>
<script setup>

</script>
<style scoped>
    .router_link{
        text-decoration: none;
    }
</style>