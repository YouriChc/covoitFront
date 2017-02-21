myapp.factory('utilisateurFactory', function($http){
   
//    var baseUrl="http://utilisateur.cleverapps.io/accueil";
    var baseUrl="http://localhost:8081";
    
    return{
        getUtilisateur: function(){
            return $http.get(baseUrl);
        },
        addUtilisateur: function(nom, prenom, email, motDePasse){
            return $http({
                method: 'POST',
                url: baseUrl+'/senregistrer',
                data: 'nom='+nom+'&prenom='+prenom+'&email='+email+'&motDePasse='+motDePasse,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
                //authorization + token
            });
        },
        connexion: function(email, motDePasse){
            return $http({
                method: 'GET',
                url: baseUrl+'/connexion',
                data: 'email='+email,
                headers: {'Content-type': 'application/x-www-form-urlencoded',
                         'Authorization': motDePasse}
            })
        }
    }
});