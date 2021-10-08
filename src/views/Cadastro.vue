<template>
    <!-- Bloco inteiro da página -->
    <div class="p-5 text-left container border border-white bg-white text-dark" style="border-radius: 25px; box-shadow: 3px 6px 8px 3px rgba(100, 100, 100, 0.3)">
        <h1 class="py-2" v-if="page == 1">Sobre o  Profissional</h1>
        <h4 class="py-2" v-if="page == 1">Dados do Profissional</h4>
        <h1 class="py-2" v-if="page == 2">Sobre o atendimento</h1>
        <h4 class="py-2" v-if="page == 2">Detalhes do atendimento</h4>
        <h1 class="py-2" v-if="page == 3">Revisão dos dados</h1>
		<h1 class="py-2" v-if="page == 4"></h1>
        <!-- Início do Formulário -->
        <div class="row">
            <!-- tela 1 -->
            <template v-if="page == 1">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <form>
                            <div class="form-row" >
                                <div class="py-2 form-group col-md-8 col-lg-12">
                                    <label for="name">Nome Completo: </label>
                                    <input type="name" class="form-control" id="name" placeholder="Digite o nome completo" v-model="name">
                                </div>
                                <div class="py-2 form-group col-md-8">
                                    <label for="number">CPF:</label>
                                    <input type="text" class="form-control" id="cpf" placeholder="Digite o CPF" v-model="cpf">
                                    <small class="form-text text-muted">O padrão 000.000.000-00</small>
                                </div>
                                <div class="py-2 form-group col-md-8">
                                    <label for="tel">Número de Telefone:</label>
                                    <input type="text" class="form-control" id="tel" placeholder="Digite o telefone" v-model="tel">
                                    <small class="form-text text-muted">O padrão (00) 0 0000-0000</small>
                                </div>
                            </div>
                            <div class="py-2 form-row">
                                <div class="form-group col-md-6">
                                    <label for="inputEstado">Estado</label>
                                    <select id="inputEstado" class="form-control" v-model="stateSelected">
                                        <option v-for="state in states" :key="state.index" v-bind:value="state">{{ state }}</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="inputCidade">Cidade</label>
                                    <select id="inputCidade" class="form-control">
                                        <option selected v-for="city in citiesSelected" :key="city.index">{{ city }}</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">
                        <img src="./atendimento_medico.png" alt="Atendimento Médico" style="max-width: 100%">
                    </div>
                </div>
            </template>
            <!-- tela 2 -->
            <template v-if="page == 2">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <form>
                            <div class="form-group">
                                <label for="inputEspecialidade">Atividade principal</label>
                                <select id="inputEspecialidade" class="form-control" v-model="inputEspecialidade">
                                    <option selected>Selecione a especialidade</option>
                                    <option value="Cardiologia">Cardiologia</option>
                                    <option value="Dermatologia">Dermatologia</option>
                                    <option value="Neurologia">Neurologia</option>
                                    <option value="Oftalmologia">Oftalmologia</option>
                                    <option value="Psiquiatria">Psiquiatria</option>
                                    <option value="Urologia">Urologia</option>
                                </select>
                            </div>
                            <p class="py-1">Informe o valor da consulta</p>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="basic-addon1">R$</span>
                                </div>
                                <input type="text" class="form-control" id="valor" placeholder="Entre R$ 30,00 e R$ 350,00" autocomplete="off" v-model="valor">
								
                            </div>
                            <p class="pt-4">Formas de pagamento da Consulta:</p>
                            <div class="p-4 form-check border col-8 mb-3" style="background-color: #f9f9f9; border-radius: 10px">
                                <input class="form-check-input" type="checkbox" value="pix" id="flexCheckDefaultPix" v-model="pagamento">
                                <label class="form-check-label" for="flexCheckDefaultPix">
                                Pix
                                </label>
                            </div>
                            <div class="p-4 form-check border col-8 mb-3" style="background-color: #f9f9f9; border-radius: 10px">
                                <input class="form-check-input" type="checkbox" value="dinheiro" id="flexCheckDefaultDinheiro" v-model="pagamento">
                                <label class="form-check-label" for="flexCheckDefaultDinheiro">
                                Em dinheiro
                                </label>
                            </div>
                            <div class="p-4 form-check border col-8" style="background-color: #f9f9f9; border-radius: 10px " data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <input class="form-check-input" type="checkbox" value="credito" id="flexCheckDefaultCartaoCredito" v-model="pagamento">
                                <label class="form-check-label" for="flexCheckDefaultCartaoCredito">
                                Cartão de crédito
                                </label>
                                <div class="credito">
                                    <div class="form-check collapse" id="collapseExample">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="um" value="1x sem juros" v-model="vezes">
                                        <label class="form-check-label" for="flexRadioDefault1">
                                        1x, sem juros
                                        </label>
                                    </div>
                                    <div class="form-check collapse" id="collapseExample">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="duas" value="2x sem juros" checked v-model="vezes">
                                        <label class="form-check-label" for="flexRadioDefault2">
                                        2x, sem juros
                                        </label>
                                    </div>
                                    <div class="form-check collapse" id="collapseExample">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="tres" checked value="3x sem juros" v-model="vezes">
                                        <label class="form-check-label" for="flexRadioDefault3">
                                        3x, sem juros
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- Figura da Página -->
                    <div class="col-lg-6 d-none d-lg-block">
                        <img class="img-fluid" src="./consultorio.png" alt="Atendimento Médico" style="max-width: 100%">
                    </div>
                </div>
            </template>
            <!-- tela 3 -->
            <template v-if="page == 3">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        
						<div class="pt-2">
							<p> <strong>NOME COMPLETO:</strong></p>
							<label>{{ name }}</label>
						</div>
						<div class="pt-2">
							<p><strong>NÚMERO DO CPF:</strong></p>
							<p>{{ cpf }}</p>
						</div>
						<div class="pt-2">
							<p><strong>NÚMERO DE TELEFONE:</strong></p>
							<p>{{ tel }}</p>
						</div>
						<div class="pt-2">
							<p><strong>ESPECIALIDADE PRINCIPAL:</strong></p>
							<p>{{ inputEspecialidade }}</p>
						</div>	
						<div class="pt-2">
							<p><strong>ESTADO/CIDADE</strong></p>
							<p>{{ stateSelected }}/{{  }}</p>
						</div>
						<div class="pt-2">
							<p><strong>VALOR DA CONSULTA</strong></p>
							<p>{{ valor }}</p>
						</div>
						<div class="pt-2">
							<p><strong>FORMA DE PAGAMENTO</strong></p>
							<p>{{ pagamento }}</p>
						</div>
						<div class="row">
							<div class="col-6">
								<button type="button" class="mt-4 btn btn-warning" v-on:click="returnInicio (page == 1)">EDITAR CADASTRO</button>
						</div>	
				</div>
                    </div>
                    <!-- Figura da Página -->
                    <div class="ml-5 col d-none d-lg-block">
                        <img class="img-fluid" src="./resultado.png" alt="Atendimento Médico" style="max-width: 100%">
                    </div>
                </div>
            </template>
			<!-- tela 4 -->
            <template v-if="page == 4">
                <div class="row">
                    <div class="col-12">
						<blockquote class="blockquote text-center">
  							<h1 class="pb-4">Parabéns,
							o seu cadastro foi realizado com sucesso !</h1>
  							<footer><cite title="Título da fonte">Obrigado pelo tempo dedicado !</cite></footer>
						</blockquote>
                    </div>
                    <!-- Figura da Página -->
                    <div class="col-6 mx-auto">
                        <img src="./final.jpg" alt="Atendimento Médico" style="max-width: 100%">
                    </div>
                </div>
            </template>
            <!-- <div class="row"> -->
            <div class="col-12 p-0" v-if="page < 4">
                <button type="button" class="mt-4 btn btn-primary" v-on:click="nextPage()">Seguir</button>
            </div>
            <!-- </div> -->
        </div>
    </div>
</template>
<script>
    export default {
		name: 'Cadastro',
		data: function(){
			return {
				page: 1,
				name: "",
				cpf: "",
				tel: "",
				inputEspecialidade: "",
				inputEstado: "",
				citiesSelected: "",
				valor: "",
				pagamento: [],

				stateSelected: '',
				states: [
					'Paraná', 'Rio Grande do Sul', 'Santa Catarina'
				],
				cities: {
					Paraná:[
						'Londrina', 'Maringá'
					],
					'Rio Grande do Sul':[
						'Pelotas', 'Porto Alegre'
					],
					'Santa Catarina':[
						'Florianópolis', 'Joinville'
					]
				},
			}
		},
		methods: {
			nextPage(){
				this.page++				
			}
		},
		computed:{
			citiesSelected(){
				return this.cities[this.stateSelected]
			}
		}
    }
</script>
