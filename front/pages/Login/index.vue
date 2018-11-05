        <template>
                <div>
            <div class="Header">
                <Header/>
            </div>
            <div class="form-group">
                <label for="usr">Usuario:</label>
                <input type="text" class="form-control" id="usr">
            </div>
            <div class="form-group">
                <label for="contr">Contraseña:</label>
                <input type="password" class="form-control" id="contr">
            </div>
            <div class="Footer ">
                <Footer/>
            </div>
                </div>
            </template>
        
            <script>
    import Usuarios from '@/components/Login/Login'
    import Header from '@/components/Header'
    import Footer from '@/components/Footer'
  
    export default {
      components: {
        Login,
        Header,
        Footer
      }
    }
            </script>
            
            <style>
            
            </style>