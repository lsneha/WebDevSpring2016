(function() {
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);

    function FieldService($http, $q)
    {
        var fieldService = {
            createField : createField,
            findFieldsForForm : findFieldsForForm,
            findFieldById : findFieldById,
            deleteFieldById : deleteFieldById,
            updateField: updateField
        };

        return fieldService;

        function createField(formId, field) {
            var deferred = $q.defer();

            $http.post("/api/assignment/form/:"+formId+"/field", field)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findFieldsForForm(formId) {
            var deferred = $q.defer();

            $http.get("/api/assignment/form/:"+formId+"/field")
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function deleteFieldById(formId, fieldId) {
            var deferred = $q.defer();

            $http.delete("/api/assignment/form/:"+formId+"/field/:"+fieldId)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function updateField(formId, fieldId, newField) {
            var deferred = $q.defer();

            $http.put("/api/assignment/form/:"+formId+"/field/:"+fieldId, newField)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findFieldById(formId, fieldId) {
            var deferred = $q.defer();

            $http.get("/api/assignment/form/:"+formId+"/field/:"+fieldId)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

    }
})();