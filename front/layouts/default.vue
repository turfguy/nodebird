<template>
<v-app>
    <nav>
        <v-toolbar dark color="green">
            <v-toolbar-title >
                    <nuxt-link to = "/" class="brand">
                    <v-icon left large style="margin-bottom:8px">mdi-bird</v-icon>
                    NoDebiRd.</nuxt-link>
            </v-toolbar-title>
        
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-text-field label="검색" hide-details
            prepend-icon="mdi-search-web" :style="{display: 'flex', alignItems:'center'}"/>
            <v-btn text nuxt to ="/profile" :style="{display: 'flex', alignItems:'center'}">
                <div>프로필</div>
            </v-btn>
            <v-btn text nuxt to ="/signup" :style="{display: 'flex', alignItems:'center'}">
                <div>회원가입</div>
            </v-btn>
        </v-toolbar-items>         
        </v-toolbar> 
    </nav>

    <v-row no-gutters>
        <v-col cols="12" xs="12" md="4"> 
            <login-form />
        </v-col>
        <v-col cols="12" xs="12" md="8"> 
            <nuxt />
        </v-col>
    </v-row>
</v-app>
</template>
<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  components: { LoginForm },
    head:
    {
       
            title: 'NodeBird',

     
    }
}
</script>
<style scoped>
.brand {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 1.5em;
      color: whitesmoke;
      text-decoration: none;
    }

</style>
