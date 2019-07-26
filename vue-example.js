/*
*	Definimos las propiedades y métodos que ocuparemos
*	de forma reactiva en el Documento HTML
*	Vemos el funcionamiento de las directivas de Vue:
*	v-bind, v-if, v-else y v-model
*/

new Vue({
	el: '#app',
	data: {
		name: '',
		lastnames: '',
		submitted: false
	},
	methods: {
		isFormValid: function() {
			return this.name != '' && this.lastnames != '';
		},
		submitForm: function() {
			if(!this.isFormValid()) return;
			this.submitted = true;
		}
	}
});