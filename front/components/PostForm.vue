<template>
    <v-card>
        <v-container>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-textarea
                    outlined
                    auto-grow
                    clearable
                    label="어떤 신기한 일이 있었나요?"
                    :hide-details="hideDetails"
                    :success-messages="successMessages"
                    :success="success"
                    :rules="[ v=> !!v || '내용을 입력하세요.']"
                    @input ="onChangeTextarea"
                />
            </v-form>
        </v-container>
    </v-card>
</template>
<script>
export default {
    data() 
    {
        return{
                hideDetails: false,
                successMessages: '',
                success: false
             
              }
        
    },
    methods:
    {
        onChangeTextarea(){

        },
        onSubmitForm(){
            if(this.$refs.form.validate())
            {
                this.$this.$store.dispatch('posts/add', 
                {

                });
            }
        }
    }
}
</script>
<style >

</style>
